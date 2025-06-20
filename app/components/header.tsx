import Link from "next/link";
import { auth } from "@/lib/auth";
import AvatarMenu from "./avatarmenu";

export default async function Header() {
  const session = await auth();
  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Find Skills", href: "/categories" },
    { name: "Teach", href: "/teach" },
    { name: "Community", href: "#" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl backdrop-blur-xl bg-white/80 border border-white/20 rounded-xl shadow-lg shadow-orange-100/30 transition-all duration-300 hover:shadow-orange-100/50">
      <div className="px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/home"
            className="text-2xl font-bold tracking-tight text-gray-900 group"
          >
            Skill<span className="text-orange-500 transition-colors group-hover:text-orange-600">Swap</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2.5 rounded-lg text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {session && user ? (
              <AvatarMenu
                user={{
                  name: user?.name || "User",
                  image: user?.image || "/default-avatar.png",
                  email: user?.email || "",
                }}
              />
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100/70 transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-200 hover:shadow-md transition-all"
                >
                  Join
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}