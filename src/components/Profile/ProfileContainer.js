import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

const ContainerComponentWithUrl = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getProfile
})(ContainerComponentWithUrl);