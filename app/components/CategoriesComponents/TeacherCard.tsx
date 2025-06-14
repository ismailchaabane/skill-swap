import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Teacher {
  id: number;
  name: string;
  image: string | null;
  bio: string | null;
  location: string | null;
  rating: number;
  skills: string[];
  sessionCount?: number;
}

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Teacher Header */}
      <div className="relative">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-24" />

        <div className="absolute -bottom-12 left-6">
          <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
            {teacher.image ? (
              <Image
                src={teacher.image}
                alt={teacher.name}
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-full h-full rounded-full flex items-center justify-center text-3xl font-bold text-orange-800">
                {teacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Teacher Body */}
      <div className="pt-14 pb-6 px-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
            {teacher.location && (
              <div className="flex items-center mt-1 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">{teacher.location}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center bg-amber-100 px-2 py-1 rounded-full">
              <div className="text-amber-800 font-bold text-sm">
                {teacher.rating.toFixed(1)}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-amber-500 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            {teacher.sessionCount !== undefined && (
              <div className="mt-1 text-xs text-gray-500">
                {teacher.sessionCount}+ sessions
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm line-clamp-3">
          {teacher.bio ||
            "Experienced professional with extensive knowledge in this field. Passionate about sharing expertise and helping others grow."}
        </p>

        <div className="mt-5">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Expertise
          </h4>
          <div className="flex flex-wrap gap-2">
            {teacher.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 text-orange-700 text-xs font-medium px-3 py-1.5 rounded-full border border-orange-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-gray-900 font-bold">$85</span>
            <span className="text-gray-500 text-sm"> / session</span>
          </div>

          <Link
            href={`/teachers/${teacher.id}`}
            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg text-sm font-medium hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-lg"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
