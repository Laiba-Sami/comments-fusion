"use client";
import { useParams } from "next/navigation";
import Main_Handle from "src/app/components/help_components/handle";
import Layout from "src/app/components/layout";
import MobileLayout from "src/app/components/mobileLayout";
import { useEffect, useState } from "react";

const allData = [
  {
    id: "kickStart",
    title: "Kickstart Your Comments Fusion Setup",
    secondTitle: "This brief guide will assist you in getting started.",
    Data: [
      { p: "Consultation Hours." },
      { p: "Enable your account and link the Chrome extension with your LinkedIn."},
      { p: "Instructions for Leveraging Comments Fusion on LinkedIn." },
      { p: "Steps to Create and Update Communication Tones." },
      { p: "I've connected with prospects. How should I proceed?" },
      { p: "Guidelines for Sending Your First LinkedIn Message." },
      {
        id: 7,
        p: "Strategies for Tracking Activity and Initiating Timely Engagement.",
      },
    ],
    Data2: [],
  },

  {
    id: "initialSetup",
    title: "Initial Setup for Comments Nexus",
    secondTitle:
      "Discover how to tailor tone to suit various communication styles and engagement types",

    Data: [
      { p: "Personalize your communication style using the GPT plugin." },
      { p: "How to Develop an Effective and Consistent Tone of Voice." },
      { p: "Start by duplicating these predefined tone templates." },
      { p: "How to Customize Emoji Preferences." },
      { p: "Configure communication tones in your preferred language." },
    ],
    Data2: [],
  },

  {
    id: "Segment",
    title: "Segment, Track, and Cultivate",
    secondTitle:
      "Ensure timely prospect outreach and cultivate relationships that convert into revenue",
    thirdTitle: " Coordination of Multiple LinkedIn Accounts",

    Data: [
      { p: "What Does Prospect Monitoring Involve and How Is It Implemented?" },
      { p: "A Guide to Organizing Prospects by Category or Criteria." },
      { p: "How to Store and Monitor Potential Leads." },
      { p: "How to Organize and Oversee Your Priority Leads." },
      { p: "Strategies for Engaging and Nurturing Tracked Prospects." },
    ],
    Data2: [
      {
        p: "Does it allow managing multiple LinkedIn accounts under one login?",
      },
      { p: "Coordinate and Manage Several LinkedIn Accounts." },
      { p: "Multiple Users Overseeing the Same LinkedIn Account." },
    ],
  },

  {
    id: "Meetings",
    title: "Turn Meetings into Conversions",
    secondTitle:
      "Strategies for Increasing Meeting Bookings, Converting Prospects, and Growing Your Email List",

    Data: [
      { p: "After Engaging Prospects, What Should I Do Next?" },
      { p: "Outbound Approach: Strategic, Personalized Outreach." },
      { p: "Create Value, Capture Leads, and Grow Your Email Audience." },
    ],
    Data2: [],
  },

  {
    id: "browserAdd",
    title: "Browser Add-on for Chrome and Edge",
    secondTitle:
      "Integrate Comments Fusion within LinkedIn for a Smooth, Streamlined Workflow",

    Data: [
      { p: "The Importance of Tone of Voice in Communication." },
      { p: "Which Languages Are Supported by Comments Fusion?" },
      { p: "Detailed Usage Points for Comments Fusion on LinkedIn." },
      {
        p: "Steps to Disable the LinkedIn Newsfeed Announcement Notification.",
      },
      {
        p: "Steps to Configure Your native language as the default.",
      },
      {
        p: "Can Comments Fusion Be Used Across Multiple Social Media Platforms?",
      },
      {
        p: "How to Ensure Your Chrome Extension and Edge Add-On Are Up to Date.",
      },
    ],
    Data2: [],
  },

  {
    id: "enhanceProfile",
    title: "Enhance Profile and Content",
    secondTitle: "",

    Data: [
      {
        p: "Build an All-Star LinkedIn Profile with AI-Powered Experience and About Sections.",
      },
      {
        p: "Create Personalized and Purposeful Notes for Connection Requests.",
      },
      {
        p: "How Can You Develop Effective and Impactful Content for LinkedIn?",
      },
      {
        p: "Design Events on LinkedIn That Compel Attendees to Register and Participate.",
      },
      {
        p: "Reinforce Connections Through Well Crafted LinkedIn Recommendations.",
      },
    ],
    Data2: [],
  },

  {
    id: "platformLinkages",
    title: "Platform Linkages",
    secondTitle:
      "Enhance Productivity by Integrating Comments Fusion with the Software You Use Most",
    thirdTitle: "Process optimization",
    fourTitle: "Customer Relationship Management and Social Media Scheduling",

    Data: [
      {
        p: "Comments Fusion + LinkedIn = Effortless Lead Generation.",
      },
      {
        p: "Supercharge LinkedIn Prospecting with Pipedrive and Comments Fusion.",
      },
      { p: "Level Up LinkedIn Engagement with Hootsuite and Comments Fusion." },
      {
        p: "Comments Fusion + LinkedIn = Smarter Prospecting, Faster Conversions.",
      },
    ],
    Data2: [
      { p: "Comments Fusion Integration with Integrately" },
      { p: "Comments Fusion Integration with Make (Integromat)" },
      { p: "Power Up Your LinkedIn with Comments Fusion + Zapier" },
    ],
  },

  {
    id: "profileMembership",
    title: "Profile & Membership",
    secondTitle: "Update Your Account Preferences and Billing Information",
    thirdTitle: "Access and Modify Your Subscription Settings",

    Data: [
      {
        p: "How to Activate Your Upgraded Account and Access Premium Features.",
      },
      { p: "What Is the Status of My Account Post-Trial?" },
      { p: "Can I Request an Extension for My Free Trial?" },
      { p: "Want to Use a New Email? Here's How to Update It." },
      { p: "How Do I Change or Recover My Password?" },
      { p: "Steps to Permanently Close Your Account." },
      { p: "Easily Remove the Comments Fusion Extension from Your Browser." },
    ],
    Data2: [
      { p: "How to Retrieve Billing Documents from Your Account." },
      { p: "Want to Switch Your Comments Fusion Plan? Here's How." },
      { p: "Want to Cancel Your Subscription? Here's How." },
      { p: "Steps to Modify Your Billing Details." },
    ],
  },

  {
    id: "technicalSupport",
    title: "Technical Support",
    secondTitle: "",

    Data: [
      { p: "Where Can I Find and Use My Subscribed Premium Features?" },
      { p: "What's the Purpose of Syncing My Account?" },
      {
        p: "Prospect activity isn't updating on the platform how can I resolve this?",
      },
      { p: "Why Am I Unable to Add Additional Leads to My Monitoring List?" },
      { p: "The Extension Is No Longer Functioning. How Can I Fix It?" },
      { p: "Troubleshooting OpenAI Server Connection Issues." },
      { p: "How to Ensure Your Browser Extension Is Up to Date." },
    ],
    Data2: [],
  },
];

export default function HelpPage() {
  const { handle } = useParams();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (!handle) return null;

  const selectedData = allData.find((item) => item.id === handle);

  if (!selectedData) {
    return (
      <div className="text-center text-xl font-bold text-red-500 py-20">
        404 - Help Article Not Found
      </div>
    );
  }

  const LayoutComponent = isDesktop ? Layout : MobileLayout;

  return (
    <LayoutComponent>
      <div className="w-full max-w-screen-sm mx-auto px-4 py-4 overflow-x-hidden overflow-y-auto">
        <Main_Handle
          title={selectedData.title}
          secondTitle={selectedData.secondTitle}
          thirdTitle={selectedData.thirdTitle}
          fourTitle={selectedData.fourTitle}
          fifthTitle={selectedData.fifthTitle}
          Data={selectedData.Data}
          Data2={selectedData.Data2}
        />
      </div>
    </LayoutComponent>
  );
}
