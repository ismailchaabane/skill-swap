"use client";
import React from 'react'
import { motion } from "framer-motion";

import {  FiBookOpen, FiStar, FiAward } from "react-icons/fi";

export const FeaturedTeachers = () => {
      const featuredTeachers = [
    { name: "Alex Johnson", skill: "UI/UX Design", students: 1200, rating: 4.9, experience: "8 years" },
    { name: "Maria Garcia", skill: "Spanish Language", students: 850, rating: 4.8, experience: "6 years" },
    { name: "Sam Wilson", skill: "Python Programming", students: 2100, rating: 4.95, experience: "10 years" },
  ];
  return (
        <section className="mb-16">
          <h2 className="text-[1.875rem] font-poppins font-bold text-gray-800 mb-8 flex items-center gap-3">
            <FiBookOpen className="text-[#34D399]" /> Featured Instructors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTeachers.map((teacher, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100"
              >
                <div className="h-40 bg-gradient-to-r from-orange-50 to-amber-50 relative">
                  <div className="absolute bottom-[-40px] left-6 w-20 h-20 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-[#F97316] to-[#F59E0B] flex items-center justify-center text-white text-2xl font-poppins font-bold">
                      {teacher.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="pt-12 px-6 pb-6">
                  <h3 className="font-poppins font-bold text-xl text-gray-800">{teacher.name}</h3>
                  <p className="text-[#F97316] font-nunito mb-3">{teacher.skill}</p>
                  
                  <div className="flex items-center text-sm mb-4 font-nunito">
                    <div className="flex items-center text-[#F59E0B] mr-4">
                      <FiStar className="mr-1" />
                      <span>{teacher.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiAward className="mr-1" />
                      <span>{teacher.experience} experience</span>
                    </div>
                  </div>
                  
                  <div className="text-gray-600 font-nunito text-sm mb-4">
                    <span className="font-medium">{teacher.students.toLocaleString()}</span> students
                  </div>
                  
                  <button className="w-full py-2.5 bg-orange-50 text-[#F97316] rounded-lg font-poppins font-medium hover:bg-orange-100 transition-colors">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
  )
}
