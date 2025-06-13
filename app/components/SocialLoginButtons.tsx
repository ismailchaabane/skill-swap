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
        className="w-full flex items-center justify-center gap-4 border-4 border-[#F97316] py-3 bg-[#FFF7ED] text-[#1F2937] hover:bg-[#F97316] hover:text-white transition font-poppins font-bold tracking-wide shadow-[4px_4px_0_0_#F59E0B] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F59E0B] rounded-3x1"
        style={{ borderRadius: 0, fontSize: '1rem' }}
        aria-label="Log in with GitHub"
      >
        <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
        Log in with GitHub
      </button>
    </form>
  );
}
