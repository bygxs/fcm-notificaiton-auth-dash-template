/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#f3f4f6",
          secondary: "#e5e7eb",
          text: "#111827",
        },
        dark: {
          primary: "#1f2937",
          secondary: "#374151",
          text: "#f9fafb",
        },
      },
    },
  },
  plugins: [],
};