import { db } from "../db";
import getCurrentUserEmail from "./getCurrentUserEmail";



export default async function getCurrentUserIdByEmail() {
    const email = await getCurrentUserEmail();

   
    const user = await db.users.findUnique({
        where: { email: email },
        select: { id: true }
    });
    return user?.id || 0;
}
