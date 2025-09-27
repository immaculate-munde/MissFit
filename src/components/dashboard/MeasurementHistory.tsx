import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Calendar, RefreshCw } from 'lucide-react';

const MeasurementHistory: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const measurementData = [
    { date: 'Jan', bust: 89, waist: 71, hips: 94 },
    { date: 'Feb', bust: 88, waist: 70, hips: 93 },
    { date: 'Mar', bust: 88, waist: 69, hips: 93 },
    { date: 'Apr', bust: 87, waist: 68, hips: 92 },
    { date: 'May', bust: 87, waist: 68, hips: 92 },
    { date: 'Jun', bust: 86, waist: 67, hips: 91 },
  ];

  const latestMeasurements = {
    bust: 86,
    waist: 67,
    hips: 91,
    inseam: 76,
    shoulders: 38,
    date: 'June 15, 2023',
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg transition-colors duration-300">
      <div className="px-4 py-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            Measurement History
          </h3>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">
              Last updated: {latestMeasurements.date}
            </span>
            <button className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Refresh measurements</span>
            </button>
          </div>
        </div>

        {/* Latest Measurements */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6 transition-colors duration-300">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Bust', value: `${latestMeasurements.bust} cm` },
              { label: 'Waist', value: `${latestMeasurements.waist} cm` },
              { label: 'Hips', value: `${latestMeasurements.hips} cm` },
              { label: 'Inseam', value: `${latestMeasurements.inseam} cm` },
              { label: 'Shoulders', value: `${latestMeasurements.shoulders} cm` },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm transition-colors duration-300"
              >
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}

            {/* New Scan Button */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm flex items-center justify-center transition-colors duration-300">
              <button className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 text-sm font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                New Scan
              </button>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={measurementData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="date" stroke="currentColor" className="text-gray-600 dark:text-gray-300" />
              <YAxis stroke="currentColor" className="text-gray-600 dark:text-gray-300" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  borderRadius: '0.5rem',
                  border: 'none',
                  color: '#fff',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="bust" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="waist" stroke="#82ca9d" />
              <Line type="monotone" dataKey="hips" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Export Button */}
        <div className="mt-6">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300">
            Export Measurement Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeasurementHistory;
