import Axios from 'axios';
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
        onPageChanged } = props;

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

            {users.map(user => <div key={user.id}>
                <div>
                    <div className={style.usersAvatarWrap}>
                        <NavLink to={`/profile/${user.id}`} >
                            <img src={user.photos.small || 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png'} alt='...' />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '578a5f36-0f95-4a91-a1d4-86904b25ee94'
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            unfollow(user.id)
                                        }
                                    })
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '578a5f36-0f95-4a91-a1d4-86904b25ee94'
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            follow(user.id)
                                        }
                                    })
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Users;