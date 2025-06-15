import { db } from "./db";


export const getSessionsByTeacher = async (teacherId: number) => {
    try {
        const sessions= await db.sessions.findMany({
    where: {
      teacher_id: teacherId
    },
    include: {
        reviews: true
        }
    });
         return sessions.map(session => ({
            id: session.id,
            date: session.session_datetime,
            learner_id: session.learner_id,
            status  : session.status,
            reviews: session.reviews
        }));
    } catch (error) {
        console.error("Error fetching sessions by teacher:", error);
        return [];
    }
}