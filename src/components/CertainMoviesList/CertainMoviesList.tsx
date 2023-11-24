import React, {FC, PropsWithChildren} from 'react';
import {BsArrowRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

import css from './CertainMoviesList.module.css';
import {MovieCard} from "../MoviesListCard";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    movies: IMovie[],
    typeName: string,
}

const CertainMoviesList: FC<IProps> = ({movies, typeName}) => {
    const navigate = useNavigate();

    const moveToMoviesPage = () => {
        navigate(`/movies/${typeName.toLowerCase()}`);
    }

    return (
        <div className={css.CertainMoviesList}>
            <h3>{typeName}</h3>

            <div className={css.more_movies}>
                <div className={css.more_movies_btn} onClick={() => moveToMoviesPage()}>
                    <p>See more </p>
                    <BsArrowRight/>
                </div>
            </div>

            <div className={css.movies_bloc}>
                {
                    movies.slice(0, 5).map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {CertainMoviesList};