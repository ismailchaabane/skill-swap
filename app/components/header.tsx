import Link from "next/link";
import { auth } from "@/lib/auth";
import AvatarMenu from "./avatarmenu";

export default async function Header() {
  const session = await auth();

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Offer a Skill", href: "#" },
    { name: "Find a Skill", href: "#" },
    { name: "How It Works", href: "#" },
    { name: "About", href: "#" },
  ];

  const user = session?.user;

  return (
    <header className="bg-yellow-50 border-b-4 border-black shadow-[6px_6px_0_0_#000] font-georama sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-lg">
        <Link
          href="/home"
          className="text-3xl font-extrabold tracking-wider uppercase text-black"
        >
          Skill<span className="text-blue-600">Swap</span>
        </Link>

        <nav className="flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black font-semibold tracking-wide hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 transition-all duration-150"
            >
              {link.name}
            </Link>
          ))}

          {/* Only pass what the client component needs */}
          {session && session?.user ? (
            <AvatarMenu
              user={{
                name: user?.name || "User",
                image: user?.image || "/default-avatar.png",
                email: user?.email || "<Email>",
              }}
            />
          ) : (
            <Link
            href="/login"
            className="ml-4 bg-black text-yellow-200 px-5 py-2 font-bold tracking-wider shadow-[3px_3px_0_0_#000] hover:bg-gray-900 transition"
          >
            Login
          </Link>
            
          )}
        </nav>
      </div>
    </header>
  );
}
