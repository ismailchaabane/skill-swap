"use client";
import React from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    await signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#FFF7ED] text-[#1F2937] p-8 rounded-2xl shadow-[6px_6px_0_0_#000] border-2 border-[#F97316] font-nunito w-full max-w-md mx-auto"
      noValidate
    >
      <h2 className="text-[1.875rem] font-poppins font-extrabold text-center mb-2 tracking-tight">
        Welcome Back
      </h2>
      <p className="text-center text-[1rem] text-[#374151] mb-6">
        Log in to continue skill swapping.
      </p>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full p-4 border-2 border-[#F97316] bg-[#FFFBEB] text-[#1F2937] placeholder-[#6B7280] font-semibold shadow-[3px_3px_0_0_#000] rounded-2xl"
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full p-4 border-2 border-[#F97316] bg-[#FFFBEB] text-[#1F2937] placeholder-[#6B7280] font-semibold shadow-[3px_3px_0_0_#000] rounded-2xl"
      />
      <button
        type="submit"
        className="w-full bg-[#F97316] text-white py-4 font-extrabold text-[1rem] tracking-wider rounded-4xl shadow-[3px_3px_0_0_#000] hover:bg-[#ea6a10] transition"
      >
        🔐 Log In
      </button>
      
    </form>
  );
};

export default LoginForm;
