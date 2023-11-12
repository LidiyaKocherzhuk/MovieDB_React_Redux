import React, {FC, PropsWithChildren, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Footer, Genres, Header} from "../components";
import {useAppContext} from "../hooks";
import {genreService} from "../services";

interface IProps extends PropsWithChildren {
}

const MainLayout: FC<IProps> = () => {
    const {theme, posterPath, setGenres} = useAppContext();

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres));
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