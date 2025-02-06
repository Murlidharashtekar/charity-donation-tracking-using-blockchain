import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, LayoutDashboard, Users, UserCog } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold">CharityChain</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link to="/admin" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
                <UserCog className="h-4 w-4" />
                <span>Admin</span>
              </Link>
              <Link to="/user" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
                <Users className="h-4 w-4" />
                <span>Users</span>
              </Link>
              <Link to="/charity" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
                <Heart className="h-4 w-4" />
                <span>Charities</span>
              </Link>
            </div>
          </div>
          <button
            className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;