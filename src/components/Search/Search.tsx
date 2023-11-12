import React, {FC, PropsWithChildren} from 'react';
import {ImSearch} from "react-icons/im";
import {useNavigate} from "react-router-dom";

import css from './Search.module.css';

interface IProps extends PropsWithChildren {
}

const Search: FC<IProps> = () => {
    const navigate = useNavigate();
    const search = async () => {
        const inputElement = document.getElementById('search') as HTMLInputElement;

        if (inputElement.value) {
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