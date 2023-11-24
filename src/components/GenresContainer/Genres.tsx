import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genres.module.css';
import {useAppContext, useAppSelector} from "../../hooks";

const Genres = () => {

    const {genresVisibility, setGenresVisibility} = useAppContext();
    const {genres} = useAppSelector(state => state.genreReducer);
    const navigate = useNavigate();

    const moviesByTheGenre = (genreId: number) => {
        navigate(`/movies/all?page=1&with_genres=${genreId.toString()}`);
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