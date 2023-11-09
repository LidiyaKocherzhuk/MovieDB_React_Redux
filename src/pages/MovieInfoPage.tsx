import React, {FC, PropsWithChildren} from 'react';
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const MovieInfoPage: FC<IProps> = () => {

    const params = useParams();

    return (
        <div>
            MovieInfoPage
        </div>
    );
};

export {MovieInfoPage};