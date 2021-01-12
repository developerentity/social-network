import React from 'react';
import { Form, Field } from 'react-final-form'
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {

    const postsElements = props.postsData
        .map(post => <Post
            key={post.text}
            avatar={post.avatar}
            text={post.text}
            like={post.like}
        />)

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const addPost = async val => {
        await sleep(200)
        props.addPostFunc(val.newPostBody);
    }

    return (
        <div className={style.wrap}>
            <h4> Feed </h4>
            <AddPostForm
                onSubmit={addPost}
            />
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddPostForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            initialValues={{ employed: true }}
            render={({ handleSubmit, submitting, pristine, form }) => (
                <form
                    onSubmit={event => {
                        handleSubmit(event).then(() => form.reset())
                    }}>
                    <div className="containerTextarea">
                        <Field
                            component='textarea'
                            name='newPostBody'
                            placeholder='Please enter text' />
                    </div>
                    <button type="submit" disabled={submitting || pristine}> Add post </button>
                </form>
            )}
        />
    )
}

export default MyPosts;