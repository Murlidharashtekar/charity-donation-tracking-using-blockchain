import React from 'react';
import { Shield, Users, Settings } from 'lucide-react';

const AdminPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Access Control</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Manage Permissions
            </button>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Access Logs
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold">User Management</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Manage Users
            </button>
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              User Reports
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="h-6 w-6 text-purple-500" />
            <h2 className="text-xl font-semibold">System Settings</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Configure System
            </button>
            <button className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              View Logs
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Add activity list here */}
          <p className="text-gray-600">No recent activity to display</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;