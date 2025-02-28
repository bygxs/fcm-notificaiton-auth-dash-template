/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Configures Tailwind's dark mode to be class-based.
  content: [ // Specifies file paths to scan for Tailwind classes.
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Scans files in the 'src/app' directory.
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans files in the 'src/components' directory.
  ],
  theme: { // Customizes the default Tailwind theme.
    extend: { // Extends the default theme.
      colors: { // Defines custom color palettes.
        light: { // Defines a 'light' color palette.
          primary: "#f3f4f6", // Light background color.
          secondary: "#e5e7eb", // Slightly darker light background color.
          text: "#111827", // Dark text color for light mode.
        },
        dark: { // Defines a 'dark' color palette.
          primary: "#1f2937", // Dark background color.
          secondary: "#374151", // Slightly lighter dark background color.
          text: "#f9fafb", // Light text color for dark mode.
        },
      },
    },
  },
  plugins: [], // Registers Tailwind plugins (none in this example).
};