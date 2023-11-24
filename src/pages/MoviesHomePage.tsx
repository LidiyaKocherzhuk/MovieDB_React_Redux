import React, {useEffect} from 'react';

import {CertainMoviesList, PosterPreview} from "../components";
import {movieActions} from "../redux";
import {useAppDispatch, useAppSelector} from "../hooks";

const MoviesHomePage = () => {
    const {
        popularMoviesPage,
        topRatedMoviesPage,
        upcomingMoviesPage,
    } = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getPopularMovies({movies_list: 'popular', query: ''}))
        dispatch(movieActions.getTopRatedMovies({movies_list: 'topRated', query: ''}))
        dispatch(movieActions.getUpcomingMovies({movies_list: 'upcoming', query: ''}))
    }, []);

    return (
        <div>
            <PosterPreview/>
            <CertainMoviesList movies={popularMoviesPage.results} typeName={'Popular'}/>
            <CertainMoviesList movies={topRatedMoviesPage.results} typeName={'TopRated'}/>
            <CertainMoviesList movies={upcomingMoviesPage.results} typeName={'Upcoming'}/>
        </div>
    );
};

export {MoviesHomePage};