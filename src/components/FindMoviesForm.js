import React, {useEffect, useState} from 'react';
import {movieService} from "../services/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/movie.slice";
import FindMovies from "./FindMovies";
import {useForm} from "react-hook-form";

const FindMoviesForm = () => {
    const {register, handleSubmit} = useForm()

    const [movie, setMovie] = useState('')

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);


    useEffect(() => {
        movieService.search(movie).then(value => value.data).then(value => dispatch(movieActions.setMovies(value)))
    }, [movie, dispatch])

    const searchMovies = (movie) =>{
        setMovie(movie.searchKey)
    }


    return (
        <div className={'searchBlock'}>
            <div>
                <div className={'findFilms'}>Find Your Films</div>
                <div className={'searchForm'}>
                    <form onSubmit={handleSubmit(searchMovies)}>
                        <input type={"text"} placeholder={'search your movies'} {...register('searchKey')}/>
                        <button type={"submit"}>Search</button>
                    </form>
                </div>
            </div>
            <div className={'searchMovie'}>
                {movies.map(movie => <FindMovies key={movie.id} movie={movie}/>)}
            </div>

        </div>
    );
};

export default FindMoviesForm;