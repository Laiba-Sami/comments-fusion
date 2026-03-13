// backend/src/services/chatbot.service.js
const OpenAI = require('openai');
const config = require('../config/config');

const openai = new OpenAI({ 
  apiKey: config.openai.apiKey 
});

function createPersonalizedPrompt(userMessage, profileData) {
  let systemPrompt = `
You are a LinkedIn profile optimization and career development expert. You help users improve their professional presence and career prospects.

Your capabilities include:
- Analyzing LinkedIn profiles and suggesting improvements
- Providing industry-specific career advice
- Recommending content strategies
- Suggesting networking approaches
- Helping optimize profile sections (headline, about, experience)
- Offering personalized career guidance
- Providing actionable steps for professional growth

Always be specific, actionable, and professional in your responses. Use bullet points and clear formatting when helpful.
`;

  let userContext = "";
  
  if (profileData) {
    // Build detailed profile context
    const profile = profileData;
    const currentRole = profile.experience?.[0];
    const topSkills = profile.skills?.slice(0, 8)?.join(', ') || 'Not specified';
    const recentEducation = profile.education?.[0];
    
    systemPrompt += `

IMPORTANT: The user has provided their LinkedIn profile data. Use this information to give highly personalized advice.

=== USER'S PROFILE ANALYSIS ===

Profile Strength: ${profile.profileStrength}/100
${profile.profileStrength < 70 ? '(Needs improvement)' : profile.profileStrength < 85 ? '(Good profile)' : '(Excellent profile)'}

Personal Information:
- Name: ${profile.basicInfo?.name || 'Not provided'}
- Current Headline: "${profile.basicInfo?.headline || 'Not provided'}"
- Location: ${profile.basicInfo?.location || 'Not specified'}
- Network: ${profile.basicInfo?.connections || 0} connections, ${profile.basicInfo?.followers || 0} followers
- Profile last updated: ${profile.lastUpdated ? new Date(profile.lastUpdated).toLocaleDateString() : 'Unknown'}

Professional Background:
${currentRole ? 
  `Current Role: ${currentRole.role} at ${currentRole.company}${currentRole.duration ? ` (${currentRole.duration})` : ''}` : 
  'Current role: Not specified or unemployed'}

Experience Summary:
${profile.experience?.length > 0 ? 
  profile.experience.slice(0, 3).map((exp, i) => 
    `${i + 1}. ${exp.role} at ${exp.company}${exp.duration ? ` (${exp.duration})` : ''}`
  ).join('\n') : 
  'No experience data available'}

Education:
${recentEducation ? 
  `Most recent: ${recentEducation.degree} from ${recentEducation.institution}${recentEducation.year ? ` (${recentEducation.year})` : ''}` : 
  'Education not specified'}

Key Skills: ${topSkills}

${profile.certifications?.length > 0 ? 
  `Certifications: ${profile.certifications.slice(0, 3).map(cert => `${cert.name} (${cert.issuer})`).join(', ')}` : 
  'No certifications listed'}

About Section: ${profile.about ? 
  `"${profile.about.substring(0, 200)}${profile.about.length > 200 ? '...' : ''}"` : 
  'About section is empty or minimal'}

Recent Growth Metrics:
${profile.growthData?.connectionGrowth ? 
  `- Connections: ${profile.growthData.connectionGrowth.change > 0 ? '+' : ''}${profile.growthData.connectionGrowth.change} (${profile.growthData.connectionGrowth.changePercent}% change)` : 
  '- Connection growth: Data not available'}
${profile.growthData?.followerGrowth ? 
  `- Followers: ${profile.growthData.followerGrowth.change > 0 ? '+' : ''}${profile.growthData.followerGrowth.change} (${profile.growthData.followerGrowth.changePercent}% change)` : 
  '- Follower growth: Data not available'}

Areas for Improvement:
${profile.suggestions && profile.suggestions.length > 0 ? 
  profile.suggestions.map((suggestion, i) => `${i + 1}. ${suggestion}`).join('\n') : 
  'General LinkedIn optimization recommended'}

=== INSTRUCTIONS ===
Based on this specific profile data:
1. Provide personalized advice that references their actual experience, skills, and current situation
2. Address specific gaps or weaknesses in their profile
3. Suggest improvements that align with their industry and career level
4. Give actionable steps they can implement immediately
5. Reference their actual data when giving examples
`;

    userContext = `
Based on my LinkedIn profile analysis above, please help me with: ${userMessage}

Please provide specific advice that takes into account my current role as ${currentRole?.role || 'a professional'}, my experience in ${currentRole?.company || 'my industry'}, and my skill set including ${topSkills}.
`;
  } else {
    userContext = userMessage;
    systemPrompt += `

Note: No profile data is available. Provide general LinkedIn and career advice, but encourage the user to connect their profile for personalized recommendations.
`;
  }

  return {
    systemPrompt,
    userMessage: userContext
  };
}

async function generateChatResponse(chatInput, sessionId, meta) {
  try {
    const profileData = meta?.profileData;
    const userInfo = meta?.user || {};
    
    console.log('Chatbot processing:', {
      hasProfile: !!profileData,
      userId: userInfo.id,
      profileStrength: profileData?.profileStrength,
      userMessage: chatInput.substring(0, 100) + '...'
    });
    
    // Create personalized prompt based on profile data
    const { systemPrompt, userMessage } = createPersonalizedPrompt(chatInput, profileData);

    // Adjust model parameters based on whether we have profile data
    const modelParams = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      temperature: profileData ? 0.6 : 0.7, // Slightly less creative when we have specific data
      max_tokens: profileData ? 1200 : 800, // More tokens for personalized responses
    };

    // Add context about personalization in the response
    if (profileData) {
      modelParams.messages.push({
        role: 'assistant',
        content: `I can see your LinkedIn profile data and will provide personalized advice based on your specific situation. Let me analyze your profile and give you targeted recommendations.`
      });
    }

    console.log('Calling OpenAI with profile context:', !!profileData);
    
    const response = await openai.chat.completions.create(modelParams);

    let output = response.choices[0]?.message?.content || 'No response generated';

    // Add profile-specific context to response if available
    if (profileData) {
      const profileContext = `

---
💡 **Profile Insights**: This advice is personalized based on your ${profileData.profileStrength}% complete LinkedIn profile. ${profileData.profileStrength < 70 ? 'Consider improving your profile completeness for even better recommendations!' : 'Your profile looks great - keep up the good work!'}`;
      
      output += profileContext;
    } else {
      output += `

---
💡 **Tip**: Connect your LinkedIn profile for personalized advice tailored to your specific experience and career goals!`;
    }

    return { 
      output,
      profileAnalyzed: !!profileData,
      profileStrength: profileData?.profileStrength || null,
      suggestions: profileData?.suggestions || []
    };

  } catch (error) {
    console.error('Chatbot service error:', {
      message: error.message,
      stack: error.stack,
      hasProfile: !!meta?.profileData
    });
    
    // Provide more specific error messages
    if (error.message.includes('API key')) {
      throw new Error('OpenAI API configuration error');
    } else if (error.message.includes('timeout')) {
      throw new Error('Request timeout - please try again');
    } else if (error.message.includes('rate_limit')) {
      throw new Error('Rate limit exceeded - please wait a moment');
    } else {
      throw new Error('Failed to generate chat response');
    }
  }
}

// Helper function to extract key profile metrics for quick analysis
function getProfileMetrics(profileData) {
  if (!profileData) return null;
  
  return {
    completeness: profileData.profileStrength,
    hasExperience: profileData.experience?.length > 0,
    hasEducation: profileData.education?.length > 0,
    skillCount: profileData.skills?.length || 0,
    hasAbout: !!profileData.about && profileData.about.length > 50,
    connectionCount: profileData.basicInfo?.connections || 0,
    followerCount: profileData.basicInfo?.followers || 0
  };
}

module.exports = {
  generateChatResponse,
  createPersonalizedPrompt,
  getProfileMetrics
};