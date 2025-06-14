import { getCategoryWithTeachers } from '@/lib/getCategoryWithTeachers';
import { TeacherCard } from '@/app/components/CategoriesComponents/TeacherCard';
import { Breadcrumb } from '@/app/components/CategoriesComponents/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: {
    categoryname: string;
  };
}

export default async function CategoryTeachersPage({ params }: PageProps) {
  const category = await getCategoryWithTeachers(params.categoryname);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-md text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Category Not Found</h1>
          <p className="text-gray-600 mb-6">
            The requested category does not exist or has been removed
          </p>
          <a href="/categories" className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            Browse Categories
          </a>
        </div>
      </div>
    );
  }

  // Mock data for additional sections
  const topSkills = [
    { id: 1, name: "Fundamentals", icon: "📚", expertCount: 24, difficulty: "Beginner" },
    { id: 2, name: "Advanced Techniques", icon: "🚀", expertCount: 18, difficulty: "Advanced" },
    { id: 3, name: "Practical Applications", icon: "🔧", expertCount: 32, difficulty: "Intermediate" },
    { id: 4, name: "Industry Insights", icon: "💼", expertCount: 15, difficulty: "Advanced" },
    { id: 5, name: "Specialized Methods", icon: "🎯", expertCount: 21, difficulty: "Intermediate" },
  ];

  const benefits = [
    {
      title: "Practical Skills",
      description: "Learn directly from industry professionals with real-world experience and practical knowledge.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Community Support",
      description: "Join a vibrant community of learners and experts to network, collaborate, and grow together.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Verified Experts",
      description: "All our instructors are vetted professionals with proven expertise and teaching abilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      content: `"The ${category.name} experts here completely transformed my approach. I went from beginner to job-ready in just 3 months!"`,
      rating: 5
    },
    {
      name: "Maria Garcia",
      content: `"I was able to land a promotion thanks to the skills I learned through the ${category.name} experts on this platform."`,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[700px]">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-10">
          <div className="max-w-4xl">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Categories', href: '/categories' },
                { label: category.name, href: '#' }
              ]} 
            />
            <h1 className="text-5xl font-bold text-white mb-4">{category.name}</h1>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl">
              {category.description || `Discover top experts in ${category.name} ready to share their knowledge`}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Watch Introduction
              </button>
              
              <button className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl -mt-20 relative z-10">
        {/* Category Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 w-24 h-24 rounded-2xl flex items-center justify-center p-4 shadow-lg">
              {category.icon && category.icon.endsWith('.png') ? (
                <img 
                  src={`/icons/${category.icon}`} 
                  alt={category.name}
                  className="w-14 h-14 object-contain"
                />
              ) : (
                <span className="text-4xl">{category.icon || '📚'}</span>
              )}
            </div>
            
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">About {category.name}</h2>
              <p className="text-gray-600">
                {category.description || `Our ${category.name} experts bring years of professional experience and passion for teaching. Whether you're a beginner or looking to advance your skills, find the perfect mentor to guide your journey.`}
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{category.teachers.length}+</div>
                <div className="text-gray-700 font-medium">Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Top Experts in {category.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Connect with professionals who excel in this field
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Experts
              </button>
            </div>
          </div>
          
          {category.teachers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.teachers.map(teacher => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          ) : (
            <div className="bg-orange-50 rounded-2xl shadow-lg p-12 text-center border border-orange-200">
              <div className="mx-auto bg-gradient-to-br from-orange-100 to-amber-100 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Experts Found Yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We're actively recruiting experts for this category. Check back soon or be the first to join!
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  Join as Expert
                </button>
                <button className="px-5 py-2.5 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          )}
          
          {category.teachers.length > 0 && (
            <div className="mt-16 flex flex-col items-center">
              <div className="flex gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <button 
                    key={i}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      i === 0 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                Showing {category.teachers.length} of 120+ experts in {category.name}
              </p>
            </div>
          )}
        </div>

        {/* Popular Skills Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular {category.name} Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-100 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                    <span className="text-orange-600 text-lg">{skill.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-800">{skill.name}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{skill.expertCount} experts</span>
                  <span className="bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
                    {skill.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-white text-orange-600 rounded-lg border border-orange-300 hover:bg-orange-50 transition-colors flex items-center justify-center mx-auto gap-2">
              View All Skills
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 mb-12 border border-orange-100">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Learn {category.name}?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to master {category.name}?
          </h2>
          <p className="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students learning from the best experts in the field
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Find Your Expert
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Explore Learning Paths
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}