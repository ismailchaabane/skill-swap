import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, categoryId, description } = await req.json();
  
  try {
    const skill = await db.skills.create({
      data: {
        name,
        description,
        category_id: categoryId,
      },
    });
    return NextResponse.json(skill);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create skill' },
      { status: 500 }
    );
  }
}