import React from 'react';

class Users extends React.Component {

    constructor(props) {

        super(props)

        this.props.setUsers(
            [
                {
                    id: 1,
                    name: 'Denny',
                    avatarUrl: 'https://icdn.lenta.ru/images/2017/07/05/13/20170705135653293/pic_63903ceefbe163ea4ce48ab3ad502474.jpg',
                    followed: false,
                    status: 'Some status text',
                    location: {
                        country: 'USA',
                        city: 'California',
                    }
                },
                {
                    id: 2,
                    name: 'Denny',
                    avatarUrl: 'https://icdn.lenta.ru/images/2017/07/05/13/20170705135653293/pic_63903ceefbe163ea4ce48ab3ad502474.jpg',
                    followed: false,
                    status: 'Some status text',
                    location: {
                        country: 'USA',
                        city: 'California',
                    }
                },
                {
                    id: 3,
                    name: 'Denny',
                    avatarUrl: 'https://icdn.lenta.ru/images/2017/07/05/13/20170705135653293/pic_63903ceefbe163ea4ce48ab3ad502474.jpg',
                    followed: false,
                    status: 'Some status text',
                    location: {
                        country: 'USA',
                        city: 'California',
                    }
                }
            ]
        )
    }

    render() {
        return (
            <div>
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
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Users;