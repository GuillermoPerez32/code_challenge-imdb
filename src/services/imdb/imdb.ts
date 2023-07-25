// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MovieDetail, MovieList } from '../../types/movie'
import { imdb_api_key, imdb_host } from '../../constants/imdb'

// Define a service using a base URL and expected endpoints
export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: imdb_host, prepareHeaders: (headers) => {
    
    headers.set('Authorization', `Bearer ${imdb_api_key}`)
    return headers
},
}),
  endpoints: (builder) => ({
    getPopular: builder.query<MovieList, string>({
      query: () => ({url: `movie/popular`, params: {api_key: imdb_api_key}}),

    }),
    getMovieDetail: builder.query<MovieDetail, string>({
      query: (id) => ({url: `movie/${id}`, params: {api_key: imdb_api_key}}),
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieDetailQuery, useGetPopularQuery } = imdbApi