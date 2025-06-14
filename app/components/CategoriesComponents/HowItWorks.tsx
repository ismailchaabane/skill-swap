"use client"
import React from 'react'
import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#F97316] opacity-10 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#34D399] opacity-10 rounded-full blur-[60px]" />
          
          <h2 className="text-[1.875rem] font-poppins font-bold text-gray-800 mb-10 text-center">
            Start Learning in 3 Simple Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🔍", title: "Find Your Skill", desc: "Browse our extensive catalog or get personalized recommendations" },
              { icon: "📝", title: "Enroll & Learn", desc: "Choose your learning path and start interactive lessons" },
              { icon: "🎓", title: "Achieve Mastery", desc: "Complete projects, earn certifications, and showcase skills" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-sm border border-orange-100"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-orange-100 flex items-center justify-center text-2xl text-orange-600 mb-5">
                  {step.icon}
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 font-nunito">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
  )
}
