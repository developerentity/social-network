import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    getUsers,
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
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { UserType } from '../../types/types';

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: Array<number>
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {

        return (
            <>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                        isFollowingProgress={this.props.isFollowingProgress}
                    />}
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingProgress: getIsFollowingProgressSelector(state),
    }
}

export default compose(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {
        follow,
        unfollow,
        getUsers,
    })
)(UsersContainer);