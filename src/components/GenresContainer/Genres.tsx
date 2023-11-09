import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genres.module.css';
import {genreService} from "../../services";
import {IGenre} from "../../interfaces";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const Genres: FC<IProps> = () => {

    const {genresVisibility, setGenresVisibility, setQueryParams} = useAppContext();
    const [genres, setGenres] = useState<IGenre[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres));
    }, []);

    const moviesByTheGenre = (genreId: number) => {
        navigate('/movies');
        setQueryParams({with_genres: genreId.toString(), page: '1'});
        setGenresVisibility();
    }

    return (
        <div id={'Genres'} className={`${css.Genres} ${!genresVisibility && css.Genres_hid}`}>
            <h4>Genres</h4>
            <hr/>

            {
                genres.map((genre) => <div
                    key={genre.id}
                    className={css.genre}
                    onClick={() => moviesByTheGenre(genre.id)}
                >
                    {genre.name}
                </div>)
            }
        </div>
    );
};

export {Genres};