import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Reduce returns by up to 40%",
    desc: "No more ordering multiple sizes and returning what doesn't fit.",
  },
  {
    title: "Save time shopping",
    desc: "Know your perfect size before you shop, online or in-store.",
  },
  {
    title: "Track your body changes",
    desc: "Monitor how your measurements change over time.",
  },
  {
    title: "Privacy focused",
    desc: "Your data and images are encrypted and never shared.",
  },
];

const Benefits: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text sliding in from left */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-xl"
          >
            <div className="rounded-2xl p-8 lg:p-10 bg-white dark:bg-gray-900">
              <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Benefits
              </h2>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Why Choose <span className="text-purple-600">MissFit?</span>
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                MissFit takes the guesswork out of finding clothes that fit
                perfectly. Our technology is accurate, easy to use, and saves you
                both <span className="font-semibold text-gray-900 dark:text-white">time</span> and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">money</span>.
              </p>

              <dl className="mt-10 space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-7 w-7 rounded-full bg-green-100 dark:bg-green-700 group-hover:scale-110 transition-transform">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-200" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                        {benefit.title}
                      </dt>
                      <dd className="mt-1 text-base text-gray-600 dark:text-gray-300">
                        {benefit.desc}
                      </dd>
                    </div>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Images sliding in from right */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-10 lg:mt-0 space-y-4"
          >
            {/* Large image floats up/down */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Mobile app screenshot"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small images floating opposite directions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Person using the app"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                  alt="Clothing with perfect fit"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
