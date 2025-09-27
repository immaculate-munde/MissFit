import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, X as CloseIcon, User, Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Apply dark mode globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-purple-600 font-bold text-xl dark:text-purple-400">
                MissFit
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-purple-600 font-medium dark:text-purple-400"
                  : "text-gray-500 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`${
                isActive("/dashboard")
                  ? "text-purple-600 font-medium dark:text-purple-400"
                  : "text-gray-500 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              } transition-colors duration-200`}
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className={`${
                isActive("/profile")
                  ? "text-purple-600 font-medium dark:text-purple-400"
                  : "text-gray-500 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              } transition-colors duration-200`}
            >
              Profile
            </Link>

            {/* Sign In */}
            <Link
              to="/signin"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <User size={16} className="mr-2" />
              Sign In
            </Link>

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 flex items-center px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden dark:bg-gray-900 animate-slide-down">
          <div className="pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "bg-purple-50 border-purple-500 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className={`${
                isActive("/dashboard")
                  ? "bg-purple-50 border-purple-500 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>

            <Link
              to="/profile"
              className={`${
                isActive("/profile")
                  ? "bg-purple-50 border-purple-500 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>

            {/* Sign In Button */}
            <Link to="/signin" onClick={() => setIsMenuOpen(false)} className="block mt-3">
              <div className="flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <User size={16} className="mr-2" />
                Sign In
              </div>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setIsMenuOpen(false);
              }}
              className="mt-3 w-full flex items-center justify-center px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 mr-2" />
              ) : (
                <Moon className="h-5 w-5 mr-2" />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
