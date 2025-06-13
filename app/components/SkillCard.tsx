"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

interface SkillCardProps {
  title: string;
  icon: string;
  category: string;
  rating: number;
}

export default function SkillCard({ title, icon, category, rating }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-xl bg-[#FFEDD5] flex items-center justify-center text-2xl mb-4">
            {icon}
          </div>
          <div className="flex items-center gap-1 text-[#F59E0B] bg-[#FEF3C7] px-3 py-1 rounded-full text-sm">
            <FiStar className="w-4 h-4" />
            <span>{rating}</span>
          </div>
        </div>
        
        <h3 className="font-poppins font-bold text-xl mb-2">{title}</h3>
        <p className="text-[#6B7280] font-nunito mb-4">{category}</p>
        
        <div className="flex justify-between items-center">
          <button className="text-[#F97316] font-medium hover:underline text-sm">
            View Details
          </button>
          <button className="bg-[#FFEDD5] hover:bg-[#FED7AA] text-[#9A3412] px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Enroll
          </button>
        </div>
      </div>
    </motion.div>
  );
}