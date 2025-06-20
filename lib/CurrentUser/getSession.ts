import { auth } from "../auth";

export default async function getSession() {
    const session = await auth();

    if (!session || !session.user) {
        return null;
    }
    return {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
    };
}
