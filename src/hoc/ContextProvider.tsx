import {createContext, FC, PropsWithChildren, useState} from "react";

const Context = createContext(null);

interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState({});

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
};

export {ContextProvider, Context}