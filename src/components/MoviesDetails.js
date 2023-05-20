import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {movieService} from "../services/movie.service";
import MovieDetail from "./movieDetail";

const MoviesDetails = () => {
    const {state} = useLocation()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        movieService.movieById(state.id).then(value => value.data).then(value => setMovie(value))
    },[])

    console.log(movie)
    return (
        <div>
            {movie &&
                <MovieDetail key={movie.id} movie={movie}/>
            }
        </div>
    );
};

export default MoviesDetails;