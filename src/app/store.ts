import { configureStore } from '@reduxjs/toolkit';
// import { UserManagementApi } from '../features/admin/UserManagement/UserManagementApi';
// import { AuthApi } from '../features/auth/AuthApi';
// import userManagementReducer from '../features/admin/UserManagement/UserManagementState';
// import profileStateReducer from '../features/admin/Profile/ProfileState';

export const store = configureStore({
  reducer: {
    // [UserManagementApi.reducerPath]: UserManagementApi.reducer,
    // [AuthApi.reducerPath]: AuthApi.reducer,
    // UserManagement: userManagementReducer,
    // ProfileState: profileStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      // UserManagementApi.middleware,
      // AuthApi.middleware
      (),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
