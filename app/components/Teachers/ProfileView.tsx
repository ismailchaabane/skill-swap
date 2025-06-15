"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaStar,
  FaHeart,
  FaComment,
  FaShare,
  FaCog,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

interface Teacher {
  id: number;
  name: string;
  profile_picture: string | null;
  bio: string | null;
  location: string | null;
  link: string;
}

interface Session {
  id: number;
  date: Date;
  status: string;
  reviews: Review[];
}

interface Review {
  id: number;
  session_id: number;
  reviewer_id: number;

  rating: number;
  comment: string | null;
  created_at: Date;
  users: {
    profile_picture: string | null;
    name: string | null;
  };
  user_name: string | null;
}

export default function ProfileView({
  teacher,
  user_skills,
  user_sessions,
  user_reviews
}: {
  teacher: Teacher;
  user_skills: any[];
  user_sessions: Session[];
  user_reviews?: Review[];
}) {
  
  const [activeTab, setActiveTab] = useState("skills");
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Process sessions data
  const processedSessions = user_sessions.map((session) => ({
    id: session.id,
    title: `${
      session.status.charAt(0).toUpperCase() + session.status.slice(1)
    } Session`,
    date: session.date,
    students: 1, // Default to 1 student per session
    rating:
      session.reviews.length > 0
        ? session.reviews.reduce((sum, review) => sum + review.rating, 0) /
          session.reviews.length
        : 0,
  }));


  const allReviews = user_reviews || [];

  // Calculate stats
  const stats = {
    students: allReviews.length || 0,
    sessions: user_sessions.length,
    rating:
      allReviews.length > 0
        ? (
            allReviews.reduce((sum, review) => sum + review.rating, 0) /
            allReviews.length
          ).toFixed(1)
        : "4.9",
    followers: 542,
  };

  const user = {
    profile_picture: teacher.profile_picture || null,
    name: teacher.name || "User",
    username: "@" + (teacher.link || "unavailable"),
    bio: teacher.bio || "no bio available",
    location: teacher.location || "unknown",
    skills: user_skills || [],
    sessions: processedSessions,
    reviews: allReviews,
    stats,
  };

  // Floating elements positions
  type FloatingPosition = {
    x: number;
    y: number;
    size: number;
    delay: number;
    color: string;
  };
  const [positions, setPositions] = useState<FloatingPosition[]>([]);

  useEffect(() => {
    // Generate random positions for floating elements
    const newPositions = Array(8)
      .fill(null)
      .map(() => ({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        size: Math.random() * 40 + 20,
        delay: Math.random() * 2,
        color:
          Math.random() > 0.5
            ? "#F97316"
            : Math.random() > 0.5
            ? "#34D399"
            : "#F59E0B",
      }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1F2937] overflow-hidden">
      {/* Floating animated elements */}
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10 blur-xl"
          style={{
            background: pos.color,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            top: `${pos.y}%`,
            left: `${pos.x}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Profile header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 py-30 ">
          {/* Profile card */}
          <motion.div
            className="bg-white backdrop-blur-sm rounded-3xl border border-[#E5E7EB] p-8 shadow-lg flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#F97316] to-[#F59E0B] p-1">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center text-4xl">
                    {user.profile_picture ? (
                      <img
                        src={user.profile_picture}
                        alt={user.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-[#1F2937] font-bold">
                        {user.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#34D399] rounded-full flex items-center justify-center border-4 border-white">
                  <FaStar className="text-white text-xs" />
                </div>
              </div>

              {/* Profile info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold font-poppins">
                      {user.name}
                    </h1>
                    <p className="text-[#6B7280] font-nunito">
                      {user.username}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${
                      isFollowing
                        ? "bg-[#FFF7ED] border border-[#F97316] text-[#F97316]"
                        : "bg-gradient-to-r from-[#F97316] to-[#F59E0B] text-white"
                    }`}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    {isFollowing ? (
                      <>
                        <FaHeart className="text-[#F97316]" />
                        <span>Following</span>
                      </>
                    ) : (
                      <>
                        <FaHeart />
                        <span>Follow</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="mb-6 text-[#4B5563] font-nunito max-w-2xl">
                  {user.bio}
                </p>

                <div className="flex flex-wrap gap-4 mb-6 font-nunito">
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <FaMapMarkerAlt />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B7280]">
                    <FaUsers />
                    <span>{user.stats.followers} followers</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#FFF7ED] rounded-2xl p-4 border border-[#FFEDD5]">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-poppins text-[#F97316]">
                      {user.stats.students}
                    </div>
                    <div className="text-sm text-[#6B7280] font-nunito">
                      Students
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-poppins text-[#34D399]">
                      {user.stats.sessions}
                    </div>
                    <div className="text-sm text-[#6B7280] font-nunito">
                      Sessions
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-poppins text-[#F59E0B]">
                      {user.stats.rating}
                    </div>
                    <div className="text-sm text-[#6B7280] font-nunito">
                      Avg Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-poppins text-[#3B82F6]">
                      98%
                    </div>
                    <div className="text-sm text-[#6B7280] font-nunito">
                      Completion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Availability card - always visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white backdrop-blur-sm rounded-3xl border border-[#E5E7EB] p-8 shadow-lg flex-1 max-w-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 font-poppins">
              Availability
            </h2>
            <div className="mb-6">
              <div className="flex justify-between mb-2 font-nunito">
                <span>Monday - Friday</span>
                <span className="text-[#34D399] font-medium">Available</span>
              </div>
              <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full bg-[#34D399] w-3/4 rounded-full"></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2 font-nunito">
                <span>Weekends</span>
                <span className="text-[#F59E0B] font-medium">Limited</span>
              </div>
              <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div className="h-full bg-[#F59E0B] w-1/4 rounded-full"></div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3.5 bg-white border border-[#E5E7EB] rounded-lg font-medium font-nunito hover:bg-[#FFF7ED] transition"
            >
              Request Session
            </motion.button>
          </motion.div>

          {/* Action buttons */}
          <div className="flex flex-col gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white border border-[#E5E7EB] p-4 rounded-2xl hover:bg-[#FFF7ED] transition font-nunito"
            >
              <FaEnvelope className="text-xl text-[#F97316]" />
              <span>Send Message</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white border border-[#E5E7EB] p-4 rounded-2xl hover:bg-[#FFF7ED] transition font-nunito"
            >
              <FaShare className="text-xl text-[#34D399]" />
              <span>Share Profile</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white border border-[#E5E7EB] p-4 rounded-2xl hover:bg-[#FFF7ED] transition font-nunito"
            >
              <FaCog className="text-xl text-[#F59E0B]" />
              <span>Settings</span>
            </motion.button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-4 mb-8 border-b border-[#E5E7EB] pb-4">
          {["skills", "sessions", "reviews"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-2xl font-semibold font-poppins transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#F97316] to-[#F59E0B] text-white"
                  : "bg-white hover:bg-[#FFF7ED] text-[#1F2937]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold mb-6 font-poppins">
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {user.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-[#FFF7ED] border border-[#FFEDD5] rounded-full font-nunito"
                    >
                      {typeof skill === "string" ? skill : skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
        
            {activeTab === "reviews" && (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-lg mb-8"
                >
                <h2 className="text-2xl font-bold mb-6 font-poppins">
                  Student Reviews
                </h2>
                <div className="space-y-6">
                  {user.reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#FFF7ED] border border-[#FFEDD5] rounded-2xl p-6"
                  >
                    <div className="flex justify-between mb-4 items-center">
                    <div className="flex items-center gap-3">
                      {review.users?.profile_picture ? (
                      <img
                        src={review.users.profile_picture}
                        alt={review.user_name || "Anonymous"}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      ) : (
                      <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#6B7280] font-bold">
                        {(review.users?.name || review.user_name || "A").charAt(0)}
                      </div>
                      )}
                      <span className="font-bold font-poppins">
                      {review.user_name || review.users?.name || "Anonymous"}
                      </span>
                    </div>
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                        i < review.rating
                          ? "text-[#F59E0B]"
                          : "text-[#D1D5DB]"
                        }
                      />
                      ))}
                    </div>
                    </div>
                    <p className="text-[#4B5563] font-nunito">
                    "{review.comment || "No comment provided"}"
                    </p>
                  </motion.div>
                  ))}
                </div>
                </motion.div>
            )}
          </div>

          {/* Right column */}
          <div>
            {activeTab === "sessions" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold mb-6 font-poppins">
                  Upcoming Sessions
                </h2>
                <div className="space-y-6">
                  {user.sessions.map((session) => (
                    <motion.div
                      key={session.id}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-r from-white to-[#FFF7ED] border border-[#FFEDD5] rounded-2xl p-6 relative overflow-hidden"
                    >
                      <div className="absolute top-4 right-4 bg-[#F97316] text-white px-3 py-1 rounded-full text-sm font-bold font-poppins">
                        {session.rating.toFixed(1)} ⭐
                      </div>

                      <h3 className="text-xl font-bold mb-2 font-poppins">
                        {session.title}
                      </h3>
                      <div className="flex justify-between text-[#6B7280] mb-4 font-nunito">
                        <span>
                          {new Date(session.date).toLocaleDateString()}
                        </span>
                        <span>{session.students} student(s)</span>
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-2.5 bg-gradient-to-r from-[#F97316] to-[#F59E0B] rounded-lg font-medium text-white font-nunito"
                        >
                          Join Session
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg font-nunito hover:bg-[#FFF7ED]"
                        >
                          Details
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
