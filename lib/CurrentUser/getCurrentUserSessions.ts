import { db } from "@/lib/db";
import  getCurrentUserIdByEmail  from "@/lib/CurrentUser/getCurrentUserIdByEmail"; // Adjust the import path if needed



export default async function getCurrentUserSessions() {
    const id = await getCurrentUserIdByEmail();
    const sessions = await db.sessions.findMany({
        where: { teacher_id: id },
        select: {
            id: true,
            session_datetime: true,
            learner_id: true,
            location: true,
            status: true,   
            duration: true,
            price: true,
            skills: {
                select: {
                    name: true
                }
            },
            users_sessions_learner_idTousers: {
                select: {
                    name: true,
                    profile_picture: true
                }
            }

        }
    });
    return sessions;
}