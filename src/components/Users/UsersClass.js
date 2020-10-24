import React from 'react';
import Axios from 'axios';
import style from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map((el, i) => {
                        return <span className={this.props.currentPage === el ? `${style.activePage} ${style.paginationBtn}` : `${style.paginationBtn}`} key={i}
                            onClick={() => { this.onPageChanged(el) }}>{el}</span>
                    })}
                </div>

                {this.props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img src={user.avatarUrl} alt='...' />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{user.location?.country}</div>
                            <div>{user.location?.city}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Users;