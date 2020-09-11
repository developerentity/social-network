import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;