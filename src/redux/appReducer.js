import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

const setInitializedSuccess = () => {
    return { type: INITIALIZED_SUCCESS }
}

export const getInitializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth())
        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedSuccess())
            })
    }
}

export default appReducer;