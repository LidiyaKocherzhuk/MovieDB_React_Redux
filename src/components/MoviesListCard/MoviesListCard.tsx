import React, {FC, PropsWithChildren, useEffect} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import {useLoaderData, useLocation} from "react-router-dom";

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

    const queryObj = new URLSearchParams(location.search);
    let page = Number(queryObj.get('page')) || 1;

    useEffect(() => {
        window.scrollTo(0, 0);
        setQueryParams({page, with_genres: queryObj.get('with_genres')});
    }, [page]);

    const prev = () => {
        if (page !== 1) {
            page--;
            setQueryParams({page: page.toString()});
        }
    };

    const next = () => {
        if (page !== 500) {
            page++;
            setQueryParams({page: page.toString()});
        }
    };
    const first = () => {
        setQueryParams({page: '1'});
    }
    const last = () => {
        setQueryParams({page: '500'});
    }

    return (
        <div className={css.MoviesListCard}>

            <div className={css.moviesList}>
                {data.results.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.pagination_bloc}>
                <div className={css.prev} onClick={() => prev()}><AiOutlineLeft/></div>
                <div className={css.pages}>
                    <span onClick={() => first()}>1</span>
                    <span>{page}</span>
                    <span onClick={() => last()}>500</span>
                </div>
                <div className={css.next} onClick={() => next()}><AiOutlineRight/></div>
            </div>
        </div>
    );
};

export {MoviesListCard};