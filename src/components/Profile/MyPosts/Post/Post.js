import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={style.item}>
            <img src={props.avatar} alt="..." />
            {props.text}
            <div>
                <span>
                    {`Like ${props.like}`} 
                </span> 
            </div>
        </div>
    )
}

export default Post;