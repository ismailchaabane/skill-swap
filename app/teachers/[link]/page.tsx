import { db } from "@/lib/db";
import ProfileView from "@/app/components/Teachers/ProfileView";
import getUserSkills from "@/lib/getUserSkills";
import { getSessionsByTeacher } from "@/lib/getSessionsByTeacher";
import { getUserReviewsByTeacherId } from "@/lib/getUserReviews";

export default async function ProfilePage(props: { params: { link: string } }) {
  const { params } = props;
  const { link } = await  params;

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

  const user_sessions = await getSessionsByTeacher(teacher?.id || 0);

  const user_reviews = await getUserReviewsByTeacherId(teacher?.id || 0);



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

  // Ensure user_sessions status is always a string
  const mappedSessions = Array.isArray(user_sessions)
    ? user_sessions.map((session: any) => ({
        ...session,
        status: session.status ?? "",
      }))
    : [];

  // Flatten user_reviews if it's an array of arrays and ensure rating is a number
  const flattenedReviews = Array.isArray(user_reviews)
    ? user_reviews.flat().map((review: any) => ({
        ...review,
        rating: review.rating === null ? 0 : review.rating,
      }))
    : [];

  return (
    <ProfileView
      teacher={teacher}
      user_skills={mappedSkills}
      user_sessions={mappedSessions}
      user_reviews={flattenedReviews}
    />
  );
}