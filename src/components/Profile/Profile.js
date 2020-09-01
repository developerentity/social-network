import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <article className={style.article}>       
            <ProfileInfo />
            <MyPosts />
        </article>
    )
}

export default Profile;