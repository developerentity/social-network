import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Messages = (props) => {

    let dialogsElements = props.dialogsData
        .map(person => <DialogItem key={person.id} id={person.id} name={person.name} />)

    let messagesElements = props.messagesData
        .map(message => <Message key={message.m.toString()} message={message.m} />)

    const addNewMessage = (val) => {
        props.addMessageFunc(val.newMessageBody)
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
                <AddMessageFormRedux
                    onSubmit={addNewMessage}
                />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter message' />
            </div>
            <div>
                <button type='submit' > Sent message </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Messages;

