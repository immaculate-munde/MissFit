import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
const SizeRecommendations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Mock data - in a real app, this would come from an API
  const recommendationsData = [{
    id: 1,
    brand: 'Zara',
    category: 'Tops',
    sizes: {
      top: 'M',
      bottom: '8',
      dress: 'M'
    },
    confidence: 'high',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png'
  }, {
    id: 2,
    brand: 'H&M',
    category: 'All',
    sizes: {
      top: 'S',
      bottom: '6',
      dress: 'S'
    },
    confidence: 'high',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png'
  }, {
    id: 3,
    brand: 'Nike',
    category: 'Activewear',
    sizes: {
      top: 'M',
      bottom: '8',
      shoes: '8.5'
    },
    confidence: 'medium',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'
  }, {
    id: 4,
    brand: "Levi's",
    category: 'Bottoms',
    sizes: {
      bottom: '28W/30L'
    },
    confidence: 'high',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png'
  }, {
    id: 5,
    brand: 'Gap',
    category: 'All',
    sizes: {
      top: 'S',
      bottom: '6',
      dress: 'S'
    },
    confidence: 'medium',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gap_logo.svg/1200px-Gap_logo.svg.png'
  }, {
    id: 6,
    brand: 'Adidas',
    category: 'Activewear',
    sizes: {
      top: 'S',
      bottom: '6',
      shoes: '8'
    },
    confidence: 'high',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png'
  }];
  const filteredRecommendations = recommendationsData.filter(rec => rec.brand.toLowerCase().includes(searchTerm.toLowerCase()) || rec.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Size Recommendations
          </h3>
          <div className="mt-3 sm:mt-0 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search brands or categories" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Based on your latest measurements, here are your recommended sizes for
          popular brands.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map(rec => <div key={rec.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="w-16 h-16 flex-shrink-0 bg-white flex items-center justify-center">
                  <img src={rec.logo} alt={`${rec.brand} logo`} className="max-h-12 max-w-full" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {rec.brand}
                  </h4>
                  <p className="text-sm text-gray-500">{rec.category}</p>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(rec.sizes).map(([type, size]) => <div key={type} className="bg-white px-2 py-1 rounded border border-gray-200 text-xs">
                      <span className="font-medium capitalize">{type}:</span>{' '}
                      {size}
                    </div>)}
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-1">
                    Confidence:
                  </span>
                  <span className={`text-xs font-medium ${rec.confidence === 'high' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {rec.confidence === 'high' ? 'High' : 'Medium'}
                  </span>
                </div>
                <button className="inline-flex items-center text-xs text-purple-600 hover:text-purple-800">
                  <ShoppingBag className="h-3 w-3 mr-1" />
                  Shop Now
                </button>
              </div>
            </div>)}
        </div>
        {filteredRecommendations.length === 0 && <div className="text-center py-12">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No recommendations found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try searching for a different brand or category.
            </p>
          </div>}
      </div>
    </div>;
};
export default SizeRecommendations;