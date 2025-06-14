"use client"
import React from 'react'
import { FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from 'next/link';

interface SkillCategory {
  id: number;
  icon: string;
  name: string;
  count: number;
}

interface MainContentProps {
  categories: SkillCategory[];
}

export const MainContent = ({ categories }: MainContentProps) => {
  return (
    <section className="mb-16 bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[1.875rem] font-poppins font-bold text-gray-800 flex items-center gap-3">
          <FiFilter className="text-[#F97316]" /> Explore Categories
        </h2>
        <Link href="/categories">
          <button className="text-[#F97316] font-poppins font-medium hover:underline">
            View All Categories
          </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={`/categories/${category.name}`}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-orange-50 rounded-xl p-5 border border-orange-100 cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-8 h-8 mb-3 flex items-center justify-center">
                {category.icon.endsWith(".png") ? (
                  <img
                    src={`/icons/${category.icon}`}
                    alt={category.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-2xl">{category.icon}</span>
                )}
              </div>
              <h3 className="font-poppins font-bold text-gray-800 mb-1">{category.name}</h3>
              <p className="text-sm font-nunito text-gray-600">{category.count} skills</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}