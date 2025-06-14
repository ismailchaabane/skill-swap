import { db } from "@/lib/db";
import { image } from "framer-motion/client";

export const getSkillCategories = async () => {
  try {
    const categories = await db.categories.findMany({
      include: {
        skills: true
      }
    });

    return categories.map(category => ({
      icon: category.icon || "📚",  // Fallback icon
      name: category.name,
      count: category.skills.length,
      id: category.id,
      image: category.image || "default.png" // Fallback image
    }));
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};