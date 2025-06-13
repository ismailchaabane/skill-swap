"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import { FaUserCircle, FaCog, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

type Props = {
  user?: {
    name?: string;
    image?: string;
    email?: string;
  };
};

export default function AvatarMenu({ user }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#F97316]/30 hover:border-[#F97316] transition-all duration-300"
      >
        {user?.image ? (
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#F97316]">
            <img 
              src={user.image} 
              alt={user.name || "User"} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] to-[#F59E0B] flex items-center justify-center text-white">
            <span className="font-bold">{user?.name?.charAt(0) || "U"}</span>
          </div>
        )}
        <span className="text-sm font-medium text-[#1F2937] hidden md:block">
          {user?.name?.split(" ")[0] || "Account"}
        </span>
        <div className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F2937]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white backdrop-blur-xl bg-opacity-90 border border-[#E5E7EB] rounded-xl shadow-lg overflow-hidden z-50 animate-fade-in">
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              {user?.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F97316]">
                  <img 
                    src={user.image} 
                    alt={user.name || "User"} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#F59E0B] flex items-center justify-center text-white">
                  <span className="font-bold text-xl">{user?.name?.charAt(0) || "U"}</span>
                </div>
              )}
              <div>
                <h3 className="font-bold text-[#1F2937]">{user?.name || "User"}</h3>
                <p className="text-sm text-[#6B7280] truncate max-w-[150px]">{user?.email || ""}</p>
              </div>
            </div>
          </div>
          
          <div className="py-2">
            <Link
              href="/profile"
              className="flex items-center px-4 py-3 hover:bg-[#FFF7ED] transition-colors duration-300 group"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center mr-3 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                <IoPerson className="text-lg" />
              </div>
              <span className="font-medium text-[#1F2937]">Profile</span>
            </Link>
            
            <Link
              href="/settings"
              className="flex items-center px-4 py-3 hover:bg-[#FFF7ED] transition-colors duration-300 group"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center mr-3 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                <FaCog className="text-lg" />
              </div>
              <span className="font-medium text-[#1F2937]">Settings</span>
            </Link>
            
            <Link
              href="/messages"
              className="flex items-center px-4 py-3 hover:bg-[#FFF7ED] transition-colors duration-300 group"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] flex items-center justify-center mr-3 group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                <FaEnvelope className="text-lg" />
              </div>
              <span className="font-medium text-[#1F2937]">Messages</span>
            </Link>
          </div>
          
          <div className="p-3 border-t border-[#E5E7EB]">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FFF7ED] hover:bg-[#FFEDD5] rounded-lg font-medium text-[#1F2937] transition-colors duration-300 group"
            >
              <FaSignOutAlt className="text-[#F97316] group-hover:text-[#EF4444] transition-colors" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}