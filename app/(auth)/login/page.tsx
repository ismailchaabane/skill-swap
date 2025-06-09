import SocialLoginButtons from "@/app/components/SocialLoginButtons";
import LoginForm from "@/app/components/loginform";
import { auth } from "@/lib/auth"; // Adjust the import path as necessary
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session= await auth();

  if (session) {
    // Redirect if the user is authenticated
    redirect("/home");
  }

  return (
    <div className="min-h-screen flex font-georama bg-yellow-50">
      <div className="hidden md:block md:w-1/2 bg-gray-100">
        <img
          src="/images/login_photo.png"
          alt="Cubism artwork"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center relative border-8 border-black shadow-[12px_12px_0_0_#000]">
        <div className="absolute inset-0 z-0 opacity-10 -rotate-12">
          <div className="absolute top-10 left-10 w-40 h-40 bg-red-500 clip-triangle" />
          <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600 clip-parallelogram" />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 uppercase tracking-[0.25em] text-black border-b-4 border-black pb-2">
            Login
          </h1>
          <p className="text-gray-800 mb-10 text-lg font-semibold tracking-wide">
            Welcome back! Please log in to your account.
          </p>

          <LoginForm />

          <div className="flex justify-between mb-10 text-sm font-semibold tracking-wide">
            <a href="/forgot-password" className="text-black hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="flex items-center mb-8">
            <div className="flex-grow h-1 bg-gray-500"></div>
            <span className="mx-4 text-gray-700 uppercase text-sm font-bold tracking-wider">
              Or
            </span>
            <div className="flex-grow h-1 bg-gray-500"></div>
          </div>

          <SocialLoginButtons />

          <div className="flex items-center my-8">
            <div className="flex-grow h-1 bg-gray-500"></div>
            <span className="mx-4 text-gray-700 uppercase text-sm font-bold tracking-wider">
              Or
            </span>
            <div className="flex-grow h-1 bg-gray-500"></div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-800 text-base font-semibold tracking-wide">
              Don’t have an account?
            </p>
            <a href="/signup">
              <button
                className="w-full bg-black text-yellow-200 py-4 uppercase font-extrabold hover:bg-gray-900 transition tracking-widest shadow-[4px_4px_0_0_#000]"
                style={{ borderRadius: 0 }}
              >
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
