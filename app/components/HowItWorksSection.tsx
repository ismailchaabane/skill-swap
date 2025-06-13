import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and showcase your skills. Add a profile picture, bio, and highlight what you can teach or want to learn.",
    icon: "/icons/profile.svg",
  },
  {
    title: "Find a Match",
    description:
      "Use our smart search and filters to discover users who match your learning interests and teaching skills.",
    icon: "/icons/search.svg",
  },
  {
    title: "Swap Sessions",
    description:
      "Message your match, agree on time, and start exchanging sessions—learning from each other in real time.",
    icon: "/icons/swap.svg",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#F97316] opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <h2 className="text-[1.875rem] font-poppins text-center font-bold mb-16 text-[#1F2937]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-[#FFF7ED] shadow-lg p-8 rounded-2xl text-center hover:shadow-2xl transition duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[1.5rem] font-poppins mb-3 text-[#1F2937]">
                {step.title}
              </h3>
              <p className="text-[1rem] text-[#4B5563] font-nunito">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-6 py-3 text-white bg-[#F97316] hover:bg-[#ea6d13] rounded-full font-semibold text-[1rem] transition duration-300 shadow-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Start Swapping Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
