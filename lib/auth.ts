// auth.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { db } from "./db";
import { compare } from "bcrypt";

export const {handlers, auth, signIn, signOut} = NextAuth({
  pages: {
    signIn: "/login", // Custom sign-in page
  },
  
  session: {
    strategy: "jwt", // Use JWT for session management
  },

  
  providers: [
    CredentialsProvider({
    name: "Credentials",
    
    credentials: {
      email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
      password: { label: "Password", type: "password" ,placeholder: "********"}
    },
  async authorize(credentials) {
    const email = credentials?.email as string | undefined;
    const password = credentials?.password as string | undefined;
    if (!email || !password) {
      return null;
    }
    const user = await db.users.findUnique({
      where: { email: email },
    });
    if (!user) {
      return null; 
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return null; 
    }
    return {
      id: String(user.id),
      name: user.name,
      email: user.email,
    };
  }
  }),
  GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // redirect to homepage after sign in
      return `${baseUrl}/home`;
    },
  },
});
