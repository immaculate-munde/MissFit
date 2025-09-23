import React from 'react';
import { ArrowDownToLine } from 'lucide-react';
const CallToAction: React.FC = () => {
  return <div className="bg-purple-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to find your perfect fit?</span>
          <span className="block">Download MissFit today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-purple-200">
          Join thousands of users who have transformed their shopping experience
          with MissFit's accurate size recommendations.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50">
              <ArrowDownToLine className="h-5 w-5 mr-2" />
              Download for iOS
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500">
              <ArrowDownToLine className="h-5 w-5 mr-2" />
              Download for Android
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default CallToAction;