import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_POST = "CHANGE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const actionCreatorAddPost = () => {
    return { type: ADD_POST }
}
export const actionCreatorChangePost = (text) => {
    return { type: CHANGE_POST, newText: text }
}
const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
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
    newPostText: 'Placeholder',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                text: state.newPostText,
                like: 0
            }
            let stateCopy = { ...state }
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case CHANGE_POST: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText;
            return stateCopy
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        default:
            return state
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
            .catch(err => console.error(err))
    }
}

export default profileReducer;