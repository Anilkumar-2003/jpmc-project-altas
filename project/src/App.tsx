import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CandidateAnalytics from './pages/CandidateAnalytics';
import JobRoleIntelligence from './pages/JobRoleIntelligence';
import Profile from './pages/Profile';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/animations.css';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="candidates" element={<CandidateAnalytics />} />
          <Route path="job-roles" element={<JobRoleIntelligence />} />
          <Route path="profile" element={<Profile />} />
          <Route path="market-mapping" element={<div className="p-4">Market Mapping coming soon</div>} />
          <Route path="competitors" element={<div className="p-4">Competitor Analysis coming soon</div>} />
          <Route path="settings" element={
            
            <div className="p-4 flex flex-col items-center justify-center bg-gravy rounded shadow-md">
              <h2 className="text-2xl font-bold mb-2 text-black-5800">Settings Page</h2>
              <p className="text-gray-600 mb-4">Manage your preferences and account settings here.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Edit Settings
              </button>
            </div>

          } />
          <Route path="*" element={<div className="p-4">Page not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;