import React, {FC, PropsWithChildren, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Footer, Genres, Header} from "../components";
import {useAppContext, useAppDispatch} from "../hooks";
import {genreService} from "../services";
import {genreActions} from "../redux";

interface IProps extends PropsWithChildren {
}

const MainLayout: FC<IProps> = () => {
    const {theme, posterPath} = useAppContext();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll);
    }, []);

    return (
        <div
            className={css.MainLayout}
            style={{
                backgroundImage: `url(${posterPath})`
            }}
        >

            <div className={`${css.content_layout} ${theme ? css.content_layout_light : css.content_layout_dark}`}>
                <Header/>
                <Genres/>
                <Outlet/>
                <Footer/>
            </div>

        </div>
    );
};

export {MainLayout};