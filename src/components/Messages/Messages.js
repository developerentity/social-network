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

let dialogsData = [
    {id: 1, name: "Bogdan"},
    {id: 2, name: "Vera"},
    {id: 3, name: "Nadezhda"},
    {id: 4, name: "Lyubov"}
]

let messagesData = [
    {id: 1, m: "First message to Dev"},
    {id: 2, m: "Second random message"},
    {id: 3, m: "Third crazy message"},
]

const Messages = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                <DialogItem
                    name={dialogsData[0].name}
                    id={dialogsData[0].id}
                />
                <DialogItem
                    name={dialogsData[1].name}
                    id={dialogsData[1].id}
                />
                <DialogItem
                    name={dialogsData[2].name}
                    id={dialogsData[2].id}
                />
                <DialogItem
                    name={dialogsData[3].name}
                    id={dialogsData[3].id}
                />               
            </div>


            <div className={style.messages}>

                <Message
                    message={messagesData[0].m}
                />              
                <Message
                    message={messagesData[1].m}
                />              
                <Message
                    message={messagesData[2].m}
                />              
            </div>

        </div>
    )
}

export default Messages;