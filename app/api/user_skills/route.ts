import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import getCurrentUserIdByEmail from '@/lib/CurrentUser/getCurrentUserIdByEmail';

export async function POST(req: NextRequest) {
  try {
    const userId = await getCurrentUserIdByEmail();
    
    const { skill_id, role, level, price } = await req.json();

    const userSkill = await db.user_skills.create({
      data: {
        user_id: userId,
        skill_id,
        role,
        level,
        price
      }
    });

    return NextResponse.json(userSkill);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user skill' },
      { status: 500 }
    );
  }
}