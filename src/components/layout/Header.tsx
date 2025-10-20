import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X as CloseIcon, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Apply dark mode globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Updated navigation function for better download handling
  const handleNavigation = (id: string) => {
    // Always navigate to home first if not there
    if (location.pathname !== '/') {
      window.location.href = `/${id ? '#' + id : ''}`;
      return;
    }

    // If we're already on home page
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Update URL without page reload
      window.history.pushState({}, '', `/#${id}`);
    }
    setIsMenuOpen(false);
  };

  // Single source of navigation links
  const navigationLinks = [
    { label: "Home", id: "home" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Poses", id: "poses" },
    { label: "Benefits", id: "benefits" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Download", id: "download" }, // Changed to id from path
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-purple-600 font-bold text-xl dark:text-purple-400 hover:opacity-80 transition-opacity">
              MissFit
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigationLinks.map((link) =>
              link.path ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id!)}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              )
            )}

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 flex items-center px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 animate-slide-down">
          <div className="pt-2 pb-4 space-y-2">
            {navigationLinks.map((link) =>
              link.path ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block w-full text-left pl-4 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id!)}
                  className="block w-full text-left pl-4 pr-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {link.label}
                </button>
              )
            )}

            {/* Theme toggle */}
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
