import React from 'react';
import MyPosts from './MyPosts';
import {
    actionCreatorAddPost,
    actionCreatorChangePost
} from './../../../redux/profileReducer';

const MyPostsContainer = (props) => {

    let addPostFunc = () => {
        let action = actionCreatorAddPost();
        props.dispatch(action);
    }

    let changePostFunc = (body) => {
        let action = actionCreatorChangePost(body);
        props.dispatch(action)
    }

    return (
        <MyPosts
            changePostFunc={changePostFunc}
            addPostFunc={addPostFunc}
            newPostText={props.profilePage.newPostText}
            postsData={props.profilePage.postsData}
        />
    )
}

export default MyPostsContainer;