"use client";
import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setMessage("");

  if (formData.password !== formData.confirmPassword) {
    setMessage("Passwords do not match");
    return;
  }

  try {
    setLoading(true);
    const res = await fetch("/api/auth/signup", {  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (!res.ok) {
      // Try to parse error message from the response JSON
      const errorData = await res.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await res.json();
    setMessage("Account created! Redirecting to login...");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  } catch (err: any) {
    setMessage(err.message || "Failed to sign up");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex font-georama bg-yellow-50 flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center relative border-8 border-black shadow-[12px_12px_0_0_#000]">
        <div className="absolute inset-0 z-0 opacity-10 -rotate-12">
          <div className="absolute top-10 left-10 w-40 h-40 bg-red-500 clip-triangle" />
          <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600 clip-parallelogram" />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 uppercase tracking-[0.25em] text-black border-b-4 border-black pb-2">
            Sign Up
          </h1>
          <p className="text-gray-800 mb-10 text-lg font-semibold tracking-wide">
            Create your account and start swapping skills!
          </p>

          <form className="space-y-6 mb-6" noValidate onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border-4 border-black bg-yellow-100 text-black placeholder-gray-600 font-semibold shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-4 focus:ring-yellow-300"
              style={{ borderRadius: 0 }}
            />

            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-4 border-black bg-yellow-100 text-black placeholder-gray-600 font-semibold shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-4 focus:ring-yellow-300"
              style={{ borderRadius: 0 }}
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border-4 border-black bg-yellow-100 text-black placeholder-gray-600 font-semibold shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-4 focus:ring-yellow-300"
              style={{ borderRadius: 0 }}
            />

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 border-4 border-black bg-yellow-100 text-black placeholder-gray-600 font-semibold shadow-[4px_4px_0_0_#000] focus:outline-none focus:ring-4 focus:ring-yellow-300"
              style={{ borderRadius: 0 }}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-yellow-200 py-4 uppercase font-extrabold hover:bg-gray-900 transition tracking-widest shadow-[4px_4px_0_0_#000] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
              style={{ borderRadius: 0 }}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {message && (
            <div className="mb-4 text-sm text-red-600 font-bold">{message}</div>
          )}

          <div className="flex justify-between mb-10 text-sm font-semibold tracking-wide">
            <a
              href="/login"
              className="text-black hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Already have an account? Log in
            </a>
          </div>

          <div className="flex items-center mb-8">
            <div className="flex-grow h-1 bg-gray-500"></div>
            <span className="mx-4 text-gray-700 uppercase text-sm font-bold tracking-wider">
              Or
            </span>
            <div className="flex-grow h-1 bg-gray-500"></div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center gap-4 border-4 border-black py-3 bg-white hover:bg-gray-100 text-black transition font-bold tracking-wide shadow-[4px_4px_0_0_#000] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black"
              style={{ borderRadius: 0 }}
              aria-label="Sign up with Google"
              type="button"
            >
              <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
              Sign up with Google
            </button>
            <button
              className="w-full flex items-center justify-center gap-4 border-4 border-black py-3 bg-[#1877F2] text-white hover:bg-[#155DBD] transition font-bold tracking-wide shadow-[4px_4px_0_0_#000] transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black"
              style={{ borderRadius: 0 }}
              aria-label="Sign up with Facebook"
              type="button"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100">
        <img
          src="/images/signup_photo.png"
          alt="Cubism artwork"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
