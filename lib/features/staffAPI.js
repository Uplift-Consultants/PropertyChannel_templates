import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const token = '';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.uplift.co.zw/v1/administration',
  prepareHeaders: (headers) => {
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('x-api-key', '44db6620-767c-4e36-92fc-8ee61c5561d6');
    return headers;
  },
});
 
export const staffAPI = createApi({
  baseQuery,
  reducerPath: 'staff',
  tagTypes: ['Staff'],
  endpoints: (builder) => ({
    getStaff: builder.query({
      query: () => ({
        url: '/staff',
        method: 'GET',
      }),
    }),
    addStaff: builder.mutation({
      query: (data) => ({
        url: '/staff',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});


export const { 
  useGetStaffQuery,
  useAddStaffMutation
} = staffAPI;