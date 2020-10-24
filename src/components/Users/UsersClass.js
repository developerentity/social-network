import React from 'react';
import Axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        
        super(props)

        Axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
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