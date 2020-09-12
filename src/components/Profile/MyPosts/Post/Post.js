import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={style.item}>
            <img src={props.postsData.avatar} alt="Img" />
            {props.postsData.text}
            <div>
                <span>
                    {`Like ${props.postsData.like}`}
                </span> 
            </div>
        </div>
    )
}

export default Post;