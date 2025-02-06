import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import CharityPage from './pages/CharityPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/charity" element={<CharityPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;