import React from 'react';
import style from './../Messages.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
            <br />
            <br />
        </div>
    )
}

export default Message;