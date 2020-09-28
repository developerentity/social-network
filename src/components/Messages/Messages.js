import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
    actionCreatorAddMessage,
    actionCreatorChangeMessage
} from './../../data/store';

const Messages = (props) => {

    let dialogsElements = props.messagePage.dialogsData
        .map(person => <DialogItem key={person.id} id={person.id} name={person.name} />)

    let messagesElements = props.messagePage.messagesData
        .map(message => <Message key={message.m.toString()} message={message.m} />)

    let newPostElement = React.createRef();

    const addMessage = () => {
        let action = actionCreatorAddMessage()
        props.dispatch(action)
    }

    const onChangeMessage = () => {
        let text = newPostElement.current.value;
        let action = actionCreatorChangeMessage(text)
        props.dispatch(action)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={style.messages}>

                {messagesElements}

            </div>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onChangeMessage}
                        value={props.newMessageText}
                    />
                </div>
                <button onClick={addMessage}> Sent message </button>
            </div>
        </div>
    )
}

export default Messages;

