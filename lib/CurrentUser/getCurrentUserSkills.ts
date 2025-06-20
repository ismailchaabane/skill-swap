import getSession from "@/lib/CurrentUser/getSession";
import { getUserSkillsByEmail} from "@/lib/getUserSkills";



export default async function getSessionUserSkills() {
    const session = await getSession();
    if (!session || !session.email) {
        return [];
    }
    

    const userskills = await getUserSkillsByEmail(session.email);
    return userskills;
}