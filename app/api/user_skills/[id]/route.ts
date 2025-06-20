// app/api/skills/[id]/route.ts
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  req: NextRequest,

  { params }: { params: { id: string } }
) 
{
  try {
    const awaitedParams = await params;
    const skillId = parseInt(awaitedParams.id);
    
    // First delete related user_skills
    await db.user_skills.deleteMany({
      where: { skill_id: skillId }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) { 
    console.error('Error deleting skill:', error);
    return NextResponse.json(
      { error: 'Failed to delete skill' },
      { status: 500 }
    );
  }
}