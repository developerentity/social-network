export const getUsersSelector = (state) => {
    return state.usersPage.users.filter(item => true) 
} // example sophisticated selector
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