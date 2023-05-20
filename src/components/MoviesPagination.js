import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const MoviesPagination = () => {
    const {page} = useSelector(state => state.movies)

    const [,setQuery] = useSearchParams()

    const next = () =>{
        setQuery(prev => ({...prev, page:+prev.get('page')+1}))
    }
    const prev = () =>{
        setQuery(prev => ({...prev, page:+prev.get('page')-1}))
    }

    return (
        <div>
            <button disabled={page === 1} onClick={prev}>Prev</button>
            <h1>{page}</h1>
            <button disabled={page === 500} onClick={next}>Next</button>
        </div>
    );
};

export default MoviesPagination;