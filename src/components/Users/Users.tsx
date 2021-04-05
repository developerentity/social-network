import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Pagination from "react-js-pagination"
import style from './Users.module.css'
import { UserType } from '../../types/types'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    isFollowingProgress: Array<number>
}
const Users: FC<PropsType> = (props) => {

    const { totalUsersCount,
        pageSize,
        currentPage,
        users,
        follow,
        unfollow,
        onPageChanged,
        isFollowingProgress } = props;

    return (
        <div>
            <div className={style.usersWrap}>
                {users.map(user => <div key={user.id} className={style.userItem}>
                    <div className={style.userWrap}>
                        <div className={style.userAvatarWrap}>
                            <NavLink to={`/profile/${user.id}`} >
                                <img src={user.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt='...' />
                            </NavLink>
                        </div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            {user.followed
                                ? <button
                                    className='btn btn-light'
                                    onClick={() => { unfollow(user.id) }}
                                    disabled={isFollowingProgress.some(id => id === user.id)}>
                                    Unfollow </button>
                                : <button
                                    className='btn btn-outline-light'
                                    onClick={() => { follow(user.id) }}
                                    disabled={isFollowingProgress.some(id => id === user.id)}>
                                    Follow </button>}
                        </div>
                    </div>
                </div>)}
            </div>
            <div className={style.paginationWrap}>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={totalUsersCount}
                    pageRangeDisplayed={5}
                    onChange={onPageChanged}
                    itemClass='page-item'
                    linkClass='page-link'
                />
            </div>
        </div>
    )
}

export default Users;