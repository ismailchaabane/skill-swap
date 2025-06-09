"use client";
import React from "react";
import { signIn } from "next-auth/react"; // Adjust if needed

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const result = await signIn('credentials', {
      email: email,
      password: password,
       
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6 mb-6" noValidate>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-4 border-4 border-black bg-yellow-100 text-black placeholder-gray-600 font-semibold shadow-[4px_4px_0_0_#000]"
        style={{ borderRadius: 0 }}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full p-4 border-4 border-black bg-yellow-100 text-black placeholder-gray-600 font-semibold shadow-[4px_4px_0_0_#000]"
        style={{ borderRadius: 0 }}
      />
      <button
        type="submit"
        className="w-full bg-black text-yellow-200 py-4 uppercase font-extrabold hover:bg-gray-900 transition tracking-widest shadow-[4px_4px_0_0_#000]"
        style={{ borderRadius: 0 }}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
