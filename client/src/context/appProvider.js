import { createContext, useReducer, useRef } from "react";
import {
    POST_COURSE_REQUEST,
    POST_COURSE_FAIL,
    POST_COURSE_SUCCESS,

    SEARCH_REQUEST,
    SEARCH_FAIL,
    SEARCH_SUCCESS,

    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAIL,

    GET_MANAGERS_REQUEST,
    GET_MANAGERS_SUCCESS,
    GET_MANAGERS_FAIL,

    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,

    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL,

    GUEST_REQUEST, GUEST_SUCCESS, GUEST_FAIL, POST_REJECT_COURSE_ADD_BY_MANAGER_SUCCESS, POST_REJECT_COURSE_ADD_BY_MANAGER_FAIL, POST_REJECT_COURSE_ADD_BY_MANAGER_REQUEST, POST_ACCEPT_MANAGER_ADD_REQUEST_REQUEST, POST_ACCEPT_MANAGER_ADD_REQUEST_SUCCESS, POST_ACCEPT_MANAGER_ADD_REQUEST_FAIL, POST_ACCEPT_COURSE_ADD_BY_MANAGER_REQUEST, POST_ACCEPT_COURSE_ADD_BY_MANAGER_SUCCESS, POST_ACCEPT_COURSE_ADD_BY_MANAGER_FAIL,

    POST_TO_REQUEST_MANAGER_FAIL,
    POST_TO_REQUEST_MANAGER_SUCCESS,
    POST_TO_REQUEST_MANAGER_REQUEST,

    POST_REQUEST_TO_ADD_COURSE_FAIL,
    POST_REQUEST_TO_ADD_COURSE_REQUEST,
    POST_REQUEST_TO_ADD_COURSE_SUCCESS,
} from './types'

const initialState = {
    loading: false,
    browseCourses: [],
    managers: [],
    courses: []
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

        case 'GET_COURSE_REQUEST':
            return { ...state, loading: true, courses: [] }
        case 'GET_COURSE_SUCCESS':
            return { ...state, loading: false, courses: action.payload }
        case 'GET_COURSE_FAIL':
            return { ...state, loading: false, }

        case 'GET_MANAGERS_REQUEST':
            return { ...state, loading: true, managers: [] }
        case 'GET_MANAGERS_SUCCESS':
            return { ...state, loading: false, managers: action.payload }
        case 'GET_MANAGERS_FAIL':
            return { ...state, loading: false, }

        case 'LOGIN_REQUEST':
            return { ...state, loading: true, auth: {} }
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, auth: action.payload }
        case 'LOGIN_FAIL':
            return { ...state, loading: false, }

        case 'SIGN_UP_REQUEST':
            return { ...state, loading: true, auth: {} }
        case 'SIGN_UP_SUCCESS':
            return { ...state, loading: false, auth: action.payload }
        case 'SIGN_UP_FAIL':
            return { ...state, loading: false, }

        case 'GUEST_REQUEST':
            return { ...state, loading: true, auth: {} }
        case 'GUEST_SUCCESS':
            return { ...state, loading: false, auth: action.payload }
        case 'GUEST_FAIL':
            return { ...state, loading: false, }

        default:
            break;
    }
}

export const AppContext = createContext(initialState);

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextActions = useRef({

        login: async (body) => {
            try {
                dispatch({ type: LOGIN_REQUEST, })
                const response = await fetch(`http://localhost:3001/login`, {
                    method: "POST",
                    body: JSON.stringify(body)
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: LOGIN_SUCCESS, payload: res })
                } else {
                    dispatch({ type: LOGIN_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: LOGIN_FAIL, })
            }
        },
        signUp: async (body) => {
            try {
                dispatch({ type: SIGN_UP_REQUEST, })
                const response = await fetch(`http://localhost:3001/signup`, {
                    method: "POST",
                    body: JSON.stringify(body)
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: SIGN_UP_SUCCESS, payload: res })
                } else {
                    dispatch({ type: SIGN_UP_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: SIGN_UP_FAIL, })
            }
        },
        guest: async (body) => {
            try {
                dispatch({ type: GUEST_REQUEST, })
                const response = await fetch(`http://localhost:3001/guest`, {
                    method: "POST",
                    body: JSON.stringify(body)
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: GUEST_SUCCESS, payload: res })
                } else {
                    dispatch({ type: GUEST_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: GUEST_FAIL, })
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
                dispatch({ type: GET_COURSE_REQUEST, })
                const response = await fetch(`http://localhost:3001/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: GET_COURSE_SUCCESS, payload: res })
                } else {
                    dispatch({ type: GET_COURSE_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: GET_COURSE_FAIL, })
            }
        },
        getManagers: async () => {
            try {
                dispatch({ type: GET_MANAGERS_REQUEST, })
                const response = await fetch(`http://localhost:3001/managers`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: GET_MANAGERS_SUCCESS, payload: res })
                } else {
                    dispatch({ type: GET_MANAGERS_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: GET_MANAGERS_FAIL, })
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
                dispatch({ type: POST_TO_REQUEST_MANAGER_REQUEST, })
                const response = await fetch(`http://localhost:3001/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: POST_TO_REQUEST_MANAGER_SUCCESS, payload: res })
                } else {
                    dispatch({ type: POST_TO_REQUEST_MANAGER_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: POST_TO_REQUEST_MANAGER_FAIL, })
            }
        },
        requestToAddCourse: async () => {
            try {
                dispatch({ type: POST_REQUEST_TO_ADD_COURSE_REQUEST, })
                const response = await fetch(`http://localhost:3001/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: POST_REQUEST_TO_ADD_COURSE_SUCCESS, payload: res })
                } else {
                    dispatch({ type: POST_REQUEST_TO_ADD_COURSE_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: POST_REQUEST_TO_ADD_COURSE_FAIL, })
            }
        },
        requestResponseToAcceptManager: async () => {
            try {
                dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_REQUEST, })
                const response = await fetch(`http://localhost:3001/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_SUCCESS, payload: res })
                } else {
                    dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_FAIL, })
            }
        },
        requestResponseToAcceptCourse: async () => {
            try {
                dispatch({ type: POST_ACCEPT_COURSE_ADD_BY_MANAGER_REQUEST, })
                const response = await fetch(`http://localhost:3001/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: POST_ACCEPT_COURSE_ADD_BY_MANAGER_SUCCESS, payload: res })
                } else {
                    dispatch({ type: POST_ACCEPT_COURSE_ADD_BY_MANAGER_FAIL, })
                }
            } catch (error) {
                console.log(error)
                dispatch({ type: POST_ACCEPT_COURSE_ADD_BY_MANAGER_FAIL, })
            }
        },
        requestResponseToRejectManager: async () => {
            try {
                dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_REQUEST, })
                const response = await fetch(`http://localhost:3001/reject/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_SUCCESS, payload: res })
                } else {
                    dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_FAIL, })
                }
            } catch (error) {
                dispatch({ type: POST_ACCEPT_MANAGER_ADD_REQUEST_FAIL, })
            }
        },
        requestResponseToRejectCourse: async () => {
            try {
                dispatch({ type: POST_REJECT_COURSE_ADD_BY_MANAGER_REQUEST, })
                const response = await fetch(`http://localhost:3001/reject/courses`, {
                    method: "GET",
                })
                const res = await response.json()
                if (response.status == 200) {
                    console.log("res", res)
                    dispatch({ type: POST_REJECT_COURSE_ADD_BY_MANAGER_SUCCESS, payload: res })
                } else {
                    dispatch({ type: POST_REJECT_COURSE_ADD_BY_MANAGER_FAIL, })
                }
            } catch (error) {
                dispatch({ type: POST_REJECT_COURSE_ADD_BY_MANAGER_FAIL, })
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