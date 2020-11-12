import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    getUsers,
    setCurrentPage
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getUsersSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getCurrentPageSelector,
    getIsFetchingSelector,
    getIsFollowingProgressSelector
} from '../../redux/usersSelector';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>{this.props.isFetching
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

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingProgress: getIsFollowingProgressSelector(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps,
        {
            follow,
            unfollow,
            getUsers,
            setCurrentPage
        }
    )
)(UsersContainer);