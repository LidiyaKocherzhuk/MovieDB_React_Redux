import React, {FC, PropsWithChildren} from 'react';

import {MoviesListCard} from "../components";

interface IProps extends PropsWithChildren {
}

const MoviesPage: FC<IProps> = () => {
    return (
        <>
            <MoviesListCard/>
        </>
    );
};

export {MoviesPage};