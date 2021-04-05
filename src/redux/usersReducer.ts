import { UserType } from './../types/types';
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
    users: [] as Array<UserType>,
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {

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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
    return { type: FOLLOW, userId }
}

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => {
    return { type: UNFOLLOW, userId }
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return { type: SET_USERS, users }
}

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
}

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

type SetFollowingProgressActionType = {
    type: typeof SET_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const setFollowingProgress = (isFetching: boolean, userId: number): SetFollowingProgressActionType => {
    return { type: SET_FOLLOWING_PROGRESS, isFetching, userId }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
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

const followUnfollowFlow = async (userId: number, dispatch: any, apiMethod: any, actionCreator: any) => {
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

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export default usersReducer;