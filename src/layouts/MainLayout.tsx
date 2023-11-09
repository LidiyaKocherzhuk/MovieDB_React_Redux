import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css';
import {Genres, Header} from "../components";
import {useAppContext} from "../hooks";

interface IProps extends PropsWithChildren {
}

const MainLayout: FC<IProps> = () => {
    const {theme, posterPath} = useAppContext();

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
            </div>

        </div>
    );
};

export {MainLayout};