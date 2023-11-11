import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {BsArrowRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

import css from './CertainMoviesList.module.css';
import {IMovie, IMoviePage} from "../../interfaces";
import {MovieCard} from "../MoviesListCard";
import {IRes} from "../../types";

interface IProps extends PropsWithChildren {
    service: IRes<IMoviePage>,
    typeName: string,
}

const CertainMoviesList: FC<IProps> = ({service, typeName}) => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        service.then(({data}) => setMovies(data.results));
    }, [service]);

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