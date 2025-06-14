import React from "react";
import { FeaturedTeachers } from "../components/CategoriesComponents/FeaturedTeachers";
import { PopularSkills } from "../components/CategoriesComponents/PopularSkills";
import { HeroSection } from "../components/CategoriesComponents/HeroSection";
import { HowItWorks } from "../components/CategoriesComponents/HowItWorks";
import { MainContent } from "../components/CategoriesComponents/MainContent";
import { getSkillCategories } from "@/lib/getSkillCategories";

export default async function FindSkillPage() {
  const categories = await getSkillCategories();

  return (
    <div className="bg-[#FFF7ED] text-[#1F2937] min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content--------------------------------------- */}
      <div className="container mx-auto px-6 pb-20 -mt-20 relative z-10">
        <MainContent categories={categories} />

        {/* Popular Skills */}

        <PopularSkills />

        {/* Featured Teachers */}
        <FeaturedTeachers />

        {/* How It Works */}
        <HowItWorks />
      </div>
    </div>
  );
}
