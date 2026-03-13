import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Instant Engagement",
      description: "Capture attention and spark conversation effortlessly with AI-powered, contact-aware comments that drive meaningful interactions and boost visibility in real time.",
      icon: "⚡"
    },
    {
      title: "All languages supported",
      description: "Expand your reach with AI-driven, multilingual comments that engage and convert audiences worldwide. Communicate effectively, no matter the language!",
      icon: "🌍"
    },
    {
      title: "Secure & Reliable",
      description: "Your data and interactions are fully protected with advanced encryption, ensuring a safe and seamless experience while maximizing client engagement.",
      icon: "🔒"
    },
    {
      title: "Personalized tone",
      description: "Engage with your audience using AI-crafted comments that match your online voice, ensuring authentic and meaningful interactions that drive conversions.",
      icon: "💎"
    }
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 max-lg:text-4xl max-md:text-3xl">
            Powerful Features to Supercharge Your <br/>
            <span className="text-[#33C6F4]">Client Acquisition</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 120 
              }}
              className="group relative bg-gradient-to-b from-[#0F0F29] to-[#070720] p-8 rounded-xl border border-transparent hover:border-[#00B4D8] cursor-pointer"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom,rgb(50, 117, 135), #070720),
                  linear-gradient(45deg,rgb(9, 201, 239),rgb(6, 207, 253))
                `,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                border: '2px solid transparent'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl mb-6 text-cyan-400 inline-block"
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00B4D8] to-[#7B2CBF] bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-[#B4B4CF] text-lg leading-relaxed">{feature.description}</p>
              
              {/* Animated gradient border */}
              <motion.div
                initial={{ opacity: 0.2 }}
                whileHover={{ opacity: 0.4 }}
                className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-[#00B4D8] to-[#7B2CBF]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}