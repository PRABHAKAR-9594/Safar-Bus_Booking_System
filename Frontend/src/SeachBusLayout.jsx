// Layout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './authcontext';

function Layout() {
  const location = useLocation();

  // Determine if we are on the /admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      {!isAdminRoute && <Header />} {/* Conditionally render Header */}
      <Outlet />
      {!isAdminRoute && <Footer />} {/* Conditionally render Footer */}
    </AuthProvider>
  );
}

export default Layout;
