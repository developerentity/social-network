import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
    getUsersSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getCurrentPageSelector,
    getIsFetchingSelector,
    getIsFollowingProgressSelector
} from '../../redux/usersSelector';

const UsersContainer = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => getUsersSelector(state))
    const pageSize = useSelector(state => getPageSizeSelector(state))
    const totalUsersCount = useSelector(state => getTotalUsersCountSelector(state))
    const currentPage = useSelector(state => getCurrentPageSelector(state))
    const isFetching = useSelector(state => getIsFetchingSelector(state))
    const isFollowingProgress = useSelector(state => getIsFollowingProgressSelector(state))

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
        return () => dispatch(setCurrentPage(1))
    }, [dispatch, currentPage, pageSize])

    const onPageChanged = (pageNumber) => {
        dispatch(getUsers(pageNumber, pageSize))
    }

    return (
        <>{isFetching
            ? <Preloader />
            : <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                users={users}
                follow={dispatch(follow)}
                unfollow={dispatch(unfollow)}
                onPageChanged={onPageChanged}
                isFollowingProgress={isFollowingProgress}
            />}
        </>
    )
}

export default withAuthRedirect(UsersContainer);