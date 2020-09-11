import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg" alt="Img" />
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;