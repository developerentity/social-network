import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {

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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

const setInitializedSuccess = (): InitializedSuccessActionType => {
    return { type: INITIALIZED_SUCCESS }
}

export const getInitializeApp = () => {
    return async (dispatch: any) => {
        try {
            let promise = dispatch(getAuth())
            await Promise.all([promise])
            dispatch(setInitializedSuccess())
        } catch (err) {
            console.error(err)
        }
    }
}

export default appReducer;