"use client";
import React from 'react'
import { motion } from "framer-motion";
import { FiSearch} from "react-icons/fi";

export const HeroSection = () => {
  return (
      <section className="relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#F97316] opacity-10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#34D399] opacity-10 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-[#F59E0B] opacity-10 rounded-full blur-[60px]" />
        </div>

        <div className="container mx-auto px-6 py-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-[2.25rem] font-poppins font-bold leading-tight mb-6">
              Discover Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#F59E0B]">Passion</span>
            </h1>
            <p className="text-lg font-nunito mb-10 max-w-2xl mx-auto">
              Explore thousands of skills taught by expert instructors. Start your learning journey today with personalized recommendations.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex shadow-lg rounded-xl overflow-hidden">
                <input
                  type="text"
                  placeholder="What skill do you want to learn today?"
                  className="flex-grow px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-300 font-nunito"
                />
                <button className="bg-gradient-to-r from-[#F97316] to-[#F59E0B] text-white px-8 py-4 font-poppins font-medium flex items-center">
                  <FiSearch className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>  )
}
