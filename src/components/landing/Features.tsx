import React from 'react';
import { Camera, Ruler, ShoppingBag, Smartphone } from 'lucide-react';
const Features: React.FC = () => {
  const features = [{
    name: 'Photo Measurements',
    description: 'Take a photo or video and our AI will calculate your precise body measurements.',
    icon: Camera
  }, {
    name: 'Size Recommendations',
    description: 'Get personalized size recommendations for thousands of brands and styles.',
    icon: Ruler
  }, {
    name: 'Shop Confidently',
    description: 'No more returns due to sizing issues. Shop online with confidence.',
    icon: ShoppingBag
  }, {
    name: 'Sync Across Devices',
    description: 'Access your measurements and recommendations on any device.',
    icon: Smartphone
  }];
  return <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How MissFit Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our innovative technology makes finding your perfect fit simple and
            accurate.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>)}
          </dl>
        </div>
      </div>
    </div>;
};
export default Features;