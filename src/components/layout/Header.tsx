import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, X as CloseIcon, User } from 'lucide-react';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-purple-600 font-bold text-xl">MissFit</span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${isActive('/') ? 'text-purple-600 font-medium' : 'text-gray-500 hover:text-purple-600'} transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/dashboard" className={`${isActive('/dashboard') ? 'text-purple-600 font-medium' : 'text-gray-500 hover:text-purple-600'} transition-colors duration-200`}>
              Dashboard
            </Link>
            <Link to="/profile" className={`${isActive('/profile') ? 'text-purple-600 font-medium' : 'text-gray-500 hover:text-purple-600'} transition-colors duration-200`}>
              Profile
            </Link>
            <Link to="/dashboard" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <User size={16} className="mr-2" />
              Sign In
            </Link>
          </nav>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={`${isActive('/') ? 'bg-purple-50 border-purple-500 text-purple-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/dashboard" className={`${isActive('/dashboard') ? 'bg-purple-50 border-purple-500 text-purple-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`} onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/profile" className={`${isActive('/profile') ? 'bg-purple-50 border-purple-500 text-purple-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`} onClick={() => setIsMenuOpen(false)}>
              Profile
            </Link>
            <Link to="/dashboard" className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 mx-2" onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>}
    </header>;
};
export default Header;