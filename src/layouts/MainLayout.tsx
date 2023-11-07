import React, {FC, PropsWithChildren} from 'react';

import css from './MainLayout.module.css';
import {Header} from "../components/Header";
import {useAppContext} from "../hooks/useAppContext";

interface IProps extends PropsWithChildren {
}

const MainLayout: FC<IProps> = () => {
    const {theme} = useAppContext();

    return (
        <div className={css.MainLayout}>

            <div className={`${css.content_layout } ${theme ? css.content_layout_light : css.content_layout_dark}`}>
                <Header/>
            </div>

        </div>
    );
};

export {MainLayout};