import { signIn } from "@/lib/auth"; // Server-side auth helper

export default function SocialLoginButtons() {
  async function loginWithProvider(provider: string) {
    'use server';
    await signIn(provider, { callbackUrl: "/home" });
  }

  return (
    <form action={loginWithProvider.bind(null, "github")}>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-4 border-4 border-black py-3 bg-[#171515] text-white hover:bg-[#0f0f0f] transition font-bold tracking-wide shadow-[4px_4px_0_0_#000] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black"
        style={{ borderRadius: 0 }}
        aria-label="Log in with GitHub"
      >
        <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
        Log in with GitHub
      </button>
    </form>
  );
}
