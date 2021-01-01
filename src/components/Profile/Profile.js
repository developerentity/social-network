import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <article className={style.article}>
            <ProfileInfo
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                userStatus={props.userStatus}
                getUpdateStatus={props.getUpdateStatus}
            />
            <MyPostsContainer />
        </article>
    )
}

export default Profile;