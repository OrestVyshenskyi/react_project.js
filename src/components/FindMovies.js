import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {movieService} from "../services/movie.service";
import Raiting from "./Raiting";


const FindMovies = ({movie}) => {
    const {id, title, poster_path, overview, vote_average} = movie

    const img = poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg'


    return (
        <NavLink to={id.toString()} state={{...movie}}  style={{textDecoration:'none', color:'black'}}>
            <div className={'movie'}>
                <img className={'image'} src={img} alt={title}/>
                <div>
                    <Raiting value={vote_average}/>
                    <div><h2>{title}</h2></div>
                </div>
            </div>
        </NavLink>
        // <div className={'movie'}>
        //     {poster_path &&
        //         <img className={'image'} src={`https://image.tmdb.org/t/p/w500` + poster_path} alt={title}/>
        //     }
        //     <div>
        //         <div><h2>{title}</h2></div>
        //         <div className={'overview'}>{overview}</div>
        //     </div>
        // </div>
    );
};

export default FindMovies;