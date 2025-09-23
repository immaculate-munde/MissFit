import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, RefreshCw } from 'lucide-react';
const MeasurementHistory: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const measurementData = [{
    date: 'Jan',
    bust: 89,
    waist: 71,
    hips: 94
  }, {
    date: 'Feb',
    bust: 88,
    waist: 70,
    hips: 93
  }, {
    date: 'Mar',
    bust: 88,
    waist: 69,
    hips: 93
  }, {
    date: 'Apr',
    bust: 87,
    waist: 68,
    hips: 92
  }, {
    date: 'May',
    bust: 87,
    waist: 68,
    hips: 92
  }, {
    date: 'Jun',
    bust: 86,
    waist: 67,
    hips: 91
  }];
  const latestMeasurements = {
    bust: 86,
    waist: 67,
    hips: 91,
    inseam: 76,
    shoulders: 38,
    date: 'June 15, 2023'
  };
  return <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Measurement History
          </h3>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-3">
              Last updated: {latestMeasurements.date}
            </span>
            <button className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Refresh measurements</span>
            </button>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500">Bust</p>
              <p className="text-lg font-medium">
                {latestMeasurements.bust} cm
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500">Waist</p>
              <p className="text-lg font-medium">
                {latestMeasurements.waist} cm
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500">Hips</p>
              <p className="text-lg font-medium">
                {latestMeasurements.hips} cm
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500">Inseam</p>
              <p className="text-lg font-medium">
                {latestMeasurements.inseam} cm
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500">Shoulders</p>
              <p className="text-lg font-medium">
                {latestMeasurements.shoulders} cm
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm flex items-center justify-center">
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                New Scan
              </button>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={measurementData} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bust" stroke="#8884d8" activeDot={{
              r: 8
            }} />
              <Line type="monotone" dataKey="waist" stroke="#82ca9d" />
              <Line type="monotone" dataKey="hips" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Export Measurement Data
          </button>
        </div>
      </div>
    </div>;
};
export default MeasurementHistory;