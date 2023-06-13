import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { generateHeadersIfAny } from '../../../app/services';
import {
  ChangePasswordProps,
  LoginProps,
} from '../../../types/typeDefinitions';

export const AuthApi = createApi({
  reducerPath: 'Auth-Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5120/api/users',
    prepareHeaders: (headers) => generateHeadersIfAny(headers),
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userCredentials: LoginProps) => ({
        method: 'POST',
        body: userCredentials,
        url: '/login',
      }),
    }),
    editUserPassword: builder.mutation({
      query: (newPasswordInfo: ChangePasswordProps) => ({
        method: 'POST',
        body: newPasswordInfo,
        url: '/change-user-password',
      }),
    }),
  }),
});

export const { useLoginUserMutation, useEditUserPasswordMutation } = AuthApi;
