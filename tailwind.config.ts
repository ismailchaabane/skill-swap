import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        background: "#FFF7ED",
        text: "#1F2937",
        primary: {
          DEFAULT: "#F97316",
          hover: "#ea580c",
        },
        secondary: {
          DEFAULT: "#34D399",
          hover: "#10b981",
        },
        accent: "#F59E0B",
        black: {
          100: "#333333",
          200: "#141413",
          300: "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          100: "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        h1: "2.25rem", // 36px
        h2: "1.875rem", // 30px
        h3: "1.5rem",   // 24px
        body: "1rem",   // 16px
        small: "0.875rem", // 14px
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(249, 115, 22)", // primary color
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
         shimmer: {
            '0%': { backgroundPosition: '200% 0%' },
            '100%': { backgroundPosition: '-200% 0%' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
