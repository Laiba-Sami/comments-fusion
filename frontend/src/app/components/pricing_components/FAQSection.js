'use client';
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is Comment’s Fusion?',
        answer: `Comments Fusion helps you engage smarter on LinkedIn. Powered by AI, it suggests the right time to
                comment, crafts personalized responses, and sparks real conversations keeping your voice authentic
                and impactful.`,
    },
    {
        question: 'Is it really free?',
        answer: `Yes, CommentsFusion is free! Get unlimited AI comments, 2 custom tones, track 20 prospects, and
                weekly updates. Upgrade anytime for more.`,
    },
    {
        question: 'How is Comment’sFusion different from other LinkedIn automation tools?',
        answer: `Authentic, Not Spammy  CommentsFusion skips the inbox spam and boosts real engagement through
                smart, personalized comments. You stay in control no bots, just better conversations.`,
    },
    {
        question: 'Why should I choose Comment’s fusion over all in one AI assistants?',
        answer: `CommentsFusion is your LinkedIn prospecting companion track, engage, and connect with the right
                people at the right time using smart AI insights.`,
    },
    {
        question: 'Can I get demo?',
        answer: `Join our live demos to see CommentsFusion in action and get your questions answered in real time.`,
    },
    {
        question: 'What can I try during the 15 day trial?',
        answer: `Enjoy full access to all premium features for 14 days custom tones, advanced prospect tracking, and
                priority support. Explore how CommentsFusion transforms your LinkedIn engagement.`,
    },
    {
        question: 'What happens after the 15 days are up?',
        answer: `After your trial, you’ll move to the Free plan no charges, no surprises. You’ll still enjoy unlimited AI
                comments and key features to keep engaging effectively.`,
    },
    {
        question: 'Do you have any enterprise plan?',
        answer: `Yes, we offer enterprise solutions! Explore our listings on Microsoft AppSource or Azure Marketplace
                to see how CommentsFusion can scale with your team's needs.`,
    },
    {
        question: 'Is Comment’s Fusion easy to use for non technical users?',
        answer: `CommentsFusion is simple and beginner-friendly. Just install the Chrome extension, and smart
                comment suggestions will appear automatically on LinkedIn.`,
    },
    {
        question: 'How can I make sure my comments don’t sound generic or AI generated?',
        answer: `CommentsFusion helps you sound natural, but your personal touch matters. Join our live demos or
                  workshops to learn how to craft standout comments.`,
    },
    {
        question: 'What kind of support does Comment’sFusion provide?',
        answer: `Get support via AI chat, email, and our resource library. Premium users enjoy 24–48 hour priority
                assistance.`,
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full -mt-5  mb-25 mt-20">
            <div className="w-full bg-[#0D1A20] text-white rounded-[2rem] p-8 md:p-12 shadow-xl">
                <h2 className="text-2xl md:text-5xl font-bold text-center mb-6">FAQ’s</h2>
                <div className="divide-y divide-white/50">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left py-5 flex justify-between items-center"
                            >
                                <span className="text-base md:text-xl font-semibold">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="text-3xl md:text-base text-white/90 pb-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg md:text-4xl font-semibold">Got more questions?</p>
                    <button className="mt-4 px-10 py-4 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-200 transition font-lato">
                        Check out our Help & Strategy Hub
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
