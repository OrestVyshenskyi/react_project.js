import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    genres:[]
};

const slice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{
        setGenres:(state, action) =>{
            const {genres} = action.payload;
            state.genres = genres
        }
    }
})

const {reducer:genreReducer, actions} = slice;

const genreActions = {
    ...actions
}

export {
    genreReducer,
    genreActions
}