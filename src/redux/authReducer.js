import { FORM_ERROR } from "final-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth } }
}

export const getAuth = () => {
    return async (dispatch) => {
        try {
            const res = await authAPI.me();
            if (res.data.resultCode === 0) {
                let { id, email, login } = res.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        } catch (err) {
            return console.error(err);
        }
    }
}

export const getLogin = (email, password, rememberMe) => {
    return async dispatch => {
        try {
            const res = await authAPI.login(email, password, rememberMe)
            if (res.data.resultCode === 0) {
                dispatch(getAuth())
                return null
            } else {
                return { [FORM_ERROR]: res.data.messages.length > 0 ? res.data.messages[0] : 'error' }
            }
        } catch (err) {
            console.error(err)
        }
    }
}
export const getLogout = () => {
    return async dispatch => {
        try {
            const res = await authAPI.logout()
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export default authReducer;