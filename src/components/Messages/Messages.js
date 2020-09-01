import React from 'react';
import style from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={style.act}>
                {props.name}
            </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
            <br />
            <br />
        </div>
    )
}


const Messages = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                <DialogItem
                    name="Bohdan"
                    id="1"
                />
                <DialogItem
                    name="Vera"
                    id="2"
                />
                <DialogItem
                    name="Nadezhda"
                    id="3"
                />
                <DialogItem
                    name="Lyubov"
                    id="4"
                />

            </div>


            <div className={style.messages}>

                <Message
                    message="First message to Dev"
                />
                <Message
                    message="Second random message"
                />
                <Message
                    message="Third crazy message"
                />
            </div>

        </div>
    )
}

export default Messages;