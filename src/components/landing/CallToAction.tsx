import React from "react";
import { ArrowDownToLine } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900 transition-colors duration-700">
      <div className="max-w-3xl mx-auto text-center py-16 px-6 sm:py-24 sm:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to find your perfect fit?
        </h2>
        <p className="text-lg text-purple-100 dark:text-purple-200 mb-10">
          Take your measurements easily and get personalized size recommendations —
          no tape measure needed!
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Android Button */}
          <a
            href="https://expo.dev/accounts/abaejara/projects/MissFit/builds/62ee2a2f-0142-4eb4-896a-caaaf76b6071"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-purple-500 hover:bg-purple-400 dark:bg-purple-700 dark:hover:bg-purple-600 transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-purple-300/40 dark:hover:shadow-purple-900/40"
          >
            <ArrowDownToLine className="h-5 w-5 mr-2" />
            Download APK
          </a>
        </div>

        {/* Subtext */}
        <p className="mt-8 text-purple-100 dark:text-purple-300 text-sm italic">
          Join thousands of users already enjoying a perfect fit with MissFit.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
