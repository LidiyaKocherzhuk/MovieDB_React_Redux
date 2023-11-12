import React, {FC, PropsWithChildren, useEffect} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {useLoaderData, useLocation, useParams} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {IMoviePage} from "../../interfaces";
import {MovieCard} from "./MovieCard";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const MoviesListCard: FC<IProps> = () => {

    const {data} = useLoaderData() as { data: IMoviePage };
    const {setQueryParams} = useAppContext();
    const location = useLocation();
    const {movies_list} = useParams();

    const queryObj = new URLSearchParams(location.search);
    let page = Number(queryObj.get('page')) || 1;
    let with_genres = Number(queryObj.get('with_genres')) || null;
    let query = queryObj.get('query') || '';

    useEffect(() => {
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
        if (page !== (movies_list === 'search' ? data.total_pages : '500')) {
            page++;
            setQueryParams({page: page.toString()});
        }
    };
    const first = () => {
        setQueryParams({page: '1'});
    }
    const last = () => {
        setQueryParams({page: query ? data.total_pages : '500'});
    }

    return (
        <div>
            <h1>{movies_list[0].toUpperCase()}{movies_list.slice(1)} movies</h1>
            <hr/>
            <div className={css.MoviesListCard}>

                <div className={css.moviesList}>
                    {data.results.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>

                <div className={css.pagination_bloc}>
                    <div className={css.prev} onClick={() => prev()}><AiOutlineLeft/></div>
                    <div className={css.pages}>
                        <span onClick={() => first()}>1</span>
                        <b>... {page} ...</b>
                        <span onClick={() => last()}>{movies_list === 'search' ? data.total_pages : '500'}</span>
                    </div>
                    <div className={css.next} onClick={() => next()}><AiOutlineRight/></div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};