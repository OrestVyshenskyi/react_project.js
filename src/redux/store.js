import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movie.slice";
import {genreReducer} from "./slices/genres.slice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
})


export {
    setupStore
}