import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {

    return (
        <article className={style.article}>       
            <ProfileInfo />
            <MyPostsContainer />
        </article>
    )
}

export default Profile;