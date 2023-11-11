import React, {FC, PropsWithChildren} from 'react';

import {CertainMoviesList, PosterPreview} from "../components";
import {movieService} from "../services";

interface IProps extends PropsWithChildren {
}

const MoviesHomePage: FC<IProps> = () => {

    return (
        <div>
            <PosterPreview/>
            <CertainMoviesList service={movieService.getPopular('')} typeName={'Popular'}/>
            <CertainMoviesList service={movieService.getTopRated('')} typeName={'TopRated'}/>
            <CertainMoviesList service={movieService.getUpcoming('')} typeName={'Upcoming'}/>
        </div>
    );
};

export {MoviesHomePage};