import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import css from './Footer.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";

const Footer = () => {

    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, []);

    const moviesByTheGenre = (genreId: number) => {
        navigate(`/movies/all?page=1&with_genres=${genreId.toString()}`);
    }

    return (
        <div className={css.Footer}>
            <div className={css.genres}>
                {
                    genres.slice(0,6).map((genre) => <div
                        key={genre.id}
                        className={css.genre}
                        onClick={() => moviesByTheGenre(genre.id)}
                    >
                        {genre.name}
                    </div>)
                }
            </div>
            <div className={css.bottom_bloc}>
                <p>© 2023 MOVIEDB</p>
                <div className={css.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Disney%27s_Coco_logo.png/1024px-Disney%27s_Coco_logo.png" alt="movie logo"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_Movies_2020_Logo.png" alt="movie logo"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Oppenheimer_Movie_Logo.svg" alt="movie logo"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Sonic_the_Movie_Logo.png" alt="movie logo"/>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ebd221d-3581-4775-8f4c-086c377bc4c3/df7m3hk-578d73ec-d8f3-4673-bc8c-c7a070a8bfd3.png/v1/fill/w_1280,h_854/pixar_elemental_logo_png_by_docbuffflash82_df7m3hk-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMWViZDIyMWQtMzU4MS00Nzc1LThmNGMtMDg2YzM3N2JjNGMzXC9kZjdtM2hrLTU3OGQ3M2VjLWQ4ZjMtNDY3My1iYzhjLWM3YTA3MGE4YmZkMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SGwwXpT1sCUKfKCDhLzdOw4j3h3zRrJMdVqB7bVyHXQ" alt="movie logo"/>
                </div>
            </div>
        </div>
    );
};

export {Footer};