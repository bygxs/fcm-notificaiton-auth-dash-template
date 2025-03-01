// components/Header.tsx
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="sticky  text-gray-900 dark:text-gray-100 top-0 z-50 shadow-md py-2 px-4 bg-gradient-to-r from-teal-100 via-red-200 to-blue-300   dark:from-yellow-900 dark:via-green-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Branding */}
        <div className="text-xl font-bold">My App</div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
