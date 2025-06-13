import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Fatima Zahra",
    role: "Graphic Designer",
    message:
      "I swapped Arabic lessons for UI tips. This app made it easy, and I met some really talented people!",
    image: "/users/fatima.jpg",
  },
  {
    name: "Omar Belkacem",
    role: "Backend Developer",
    message:
      "Such a great way to teach and learn! I improved my English in exchange for coding help.",
    image: "/users/omar.jpg",
  },
  {
    name: "Lina Messaoudi",
    role: "Student",
    message:
      "Love how simple and fun the swap system is. I even found a mentor for French!",
    image: "/users/lina.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#FFFBEB] relative">
      <div className="absolute top-10 -left-20 w-60 h-60 bg-[#34D399] rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-20 w-40 h-40 bg-[#F59E0B] rounded-full opacity-20 blur-2xl animate-pulse" />

      <div className="container mx-auto px-6">
        <h2 className="text-[1.875rem] font-poppins font-bold text-center mb-16 text-[#1F2937]">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <h3 className="font-poppins text-[1.5rem] text-[#1F2937] mb-1">
                {t.name}
              </h3>
              <p className="text-sm text-[#6B7280] mb-3">{t.role}</p>
              <p className="text-[1rem] text-[#1F2937] font-nunito italic">
                “{t.message}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
