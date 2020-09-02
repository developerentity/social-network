import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

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

let dialogsElements = dialogsData
    .map(person => <DialogItem id={person.id} name={person.name} />)

let messagesElements = messagesData
    .map(message => <Message message={message.m} />)

const Messages = () => {
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