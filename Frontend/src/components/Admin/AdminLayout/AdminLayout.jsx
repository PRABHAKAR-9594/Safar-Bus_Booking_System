import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminFooter from '../AdminFooter/AdminFooter';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />  {/* This will render nested routes */}
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
