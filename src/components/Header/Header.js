import React from 'react';


import './Header.styles.css'
import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <div className={'mainHeader'}>
            <div className={'header'}>
                <div><NavLink to={'/'} style={{textDecoration:'none', color:'black'}}>FilmOk</NavLink></div>
                <div className={'user'}>
                    <img className={'userPhoto'} src={"https://toppng.com/uploads/preview/circled-user-female-skin-type-4-icon-pro-icon-115534084504dcnr2bmdl.png"}/>
                    <button>CHANGE THEME</button>
                </div>
            </div>
            <div className={'allFilms'}>
                <NavLink to={'search'} className={'links'}>Search Films</NavLink>
                <NavLink to={'films'} className={'links'}>All Films</NavLink>
            </div>

        </div>
    );
};

export default Header;