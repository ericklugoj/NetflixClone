import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import trendingReducer from './slices/trendingSlice'
import topRatedReducer from './slices/topratedSlice'
import netflixOriginalsReducer from './slices/netflixOriginalsSlice'
import moviesByGenresSlice from './slices/moviesByGenreSlice'
import tvByGenresSlice from './slices/tvByGenreSlice'

const store = configureStore({
    reducer: {
        trending: trendingReducer,
        toprated: topRatedReducer,
        netflixOriginals: netflixOriginalsReducer,
        moviesByGenre: moviesByGenresSlice,
        tvByGenre: tvByGenresSlice
    },
    // Clear this in production, as it is done by default 
    middleware: [...getDefaultMiddleware({ immutableCheck: false })]
})

export default store 
