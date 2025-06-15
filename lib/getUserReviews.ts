import React from 'react'
import { db } from './db';
import { getSessionsByTeacher } from './getSessionsByTeacher';

export const getUserReviewsBySession = async (session_id: number) => {
  const reviews = await db.reviews.findMany({
    where: {
      session_id: session_id
    },
    include: {
      users: {
        select: {
          profile_picture: true,
          name: true
        }
      }
    }
  });

  const reviewsWithUserNames = reviews.map(review => ({
    ...review,
    user_name: review.users.name
  }));

  return reviewsWithUserNames;
}

export const getUserReviewsByTeacherId = async (teacher_id: number) => {
  const session = await getSessionsByTeacher(teacher_id);
  const user_reviews = await Promise.all(
    session.map(async (session) => {
      return await getUserReviewsBySession(session.id);
    })
  );

  return user_reviews;
}
