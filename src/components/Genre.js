import React from 'react';
import {NavLink} from "react-router-dom";

const Genre = ({genre}) => {
    const {id, name} = genre
    return (
        <div className={'genre_links'}>
            <NavLink to={id.toString()} state={{...genre}} style={{textDecoration: 'none', color: 'black'}}>
                <h1>{name}</h1>
            </NavLink>
        </div>
    );
};

export default Genre;