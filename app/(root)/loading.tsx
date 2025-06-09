import React from 'react';

const GeometricLoader = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <div className="relative w-64 h-64">
        {/* Primary geometric shapes */}
        <div className="absolute w-32 h-32 bg-[#ff3e00] animate-cubism-pulse-1"></div>
        <div className="absolute right-0 top-0 w-24 h-24 bg-[#00c4cc] animate-cubism-pulse-2"></div>
        <div className="absolute bottom-0 w-20 h-20 bg-[#ffd700] animate-cubism-pulse-3"></div>
        
        {/* Dynamic Bauhaus-inspired lines */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-1 bg-white animate-line-sweep"
            style={{
              top: `${(i * 30) % 240}px`,
              left: `${(i * 40) % 200}px`,
              width: `${20 + (i * 15)}px`,
              animationDelay: `${i * 5}s`
            }}
          />
        ))}
        
        {/* Floating triangles */}
        <div className="absolute w-0 h-0 border-l-[16px] border-l-transparent border-b-[28px] border-b-[#ff3e00] border-r-[16px] border-r-transparent top-1/4 left-1/3 animate-float"></div>
        <div className="absolute w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-[#00c4cc] border-r-[12px] border-r-transparent bottom-1/3 right-1/4 animate-float-reverse"></div>
        
        {/* Center circle */}
        <div className="absolute w-16 h-16 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default GeometricLoader;