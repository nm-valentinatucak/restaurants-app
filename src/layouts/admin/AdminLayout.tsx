import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

const breadcrumbsContainerStyle = { transform: 'translateX(-0.5rem)' };

const AdminLayout = () => {
  return (
    <Drawer>
      <Header />
      <main className='k-m-6'>
        <div className='k-mb-4' style={breadcrumbsContainerStyle}>
          <Breadcrumbs />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Drawer>
  );
};

export default AdminLayout;
