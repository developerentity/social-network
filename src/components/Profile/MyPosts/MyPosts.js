import React from 'react';
import style from './MyPosts.module.css';

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
                {/* <Post message='hi, this is my first post' likesCount='11' />
                <Post message='Yo, this is my second post' likesCount='1144' /> */}
            </div>
        </div>
    )
}

export default MyPosts;