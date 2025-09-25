import React from "react";
import {
  Camera,
  Ruler,
  ShoppingBag,
  Smartphone,
  Scissors,
} from "lucide-react";
import { motion } from "framer-motion";

// Variants for stagger animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features: React.FC = () => {
  const features = [
    {
      name: "Photo Measurements",
      description:
        "Take a photo or video and our AI will calculate your precise body measurements.",
      icon: Camera,
    },
    {
      name: "Size Recommendations",
      description:
        "Get personalized size recommendations for thousands of brands and styles.",
      icon: Ruler,
    },
    {
      name: "Custom-Made Clothes",
      description:
        "Design tailored outfits without the hassle of knowing your body measurements. Our AI ensures a perfect fit.",
      icon: Scissors,
    },
    {
      name: "Shop Confidently",
      description:
        "No more returns due to sizing issues. Shop online with confidence.",
      icon: ShoppingBag,
    },
    {
      name: "Sync Across Devices",
      description:
        "Access your measurements and recommendations on any device.",
      icon: Smartphone,
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="lg:text-center mt-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-base text-purple-600 font-semibold tracking-wide uppercase"
            variants={item}
          >
            Features
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={item}
          >
            How MissFit Works
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto"
            variants={item}
          >
            Our innovative technology makes finding your perfect fit simple and
            accurate.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="relative group p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-6 flex items-center justify-center h-14 w-14 rounded-lg bg-purple-500 text-white transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:animate-bounce">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </div>

              {/* Text */}
              <h3 className="mt-10 text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-purple-600">
                {feature.name}
              </h3>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 group-hover:translate-x-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
