import React from 'react';
import {ImSearch} from "react-icons/im";
import {useLocation, useNavigate} from "react-router-dom";

import css from './Search.module.css';
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux";

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const search = async () => {
        const inputElement = document.getElementById('search') as HTMLInputElement;

        if (inputElement.value) {
            dispatch(movieActions.getAllMovies({movies_list: 'search', query:`?query=${inputElement.value}`}));
            navigate(`movies/search?query=${inputElement.value}`);
        } else {
            navigate('movies/all');
        }

        inputElement.value = '';
    };

    return (
        <div className={css.Search}>
            <input id={'search'} type="text"/>
            <ImSearch onClick={() => search()}/>
        </div>
    );
};

export {Search};