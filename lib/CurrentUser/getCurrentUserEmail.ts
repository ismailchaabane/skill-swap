import  getSession  from "@/lib/CurrentUser/getSession";


export default async function getCurrentUserSessions() {
    const user = await getSession();
    if (!user || !user.email) {
        return "";
    }

    return user.email;
}