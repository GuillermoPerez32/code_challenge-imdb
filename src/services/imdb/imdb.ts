// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { MovieDetail, MovieList } from '../../types/movie'

// Define a service using a base URL and expected endpoints
export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovieDetail: builder.query<MovieDetail, string>({
      query: () => `movie/popular`,
    }),
    getPopular: builder.query<MovieList, string>({
      query: (id) => `movie/${id}`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieDetailQuery, useGetPopularQuery } = imdbApi