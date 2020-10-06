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

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPostFunc();
    }
    
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.changePostFunc(text);
    }

    return (
        <div className={style.wrap}>
            <h4> Feed </h4>
            <div>
                <div className="containerTextarea">
                    <textarea
                        ref={newPostElement}
                        onChange={onChangePost}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add news</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;