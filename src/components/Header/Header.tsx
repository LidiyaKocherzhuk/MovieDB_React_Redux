import React from 'react';
import {ImSun} from "react-icons/im";
import {RxMoon} from "react-icons/rx";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {useAppContext, useAppDispatch} from "../../hooks";
import {Search} from "../Search";
import {movieActions} from "../../redux";

const Header = () => {

    const {setTheme, theme, setGenresVisibility} = useAppContext();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const showMovies = async (mov: string) => {

        const {meta: {requestStatus}} = await dispatch(movieActions.getAllMovies({
            movies_list: mov,
            query: '',
        }));

        if (requestStatus === 'fulfilled') {
            navigate(`/movies/${mov}`);
        }
    };

    return (
        <div className={css.Header}>

            <div className={css.nav_side}>

                <div className={css.nav_bar} onClick={() => setGenresVisibility()}>
                    <span className={`${css.nav_bar_element} ${theme ? css.nav_bar_light : css.nav_bar_dark}`}></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={css.nav_movies} onClick={() => showMovies('all')}>Movies</div>

                <div className={css.nav_new} onClick={() => showMovies('popular')}>New & Popular</div>

            </div>

            <h2 className={css.header} onClick={() => navigate('/home')}>Movie DB</h2>

            <div className={css.right_side}>

                <Search/>

                <div onClick={() => setTheme()} className={css.light_dark_btn}>
                    {!theme ? <ImSun/> : <RxMoon/>}
                </div>

                <div className={css.user}>
                    <img className={css.user_img}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOApFCSVByzhZorHUAP-J851JAYyOPtI1jdg&usqp=CAU"
                         alt="user icon"/>
                    <div>user</div>
                </div>

            </div>
        </div>
    );
};

export {Header};