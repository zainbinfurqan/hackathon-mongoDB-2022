import { createContext, useReducer, useRef } from "react";
import {
    POST_COURSE_REQUEST,
    POST_COURSE_FAIL,
    POST_COURSE_SUCCESS,

    SEARCH_REQUEST,
    SEARCH_FAIL,
    SEARCH_SUCCESS
} from './types'

const initialState = {
    loading: false,
    browseCourses: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: action.payload }

        case 'SEARCH_REQUEST':
            return { ...state, loading: true, browseCourses: [] }
        case 'SEARCH_SUCCESS':
            return { ...state, loading: false, browseCourses: action.payload }
        case 'SEARCH_FAIL':
            return { ...state, loading: false, }

        default:
            break;
    }
}

export const AppContext = createContext(initialState);

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextActions = useRef({

        login: async () => {
            try {

            } catch (error) {

            }
        },
        signUp: async () => {
            try {

            } catch (error) {

            }
        },
        postCourse: async (body) => {
            try {
                dispatch({ type: POST_COURSE_REQUEST })
                const response = await fetch('', {
                    method: "POST", body: JSON.stringify(body)
                })
                const res = await response.json()
                if (response.status == 200) {
                    dispatch({ type: POST_COURSE_SUCCESS, res })

                } else {
                    dispatch({ type: POST_COURSE_FAIL, })
                }
            } catch (error) {
                dispatch({ type: POST_COURSE_FAIL, })
            }
        },
        getCourses: async () => {
            try {
                dispatch({ type: SEARCH_REQUEST, })
                const response = await fetch(`http://localhost:3001/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: SEARCH_SUCCESS, payload: res })
                } else {
                    dispatch({ type: SEARCH_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: SEARCH_FAIL, })
            }
        },
        getManagers: async () => {
            try {

            } catch (error) {

            }
        },
        searchWithQuery: async (param) => {
            try {
                dispatch({ type: SEARCH_REQUEST, })
                const response = await fetch(`http://localhost:3001/search?t=${param}`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: SEARCH_SUCCESS, payload: res })
                } else {
                    dispatch({ type: SEARCH_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: SEARCH_FAIL, })
            }
        },
        requestToBecomeManager: async () => {
            try {

            } catch (error) {

            }
        },
        requestToAddCourse: async () => {
            try {

            } catch (error) {

            }
        },
        requestResponseToAcceptRejectManager: async () => {
            try {

            } catch (error) {

            }
        },
        requestResponseToAcceptRejectCourse: async () => {
            try {

            } catch (error) {

            }
        },

    })
    return (
        <AppContext.Provider value={[state, contextActions.current, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider