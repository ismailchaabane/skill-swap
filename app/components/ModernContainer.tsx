"use client";
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