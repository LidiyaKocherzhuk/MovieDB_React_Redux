import {createContext, FC, PropsWithChildren, useState} from "react";

import {IContextState} from "../interfaces";

const Context = createContext(null);

interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState<IContextState>({
        theme: false,
        genresVisibility: false,
    });

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
};

export {ContextProvider, Context}