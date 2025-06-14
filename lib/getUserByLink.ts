import { db } from "./db";



export default async function getUserByLink(link: string) {
    const user =  await db.users.findUnique({
        where: { link }     
    });
    return user;
}