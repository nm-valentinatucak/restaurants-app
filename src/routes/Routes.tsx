import AdminLayout from '../layouts/admin/AdminLayout';
import UserManagement from '../layouts/admin/features/UserManagement/UserManagement';
import AuthLayout from '../layouts/auth/AuthLayout';
import { CustomRouteObject } from '../types/typeDefinitions';
import ProtectedRoute from './ProtectedRoute';

export const Routes: CustomRouteObject[] = [
  {
    path: '/login',
    name: 'Login',
    element: <AuthLayout />,
  },
  {
    path: '/',
    name: 'Home',
    icon: 'k-i-home',
    element: (
      //   <ProtectedRoute>
      <AdminLayout />
      //   </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        icon: 'k-i-home',
        element: <div>Dashboard</div>,
      },
      {
        path: 'user-management',
        name: 'User Management',
        icon: 'k-i-grid-layout',
        element: <UserManagement />,
      },
      {
        path: 'profile',
        name: 'Profile',
        icon: 'k-i-user',
        element: <div>Profile</div>,
      },
    ],
  },
];
