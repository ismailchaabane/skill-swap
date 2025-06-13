"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative bg-[#FFF7ED] text-[#1F2937] overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#F97316] opacity-10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#34D399] opacity-10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[#F59E0B] opacity-10 rounded-full blur-[80px] animate-pulse-slow" />

        {/* Subtle Grid Pattern */}
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h100v100H0z" fill="none"/%3E%3Cpath d="M0 0v100M100 0v100M0 50h100M50 0v100M0 25h100M0 75h100M25 0v100M75 0v100" stroke="%23f9731610" stroke-width="0.5"/%3E%3C/svg%3E&apos;)] opacity-30' />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full mb-6 shadow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-white">
              <span>💸</span>
            </div>
            <span className="font-semibold">Monetize Your Expertise</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[2.25rem] leading-tight md:text-[2.5rem] lg:text-[2.75rem] font-poppins font-bold mb-6"
          >
            Teach What You Know, <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#F59E0B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Earn What You're Worth
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[1rem] font-nunito mb-10 max-w-xl leading-relaxed"
          >
            Our platform connects passionate teachers with eager learners. Set
            your own prices, we handle payments and take just 15% platform fee.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#F97316] to-[#F59E0B] shadow-lg shadow-[#F97316]/30 transition-all group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Teaching
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold bg-white text-[#1F2937] shadow-lg border border-[#E5E7EB] hover:bg-[#FFEDD5] transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Browse Courses
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="text-[1.875rem] font-bold text-[#F97316]">
                15%
              </div>
              <div className="text-[0.875rem]">Platform Fee</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[1.875rem] font-bold text-[#F97316]">
                $350K+
              </div>
              <div className="text-[0.875rem]">Paid to Teachers</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[1.875rem] font-bold text-[#F97316]">
                4.8★
              </div>
              <div className="text-[0.875rem]">Average Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-1 max-w-2xl"
        >
          {/* Floating Elements Container */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Main Illustration */}
            <div className="relative w-[80%] aspect-square rounded-[40px] shadow-2xl overflow-hidden border-8 border-white">
  <div className="absolute inset-0 bg-gradient-to-br from-[#FFEDD5] to-[#FED7AA] opacity-50" />
  <img 
    src="/images/hero-illustration.png"

    className="relative z-10 w-full h-full object-contain"
  />
</div>
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute top-[10%] left-[5%] w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-[#F97316]"
            >
              <div className="text-center p-2">
                <div className="text-3xl mb-1">👨‍🏫</div>
                <p className="text-[0.875rem] font-bold">Set Your Price</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-[10%] right-[5%] w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-[#34D399]"
            >
              <div className="text-center p-2">
                <div className="text-3xl mb-1">💳</div>
                <p className="text-[0.875rem] font-bold">Secure Payments</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute top-[25%] right-[0%] w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#F59E0B]"
            >
              <div className="text-center">
                <div className="text-2xl">📊</div>
                <p className="text-[0.75rem] mt-1 font-bold">15% Fee</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
