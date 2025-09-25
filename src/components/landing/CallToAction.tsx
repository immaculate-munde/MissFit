import React from 'react';
import { ArrowDownToLine } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-purple-600 dark:bg-purple-800 transition-colors duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-300/40 dark:hover:shadow-purple-900/40 transform">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl transition-transform duration-500 hover:scale-105">
          <span className="block">Ready to find your perfect fit?</span>
          <span className="block">Download MissFit today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-purple-100 dark:text-purple-200 transition-transform duration-500 hover:scale-105">
          Join thousands of users who have transformed their shopping experience
          with MissFit's accurate size recommendations.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          {/* iOS Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 dark:bg-gray-100 dark:hover:bg-gray-200 transform transition-all duration-500 hover:scale-110 hover:rotate-2 hover:-translate-y-1"
          >
            <ArrowDownToLine className="h-5 w-5 mr-2" />
            Download for iOS
          </a>

          {/* Android Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-400 dark:bg-purple-700 dark:hover:bg-purple-600 transform transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:-translate-y-1"
          >
            <ArrowDownToLine className="h-5 w-5 mr-2" />
            Download for Android
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
