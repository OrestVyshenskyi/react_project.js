import React from 'react';
import {NavLink} from "react-router-dom";
import Raiting from "./Raiting";

const Movie = ({movie}) => {
    const {id, title, poster_path, overview, vote_average} = movie


    const img = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg'

    return (
        <NavLink to={id.toString()} state={{...movie}} style={{textDecoration: 'none', color: 'black'}}>
            <div className={'movie'}>
                <img className={'image'} src={img} alt={title}/>
                <Raiting value={vote_average}/>
                <div>
                    <div><h2>{title}</h2></div>
                </div>
            </div>
        </NavLink>

    );
};

export default Movie;