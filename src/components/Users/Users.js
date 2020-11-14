import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';

const Users = (props) => {

    const { totalUsersCount,
        pageSize,
        currentPage,
        users,
        follow,
        unfollow,
        onPageChanged,
        isFollowingProgress } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((el, i) => {
                    return (
                        <span onClick={() => { onPageChanged(el) }}
                            className={currentPage === el ? `${style.activePage} ${style.paginationBtn}` : `${style.paginationBtn}`} key={i}>
                            {el}
                        </span>
                    )
                })}
            </div>

            <div className={style.usersWrap}>
                {users.map(user => <div key={user.id}>
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
                                    onClick={() => { unfollow(user.id) }}
                                    disabled={isFollowingProgress.some(id => id === user.id)}>
                                    Unfollow </button>
                                : <button
                                    onClick={() => { follow(user.id) }}
                                    disabled={isFollowingProgress.some(id => id === user.id)}>
                                    Follow </button>}
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Users;