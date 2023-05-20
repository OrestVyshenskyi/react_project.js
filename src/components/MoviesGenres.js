import React, {useEffect} from 'react';
import {movieService} from "../services/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../redux/slices/genres.slice";
import Genre from "./Genre";

const MoviesGenres = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        movieService.genres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
    }, [dispatch])


    return (
        <div className={'genre_name'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default MoviesGenres;