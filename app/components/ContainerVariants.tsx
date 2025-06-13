"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function ContainerVariants() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF7ED' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.25rem', color: '#1F2937' }}>
          Modern Container Variants
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Minimal with subtle hover */}
          <div 
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-48 w-full">
              <Image 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern design"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 
                className="mb-2" 
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: hoveredCard === 1 ? '#F97316' : '#1F2937',
                  transition: 'color 0.3s ease'
                }}
              >
                Minimal Design
              </h3>
              <p 
                className="mb-4" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                  color: '#1F2937' 
                }}
              >
                Clean and simple container with subtle hover effects that elevate the card slightly.
              </p>
              <button 
                className="px-4 py-2 rounded-md transition-colors duration-300"
                style={{ 
                  backgroundColor: hoveredCard === 1 ? '#34D399' : '#F59E0B',
                  color: 'white',
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2: Glass morphism */}
          <div 
            className="rounded-xl backdrop-blur-sm bg-white/30 border border-white/20 overflow-hidden shadow-lg transition-all duration-500 hover:backdrop-blur-md hover:bg-white/40"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#F97316' }}>
                  <span className="text-white font-bold">02</span>
                </div>
                <h3 
                  className="text-xl"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    color: '#1F2937',
                    fontSize: '1.5rem'
                  }}
                >
                  Glass Effect
                </h3>
              </div>
              <p 
                className="mb-6" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                  color: '#1F2937' 
                }}
              >
                Modern glass morphism effect that becomes more pronounced on hover with increased blur.
              </p>
              <div className="flex justify-between items-center">
                <span 
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: hoveredCard === 2 ? '#F59E0B' : '#34D399',
                    color: 'white',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  New
                </span>
                <button 
                  className="flex items-center"
                  style={{ color: '#F97316' }}
                >
                  <span className="mr-1">View</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Neumorphic */}
          <div 
            className="p-6 rounded-xl transition-all duration-300 hover:shadow-inner"
            style={{ 
              backgroundColor: '#FFF7ED',
              boxShadow: hoveredCard === 3 ? 
                'inset 5px 5px 10px #e6ddd4, inset -5px -5px 10px #fffff6' : 
                '8px 8px 16px #e6ddd4, -8px -8px 16px #fffff6'
            }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 
              className="mb-4" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '1.5rem', 
                color: '#1F2937' 
              }}
            >
              Neumorphic Style
            </h3>
            <p 
              className="mb-6" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Soft UI design that appears to extrude from the background, with an inset effect on hover.
            </p>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: hoveredCard === 3 ? '#FFF7ED' : '#F97316',
                  color: hoveredCard === 3 ? '#F97316' : 'white',
                  boxShadow: hoveredCard === 3 ? 
                    'inset 3px 3px 6px #e6ddd4, inset -3px -3px 6px #fffff6' : 
                    '4px 4px 8px #e6ddd4, -4px -4px 8px #fffff6'
                }}
              >
                Primary
              </button>
              <button 
                className="px-4 py-2 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: hoveredCard === 3 ? '#FFF7ED' : '#34D399',
                  color: hoveredCard === 3 ? '#34D399' : 'white',
                  boxShadow: hoveredCard === 3 ? 
                    'inset 3px 3px 6px #e6ddd4, inset -3px -3px 6px #fffff6' : 
                    '4px 4px 8px #e6ddd4, -4px -4px 8px #fffff6'
                }}
              >
                Secondary
              </button>
            </div>
          </div>

          {/* Card 4: Gradient with hover scale */}
          <div 
            className="rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)'
            }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-6 text-white">
              <h3 
                className="mb-3" 
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem' 
                }}
              >
                Gradient Scale
              </h3>
              <p 
                className="mb-6 opacity-90" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem' 
                }}
              >
                Vibrant gradient background that scales up slightly on hover for a dynamic effect.
              </p>
              <div className="flex justify-end">
                <button 
                  className="px-6 py-2 rounded-full bg-white transition-colors duration-300 flex items-center"
                  style={{ color: '#F97316' }}
                >
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Border highlight */}
          <div 
            className="relative bg-white rounded-lg p-0.5 overflow-hidden transition-all duration-500 group"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
            <div className="relative bg-white rounded-[calc(0.5rem-1px)] h-full p-6">
              <h3 
                className="mb-3" 
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: '#1F2937' 
                }}
              >
                Border Animation
              </h3>
              <p 
                className="mb-6" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                  color: '#1F2937' 
                }}
              >
                Container with an animated gradient border that appears on hover.
              </p>
              <div className="relative">
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#F59E0B] transition-all duration-500 group-hover:w-full"
                ></div>
                <button 
                  className="text-left"
                  style={{ 
                    fontFamily: 'Nunito, sans-serif', 
                    color: '#F97316',
                    fontWeight: '600'
                  }}
                >
                  Read Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: 3D tilt effect */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2"
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-40 w-full bg-gradient-to-br from-[#34D399] to-[#F59E0B] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 
                className="mb-2" 
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: '#1F2937' 
                }}
              >
                Tilt Effect
              </h3>
              <p 
                className="mb-4 text-sm" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '0.875rem', 
                  color: '#1F2937' 
                }}
              >
                Card that lifts up on hover with a subtle 3D effect.
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-white text-xs font-bold">
                    UI
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#34D399] -ml-2 flex items-center justify-center text-white text-xs font-bold">
                    UX
                  </div>
                </div>
                <button 
                  className="px-4 py-2 rounded-md transition-colors duration-300"
                  style={{ 
                    backgroundColor: hoveredCard === 6 ? '#F97316' : '#F59E0B',
                    color: 'white',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
          {/* Card 7: Floating Card with Border on Hover */}
          <div 
            className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard(7)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#F59E0B' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 
                className="text-xl"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  color: hoveredCard === 7 ? '#F97316' : '#1F2937',
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
              >
                Floating Card
              </h3>
            </div>
            <p 
              className="mb-4" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Card that lifts and gains a subtle border on hover
            </p>
            <div className="relative mt-6 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
                style={{ 
                  width: hoveredCard === 7 ? '85%' : '65%',
                  backgroundColor: '#34D399'
                }}
              ></div>
            </div>
          </div>

          {/* Card 8: Card with Underline Animation */}
          <div 
            className="bg-white rounded-lg p-6 relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(8)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 
              className="mb-3 relative inline-block"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '1.5rem', 
                color: '#1F2937' 
              }}
            >
              Underline Animation
              <span 
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                style={{ 
                  width: hoveredCard === 8 ? '100%' : '0%',
                  backgroundColor: '#F97316'
                }}
              ></span>
            </h3>
            <p 
              className="mb-6" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Text underline that animates on hover
            </p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#F97316] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-[#34D399] border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-[#F59E0B] border-2 border-white"></div>
              </div>
              <button 
                className="px-4 py-2 rounded-md transition-all duration-300"
                style={{ 
                  backgroundColor: hoveredCard === 8 ? '#1F2937' : '#F97316',
                  color: 'white',
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                Join
              </button>
            </div>
          </div>

          {/* Card 9: Card with Diagonal Hover Effect */}
          <div 
            className="relative rounded-xl overflow-hidden h-64"
            onMouseEnter={() => setHoveredCard(9)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#F59E0B]"></div>
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#1F2937] to-transparent p-6 flex flex-col justify-end transition-all duration-500"
              style={{ 
                transform: hoveredCard === 9 ? 'translateY(0)' : 'translateY(50%)',
                opacity: hoveredCard === 9 ? 1 : 0.8
              }}
            >
              <h3 
                className="text-white mb-2"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem' 
                }}
              >
                Diagonal Reveal
              </h3>
              <p 
                className="text-white mb-4"
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem' 
                }}
              >
                Content slides up on hover
              </p>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 10: Card with Background Pattern */}
          <div 
            className="relative rounded-lg overflow-hidden p-6 transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: '#FFF7ED',
              backgroundImage: 'radial-gradient(#F59E0B 0.5px, transparent 0.5px)',
              backgroundSize: '10px 10px'
            }}
            onMouseEnter={() => setHoveredCard(10)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300"
              style={{ 
                opacity: hoveredCard === 10 ? 0.9 : 0
              }}
            ></div>
            <div className="relative z-10">
              <h3 
                className="mb-3"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: '#1F2937' 
                }}
              >
                Pattern Background
              </h3>
              <p 
                className="mb-6" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                  color: '#1F2937' 
                }}
              >
                Subtle pattern that reveals content on hover
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#F97316', color: 'white' }}>Design</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#34D399', color: 'white' }}>Patterns</span>
                <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#F59E0B', color: 'white' }}>Hover</span>
              </div>
            </div>
          </div>

          {/* Card 11: Card with Rotating Icon */}
          <div 
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredCard(11)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="w-16 h-16 rounded-full mb-4 flex items-center justify-center transition-all duration-500"
              style={{ 
                backgroundColor: hoveredCard === 11 ? '#34D399' : '#F59E0B',
                transform: hoveredCard === 11 ? 'rotate(360deg)' : 'rotate(0deg)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 
              className="mb-2"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '1.5rem', 
                color: '#1F2937' 
              }}
            >
              Rotating Icon
            </h3>
            <p 
              className="mb-4" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Icon that rotates 360° on hover
            </p>
            <div className="w-full mt-4">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-700"
                  style={{ 
                    width: hoveredCard === 11 ? '100%' : '40%',
                    backgroundColor: '#F97316'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Card 12: Card with Parallax Effect */}
          <div 
            className="relative rounded-xl overflow-hidden h-64"
            onMouseEnter={() => setHoveredCard(12)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1F2937] to-transparent opacity-50"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center transition-transform duration-500"
                style={{ 
                  transform: hoveredCard === 12 ? 'scale(1.1)' : 'scale(1)'
                }}
              ></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 
                className="text-white mb-2"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem' 
                }}
              >
                Parallax Effect
              </h3>
              <p 
                className="text-white text-sm"
                style={{ 
                  fontFamily: 'Nunito, sans-serif' 
                }}
              >
                Background scales on hover for depth effect
              </p>
            </div>
          </div>

          {/* Card 13: Card with Color Invert on Hover */}
          <div 
            className="bg-white rounded-lg p-6 border-2 border-transparent transition-all duration-300 hover:border-[#F97316]"
            onMouseEnter={() => setHoveredCard(13)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 
                className="text-xl"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: '#1F2937' 
                }}
              >
                Color Invert
              </h3>
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                style={{ 
                  backgroundColor: hoveredCard === 13 ? '#1F2937' : '#F97316',
                  color: 'white'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>
            <p 
              className="mb-6" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Elements change color dramatically on hover
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full" style={{ backgroundColor: '#F97316' }}></div>
              <div className="h-2 rounded-full" style={{ backgroundColor: '#34D399' }}></div>
              <div className="h-2 rounded-full" style={{ backgroundColor: '#F59E0B' }}></div>
            </div>
          </div>

          {/* Card 14: Card with Glowing Border */}
          <div 
            className="relative bg-white rounded-xl p-6 transition-all duration-300"
            onMouseEnter={() => setHoveredCard(14)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute inset-0 rounded-xl transition-all duration-500"
              style={{ 
                boxShadow: hoveredCard === 14 ? '0 0 0 3px #F97316' : '0 0 0 0px #F97316',
                opacity: hoveredCard === 14 ? 1 : 0
              }}
            ></div>
            <h3 
              className="mb-3"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: '1.5rem', 
                color: '#1F2937' 
              }}
            >
              Glowing Border
            </h3>
            <p 
              className="mb-6" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Border that glows on hover
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full mr-3" style={{ backgroundColor: '#F97316' }}></div>
              <div className="w-8 h-8 rounded-full mr-3" style={{ backgroundColor: '#34D399' }}></div>
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#F59E0B' }}></div>
              <button 
                className="ml-auto px-4 py-2 rounded-md text-sm transition-colors duration-300"
                style={{ 
                  backgroundColor: hoveredCard === 14 ? '#1F2937' : '#F59E0B',
                  color: 'white',
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                Select
              </button>
            </div>
          </div>

          {/* Card 15: Card with Expanding Overlay */}
          <div 
            className="relative bg-white rounded-lg overflow-hidden"
            onMouseEnter={() => setHoveredCard(15)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-6">
              <h3 
                className="mb-3"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: '#1F2937' 
                }}
              >
                Expanding Overlay
              </h3>
              <p 
                className="mb-6" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                  color: '#1F2937' 
                }}
              >
                Overlay that expands on hover to reveal more
              </p>
            </div>
            <div 
              className="absolute bottom-0 left-0 w-full h-0 bg-[#F97316] transition-all duration-500 flex items-center justify-center overflow-hidden"
              style={{ 
                height: hoveredCard === 15 ? '100%' : '0',
                opacity: hoveredCard === 15 ? 1 : 0
              }}
            >
              <button className="px-6 py-3 rounded-full bg-white text-[#F97316] font-medium">
                View Details
              </button>
            </div>
          </div>

          {/* Card 16: Card with 3D Shadow Effect */}
          <div 
            className="bg-white rounded-xl p-6 transition-all duration-300"
            style={{ 
              transform: hoveredCard === 16 ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === 16 ? 
                '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            onMouseEnter={() => setHoveredCard(16)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 
                className="text-xl"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: '1.5rem', 
                  color: '#1F2937' 
                }}
              >
                3D Shadow Effect
              </h3>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#34D399' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <p 
              className="mb-6" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Card lifts with dramatic shadow on hover
            </p>
            <div className="flex">
              <div className="flex-1 h-1 rounded-full mr-1" style={{ backgroundColor: '#F97316' }}></div>
              <div className="flex-1 h-1 rounded-full mr-1" style={{ backgroundColor: '#34D399' }}></div>
              <div className="flex-1 h-1 rounded-full mr-1" style={{ backgroundColor: '#F59E0B' }}></div>
              <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: '#1F2937' }}></div>
            </div>
          </div>
          {/* Card 1: Glass Morphism with Floating Elements */}
          <div 
            className="relative rounded-2xl overflow-hidden p-8 transition-all duration-500 group"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={() => setHoveredCard(17)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#F59E0B] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            ></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              
              <h3 
                className="mb-3 text-2xl font-medium"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  color: '#1F2937' 
                }}
              >
                Glass Dashboard
              </h3>
              
              <p 
                className="mb-6 opacity-90" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                  color: '#1F2937' 
                }}
              >
                Sleek glass panel with subtle gradient overlay on hover
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full text-sm backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', color: '#1F2937' }}>UI Design</span>
                <span className="px-3 py-1.5 rounded-full text-sm backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', color: '#1F2937' }}>Modern</span>
              </div>
              
              <div 
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#34D399] opacity-20 group-hover:opacity-30 transition-all duration-700"
                style={{ 
                  transform: hoveredCard === 17 ? 'scale(1.5)' : 'scale(1)'
                }}
              ></div>
            </div>
          </div>

          {/* Card 2: Minimal Card with Floating Elements */}
          <div 
            className="bg-white rounded-2xl p-6 transition-all duration-500 hover:shadow-xl group"
            onMouseEnter={() => setHoveredCard(18)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative overflow-hidden rounded-xl h-48 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] to-[#F97316] opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-500"
                  style={{ 
                    transform: hoveredCard === 18 ? 'translateY(0) scale(1.1)' : 'translateY(30px) scale(0.9)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 
              className="mb-3 text-2xl font-medium"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                color: '#1F2937' 
              }}
            >
              Floating Elements
            </h3>
            
            <p 
              className="mb-6" 
              style={{ 
                fontFamily: 'Nunito, sans-serif', 
                fontSize: '1rem', 
                color: '#1F2937' 
              }}
            >
              Elements that rise and expand on hover with smooth transitions
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#34D399] flex items-center justify-center text-white">
                  <span>JD</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium" style={{ color: '#1F2937' }}>Jane Doe</p>
                  <p className="text-xs opacity-70" style={{ color: '#1F2937' }}>Design Lead</p>
                </div>
              </div>
              
              <button 
                className="px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-[#F97316] group-hover:text-white"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#1F2937',
                  border: '1px solid #E5E7EB',
                  fontFamily: 'Nunito, sans-serif'
                }}
              >
                View
              </button>
            </div>
          </div>

          {/* Card 3: Gradient Tilt Card */}
          <div 
            className="relative rounded-2xl overflow-hidden transition-all duration-500 group"
            style={{
              transformStyle: 'preserve-3d',
              transform: hoveredCard === 19 ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0) rotateX(0)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={() => setHoveredCard(19)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#F97316] to-[#F59E0B] opacity-80 transition-opacity duration-500"
              style={{
                opacity: hoveredCard === 19 ? 0.9 : 0.8
              }}
            ></div>
            
            <div 
              className="relative z-10 p-8 text-white"
              style={{
                transform: 'translateZ(30px)'
              }}
            >
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm">Featured</span>
              </div>
              
              <h3 
                className="mb-4 text-2xl font-medium"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                }}
              >
                Dynamic Perspective
              </h3>
              
              <p 
                className="mb-8 opacity-90" 
                style={{ 
                  fontFamily: 'Nunito, sans-serif', 
                  fontSize: '1rem', 
                }}
              >
                Card that tilts in 3D space with perspective effect on hover
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="ml-3 font-medium">2:45</span>
                </div>
                
                <button className="px-5 py-2.5 rounded-full bg-white text-[#F97316] font-medium flex items-center">
                  <span>Play</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Asymmetrical Design */}
          <div 
            className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group"
            style={{ 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={() => setHoveredCard(20)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#34D399] transition-all duration-500"
              style={{
                height: hoveredCard === 20 ? '6px' : '3px'
              }}
            ></div>
            
            <div className="p-8 pt-12">
              <div className="flex items-start mb-6">
                <div className="flex-1">
                  <h3 
                    className="mb-2 text-2xl font-medium"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      color: '#1F2937' 
                    }}
                  >
                    Asymmetrical Layout
                  </h3>
                  <p 
                    className="text-sm opacity-80" 
                    style={{ 
                      fontFamily: 'Nunito, sans-serif', 
                      color: '#1F2937' 
                    }}
                  >
                    Modern layout with dynamic elements
                  </p>
                </div>
                <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F97316' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FFF7ED' }}>
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#F97316' }}></div>
                  </div>
                  <div className="h-32 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#FFF7ED' }}>
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#34D399' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="ml-4 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                
                <button 
                  className="px-5 py-2.5 rounded-lg transition-all duration-300 group-hover:bg-[#1F2937] group-hover:text-white"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#1F2937',
                    fontFamily: 'Nunito, sans-serif'
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Layered Card with Floating Elements */}
          <div 
            className="relative rounded-2xl overflow-hidden transition-all duration-500 group"
            style={{
              transform: hoveredCard === 21 ? 'translateY(-8px)' : 'translateY(0)'
            }}
            onMouseEnter={() => setHoveredCard(21)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#34D399] to-[#F59E0B] opacity-10"
            ></div>
            
            <div 
              className="relative z-10 p-8"
              style={{
                backgroundColor: '#FFF7ED',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h3 
                  className="mb-3 text-2xl font-medium"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    color: '#1F2937' 
                  }}
                >
                  Secure Interface
                </h3>
                
                <p 
                  className="mb-6" 
                  style={{ 
                    fontFamily: 'Nunito, sans-serif', 
                    fontSize: '1rem', 
                    color: '#1F2937' 
                  }}
                >
                  Layered design with floating elements and depth effect
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div 
                  className="h-24 rounded-xl flex items-center justify-center transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgba(255, 247, 237, 0.7)',
                    transform: hoveredCard === 21 ? 'translateY(-10px)' : 'translateY(0)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#F97316' }}></div>
                </div>
                <div 
                  className="h-24 rounded-xl flex items-center justify-center transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgba(255, 247, 237, 0.7)',
                    transform: hoveredCard === 21 ? 'translateY(-10px)' : 'translateY(0)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    transitionDelay: '0.1s'
                  }}
                >
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#34D399' }}></div>
                </div>
                <div 
                  className="h-24 rounded-xl flex items-center justify-center transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgba(255, 247, 237, 0.7)',
                    transform: hoveredCard === 21 ? 'translateY(-10px)' : 'translateY(0)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    transitionDelay: '0.2s'
                  }}
                >
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#F59E0B' }}></div>
                </div>
              </div>
              
              <button 
                className="w-full py-3.5 rounded-xl font-medium transition-all duration-300 group-hover:bg-[#1F2937] group-hover:text-white"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  color: '#1F2937',
                  fontFamily: 'Nunito, sans-serif',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import { useState } from 'react';

export default function ModernContainer() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#FFF7ED' }}>
      <div 
        className="relative w-full max-w-4xl rounded-[40px] overflow-hidden transition-all duration-700"
        style={{
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          boxShadow: isHovered 
            ? '0 50px 100px -20px rgba(249, 115, 22, 0.2), 0 30px 60px -30px rgba(0, 0, 0, 0.3)' 
            : '0 30px 60px -10px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]"></div>
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: isHovered 
              ? 'radial-gradient(circle at 80% 20%, #F97316 0%, transparent 40%), radial-gradient(circle at 20% 80%, #34D399 0%, transparent 40%)' 
              : 'radial-gradient(circle at 50% 50%, #F59E0B 0%, transparent 70%)',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
          }}
        ></div>
        
        {/* Glass morphism container */}
        <div 
          className="relative backdrop-blur-xl bg-white/70 border border-white/50 rounded-[40px] overflow-hidden transition-all duration-500"
          style={{
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 -1px 1px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="p-10">
            {/* Header with floating animation */}
            <div className="flex justify-between items-start mb-12 transition-all duration-500"
              style={{ transform: isHovered ? 'translateY(10px)' : 'translateY(0)' }}>
              <div>
                <h1 
                  className="text-4xl font-bold mb-3 tracking-tight"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    color: '#1F2937',
                    background: 'linear-gradient(45deg, #1F2937, #4B5563)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Futuristic Interface
                </h1>
                <p 
                  className="text-lg opacity-80 max-w-md"
                  style={{ 
                    fontFamily: 'Nunito, sans-serif', 
                    color: '#1F2937' 
                  }}
                >
                  Next-gen UI with dynamic interactions and smooth animations
                </p>
              </div>
              
              <div className="flex space-x-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm" 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm" 
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Interactive tabs */}
            <div className="mb-10">
              <div className="flex space-x-2 mb-8">
                {['Overview', 'Analytics', 'Settings', 'Security'].map((tab, index) => (
                  <button
                    key={index}
                    className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === index ? 'text-white' : 'text-[#1F2937]'
                    }`}
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      backgroundColor: activeTab === index ? '#1F2937' : 'rgba(255, 255, 255, 0.5)',
                      transform: activeTab === index ? 'translateY(-2px)' : 'none'
                    }}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="p-6 rounded-2xl backdrop-blur-lg" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>
                  {activeTab === 0 && 'Performance Dashboard'}
                  {activeTab === 1 && 'Data Analytics'}
                  {activeTab === 2 && 'System Settings'}
                  {activeTab === 3 && 'Security Center'}
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl transition-all duration-500 hover:bg-white/50">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center" 
                        style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm opacity-80" style={{ fontFamily: 'Nunito, sans-serif', color: '#1F2937' }}>Active Users</p>
                        <p className="text-xl font-medium" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>24.8K</p>
                      </div>
                    </div>
                    <div className="h-2 w-full rounded-full overflow-hidden bg-gray-200">
                      <div className="h-full rounded-full" style={{ backgroundColor: '#F97316', width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="p-5 rounded-xl transition-all duration-500 hover:bg-white/50">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg mr-3 flex items-center justify-center" 
                        style={{ backgroundColor: 'rgba(52, 211, 153, 0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#34D399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm opacity-80" style={{ fontFamily: 'Nunito, sans-serif', color: '#1F2937' }}>Engagement Rate</p>
                        <p className="text-xl font-medium" style={{ fontFamily: 'Poppins, sans-serif', color: '#1F2937' }}>64.2%</p>
                      </div>
                    </div>
                    <div className="h-2 w-full rounded-full overflow-hidden bg-gray-200">
                      <div className="h-full rounded-full" style={{ backgroundColor: '#34D399', width: '64%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating action button */}
            <div className="flex justify-center">
              <button 
                className="px-8 py-4 rounded-2xl font-bold transition-all duration-500 flex items-center"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(45deg, #F97316, #F59E0B)',
                  color: 'white',
                  boxShadow: '0 10px 20px rgba(249, 115, 22, 0.3)',
                  transform: isHovered ? 'scale(1.05) translateY(-5px)' : 'scale(1)'
                }}
              >
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div 
            className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-[#F97316] opacity-10 blur-xl transition-all duration-1000"
            style={{
              transform: isHovered ? 'scale(1.5) translateX(-20px)' : 'scale(1)'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 -left-10 w-32 h-32 rounded-full bg-[#34D399] opacity-10 blur-xl transition-all duration-1000"
            style={{
              transform: isHovered ? 'scale(1.8) translateX(20px)' : 'scale(1)',
              transitionDelay: '0.1s'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}