import SocialLoginButtons from "@/app/components/SocialLoginButtons";
import LoginForm from "@/app/components/loginform";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ImageSection from "../components/LoginComponents/ImageSection";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/home");

  return (
    <div className="min-h-screen flex font-nunito text-gray-800 bg-gradient-to-br from-[#FFF7ED] to-[#FFFBEB]">
      
      {/* Left Side: Visual & Message */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        <ImageSection />
        <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-sm">
          <h2 className="text-2xl font-extrabold text-orange-500 mb-2">Why Join SkillSwap?</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Discover & share skills</li>
            <li>Connect with like-minded learners</li>
            <li>Track your growth journey</li>
            <li>Built with passion by the community</li>
          </ul>
        </div>
      </div>

      {/* Right Side: Login Section */}
      <div className="flex w-full md:w-1/2 bg-white px-10 py-16 md:px-20 justify-center items-center shadow-xl relative">
        <div className="w-full max-w-md flex flex-col space-y-6">
          
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-orange-500 mb-2">Welcome Back 👋</h1>
            <p className="text-gray-600 font-medium text-sm">
              Log in to continue growing with our amazing community.
            </p>
          </div>

          {/* Form */}
          <LoginForm />

          {/* Links */}
          <div className="flex justify-between text-sm font-semibold text-orange-500">
            <a href="/forgot-password" className="hover:underline">Forgot password?</a>
            <a href="/signup" className="hover:underline">Create account</a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-sm font-bold uppercase text-gray-400">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {/* Social Logins */}
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
}
