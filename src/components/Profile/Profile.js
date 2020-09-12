import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <article className={style.article}>       
            <ProfileInfo />
            <MyPosts 
                postsData={props.postsData}
            />
        </article>
    )
}

export default Profile;