"use client";
import React from "react";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name || ""; 

 


  const skillCategories = [
    { name: "Programming", icon: "/icons/code.svg", count: 124 },
    { name: "Graphic Design", icon: "/icons/design.svg", count: 87 },
    { name: "Cooking", icon: "/icons/cooking.svg", count: 45 },
    { name: "Music", icon: "/icons/music.svg", count: 60 },
    { name: "Languages", icon: "/icons/languages.svg", count: 98 },
    { name: "Photography", icon: "/icons/photo.svg", count: 33 },
  ];

  const activeSwaps = [
    { skill: "Spanish Lessons", with: "Maria", progress: "3/5 sessions" },
    { skill: "ReactJS Coaching", with: "John", progress: "1/3 sessions" },
    { skill: "Guitar Practice", with: "Liam", progress: "2/4 sessions" },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 font-georama flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-white p-12 border-b-8 border-black shadow-[8px_8px_0_0_#000] flex flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold uppercase tracking-[0.25em] mb-4 text-black">
          Welcome back <span className="text-yellow-600">{userName}!</span>
        </h1>
        <p className="text-gray-800 font-semibold mb-8 max-w-xl">
          Ready to swap your skills and learn something new? Find your match below!
        </p>
        <input
          type="search"
          placeholder="Search skills or people..."
          className="w-full max-w-xl p-4 border-4 border-black rounded-none shadow-[4px_4px_0_0_#000] font-semibold text-black placeholder-gray-600"
          style={{ borderRadius: 0 }}
        />
      </section>

      {/* Skill Categories */}
      <section className="bg-yellow-50 p-12 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-[0.15em] mb-8 text-black border-b-4 border-black pb-2">
          Skill Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {skillCategories.map(({ name, icon, count }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-4 border-4 border-black p-6 bg-white shadow-[4px_4px_0_0_#000] cursor-pointer hover:scale-105 transform transition rounded-none"
              style={{ borderRadius: 0 }}
            >
              <img src={icon} alt={name} className="w-16 h-16" />
              <h3 className="text-xl font-extrabold tracking-wide uppercase text-black">
                {name}
              </h3>
              <p className="text-gray-700 font-semibold">{count} users</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Swaps */}
      <section className="bg-white p-12 border-t-8 border-black shadow-[8px_8px_0_0_#000] flex flex-col items-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-[0.15em] mb-8 text-black border-b-4 border-black pb-2">
          Your Active Swaps
        </h2>
        <div className="flex flex-col gap-6 max-w-4xl w-full">
          {activeSwaps.map(({ skill, with: person, progress }, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-4 border-black p-6 bg-yellow-100 shadow-[4px_4px_0_0_#000] rounded-none"
              style={{ borderRadius: 0 }}
            >
              <div>
                <h3 className="text-2xl font-bold tracking-wide uppercase text-black">{skill}</h3>
                <p className="text-gray-800 font-semibold">
                  With <span className="text-yellow-600">{person}</span>
                </p>
              </div>
              <div className="text-black font-extrabold tracking-wider">{progress}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-50 p-12 flex justify-center">
        <button
          className="bg-black text-yellow-200 py-4 px-12 uppercase font-extrabold tracking-widest shadow-[4px_4px_0_0_#000] transform hover:scale-105 transition rounded-none"
          style={{ borderRadius: 0 }}
        >
          Offer a Skill
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-8 border-black p-6 text-center text-sm font-semibold tracking-wide text-gray-700 shadow-[8px_8px_0_0_#000]">
        <p>
          © 2025 SkillSwap &mdash;{" "}
          <a href="/about" className="underline hover:text-black">
            About
          </a>{" "}
          |{" "}
          <a href="/contact" className="underline hover:text-black">
            Contact
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline hover:text-black">
            Terms
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
