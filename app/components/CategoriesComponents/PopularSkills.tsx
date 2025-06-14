"use client";
import React from "react";
import { motion } from "framer-motion";
import {FiStar, FiClock,FiUser,FiArrowRight } from "react-icons/fi";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  category: string;
  rating: number;
  duration: string;
  students: string;
};

const SkillCard = ({ title, icon, category, rating, duration, students }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl  shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-2xl text-orange-600">
            {icon}
          </div>
          <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium font-poppins">
            <FiStar className="mr-1" />
            {rating}
          </div>
        </div>
        
        <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 font-nunito">{category}</p>
        
        <div className="flex justify-between text-sm text-gray-500 font-nunito">
          <div className="flex items-center">
            <FiClock className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <FiUser className="mr-1" />
            {students} students
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-orange-50 border-t border-orange-100">
        <button className="w-full py-2.5 bg-orange-600 text-white rounded-lg font-medium font-poppins hover:bg-orange-700 transition-colors flex items-center justify-center">
          Learn Now
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export const PopularSkills = () => {
    const popularSkills = [
    { title: "Web Development", icon: "💻", category: "Technology", rating: 4.8, duration: "12 weeks", students: "2.4K" },
    { title: "UI/UX Design", icon: "🎨", category: "Design", rating: 4.7, duration: "8 weeks", students: "1.8K" },
    { title: "Digital Marketing", icon: "📈", category: "Business", rating: 4.5, duration: "10 weeks", students: "1.2K" },
    { title: "Photography", icon: "📷", category: "Arts", rating: 4.6, duration: "6 weeks", students: "890" },
    { title: "Culinary Arts", icon: "🍳", category: "Lifestyle", rating: 4.9, duration: "4 weeks", students: "1.5K" },
    { title: "Yoga & Wellness", icon: "🧘", category: "Health", rating: 4.8, duration: "8 weeks", students: "1.1K" },
    { title: "Data Science", icon: "📊", category: "Technology", rating: 4.7, duration: "14 weeks", students: "1.9K" },
    { title: "Creative Writing", icon: "✍️", category: "Arts", rating: 4.6, duration: "6 weeks", students: "780" },
  ];
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[1.875rem] font-poppins font-bold text-gray-800 flex items-center gap-3">
          <FiStar className="text-[#F59E0B]" /> Popular Skills Right Now
        </h2>
        <button className="text-[#F97316] font-poppins font-medium hover:underline">
          View All Skills
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {popularSkills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            category={skill.category}
            rating={skill.rating}
            duration={skill.duration}
            students={skill.students}
          />
        ))}
      </div>
    </section>
  );
};
