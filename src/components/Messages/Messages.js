import React from 'react';
import style from './Messages.module.css';

const Messages = () => {
    return (
        <>
            <div className={style.left}>
                <h2>
                    Left side
                </h2>
            </div>
            <div className={style.right}>
                <h2>
                    Right side
                </h2>
            </div>
        </>
    )
}

export default Messages;