// src/components/theme-toggle.tsx
"use client";

import { useThemeStore } from "./../stores/theme-store";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}