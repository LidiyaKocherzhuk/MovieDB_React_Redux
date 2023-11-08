import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import css from './Genres.module.css';
import {genreService} from "../../services";
import {IGenre} from "../../interfaces";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const Genres: FC<IProps> = () => {

    const {genresVisibility} = useAppContext();
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres));
    }, []);

    console.log(genresVisibility);

    return (
        <div className={`${css.Genres} ${!genresVisibility && css.Genres_hid}`}>
            <h4>Genres</h4>
            <hr/>

            {
                genres.map((genre) => <div key={genre.id} className={css.genre}>
                    {genre.name}
                </div>)
            }
        </div>
    );
};

export {Genres};