import React from 'react';
import Messages from './Messages';
import {
    actionCreatorAddMessage,
    actionCreatorChangeMessage
} from './../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';

const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addMessageFunc = () => {
                        const action = actionCreatorAddMessage()
                        store.dispatch(action)
                    }

                    const changeMessageFunc = (body) => {
                        const action = actionCreatorChangeMessage(body)
                        store.dispatch(action)
                    }
                    return (
                        <Messages
                            addMessageFunc={addMessageFunc}
                            changeMessageFunc={changeMessageFunc}
                            dialogsData={state.messagePage.dialogsData}
                            messagesData={state.messagePage.messagesData}
                            newMessageText={state.messagePage.newMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;

