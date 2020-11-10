import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_FORM_ERROR = "SET_AUTH_FORM_ERROR";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    authFormError: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        case SET_AUTH_FORM_ERROR:
            return {
                ...state,
                authFormError: action.error
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth } }
}

const setAuthFormError = (error) => {
    return { type: SET_AUTH_FORM_ERROR, error }
}

export const getAuth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let { id, email, login } = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
            .catch(err => console.error(err))
    }
}

export const getLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuth())
                } else {
                    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'error'
                    dispatch(setAuthFormError(message))
                }
            })
            .catch(err => console.error(err))
    }
}
export const getLogout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
            .catch(err => console.error(err))
    }
}

export default authReducer;