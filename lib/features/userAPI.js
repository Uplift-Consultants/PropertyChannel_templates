import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const token = '';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.uplift.co.zw/v1',
  prepareHeaders: (headers) => {
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('x-api-key', '44db6620-767c-4e36-92fc-8ee61c5561d6');
    return headers;
  },
});
 
export const userAPI = createApi({
  baseQuery,
  reducerPath: 'user',
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/user/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});


export const { 
  useGetUserQuery,
  useSignInMutation
} = userAPI;