import React from 'react';
import { Check } from 'lucide-react';
const Benefits: React.FC = () => {
  return <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
              Benefits
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose MissFit?
            </p>
            <p className="mt-4 text-lg text-gray-500">
              MissFit takes the guesswork out of finding clothes that fit
              perfectly. Our technology is accurate, easy to use, and saves you
              time and money.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Reduce returns by up to 40%
                  </dt>
                  <dd className="mt-1 text-base text-gray-500">
                    No more ordering multiple sizes and returning what doesn't
                    fit.
                  </dd>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Save time shopping
                  </dt>
                  <dd className="mt-1 text-base text-gray-500">
                    Know your perfect size before you shop, online or in-store.
                  </dd>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Track your body changes
                  </dt>
                  <dd className="mt-1 text-base text-gray-500">
                    Monitor how your measurements change over time.
                  </dd>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Privacy focused
                  </dt>
                  <dd className="mt-1 text-base text-gray-500">
                    Your data and images are encrypted and never shared.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-16 sm:aspect-h-9">
              <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Mobile app screenshot" className="w-full h-full object-center object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Person using the app" className="w-full h-full object-center object-cover" />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Clothing with perfect fit" className="w-full h-full object-center object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Benefits;