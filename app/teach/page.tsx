import getSessionUserSkills from "@/lib/CurrentUser/getCurrentUserSkills";
import { TeachPageContent } from "../components/TeachComponents/TeachPageContent";
import getCurrentUserSessions from "@/lib/CurrentUser/getCurrentUserSessions";

// app/pages/teach.jsx
export default async function TeachPage() {
  const skills = await getSessionUserSkills();
  const sessions = await getCurrentUserSessions();

  return (
    <TeachPageContent user_skills={skills} user_sessions={sessions} />
  );
}