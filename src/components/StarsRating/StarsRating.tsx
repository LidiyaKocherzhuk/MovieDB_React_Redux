import React, {FC, PropsWithChildren, useState} from 'react';
import StarRatings from "react-star-ratings";

import css from './StarsRating.module.css';

interface IProps extends PropsWithChildren {
    vote_average: number,
}

const StarsRating: FC<IProps> = ({vote_average}) => {

    const [rating, setRating] = useState(vote_average/2)

    return (
        <div className={css.Rating}>
            <StarRatings
                rating={rating}
                starRatedColor="gold"
                changeRating={setRating}
                numberOfStars={5}
                name='rating'
            />

        </div>
    );
};

export {StarsRating};