import { db } from "./db";



export default async function getUserSkills(userId: number) {
  const user = await db.users.findUnique({
    where: { id: userId },
    select: {
      user_skills: {
        select: {
          skills: true,
        },
      },
    },
  });
  return user?.user_skills.map(us => us.skills) || [];
}
