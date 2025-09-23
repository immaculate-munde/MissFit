import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Layout from './components/layout/Layout';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
              <LandingPage />
            </Layout>} />
        <Route path="/dashboard" element={<Layout>
              <Dashboard />
            </Layout>} />
        <Route path="/profile" element={<Layout>
              <Profile />
            </Layout>} />
      </Routes>
    </BrowserRouter>;
}