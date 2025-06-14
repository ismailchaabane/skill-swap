import 'server-only';
import { db } from './db';

export const getCategoryWithTeachers = async (categoryName: string) => {
  try {
    const category = await db.categories.findFirst({
      where: { 
        name: {
          equals: categoryName
        }
      },
      include: {
        skills: {
          include: {
            user_skills: {
              where: { role: 'teach' },
              include: {
                users: {
                  select: {
                    id: true,
                    name: true,
                    profile_picture: true,
                    bio: true,
                    location: true,
                    sessions_sessions_teacher_idTousers: {
                      include: {
                        reviews: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!category) return null;

    // Extract unique teachers and calculate ratings
    const teacherMap = new Map<number, any>();
    
    category.skills.forEach(skill => {
      skill.user_skills.forEach(userSkill => {
        const user = userSkill.users;
        if (!teacherMap.has(user.id)) {
          // Calculate average rating
          const sessions = user.sessions_sessions_teacher_idTousers;
          const reviews = sessions.flatMap(session => session.reviews);
          const ratings = reviews.map(review => review.rating).filter(Boolean) as number[];
          
          const avgRating = ratings.length > 0 
            ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
            : 0;

          teacherMap.set(user.id, {
            id: user.id,
            name: user.name,
            image: user.profile_picture,
            bio: user.bio,
            location: user.location,
            rating: parseFloat(avgRating.toFixed(1)),
            skills: [skill.name], // Initial skill
            sessionCount: sessions.length
          });
        } else {
          // Add skill to existing teacher
          const teacher = teacherMap.get(user.id);
          if (!teacher.skills.includes(skill.name)) {
            teacher.skills.push(skill.name);
          }
        }
      });
    });

    return {
      id: category.id,
      name: category.name,
      icon: category.icon,
      image: category.image || null,
      description: category.description,
      longDescription: category.description || null,
      teachers: Array.from(teacherMap.values())
    };
  } catch (error) {
    console.error("Error fetching category with teachers:", error);
    return null;
  }
};