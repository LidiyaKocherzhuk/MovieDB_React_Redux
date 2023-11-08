import {useContext} from "react";

import {Context} from "../hoc";
import {IContextState, IUseContext} from "../interfaces";

const useAppContext = (): IUseContext => {
    const [state, setState] = useContext(Context);

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
    };
};

export {useAppContext};

