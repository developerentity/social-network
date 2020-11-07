import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post
            key={post.text}
            avatar={post.avatar}
            text={post.text}
            like={post.like}
        />)

    let addPost = (val) => {
        props.addPostFunc(val.newPostBody);
    }

    return (
        <div className={style.wrap}>
            <h4> Feed </h4>
            <AddPostFormRedux
                onSubmit={addPost}
            />
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="containerTextarea">
                <Field
                    component='textarea'
                    name='newPostBody'
                    placeholder='Please enter text' />
            </div>
            <button type='submit'>Add news</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'addPostForm' })(AddPostForm)

export default MyPosts;