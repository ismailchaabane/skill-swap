import { db } from "@/lib/db";
import ProfileView from "@/app/components/Teachers/ProfileView";
import getUserSkills from "@/lib/getUserSkills";


export default async function ProfilePage(props: { params: { link: string } }) {
  const { params } = props;
  const { link } = await params;

  const teacher = await db.users.findUnique({
    where: { link },
    select: {
      id: true,
      name: true,
      profile_picture: true,
      bio: true,
      location: true,
      link: true,
    }
  });
  const user_skills = await getUserSkills(teacher?.id || 0);


  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Teacher not found</h1>
          <p className="mt-2">The profile you're looking for doesn't exist</p>
        </div>
      </div>
    );
  }

  const mappedSkills = Array.isArray(user_skills)
    ? user_skills.map((skill: any) =>
        typeof skill === "string"
          ? skill
          : skill.name || JSON.stringify(skill)
      )
    : [];

  return (
    <ProfileView
      teacher={teacher}
      user_skills={mappedSkills}
    />
  );
}