import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers,
    (items) => {
        return items.filter(item => true)
    }
) // example sophisticated selector

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}
export const getIsFollowingProgressSelector = (state) => {
    return state.usersPage.isFollowingProgress
}