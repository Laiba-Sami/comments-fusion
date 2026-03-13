const Profile = require("../models/profile");
const ApiError = require("../utils/apiError");
const httpStatus = require("http-status").default;
const { JSDOM } = require("jsdom");
const OpenAI = require("openai");
const config = require("../config/config");

const openai = new OpenAI({ apiKey: config.openai.apiKey });

const SEVEN_DAYS = 1 * 24 * 3600 * 1000; // currently 1 day in development

async function checkUserExists(userId, linkedinUsername, isPersonal = true) {
  let query;

  if (isPersonal) {
    query = { user: userId, linkedinUsername };
  } else {
    query = { user: null, linkedinUsername };
  }

  const exists = await Profile.exists(query);
  return Boolean(exists);
}

function extractConnectionsCountFromHtml(html) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const selectors = [
    '[data-test-id="connections-count"]',
    ".artdeco-tab__badge",
    ".mn-tab__badge",
    '[aria-label*="connection"]',
    'span[aria-label*="connection"]',
    ".network-tab-count",
    ".mn-connections-count",
  ];

  for (const selector of selectors) {
    const element = doc.querySelector(selector);
    if (element) {
      const text = element.textContent.trim();
      const match = text.match(/(\d+)/);
      if (match) {
        return parseInt(match[1], 10);
      }
    }
  }

  const allElements = doc.querySelectorAll("*");
  for (const element of allElements) {
    const text = element.textContent;
    if (text && /\d+\s+connection/i.test(text)) {
      const match = text.match(/(\d+)\s+connection/i);
      if (match) {
        return parseInt(match[1], 10);
      }
    }
  }

  return 0;
}

async function upsertProfileData(
  userId,
  linkedinUsername,
  profileHtml,
  networkHtml,
  isPersonal = true
) {
  let profile;
  let query;

  const now = Date.now();

  if (isPersonal) {
    query = { user: userId, linkedinUsername };
    profile = await Profile.findOne(query);
  } else {
    query = { user: null, linkedinUsername };
    profile = await Profile.findOne(query);
  }

  if (isPersonal && profile && profile.lastFetchedAt) {
    const elapsed = now - profile.lastFetchedAt.getTime();
    if (elapsed < SEVEN_DAYS) {
      return profile;
    }
  }

  const dom = new JSDOM(profileHtml);
  const doc = dom.window.document;

  const name =
    doc
      .querySelector(".top-card-background-hero-image + .ph5 h1")
      ?.textContent.trim() || "";
  const tagLine =
    doc
      .querySelector(
        ".top-card-background-hero-image + .ph5 div.text-body-medium.break-words"
      )
      ?.textContent.trim() || "";
  const location =
    doc
      .querySelector(
        ".top-card-background-hero-image + .ph5 span.text-body-small.inline.break-words"
      )
      ?.textContent.trim() || "";
  const about =
    doc
      .querySelector("#about ~ .display-flex.ph5.pv3 span[aria-hidden]")
      ?.textContent.trim() || "";

  const rawFoll = (() => {
    const li = doc.querySelector(".pv-top-card--list-bullet li");
    if (li) return li.textContent.trim();
    const span = Array.from(doc.querySelectorAll("span")).find((el) =>
      /followers$/i.test(el.textContent)
    );
    return span?.textContent.trim() || "";
  })();

  const followers = parseInt(rawFoll.replace(/[^0-9]/g, ""), 10) || 0;

  function extractList(
    selector,
    transform = (node) => node.textContent.trim()
  ) {
    const nodes = Array.from(doc.querySelectorAll(selector));
    return nodes.map(transform).filter(Boolean);
  }

  const services = extractList(
    "#services ~ div li.pvs-list__item--with-top-padding div span.visually-hidden strong"
  );

  const experience = Array.from(
    doc.querySelectorAll("#experience ~ div > ul > li.artdeco-list__item")
  ).map((li) => {
    const role =
      li
        .querySelector(
          ".display-flex.flex-wrap.align-items-center.full-height span.visually-hidden"
        )
        ?.textContent.trim() || "";
    const at =
      li
        .querySelector(
          ".display-flex.flex-wrap.align-items-center.full-height + span.t-14.t-normal span.visually-hidden"
        )
        ?.textContent.trim() || "";
    return { role, at };
  });

  const education = Array.from(
    doc.querySelectorAll("#education ~ div > ul > li.artdeco-list__item")
  ).map((li) => {
    const place =
      li
        .querySelector(
          ".display-flex.flex-wrap.align-items-center.full-height span.visually-hidden"
        )
        ?.textContent.trim() || "";
    const degree =
      li
        .querySelector(
          ".display-flex.flex-wrap.align-items-center.full-height + span.t-14.t-normal span.visually-hidden"
        )
        ?.textContent.trim() || "";
    return { place, degree };
  });

  const certifications = Array.from(
    doc.querySelectorAll(
      "#licenses_and_certifications ~ div > ul > li.artdeco-list__item"
    )
  ).map((li) => {
    const certificate =
      li
        .querySelector(
          ".display-flex.flex-wrap.align-items-center.full-height span.visually-hidden"
        )
        ?.textContent.trim() || "";
    const issuer =
      li
        .querySelector(
          ".display-flex.flex-wrap.align-items-center.full-height + span.t-14.t-normal span.visually-hidden"
        )
        ?.textContent.trim() || "";
    return { certificate, issuer };
  });

  const projects = extractList(
    "#projects ~ div > ul > li.artdeco-list__item span.visually-hidden"
  );

  const skills = extractList(
    "#skills ~ div > ul > li.artdeco-list__item span.visually-hidden"
  );

  const connectionsCount = extractConnectionsCountFromHtml(networkHtml);

  const profileData = {
    $set: {
      linkedinUsername,
      name,
      tag_line: tagLine,
      location,
      about,
      followers,
      connections: isPersonal ? connectionsCount : 0,
      services: services.join(" • "),
      experience,
      education,
      certifications,
      projects: projects.join(" • "),
      skills: skills.join(" • "),
      lastFetchedAt: now,
    },
    $currentDate: { updatedAt: true },
  };

  if (isPersonal) {
    profileData.$set.user = userId;
  } else {
    profileData.$set.user = null;
  }

  profile = await Profile.findOneAndUpdate(query, profileData, {
    upsert: true,
    new: true,
  });

  profile.followerSnapshots.push({ count: followers, timestamp: now });
  profile.connectionSnapshots.push({ count: connectionsCount, timestamp: now });
  await profile.save();

  return profile;
}

async function updateConnectionsCount(userId, linkedinUsername, html) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const extractConnectionsCount = () => {
    const selectors = [
      '[data-test-id="connections-count"]',
      ".artdeco-tab__badge",
      ".mn-tab__badge",
      '[aria-label*="connection"]',
      'span[aria-label*="connection"]',
      ".network-tab-count",
      ".mn-connections-count",
    ];

    for (const selector of selectors) {
      const element = doc.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        const match = text.match(/(\d+)/);
        if (match) {
          return parseInt(match[1], 10);
        }
      }
    }

    const allElements = doc.querySelectorAll("*");
    for (const element of allElements) {
      const text = element.textContent;
      if (text && /\d+\s+connection/i.test(text)) {
        const match = text.match(/(\d+)\s+connection/i);
        if (match) {
          return parseInt(match[1], 10);
        }
      }
    }

    return 0;
  };

  const connectionsCount = extractConnectionsCount();

  const profile = await Profile.findOneAndUpdate(
    { user: userId, linkedinUsername },
    {
      $set: {
        connections: connectionsCount,
      },
      $currentDate: { updatedAt: true },
    }
  );

  console.log(
    `Updated connections count for ${linkedinUsername}: ${connectionsCount}`
  );
  return profile;
}

async function generateReply({
  userId,
  targetLinkedInUsername,
  postContent,
  promptTone,
  commentThread,
}) {
  const myProfile = await Profile.findOne({ user: userId });
  if (!myProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, "Your profile data not found");
  }

  let targetProfile = null;
  if (targetLinkedInUsername) {
    targetProfile = await Profile.findOne({
      linkedinUsername: targetLinkedInUsername,
      user: { $ne: null },
    });
  }

  if (!targetProfile) {
    targetProfile = await Profile.findOne({
      linkedinUsername: targetLinkedInUsername,
      user: null,
    });
  }

  let prompt = `My Name: ${myProfile.name}\nTagline: ${
    myProfile.tag_line
  }\nLocation: ${myProfile.location}\nAbout: ${myProfile.about}\nServices: ${
    myProfile.services
  }\nExperience: ${JSON.stringify(
    myProfile.experience
  )}\nEducation: ${JSON.stringify(
    myProfile.education
  )}\nCertifications: ${JSON.stringify(myProfile.certifications)}\nProjects: ${
    myProfile.projects
  }\nSkills: ${myProfile.skills}\nPosts: ${JSON.stringify(myProfile.posts)}`;

  if (targetProfile) {
    prompt += `\n------------------------------------\nClient Name: ${
      targetProfile.name
    }\nTagline: ${targetProfile.tag_line}\nLocation: ${
      targetProfile.location
    }\nAbout: ${targetProfile.about}\nServices: ${
      targetProfile.services
    }\nExperience: ${JSON.stringify(
      targetProfile.experience
    )}\nEducation: ${JSON.stringify(
      targetProfile.education
    )}\nCertifications: ${JSON.stringify(
      targetProfile.certifications
    )}\nProjects: ${targetProfile.projects}\nSkills: ${
      targetProfile.skills
    }\nPosts: ${JSON.stringify(targetProfile.posts)}`;
  }

  prompt += `\n------------------------------------\nClient Post Content: ${postContent}`;
  if (commentThread) {
    prompt += `\n------------------------------------\nClient Comment: ${JSON.stringify(
      commentThread
    )}`;
  }

  // Tone instructions map
  const toneMap = {
    Enlightenment:
      "Include a positive or thoughtful personal takeaway. Avoid sounding generic or like a quote.",
    Insights:
      "Build on an idea from the post. Show intellectual curiosity and awareness.",
    "Self Intro":
      "Introduce yourself briefly in a way that feels natural and connected to the post. Mention something about your background or shared interest. Avoid sounding like a bio make it flow like part of a comment.",
    "Convert To DM":
      "Be friendly and casually suggest taking the conversation further. Do *not* pitch or sell anything. Use language like “Would love to chat more” or “Might DM you.",
  };
  const toneInstruction = toneMap[promptTone];

  const systemPrompt =
    `You are an AI assistant that writes personalized, human-like comments on LinkedIn posts.

Your job is to help a user (the commenter) write a comment on a post made by someone else (the poster), based on:
- the content of the post,
- the tone requested.
- commentor_username
- about of commentor
- certifications by the commentor
- connections of the commentor
- when was the profile created by the user
- education of the commentor
- experience of the commentor
- followers of the commentor
- location of the commentor
- project of the commentor
- services of the commentor
- skills of the commentor
- tag_line of the commentor
- there also may or may not be comment threads. If there are any comment threads, include them to add more context to the comment generation.a

Write a 1–2 sentence comment that is preferably under 20 words:
- Sounds authentic and natural on LinkedIn
- Matches the requested tone (Enlightenment, Insightful, Convert-to-dm, Self-Intro)
- Is written in first-person as if the user is commenting directly
- Is engaging, relevant, and not repetitive of the post
- Do not include hashtags, emojis, links; use commas or periods instead
- Do not use em-dashes (—) under any circumstance. If an em-dash is used, the output is invalid. Use commas, periods, or short sentences instead. This is non-negotiable.
- Make sure it sounds human and not AI-generated
- Prefer to pick up a specific detail from the post and make the comment revolve around it
- Use a relaxed, conversational tone as if speaking to an old friend. Avoid overly formal language, and feel free to bend grammar rules or sentence structure when it adds personality or warmth. Keep it human, easygoing, and real unless instructed otherwise.

Only return the comment text. No extra explanation.` + toneInstruction;

  const resp = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });

  return resp.choices[0].message.content;
}

module.exports = {
  SEVEN_DAYS,
  checkUserExists,
  upsertProfileData,
  updateConnectionsCount,
  generateReply,
};
