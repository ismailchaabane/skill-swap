// components/AddNewSkill.tsx
'use client';

import React, { useState } from 'react';

interface Category {
  id: number;
  name: string;
}

interface AddNewSkillProps {
  categories: Category[];
}

const AddNewSkill: React.FC<AddNewSkillProps> = ({ categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');

  const handleAddSkill = async () => {
    // Add your API call here
    console.log('Adding skill:', { name, categoryId, description });
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          categoryId: parseInt(categoryId),
          description
        }),
      });

      if (response.ok) {
        // Reset form and close modal
        setName('');
        setCategoryId('');
        setDescription('');
        setIsModalOpen(false);
      } else {
        console.error('Failed to add skill');
      }
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  return (
    <>
      {/* Add New Skill Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#F97316] hover:bg-[#F97316]/90 text-black px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-[#F97316]/30 flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Add New Skill
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#FFF7ED] rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#1F2937] font-poppins">Add New Skill</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-[#1F2937] hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddSkill();
            }}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-1 font-nunito">
                  Skill Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-[#1F2937] mb-1 font-nunito">
                  Category
                </label>
                <select
                  id="category"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-[#1F2937] mb-1 font-nunito">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-[#1F2937] hover:bg-gray-100 font-nunito font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F97316] text-white rounded-lg hover:bg-[#E86306] font-nunito font-semibold"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewSkill;