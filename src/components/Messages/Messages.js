import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let dialogsData = [
    {key: 1, id: 1, name: "Bogdan"},
    {key: 2, id: 2, name: "Vera"},
    {key: 3, id: 3, name: "Nadezhda"},
    {key: 4, id: 4, name: "Lyubov"}
]

let messagesData = [
    {key: 1, m: "First message to Dev"},
    {key: 2, m: "Second random message"},
    {key: 3, m: "Third crazy message"}
]

let dialogsElements = dialogsData
    .map(person => <DialogItem key={person.key} id={person.id} name={person.name} />)

let messagesElements = messagesData
    .map(message => <Message key={message.key} message={message.m} />)

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