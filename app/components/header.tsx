import Link from "next/link";
import { auth } from "@/lib/auth";
import AvatarMenu from "./avatarmenu";

export default async function Header() {
  const session = await auth();

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Find a Skill", href: "/categories" },
    { name: "My Sessions", href: "#" },
    { name: "Offer a Skill", href: "#" },
    { name: "About", href: "/about" },
  ];

  const user = session?.user;

  return (
<header className="bg-[#FFF7ED] px-6 py-4 rounded-full  border-2 border-[#F97316] font-poppins fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl ">
  <div className="flex justify-between items-center gap-6">
    <Link
      href="/home"
      className="text-[1.5rem] font-extrabold tracking-wider uppercase text-[#1F2937]"
    >
      Skill<span className="text-[#F97316]">Swap</span>
    </Link>

    <nav className="flex gap-6 items-center font-nunito text-[0.875rem]">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="relative group text-[#1F2937] font-semibold transition duration-300"
        >
          {link.name}
          <span
            className="absolute left-1/2 -bottom-1 w-0 h-[2px] rounded origin-center group-hover:w-full group-hover:left-0 transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #F97316, #34D399, #F59E0B)",
            }}
          ></span>
        </Link>
      ))}

      {session && session.user ? (
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
          className="ml-4 bg-[#1F2937] text-[#FFF7ED] px-4 py-1.5 font-bold tracking-wide rounded-lg shadow-[3px_3px_0_0_#000] hover:bg-[#111827] transition"
        >
          Login
        </Link>
      )}
    </nav>
  </div>
</header>

  );
}
