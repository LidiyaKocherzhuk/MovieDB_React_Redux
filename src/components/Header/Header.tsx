import React, {FC, PropsWithChildren} from 'react';
import {ImSearch, ImSun} from "react-icons/im";
import {RxMoon} from "react-icons/rx";

import css from './Header.module.css';
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const Header: FC<IProps> = () => {

    const {setTheme, theme, setGenresVisibility} = useAppContext();

    return (
        <div className={css.Header}>

            <div className={css.nav_side}>

                <div className={css.nav_bar} onClick={() => setGenresVisibility()}>
                    <span className={`${css.nav_bar_element} ${theme ? css.nav_bar_light : css.nav_bar_dark}`}></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={css.nav_movies}>Movies</div>

                <div className={css.nav_new}>New & Popular</div>

            </div>

            <h2 className={css.header}>Movie DB</h2>

            <div className={css.right_side}>

                <div className={css.search_btn}>
                    <ImSearch/>
                </div>

                <div onClick={() => setTheme()} className={css.light_dark_btn}>
                    {!theme ? <ImSun/> : <RxMoon/>}
                </div>

                <div className={css.user}>
                    <img className={css.user_img}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOApFCSVByzhZorHUAP-J851JAYyOPtI1jdg&usqp=CAU"
                         alt=""/>
                    <div>user</div>
                </div>

            </div>
        </div>
    );
};

export {Header};