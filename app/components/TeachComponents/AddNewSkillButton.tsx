// components/AddNewSkillButton.tsx
"use client";


import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';


interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

interface SkillFormData {
  name: string;
  categoryId: string;
  description: string;
  role: "teach" | "learn";
  level: "beginner" | "intermediate" | "advanced";
  price: number;
}

const AddNewSkillButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SkillFormData>({
    name: "",
    categoryId: "",
    description: "",
    role: "teach",
    level: "beginner",
    price: 0,
  });
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Animation states
  const [animateModal, setAnimateModal] = useState(false);
  const [animateSuccess, setAnimateSuccess] = useState(false);
  const router = useRouter(); // Initialize router

  // Fetch categories when modal opens
  useEffect(() => {
    if (isModalOpen && categories.length === 0) {
      const fetchCategories = async () => {
        try {
          setIsLoading(true);
          // Simulate API call with a slight delay for animation
          await new Promise((resolve) => setTimeout(resolve, 800));
          const response = await fetch(`api/categories`);
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error("Failed to fetch categories:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchCategories();
    }
  }, [isModalOpen]);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Close modal if clicked outside
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }

      // Close category dropdown if clicked outside
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Trigger modal animation
      setTimeout(() => setAnimateModal(true), 10);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Modify the price handling in handleInputChange:
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Special handling for price field
    if (name === "price") {
      // Convert to number only if we have a valid value
      const numValue = value ? parseInt(value) : 0;
      setFormData((prev) => ({
        ...prev,
        [name]: isNaN(numValue) ? 0 : numValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setFormData((prev) => ({ ...prev, categoryId }));
    setIsCategoryOpen(false);
  };

  const handleRoleSelect = (role: "teach" | "learn") => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleLevelSelect = (
    level: "beginner" | "intermediate" | "advanced"
  ) => {
    setFormData((prev) => ({ ...prev, level }));
  };

  const handleNextStep = () => {
    if (!formData.name || !formData.categoryId) {
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // 1. Create the skill in the skills table
      const skillResponse = await fetch(`api/skills`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          categoryId: parseInt(formData.categoryId),
          description: formData.description,
        }),
      });

      if (!skillResponse.ok) {
        const errorText = await skillResponse.text();
        throw new Error(
          `Failed to create skill: ${skillResponse.status} - ${errorText}`
        );
      }

      const newSkill = await skillResponse.json();
      const skillId = newSkill.id;

      // 2. Create the user_skill relationship
      const userSkillResponse = await fetch(`api/user_skills`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skill_id: skillId,
          role: formData.role,
          level: formData.level,
          price: formData.price || 0, // Ensure we send 0 if price is missing
        }),
      });

      if (!userSkillResponse.ok) {
        const errorText = await userSkillResponse.text();
        throw new Error(
          `Failed to create user skill: ${userSkillResponse.status} - ${errorText}`
        );
      }

      // Success handling
      setSuccess(true);
      setAnimateSuccess(true);

      // Reset form after success animation
      setTimeout(() => {
        setFormData({
          name: "",
          categoryId: "",
          description: "",
          role: "teach",
          level: "beginner",
          price: 0, // Reset to 0 instead of NaN
        });
        setIsModalOpen(false);
        setSuccess(false);
        setAnimateSuccess(false);
        setStep(1);
      }, 2000);
      router.refresh();
    } catch (error) {
      console.error("Error adding skill:", error);
      // Add user-facing error message here if needed
    } finally {
      setIsSubmitting(false);
      
    }
  };

  const handleClose = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({
        name: "",
        categoryId: "",
        description: "",
        role: "teach",
        level: "beginner",
        price: 0,
      });
      setSuccess(false);
      setStep(1);
    }, 300);
  };

  // Get selected category details
  const selectedCategory = categories.find(
    (cat) => cat.id === parseInt(formData.categoryId)
  );

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative group bg-gradient-to-r from-[#F97316] to-[#F59E0B] hover:from-[#EA580C] hover:to-[#F97316] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-300/40 flex items-center justify-center gap-2 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add New Skill
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>

      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            animateModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            ref={modalRef}
            className={`bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 ${
              animateModal
                ? "translate-y-0 scale-100"
                : "translate-y-10 scale-95"
            } shadow-2xl border border-orange-100`}
          >
            {/* Success Animation */}
            {success && (
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#34D399]/90 to-[#10B981]/90 rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                  animateSuccess ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-white animate-ping opacity-20"></div>
                </div>
                <h3 className="text-2xl font-bold text-white font-poppins mb-2">
                  Skill Added!
                </h3>
                <p className="text-green-50 font-nunito text-center">
                  Your new skill has been successfully added to the platform.
                </p>
              </div>
            )}

            {/* Step Indicator */}
            <div className="flex justify-between items-center mb-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-100 -z-10">
                <div
                  className={`h-full bg-[#F97316] transition-all duration-500 ease-in-out ${
                    step === 1 ? "w-1/2" : "w-full"
                  }`}
                ></div>
              </div>

              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F97316] text-white font-bold">
                1
              </div>
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step === 2 ? "bg-[#F97316]" : "bg-orange-100"
                } text-white font-bold`}
              >
                2
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1F2937] font-poppins flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#F97316]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                {step === 1 ? "Add New Skill" : "Skill Details"}
              </h2>
              <button
                onClick={handleClose}
                className="text-[#1F2937] hover:text-[#F97316] transition-colors duration-200 p-1 rounded-full hover:bg-orange-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {" "}
              {/* Replace form with div */}
              {step === 1 ? (
                <>
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1F2937] mb-2 font-nunito"
                    >
                      Skill Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-white text-[#1F2937] font-nunito transition-all duration-300 shadow-sm hover:shadow-md"
                        placeholder="Enter skill name"
                        required
                        disabled={isSubmitting}
                      />
                      <div className="absolute right-3 top-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#F97316]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Premium Category Selector */}
                  <div className="relative" ref={categoryRef}>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2 font-nunito">
                      Category
                    </label>

                    {/* Selected category display */}
                    <div
                      onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                      className="w-full px-4 py-3 border border-orange-200 rounded-xl bg-white text-[#1F2937] font-nunito transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-between"
                    >
                      {formData.categoryId ? (
                        <div className="flex items-center gap-3">
                          {selectedCategory?.icon ? (
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{
                                backgroundColor:
                                  selectedCategory.color || "#F97316" + "20",
                              }}
                            >
                              <img
                                src={`/icons/${selectedCategory.icon}`}
                                alt={selectedCategory.name}
                                className="w-6 h-6 object-contain"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#F97316]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                              </svg>
                            </div>
                          )}
                          <span className="font-medium">
                            {selectedCategory?.name}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400">Select a category</span>
                      )}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 text-[#F97316] transition-transform duration-300 ${
                          isCategoryOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Category dropdown */}
                    {isCategoryOpen && (
                      <div className="absolute z-10 mt-2 w-full bg-white border border-orange-200 rounded-xl shadow-xl max-h-80 overflow-y-auto">
                        <div className="p-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {categories.map((category) => (
                            <div
                              key={category.id}
                              onClick={() =>
                                handleCategorySelect(category.id.toString())
                              }
                              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-2 border ${
                                formData.categoryId === category.id.toString()
                                  ? "border-[#F97316] bg-orange-50 shadow-inner"
                                  : "border-transparent hover:border-orange-200 hover:bg-orange-50"
                              }`}
                            >
                              <div
                                className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
                                style={{
                                  backgroundColor:
                                    category.color || "#F97316" + "20",
                                }}
                              >
                                <img
                                  src={`/icons/${category.icon}`}
                                  alt={category.name}
                                  className="w-6 h-6 object-contain"
                                />
                              </div>
                              <span className="text-sm font-medium text-center">
                                {category.name}
                              </span>
                            </div>
                          ))}
                        </div>

                        {isLoading && (
                          <div className="py-4 flex flex-col items-center justify-center text-[#F59E0B]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 animate-spin mb-2"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span className="text-sm font-nunito">
                              Loading categories...
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-[#1F2937] mb-2 font-nunito"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-white text-[#1F2937] font-nunito transition-all duration-300 shadow-sm hover:shadow-md"
                        placeholder="Describe the skill..."
                        disabled={isSubmitting}
                      ></textarea>
                      <div className="absolute right-3 top-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#F97316]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Step 2: User Skill Details */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1F2937] mb-2 font-nunito">
                        Your Role
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => handleRoleSelect("teach")}
                          className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                            formData.role === "teach"
                              ? "border-[#F97316] bg-orange-50 shadow-inner"
                              : "border-orange-200 hover:border-[#F97316] hover:bg-orange-50"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 mb-2 ${
                              formData.role === "teach"
                                ? "text-[#F97316]"
                                : "text-gray-400"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                            />
                          </svg>
                          <span className="font-medium">Teach</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRoleSelect("learn")}
                          className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                            formData.role === "learn"
                              ? "border-[#34D399] bg-green-50 shadow-inner"
                              : "border-orange-200 hover:border-[#34D399] hover:bg-green-50"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 mb-2 ${
                              formData.role === "learn"
                                ? "text-[#34D399]"
                                : "text-gray-400"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <span className="font-medium">Learn</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1F2937] mb-2 font-nunito">
                        Skill Level
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => handleLevelSelect("beginner")}
                          className={`py-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                            formData.level === "beginner"
                              ? "border-[#3B82F6] bg-blue-50 shadow-inner"
                              : "border-orange-200 hover:border-[#3B82F6] hover:bg-blue-50"
                          }`}
                        >
                          <span
                            className={`text-xs font-semibold ${
                              formData.level === "beginner"
                                ? "text-[#3B82F6]"
                                : "text-gray-500"
                            }`}
                          >
                            Beginner
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLevelSelect("intermediate")}
                          className={`py-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                            formData.level === "intermediate"
                              ? "border-[#F59E0B] bg-amber-50 shadow-inner"
                              : "border-orange-200 hover:border-[#F59E0B] hover:bg-amber-50"
                          }`}
                        >
                          <span
                            className={`text-xs font-semibold ${
                              formData.level === "intermediate"
                                ? "text-[#F59E0B]"
                                : "text-gray-500"
                            }`}
                          >
                            Intermediate
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleLevelSelect("advanced")}
                          className={`py-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                            formData.level === "advanced"
                              ? "border-[#EF4444] bg-red-50 shadow-inner"
                              : "border-orange-200 hover:border-[#EF4444] hover:bg-red-50"
                          }`}
                        >
                          <span
                            className={`text-xs font-semibold ${
                              formData.level === "advanced"
                                ? "text-[#EF4444]"
                                : "text-gray-500"
                            }`}
                          >
                            Advanced
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-[#1F2937] mb-2 font-nunito"
                      >
                        Price per Hour (USD)
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-3.5 text-gray-400">
                          $
                        </div>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          value={formData.price || 0} // Ensure we never show NaN
                          onChange={handleInputChange}
                          className="w-full pl-8 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent bg-white text-[#1F2937] font-nunito transition-all duration-300 shadow-sm hover:shadow-md"
                          placeholder="0"
                          min="0"
                          max="1000"
                          required
                          disabled={isSubmitting}
                        />
                        <div className="absolute right-3 top-3.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#F97316]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="flex justify-between gap-4 pt-4">
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-3 border border-orange-200 rounded-xl text-[#1F2937] hover:bg-orange-50 font-nunito font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-sm hover:shadow-md"
                    disabled={isSubmitting}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Cancel
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-3 border border-orange-200 rounded-xl text-[#1F2937] hover:bg-orange-50 font-nunito font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-sm hover:shadow-md"
                    disabled={isSubmitting}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back
                  </button>
                )}

                {step === 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-5 py-3 bg-gradient-to-r from-[#F97316] to-[#F59E0B] hover:from-[#EA580C] hover:to-[#F97316] text-white rounded-xl font-nunito font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70"
                    disabled={!formData.name || !formData.categoryId}
                  >
                    Next Step
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button" // Changed from "submit" to "button"
                    onClick={handleSubmit} // Added onClick handler
                    className="px-5 py-3 bg-gradient-to-r from-[#F97316] to-[#F59E0B] hover:from-[#EA580C] hover:to-[#F97316] text-white rounded-xl font-nunito font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70"
                    disabled={isSubmitting || isLoading}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Adding...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Complete Skill
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewSkillButton;
