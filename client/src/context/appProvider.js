import { createContext, useReducer, useRef } from "react";
import { POST_COURSE_REQUEST, POST_COURSE_FAIL, POST_COURSE_SUCCESS, SEARCH_REQUEST, SEARCH_FAIL, SEARCH_SUCCESS } from './types'

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
                dispatch({ type: POST_COURSE_REQUEST, data })
                const response = await fetch('', {
                    method: "POST", body: JSON.stringify(body)
                })
                const res = await response.json()
                if (response.status == 200) {
                    dispatch({ type: POST_COURSE_SUCCESS, data })

                } else {
                    dispatch({ type: POST_COURSE_FAIL, data })
                }
            } catch (error) {
                dispatch({ type: POST_COURSE_FAIL, data })
            }
        },
        getCourses: async () => {
            try {

            } catch (error) {

            }
        },
        getManagers: async () => {
            try {

            } catch (error) {

            }
        },
        search: async (params) => {
            try {
                dispatch({ type: SEARCH_REQUEST, data })
                const response = await fetch('', {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    dispatch({ type: SEARCH_SUCCESS, data })

                } else {
                    dispatch({ type: SEARCH_FAIL, data })
                }
            } catch (error) {
                dispatch({ type: SEARCH_FAIL, data })
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

        </AppContext.Provider>
    )
}