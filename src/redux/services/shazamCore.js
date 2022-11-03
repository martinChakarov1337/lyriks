import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '49b0aa6063msh2a62dd444570fa4p1488f2jsn077347258d54');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongsByGenre: builder.query({query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({query:({songid}) =>  `/tracks/details?track_id=${songid}`}),
        getSongsRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({query: ({country}) => `/charts/country?country_code=${country}`}),
        getSongsBySearch: builder.query({query: ({searchTerm}) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongsRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;