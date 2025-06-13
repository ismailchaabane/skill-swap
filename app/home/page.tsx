import React from "react";
import { headers } from "next/headers";
import HeroSection from "@/app/components/HeroSection";
import ActiveSwapsMarquee from "../components/ActiveSwapsMarquee";
import TopTeachersSection from '../components/TopTeachersSection';

const HomePage = async () => {
  const headerList = await headers();
  const url = headerList.get("x-next-url") || "";
  const query = new URLSearchParams(url.split("?")[1]).get("q") || "";

  const activeSwaps = [
    { skill: "Spanish Lessons", with: "Maria", progress: "3/5 sessions" },
    { skill: "ReactJS Coaching", with: "John", progress: "1/3 sessions" },
    { skill: "Guitar Practice", with: "Liam", progress: "2/4 sessions" },
    { skill: "Photography Tips", with: "Sophie", progress: "4/6 sessions" },
    { skill: "Cooking Classes", with: "Raj", progress: "2/3 sessions" },
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Skill Catalog",
      description: "Discover thousands of skills to learn or teach"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Scheduling",
      description: "Learn at your own pace with flexible session times"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Secure Platform",
      description: "Verified users and secure payment system"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Community Support",
      description: "Join a supportive learning community"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Web Developer",
      content: "I taught React while learning guitar. The platform is intuitive and the community is amazing!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Language Teacher",
      content: "SkillSwap helped me connect with students worldwide. The payment system is seamless and secure.",
      rating: 5
    },
    {
      name: "Samuel Chen",
      role: "Photography Enthusiast",
      content: "I learned advanced photography techniques while teaching cooking classes. Win-win!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1F2937] font-nunito overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Active Swaps Marquee */}
      <ActiveSwapsMarquee swaps={activeSwaps} />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose SkillSwap
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Our platform is designed to make skill exchange simple, secure, and rewarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 group"
                style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              >
                <div 
                  className="w-20 h-20 rounded-xl mb-6 flex items-center justify-center transition-colors duration-500"
                  style={{ 
                    backgroundColor: '#FFF7ED',
                    color: '#F97316'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-[#F97316]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="opacity-80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFEDD5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              How SkillSwap Works
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Exchange skills in just a few simple steps
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[#F97316] opacity-10"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start mb-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Create Your Profile</h3>
                      <p className="opacity-80">List the skills you want to teach and what you'd like to learn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Find a Match</h3>
                      <p className="opacity-80">Browse our community and find the perfect skill exchange partner</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#34D399] flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Start Swapping</h3>
                      <p className="opacity-80">Schedule sessions, track progress, and build your skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#F97316] to-[#F59E0B] rounded-2xl overflow-hidden">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Join Our Community</h3>
                    <p className="mb-6 opacity-90">
                      Become part of a global community of learners and teachers
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">Language Exchange</span>
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">Tech Skills</span>
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">Creative Arts</span>
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">Professional Skills</span>
                    </div>
                    <button className="w-full py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-white hover:text-[#F97316] flex items-center justify-center">
                      <span>Get Started</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#34D399] opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Teachers Section */}
      <TopTeachersSection />
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Our Community Says
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Real stories from SkillSwap users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#F59E0B]' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="mb-6 italic text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#F59E0B] flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{testimonial.name}</h4>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F97316] to-[#F59E0B]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Swap Skills?
          </h2>
          <p className="text-xl mb-10 text-white opacity-90 max-w-2xl mx-auto">
            Join thousands of learners and teachers exchanging skills right now
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-xl font-bold bg-white text-[#F97316] hover:bg-[#1F2937] hover:text-white transition-colors duration-300">
              Create Free Account
            </button>
            <button className="px-8 py-4 rounded-xl font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#F97316] transition-colors duration-300">
              Browse Skills
            </button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316]"></div>
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316]"></div>
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316]"></div>
              <div className="w-12 h-12 rounded-full bg-white border-2 border-[#F97316] flex items-center justify-center text-xs font-bold text-[#1F2937]">
                +5K
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-white opacity-80">
            Join our community of over 25,000 skill swappers
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;