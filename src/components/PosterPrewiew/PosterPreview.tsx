import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import css from './Poster.module.css';
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {useAppContext} from "../../hooks";
import {urls} from "../../constants";

interface IProps extends PropsWithChildren {
}

const PosterPreview: FC<IProps> = () => {
    const {theme, setPosterPath} = useAppContext();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        movieService.getLatest('').then(({data}) => setMovies(data.results));
    }, []);

    useEffect(() => {
        if (movies.length) {
            setPosterPath(movies[count].poster_path);
        }
    }, [count, movies.length]);

    const prev = () => {
        setCount(prevState => prevState !== 0 ? --prevState : movies.length - 1);
    };

    const next = () => {
        setCount(nextState => nextState !== movies.length - 1 ? ++nextState : 0);
    };

    return (
        <div>

            {movies[count] &&
                <div className={`${css.Poster} ${theme && css.Poster_light}`}
                     style={{
                         backgroundImage: "url(" + `${urls.image}/${movies[count].backdrop_path}` + ")"
                     }}
                >
                  <div className={css.short_description}>
                    <div className={css.movie_badge}>New Movie</div>
                    <h1>{movies[count].original_title}</h1>
                    <div>{movies[count].overview}</div>
                    <div className={css.info_btn}>More Info -{'>'}</div>
                  </div>

                  <div onClick={() => prev()} className={css.prev}><AiOutlineLeft/></div>
                  <div onClick={() => next()} className={css.next}><AiOutlineRight/></div>

                </div>
            }


        </div>
    );
};

export {PosterPreview};