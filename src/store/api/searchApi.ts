import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILyricsBySearch, ISongsText} from './Types';



export const lyricsApi = createApi({
  reducerPath: 'lyricsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '0ed1f0f46bmshcd615de0e18e83cp11a94cjsn06095378f05d');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getLyricsBySearch: builder.query<ILyricsBySearch, string>({
      query: (q) => ({
        url: '/search/',
        params: {
          q,
          per_page: '10',
          page: '1'
        },
      }),
    }),
    getSongsDetails: builder.query<ISongsText, string>({
      query: (id) => ({
        url: `/songs/${id}`,
        method: 'GET',
      }),
    })
  }),
});

export const { useGetLyricsBySearchQuery, useGetSongsDetailsQuery } = lyricsApi;

