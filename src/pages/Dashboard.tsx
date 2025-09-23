import React, { useState } from 'react';
import MeasurementHistory from '../components/dashboard/MeasurementHistory';
import SizeRecommendations from '../components/dashboard/SizeRecommendations';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('measurements');
  return <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage your measurements and size recommendations.
          </p>
          <div className="mt-6 flex flex-col lg:flex-row">
            <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 mt-5 lg:mt-0 lg:ml-6">
              {activeTab === 'measurements' && <MeasurementHistory />}
              {activeTab === 'recommendations' && <SizeRecommendations />}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;