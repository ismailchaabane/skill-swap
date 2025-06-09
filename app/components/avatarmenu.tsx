"use client";

import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "next-auth/react"; 

type Props = {
  user?: {
    name?: string;
    image?: string;
    email?: string;
  };
};

export default function AvatarMenu({ user }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative ml-4">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-black text-3xl hover:text-blue-600 transition"
      >
        <FaUserCircle />
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-yellow-100 border-4 border-black shadow-[6px_6px_0_0_#000] text-black rounded-md overflow-hidden animate-slide-in z-50">
          <div className="px-4 py-3 border-b border-black font-semibold">
            {user?.name || "User"}
          </div>
          <Link
            href="/profile"
            className="block px-4 py-3 hover:bg-yellow-200 font-medium border-b border-black"
          >
            Profile
          </Link>
          <Link
            href="/settings"
            className="block px-4 py-3 hover:bg-yellow-200 font-medium border-b border-black"
          >
            Settings
          </Link>
          <Link
            href="/messages"
            className="block px-4 py-3 hover:bg-yellow-200 font-medium border-b border-black"
          >
            Messages
          </Link>
          <button
            onClick={() => signOut()}
            className="block w-full text-left px-4 py-3 hover:bg-red-100 text-red-700 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
