import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export const actionCreatorAddPost = (body) => {
    return { type: ADD_POST, body }
}
const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
const setUserStatus = (statusText) => {
    return { type: SET_USER_STATUS, statusText }
}
const savePhotoSuccess = (photos) => {
    return { type: SAVE_PHOTO_SUCCESS, photos }
}

const initialState = {
    postsData: [
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `First post text`,
            like: 13
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Second post text`,
            like: 21
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Third post text`,
            like: 8
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Fourth post text`,
            like: 5
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Fifth post text`,
            like: 21
        }
    ],
    profile: null,
    userStatus: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                text: action.body,
                like: 0
            }
            let stateCopy = { ...state }
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            return stateCopy
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_USER_STATUS: {
            return { ...state, userStatus: action.statusText }
        }

        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }

        default:
            return state
    }
}

export const getProfile = (userId) => {
    return async dispatch => {
        try {
            const data = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(data.data))
        } catch (err) {
            console.error(err)
        }
    }
}
export const getStatus = (userId) => {
    return async dispatch => {
        try {
            const res = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(res.data))
        } catch (err) {
            console.error(err)
        }
    }
}
export const getUpdateStatus = (statusText) => {
    return async dispatch => {
        try {
            const res = await profileAPI.updateStatus(statusText)
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(statusText))
            }
        }
        catch (err) {
            console.error(err)
        }
    }
}
export const savePhoto = (file) => {
    return async dispatch => {
        try {
            const res = await profileAPI.savePhoto(file)
            if (res.data.resultCode === 0) {
                dispatch(savePhotoSuccess(res.data.data.photos))
            }
        }
        catch (err) {
            console.error(err)
        }
    }
}
export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        try {
            const userId = getState().auth.userId
            const res = await profileAPI.saveProfile(profile)
            if (res.data.resultCode === 0) {
                dispatch(getProfile(userId))
            }
            return Promise.reject(res.data.message)
        }
        catch (err) {
            console.error(err)
            return Promise.reject()
        }
    }
}

export default profileReducer;