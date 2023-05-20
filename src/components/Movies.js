import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieService} from "../services/movie.service";
import {movieActions} from "../redux/slices/movie.slice";
import Movie from "./Movie";
import {NavLink, useSearchParams} from "react-router-dom";
import MoviesPagination from "./MoviesPagination";


const Movies = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const[query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        setQuery(prev => ({...prev, page:'1'}))
    },[])


    useEffect(() => {
        movieService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(movieActions.setMovies(value)))
    }, [query, dispatch])
    return (
        <div>

            <div className={'block'}><NavLink to={'genres'} className={'genre_link'}>
                Genres Filter
            </NavLink></div>
            <MoviesPagination/>
            <div className={'movies'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>

    );
};

export default Movies;