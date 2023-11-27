import React, {useEffect} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {useLocation, useParams} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {MovieCard} from "./MovieCard";
import {useAppContext, useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const MoviesListCard = () => {

    const {setQueryParams} = useAppContext();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {movies_list} = useParams();

    const queryObj = new URLSearchParams(location.search);
    let page = Number(queryObj.get('page')) || 1;
    let with_genres = Number(queryObj.get('with_genres')) || null;
    let query = queryObj.get('query') || '';

    const {allMoviesPage} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getAllMovies({movies_list, query: location.search}));
        window.scrollTo(0, 0);
        setQueryParams({page, with_genres, query});
    }, [page, with_genres, query]);

    const prev = () => {
        if (page !== 1) {
            page--;
            setQueryParams({page: page.toString()});
        }
    };

    const next = () => {
        if (page !== (movies_list === 'search' ? allMoviesPage.total_pages : '500')) {
            page++;
            setQueryParams({page: page.toString()});
        }
    };
    const first = () => {
        setQueryParams({page: '1'});
    }
    const last = () => {
        setQueryParams({page: query ? allMoviesPage.total_pages : '500'});
    }

    return (
        <div>
            <h1>{movies_list[0].toUpperCase()}{movies_list.slice(1)} movies</h1>
            <hr/>
            <div className={css.MoviesListCard}>

                <div className={css.moviesList}>
                    {allMoviesPage.results.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>

                <div className={css.pagination_bloc}>
                    <div className={css.prev} onClick={() => prev()}><AiOutlineLeft/></div>
                    <div className={css.pages}>
                        <span onClick={() => first()}>1</span>
                        <b>... {page} ...</b>
                        <span
                            onClick={() => last()}>{movies_list === 'search' ? allMoviesPage.total_pages : '500'}</span>
                    </div>
                    <div className={css.next} onClick={() => next()}><AiOutlineRight/></div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};