import type { Config } from "tailwindcss";

export default {
  safelist: [
    "translate-x-0",
    "translate-x-full",
    "opacity-100",
    "opacity-0",
    "scale-100",
    "scale-20",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
