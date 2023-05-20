import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    movies:[],
    page:null
};

const slice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
        setMovies:(state, action) =>{
            const {results, page} = action.payload;
            state.movies = results
            state.page = page
        }
    }
})

const {reducer:movieReducer, actions} = slice;

const movieActions = {
    ...actions
}

export {
    movieReducer,
    movieActions
}