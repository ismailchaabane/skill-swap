import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const JoinCommunitySection = () => {
  return (
    <section className="py-28 bg-[#FFF7ED] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#F59E0B] opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <Image
            src="/community/community-illustration.svg"
            alt="Join Community"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <h2 className="text-[1.875rem] font-poppins text-[#1F2937] font-bold mb-6">
            Join Our Learning Community
          </h2>
          <p className="text-[1rem] text-[#4B5563] mb-6 font-nunito">
            Connect with people who are passionate about learning and teaching. Whether you're an expert or just starting out, there's a place for you in our skill-sharing network.
          </p>
          <ul className="list-disc list-inside text-[#1F2937] text-[1rem] font-nunito space-y-2 mb-8">
            <li>Access to verified profiles</li>
            <li>Earn points for every session</li>
            <li>Priority support & community features</li>
          </ul>
          <button className="px-6 py-3 bg-[#F97316] hover:bg-[#ea6d13] text-white rounded-full font-semibold text-[1rem] transition duration-300">
            Join Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;