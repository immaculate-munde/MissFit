import React from "react";
import { motion } from "framer-motion";
import { Camera, Brain, Ruler } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Capture Your Photo",
    description:
      "Take a full-body photo in good lighting using your phone — no tape measure needed! For best accuracy, capture three poses shown in Demo Section.",
    icon: Camera,
  },
  {
    id: 2,
    title: "AI Body Analysis",
    description:
      "Our smart AI scans your image and calculates precise body measurements in seconds.",
    icon: Brain,
  },
  {
    id: 3,
    title: "Get Your Fit",
    description:
      "Receive size recommendations tailored to your shape — whether for custom outfits or online shopping.",
    icon: Ruler,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HowItWorks: React.FC = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>

        <motion.p
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          MissFit makes it effortless to get accurate body measurements and size
          recommendations in three easy steps.
        </motion.p>

        {/* Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-10 md:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={item}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                  <step.icon size={30} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute -z-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10" />
    </section>
  );
};

export default HowItWorks;
