import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {movieService} from "../services/movie.service";
import Movie from "./Movie";

const GenreSorted = () => {
    const {state} = useLocation()

    const [movies, setMovies] = useState(null)


    useEffect(() => {
        movieService.movieByGenresId(1, state.id).then(value => value.data).then(value => setMovies(value))
    },[])

    console.log(movies)
    return (
        <div className={'movies'}>
            <div>{movies &&
                movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)
            }</div>
        </div>
    );
};

export default GenreSorted;