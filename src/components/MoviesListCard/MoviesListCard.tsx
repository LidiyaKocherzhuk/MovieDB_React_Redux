import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useLoaderData, useSearchParams} from "react-router-dom";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import css from './MoviesListCard.module.css';
import {IMoviePage} from "../../interfaces";
import {MovieCard} from "./MovieCard";

interface IProps extends PropsWithChildren {
}

const MoviesListCard: FC<IProps> = () => {

    const {data} = useLoaderData() as { data: IMoviePage };
    const [queryParams, setQueryParams] = useSearchParams({page: '1'});

    let page = Number(queryParams.get('page'));

    useEffect(() => {
        window.scrollTo(0, 0);
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