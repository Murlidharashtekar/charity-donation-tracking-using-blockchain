import React from 'react';
import { Wallet, History, Heart } from 'lucide-react';

const UserPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Wallet className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold">Wallet</h2>
          </div>
          <p className="text-3xl font-bold text-gray-700">0.00 ETH</p>
          <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add Funds
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <History className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Donation History</h2>
          </div>
          <p className="text-3xl font-bold text-gray-700">0</p>
          <p className="text-gray-500">Total Donations</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-6 w-6 text-rose-500" />
            <h2 className="text-xl font-semibold">Impact</h2>
          </div>
          <p className="text-3xl font-bold text-gray-700">0</p>
          <p className="text-gray-500">Charities Supported</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
        <div className="space-y-4">
          {/* Add donations list here */}
          <p className="text-gray-600">No donations to display</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;