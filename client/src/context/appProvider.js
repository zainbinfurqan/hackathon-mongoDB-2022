import { createContext, useReducer, useRef } from "react";

const initialState = {
    loading: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: action.payload }

        default:
            break;
    }
}

export const AppContext = createContext(initialState);

const AppProvider = () => {
    const [stat, dispatch] = useReducer(reducer, initialState);
    const contextActions = useRef({

    })
    return (
        <AppContext.Provider value={[state, contextActions.current, dispatch]}>

        </AppContext.Provider>
    )
}