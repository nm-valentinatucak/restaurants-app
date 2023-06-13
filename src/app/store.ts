import { configureStore } from '@reduxjs/toolkit';

import { AuthApi } from '../layouts/auth/hooks/AuthApi';
import { UserManagementApi } from '../layouts/admin/features/UserManagement/hooks/UserManagementApi';

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserManagementApi.reducerPath]: UserManagementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthApi.middleware,
      UserManagementApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
