import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  Lookup,
  RoleData,
  User,
  UsersList,
} from '../../../../../types/typeDefinitions';
import { generateHeadersIfAny } from '../../../../../app/services';

export const UserManagementApi = createApi({
  reducerPath: 'User-Management-Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5120/api',
    prepareHeaders: (headers) => generateHeadersIfAny(headers),
  }),
  tagTypes: ['Users-List'],

  endpoints: (builder) => ({
    getUsersList: builder.query<UsersList, void>({
      query: () => `/users/all-users`,
      providesTags: ['Users-List'],
    }),
    addUser: builder.mutation({
      query: (data: User) => ({
        method: 'POST',
        url: '/users/new-user',
        body: data,
      }),
      invalidatesTags: ['Users-List'],
    }),
    editUser: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        method: 'POST',
        url: `/users/edit-profile`,
        body: data,
      }),
      invalidatesTags: ['Users-List'],
    }),
    deleteUser: builder.mutation({
      query: (userId: User['id']) => ({
        method: 'POST',
        url: '/users/delete-user',
        body: { Id: userId },
      }),
      invalidatesTags: ['Users-List'],
    }),
    getRolesList: builder.query<Lookup[], void>({
      query: () => `/roles/all-roles`,
    }),
    addUserToRole: builder.mutation({
      query: (data: RoleData) => ({
        method: 'POST',
        url: '/roles/add-user-to-role',
        body: data,
      }),
      invalidatesTags: ['Users-List'],
    }),
  }),
});

export const {
  useGetUsersListQuery,
  useLazyGetUsersListQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
  useGetRolesListQuery,
  useAddUserToRoleMutation,
} = UserManagementApi;
