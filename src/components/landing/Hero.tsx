import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Decorative Shape */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Animated Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                <span className="block">Find your</span>{" "}
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  perfect fit
                </span>
              </motion.h1>

              {/* Animated Paragraph */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                MissFit uses{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  smart AI technology
                </span>{" "}
                to take your measurements from photos or videos and recommend
                the best clothing sizes for your unique body.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                {/* Download Button */}
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 hover:scale-105 transform transition-all duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    Download App
                  </a>
                </div>

                {/* Dashboard Button */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/dashboard"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-purple-700 bg-purple-100 hover:bg-purple-200 dark:text-purple-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    View Dashboard{" "}
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* Right-side Image */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-t-xl lg:rounded-none"
          src="/images/ankara-shopping.jpg"
          alt="Woman in Ankara clothing holding shopping bags"
        />
      </div>
    </div>
  );
};

export default Hero;
