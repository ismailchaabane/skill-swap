import { db } from "./db";



export async function getUserSkills(userId: number) {
  const user = await db.users.findUnique({
    where: { id: userId },
    select: {
      user_skills: {
        where: {
          role: 'teach',
        },
        select: {
          skills: true,
        },
      },
    },
  });
  return user?.user_skills.map(us => us.skills) || [];
}

export async function getUserSkillsByEmail(email: string) {
  const user = await db.users.findUnique({
    where: { email: email },
    select: {
      user_skills: {
        where: {
          role: 'teach',
        },
        select: {
          level: true,
          skills: true,
        },
      },
    },
  });
  return user?.user_skills.map(us => ({
    ...us.skills,
    level: us.level || 0,
  })) || [];
}