import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    const section = document.getElementById("poses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-transparent to-white dark:from-purple-950 dark:to-gray-900 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-8 md:px-12 z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            <span className="block">Get measured with</span>{" "}
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              just a photo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
          >
            MissFit helps you take precise body measurements using AI — no tape
            measure or tailor visit needed. Shop confidently with perfect fit
            recommendations every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* Download Button */}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/missfit-9e87b.firebasestorage.app/o/public%2FMissFit.apk?alt=media&token=0d00031c-10f5-49b6-bc90-08a757230a7d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-105 transform transition duration-300"
            >
              📱 Download APP
            </a>

            {/* Scroll to Demo */}
            <button
              onClick={scrollToDemo}
              className="px-8 py-4 rounded-xl bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-200 font-semibold flex items-center justify-center hover:bg-purple-200 dark:hover:bg-gray-700 hover:scale-105 transform transition duration-300"
            >
              🎥 View Demo
            </button>
          </motion.div>
        </div>

        {/* Right: Phone Mockup with Video */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[400px] aspect-[9/19] rounded-[2.5rem] bg-gray-800 shadow-2xl overflow-hidden border-[12px] border-gray-900">
            <video
              src="/videos/missfit-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow Effect */}
          <div className="absolute -z-10 w-80 h-80 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
