import {NextResponse} from 'next/server';
import {db} from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {name, email, password} = body;
    const existingEmail = await db.users.findUnique({ where: { email } });
    if (existingEmail) {
        return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.users.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    });
    return NextResponse.json({ user: newUser, message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}