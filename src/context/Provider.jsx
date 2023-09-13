import { useReducer, useMemo, useCallback } from "react";
import Context from "./context";

const defaultSettings = {
    isEnglish: true,
    isDarkTheme: true,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LANG':
            return {
                ...state, isEnglish: !state.isEnglish
            };
        case 'THEME':
            return {
                ...state, isDarkTheme: !state.isDarkTheme
            };
        default:
            return state;
    }
};

const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultSettings);

    const toggleLanguage = useCallback(() => {
        dispatch({ type: 'LANG' });
    }, []);

    const toggleTheme = useCallback(() => {
        dispatch({ type: 'THEME' });
    }, []);

    const contextValue = useMemo(() => ({
        isEnglish: state.isEnglish,
        isDarkTheme: state.isDarkTheme,
        toggleLanguage,
        toggleTheme
    }), [state.isEnglish, state.isDarkTheme, toggleLanguage, toggleTheme]);

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;