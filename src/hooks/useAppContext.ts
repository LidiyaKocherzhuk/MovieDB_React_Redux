import {useContext} from "react";
import {useSearchParams} from "react-router-dom";

import {Context} from "../hoc";
import {IContextState, IUseContext} from "../interfaces";

const useAppContext = (): IUseContext => {
    const [state, setState] = useContext(Context);
    const [, setSearchParams] = useSearchParams(state.queryParams);

    return {
        theme: state.theme,
        setTheme: () => setState((prev: IContextState) => ({...prev, theme: !prev.theme})),

        genresVisibility: state.genresVisibility,
        setGenresVisibility: () => setState((prev: IContextState) => (
            {
                ...prev,
                genresVisibility: !prev.genresVisibility,
            }
        )),

        posterPath: state.posterPath,
        setPosterPath: (value: string) => setState((prev: IContextState) => (
            {
                ...prev,
                posterPath: `https://image.tmdb.org/t/p/w500/${value}`
            }
        )),

        queryParams: state.queryParams,
        setQueryParams: (value: {}) => {
            const params = {...state.queryParams, ...value};

            setSearchParams(params);
            setState((prev: IContextState) => ({...prev, queryParams: {...prev.queryParams, ...value}}))
        },
    };
};

export {useAppContext};

