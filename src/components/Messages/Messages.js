import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Messages = (props) => {

    let dialogsElements = props.dialogsData
        .map(person => <DialogItem key={person.key} id={person.id} name={person.name} />)

    let messagesElements = props.messagesData
        .map(message => <Message key={message.key} message={message.m} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={style.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Messages;