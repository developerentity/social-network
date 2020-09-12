import React from 'react';
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

    return (
        <div className={style.wrap}>
            <h4> Feed </h4>
            <div>
                <div className="containerTextarea">
                    <textarea />
                </div>
                <button>Add news</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;