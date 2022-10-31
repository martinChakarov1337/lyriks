import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key', '49b0aa6063msh2a62dd444570fa4p1488f2jsn077347258d54');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;