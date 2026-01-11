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
 
export const clinicAPI = createApi({
  baseQuery,
  reducerPath: 'clinic',
  tagTypes: ['Clinic'],
  endpoints: (builder) => ({
    getClinic: builder.query({
      query: () => ({
        url: '/clinic',
        method: 'GET',
      }),
    }),
    addClinic: builder.mutation({
      query: (data) => ({
        url: '/clinic',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});


export const { 
  useGetClinicQuery,
  useAddClinicMutation
} = clinicAPI;