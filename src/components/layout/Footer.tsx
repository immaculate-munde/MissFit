import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-50/30 dark:from-purple-900/20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-purple-600 font-bold text-xl hover:text-purple-500 transition">
              MissFit
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Find your perfect fit with our advanced measurement technology.
            </p>
            <div className="flex space-x-4 mt-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transform transition-transform duration-300 hover:scale-125"
                >
                  <Icon size={20} />
                  <span className="sr-only">{Icon.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              {['Features', 'How it Works', 'Pricing', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase">
              Download
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-md shadow-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-purple-100 hover:to-white dark:hover:from-purple-800 dark:hover:to-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-md shadow-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-purple-100 hover:to-white dark:hover:from-purple-800 dark:hover:to-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-500 text-center">
            &copy; {new Date().getFullYear()} MissFit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
