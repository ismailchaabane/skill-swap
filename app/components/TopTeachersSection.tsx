import React from 'react';
import Image from 'next/image';

const TopTeachersSection = () => {
  const teachers = [
    {
      id: 1,
      name: "Alex Johnson",
      subjects: ["React", "JavaScript", "UI/UX"],
      rating: 4.9,
      reviews: 128,
      sessions: 245,
      image: "/teacher1.jpg",
      badge: "Top Rated"
    },
    {
      id: 2,
      name: "Maria Garcia",
      subjects: ["Spanish", "ESL", "Linguistics"],
      rating: 4.8,
      reviews: 97,
      sessions: 198,
      image: "/teacher2.jpg",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Samuel Chen",
      subjects: ["Photography", "Photoshop", "Videography"],
      rating: 4.95,
      reviews: 142,
      sessions: 312,
      image: "/teacher3.jpg",
      badge: "Expert"
    },
    {
      id: 4,
      name: "Sophie Williams",
      subjects: ["Cooking", "Nutrition", "Baking"],
      rating: 4.7,
      reviews: 86,
      sessions: 176,
      image: "/teacher4.jpg",
      badge: "New Star"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF7ED]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Top Teachers
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Meet our most popular and highly-rated instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-xl group"
            >
              <div className="relative h-56 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      teacher.badge === "Top Rated" 
                        ? "bg-[#F97316] text-white" 
                        : teacher.badge === "Expert" 
                          ? "bg-[#34D399] text-white" 
                          : "bg-[#F59E0B] text-white"
                    }`}
                  >
                    {teacher.badge}
                  </span>
                </div>
                
                {/* Teacher Image */}
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] to-transparent opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1F2937] to-transparent opacity-20"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {teacher.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${i < Math.floor(teacher.rating) ? 'text-[#F59E0B]' : 'text-gray-300'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium">{teacher.rating}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {teacher.reviews} reviews • {teacher.sessions} sessions
                  </p>
                </div>
                
                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Teaches</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teacher.subjects.map((subject, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs rounded-full font-medium"
                        style={{ 
                          backgroundColor: '#FFF7ED',
                          color: '#1F2937'
                        }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Button */}
                <div className="text-center">
                  <button 
                    className="px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group-hover:bg-[#F97316] group-hover:text-white"
                    style={{ 
                      backgroundColor: '#FFF7ED',
                      color: '#1F2937'
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-3.5 rounded-xl font-bold flex items-center justify-center mx-auto transition-all duration-300 hover:bg-[#1F2937] hover:text-white"
            style={{ 
              backgroundColor: '#FFF7ED',
              color: '#1F2937',
              border: '2px solid #F97316'
            }}
          >
            <span>View All Teachers</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopTeachersSection;