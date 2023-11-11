import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import css from './MoviesListCard.module.css';
import {IMovie} from "../../interfaces";
import {StarsRating} from '../StarsRating'
import {urls} from "../../constants";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
    movie: IMovie,
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {id, original_title, poster_path, vote_average} = movie;

    const {setPosterPath} = useAppContext();

    const navigate = useNavigate();

    const moveToInfoPage = () => {
        navigate(`/movies/info/${id}`);
        setPosterPath(poster_path);
    }

    return (
        <div className={css.MovieCard} onClick={() => moveToInfoPage()}>
            <img src={`${urls.image}/${poster_path}`} alt={original_title}/>
            <div className={css.common_info}>
                <StarsRating vote_average={vote_average}/>
                {original_title}
            </div>
        </div>
    );
};

export {MovieCard};