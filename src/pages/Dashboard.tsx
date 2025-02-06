import React from 'react';
import { BarChart, DollarSign, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<DollarSign className="h-8 w-8 text-green-500" />}
          title="Total Donations"
          value="$125,000"
          change="+12.5%"
        />
        <StatCard
          icon={<Users className="h-8 w-8 text-blue-500" />}
          title="Total Donors"
          value="1,234"
          change="+5.2%"
        />
        <StatCard
          icon={<BarChart className="h-8 w-8 text-purple-500" />}
          title="Active Projects"
          value="25"
          change="+2"
        />
        <StatCard
          icon={<TrendingUp className="h-8 w-8 text-rose-500" />}
          title="Success Rate"
          value="94%"
          change="+1.2%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
          {/* Add donation list component here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Charities</h2>
          {/* Add charities list component here */}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      {icon}
    </div>
    <div className="mt-4">
      <span className="text-green-500 text-sm font-semibold">{change}</span>
      <span className="text-gray-500 text-sm ml-1">vs last month</span>
    </div>
  </div>
);

export default Dashboard;