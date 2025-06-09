// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; 
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const existingUser = await db.users.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10); 

    const user = await db.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user , { status: 201 });
  } catch (error: any) {
    console.error('Signup Error:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
