import React from 'react';
import Messages from './Messages';
import {
    actionCreatorAddMessage,
    actionCreatorChangeMessage
} from './../../redux/dialogsReducer';

const MessagesContainer = (props) => {

    const addMessageFunc = () => {
        let action = actionCreatorAddMessage()
        props.dispatch(action)
    }

    const changeMessageFunc = (body) => {
        let action = actionCreatorChangeMessage(body)
        props.dispatch(action)
    }

    return (
        <Messages 
            addMessageFunc={addMessageFunc}
            changeMessageFunc={changeMessageFunc}
            dialogsData={props.messagePage.dialogsData}
            messagesData={props.messagePage.messagesData}
            newMessageText={props.messagePage.newMessageText}
        />
    )
}

export default MessagesContainer;

