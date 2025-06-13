import React from "react";
import { motion } from "framer-motion";

const categories = [
  { label: "Languages", icon: "/icons/language.svg" },
  { label: "Music", icon: "/icons/music.svg" },
  { label: "Design", icon: "/icons/design.svg" },
  { label: "Development", icon: "/icons/code.svg" },
  { label: "Cooking", icon: "/icons/cooking.svg" },
  { label: "Fitness", icon: "/icons/fitness.svg" },
];

const SkillCategoriesSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F97316] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#34D399] opacity-10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6">
        <h2 className="text-[1.875rem] font-poppins font-bold text-center text-[#1F2937] mb-12">
          Explore Skill Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFFBEB] p-6 rounded-xl shadow hover:shadow-md transition text-center flex flex-col items-center"
            >
              <img src={cat.icon} alt={cat.label} className="w-12 h-12 mb-3" />
              <p className="text-[1rem] font-semibold text-[#1F2937]">
                {cat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#6B7280] font-nunito text-[1rem]">
            Can’t find what you’re looking for?
          </p>
          <button className="mt-4 px-6 py-2 bg-[#34D399] text-white rounded-full font-semibold text-[1rem] hover:bg-[#2fb387] transition">
            Suggest a New Category
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillCategoriesSection;
