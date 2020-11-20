import { usersAPI } from "../api/api";
import { updateObjInArr } from "../util/objectHelper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_FOLLOWING_PROGRESS = "SET_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return { ...state, users: updateObjInArr(state.users, action.userId, 'id', { followed: true }) }

        case UNFOLLOW:
            return { ...state, users: updateObjInArr(state.users, action.userId, 'id', { followed: false }) }

        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export const followSuccess = (userId) => {
    return { type: FOLLOW, userId }
}
export const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
}
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const setFollowingProgress = (isFetching, userId) => {
    return { type: SET_FOLLOWING_PROGRESS, isFetching, userId }
}

export const getUsers = (currentPage, pageSize) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        try {
            const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(data.data.items))
            dispatch(setTotalUsersCount(data.data.totalCount))
            dispatch(toggleIsFetching(false))
        } catch (err) {
            console.error(err)
            dispatch(toggleIsFetching(false))
        }
    }
}

const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(setFollowingProgress(true, userId))
    try {
        const res = await apiMethod(userId)
        if (res.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(setFollowingProgress(false, userId))
    } catch (err) {
        console.error(err)
        dispatch(setFollowingProgress(false, userId))
    }
}

export const unfollow = userId => {
    return async dispatch => {
        followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
export const follow = userId => {
    return async dispatch => {
        followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export default usersReducer;