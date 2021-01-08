import { FORM_ERROR } from "final-form";
import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL_SUCCESS = "SET_CAPTCHA_URL_SUCCESS"

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
}

export const setCaptchaUrlSuccess = (captchaUrl) => {
    return { type: SET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }
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

export const getLogin = (email, password, rememberMe, captcha) => {
    return async dispatch => {
        try {
            const res = await authAPI.login(email, password, rememberMe, captcha)
            if (res.data.resultCode === 0) {
                dispatch(getAuth())
                return null
            } else {
                if (res.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                return { [FORM_ERROR]: res.data.messages.length > 0 ? res.data.messages[0] : 'error' }
            }
        } catch (err) {
            console.error(err)
        }
    }
}
export const getCaptchaUrl = () => {
    return async dispatch => {
        try {
            const res = await securityAPI.getCaptchaUrl()
            const captchaUrl = res.data.url
            dispatch(setCaptchaUrlSuccess(captchaUrl))
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