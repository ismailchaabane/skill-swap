import { db } from "@/lib/db";


export const skillCategories = await db.categories.findMany({
  select: {
    name: true,
    icon: true,
    description: true,
    _count: {
      select: { skills: true }
    }
  }
});

export const formattedCategories = skillCategories.map(cat => ({
  name: cat.name,
  description: cat.description,
  icon: cat.icon,
  count: cat._count.skills,
}));
