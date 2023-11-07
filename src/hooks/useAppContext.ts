import {useContext} from "react";

import {Context} from "../hoc";
import {IContextState, IUseContext} from "../interfaces";

const useAppContext = (): IUseContext => {
    const [state, setState] = useContext(Context);

    return {
        theme: state.theme,
        setTheme: (value: boolean) => setState((prev: IContextState) => ({...prev, theme: value})),
    };
};

export {useAppContext};

