import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";

import MoviesPage from "./pages/MoviesPage";
import FindMoviesForm from "./components/FindMoviesForm";
import './App.css'
import MoviesDetails from "./components/MoviesDetails";
import MoviesGenres from "./components/MoviesGenres";
import GenreSorted from "./components/GenreSorted";






const App = () => {
    return (
        <div>
            <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'search'}/>}></Route>
                <Route path={'search'} index element={<FindMoviesForm/>}></Route>
                <Route path={'films'} element={<MoviesPage/>}></Route>
                <Route path={'films/genres'} element={<MoviesGenres/>}></Route>
                <Route path={'films/:filmId'} element={<MoviesDetails/>}></Route>
                <Route path={'search/:filmId'} element={<MoviesDetails/>}></Route>
                <Route path={'films/genres/:genreId'} element={<GenreSorted/>}></Route>
                <Route path={'films/genres/:genreId/:filmId'} element={<MoviesDetails/>}></Route>
            </Route>
        </Routes></div>
    );
};

export default App;