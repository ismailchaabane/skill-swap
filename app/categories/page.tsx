"use client";

import { motion } from "framer-motion";
import { FiSearch, FiBookOpen, FiStar, FiClock, FiFilter, FiUser, FiAward, FiBook, FiArrowRight } from "react-icons/fi";

type SkillCardProps = {
  title: string;
  icon: React.ReactNode;
  category: string;
  rating: number;
  duration: string;
  students: string;
};

const SkillCard = ({ title, icon, category, rating, duration, students }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl  shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-2xl text-orange-600">
            {icon}
          </div>
          <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium font-poppins">
            <FiStar className="mr-1" />
            {rating}
          </div>
        </div>
        
        <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 font-nunito">{category}</p>
        
        <div className="flex justify-between text-sm text-gray-500 font-nunito">
          <div className="flex items-center">
            <FiClock className="mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <FiUser className="mr-1" />
            {students} students
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-orange-50 border-t border-orange-100">
        <button className="w-full py-2.5 bg-orange-600 text-white rounded-lg font-medium font-poppins hover:bg-orange-700 transition-colors flex items-center justify-center">
          Learn Now
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default function FindSkillPage() {
  const popularSkills = [
    { title: "Web Development", icon: "💻", category: "Technology", rating: 4.8, duration: "12 weeks", students: "2.4K" },
    { title: "UI/UX Design", icon: "🎨", category: "Design", rating: 4.7, duration: "8 weeks", students: "1.8K" },
    { title: "Digital Marketing", icon: "📈", category: "Business", rating: 4.5, duration: "10 weeks", students: "1.2K" },
    { title: "Photography", icon: "📷", category: "Arts", rating: 4.6, duration: "6 weeks", students: "890" },
    { title: "Culinary Arts", icon: "🍳", category: "Lifestyle", rating: 4.9, duration: "4 weeks", students: "1.5K" },
    { title: "Yoga & Wellness", icon: "🧘", category: "Health", rating: 4.8, duration: "8 weeks", students: "1.1K" },
    { title: "Data Science", icon: "📊", category: "Technology", rating: 4.7, duration: "14 weeks", students: "1.9K" },
    { title: "Creative Writing", icon: "✍️", category: "Arts", rating: 4.6, duration: "6 weeks", students: "780" },
  ];

  const categories = [
    { name: "Technology", icon: "💻", count: 128 },
    { name: "Design", icon: "🎨", count: 76 },
    { name: "Business", icon: "📊", count: 92 },
    { name: "Arts", icon: "🎭", count: 64 },
    { name: "Health", icon: "❤️", count: 58 },
    { name: "Languages", icon: "🌎", count: 45 },
    { name: "Music", icon: "🎵", count: 39 },
    { name: "Lifestyle", icon: "☕", count: 53 },
  ];

  const featuredTeachers = [
    { name: "Alex Johnson", skill: "UI/UX Design", students: 1200, rating: 4.9, experience: "8 years" },
    { name: "Maria Garcia", skill: "Spanish Language", students: 850, rating: 4.8, experience: "6 years" },
    { name: "Sam Wilson", skill: "Python Programming", students: 2100, rating: 4.95, experience: "10 years" },
  ];

  return (
    <div className="bg-[#FFF7ED] text-[#1F2937] min-h-screen">
      {/* Hero Section */}
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
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20 -mt-20 relative z-10">
        {/* Categories */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[1.875rem] font-poppins font-bold text-gray-800 flex items-center gap-3">
              <FiFilter className="text-[#F97316]" /> Explore Categories
            </h2>
            <button className="text-[#F97316] font-poppins font-medium hover:underline">
              View All Categories
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-orange-50 rounded-xl p-5 border border-orange-100 cursor-pointer hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{category.icon}</div>
                <h3 className="font-poppins font-bold text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm font-nunito text-gray-600">{category.count} skills</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Skills */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[1.875rem] font-poppins font-bold text-gray-800 flex items-center gap-3">
              <FiStar className="text-[#F59E0B]" /> Popular Skills Right Now
            </h2>
            <button className="text-[#F97316] font-poppins font-medium hover:underline">
              View All Skills
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                title={skill.title}
                icon={skill.icon}
                category={skill.category}
                rating={skill.rating}
                duration={skill.duration}
                students={skill.students}
              />
            ))}
          </div>
        </section>

        {/* Featured Teachers */}
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

        {/* How It Works */}
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
      </div>
    </div>
  );
}