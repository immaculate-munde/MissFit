import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, CheckCircle } from "lucide-react";

const DemoSection: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Front View (Holding A4 Paper)",
      desc: "Stand straight and hold an A4 paper vertically in front of your torso. This helps calibrate accurate scaling for your body.",
      image: "/images/front-a4.jpg", // TODO: Replace with updated image
    },
    {
      title: "Front View (Arms Slightly Out)",
      desc: "Raise your arms slightly away from your sides. This allows MissFit to measure shoulder width and silhouette accurately.",
      image: "/images/front-arms.jpg", // TODO: Replace with updated image
    },
    {
      title: "Side View",
      desc: "Turn sideways and keep your posture natural. This helps capture body depth and posture data.",
      image: "/images/side-view.jpg", // TODO: Replace with updated image
    },
  ];

  const nextStep = () => setStep((prev) => (prev + 1) % steps.length);

  return (
    <section
      id="demo"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          See How{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            MissFit
          </span>{" "}
          Works
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* --- Left Side: Mock Phone + Video --- */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[260px] h-[520px] rounded-[2rem] border-[12px] border-gray-800 dark:border-gray-100 shadow-2xl overflow-hidden bg-black">
              {/* Camera notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 dark:bg-gray-300 rounded-b-3xl z-20"></div>

              {/* Video inside the phone */}
              <video
                src="/videos/missfit-demo1.mp4" // TODO: Replace with updated demo video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain bg-black"
              />

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* --- Right Side: Pose Steps --- */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative flex flex-col items-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 w-full text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-center">
                    <img
                      src={steps[step].image}
                      alt={steps[step].title}
                      className="max-h-72 w-auto rounded-2xl border border-gray-300 dark:border-gray-700 mb-4 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {steps[step].title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {steps[step].desc}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg mx-auto"
                  >
                    {step === steps.length - 1 ? (
                      <>
                        <CheckCircle size={18} />
                        Done
                      </>
                    ) : (
                      <>
                        <Camera size={18} />
                        Next Step
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="flex gap-2 mt-6">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === step
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-110"
                        : "bg-gray-400 dark:bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 max-w-sm text-center">
                This interactive demo shows how users upload photos and receive
                instant AI-powered measurements inside MissFit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
