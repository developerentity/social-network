import React from 'react';
import MyPosts from './MyPosts';
import {
    actionCreatorAddPost,
    actionCreatorChangePost
} from './../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPostFunc = () => {
                        let action = actionCreatorAddPost();
                        store.dispatch(action);
                    }
                    let changePostFunc = (body) => {
                        let action = actionCreatorChangePost(body);
                        store.dispatch(action)
                    }
                    return (
                        <MyPosts
                            changePostFunc={changePostFunc}
                            addPostFunc={addPostFunc}
                            newPostText={state.profilePage.newPostText}
                            postsData={state.profilePage.postsData}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;