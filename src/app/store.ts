import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { imdbApi } from '../services/imdb/imdb'

export const store = configureStore({
  reducer: {
    [imdbApi.reducerPath]: imdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imdbApi.middleware),
})

setupListeners(store.dispatch)