import React from 'react';

interface CategoryHeaderProps {
  name: string;
  icon: string | null;
  description: string;
}

export const CategoryHeader = ({ name, icon, description }: CategoryHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
      <div className="flex items-center">
        {icon ? (
          icon.endsWith('.png') ? (
            <div className="w-16 h-16 mr-4 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
              <img 
                src={`/icons/${icon}`} 
                alt={name}
                className="w-10 h-10 object-contain"
              />
            </div>
          ) : (
            <div className="w-16 h-16 mr-4 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
              {icon}
            </div>
          )
        ) : (
          <div className="w-16 h-16 mr-4 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
            📚
          </div>
        )}
        
        <div>
          <h1 className="text-3xl font-poppins font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-1 max-w-3xl">{description}</p>
        </div>
      </div>
    </div>
  );
};