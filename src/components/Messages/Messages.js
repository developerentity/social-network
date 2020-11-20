import React from 'react';
import style from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Form, Field } from 'react-final-form'
import { composeValidators, minLength, required } from '../../util/validators';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from './../../redux/dialogsReducer';

const Messages = () => {

    const dispatch = useDispatch()
    const dialogsData = useSelector(state => state.messagePage.dialogsData)
    const messagesData = useSelector(state => state.messagePage.messagesData)

    let dialogsElements = dialogsData
        .map(person => <DialogItem key={person.id} id={person.id} name={person.name} />)

    let messagesElements = messagesData
        .map(message => <Message key={message.m.toString()} message={message.m} />)

    const addNewMessage = (val) => {
        dispatch(addMessage(val.newMessageBody))
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
                <AddMessageForm
                    onSubmit={addNewMessage}
                />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    return (
        <>
            <Form
                onSubmit={props.onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="newMessageBody"
                            validate={composeValidators(required, minLength(3))}
                        >
                            {({ input, meta }) => (
                                <div>
                                    <label>New message</label>
                                    <textarea {...input} placeholder="Enter message" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>


                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </>
    )
}

export default withAuthRedirect(Messages);

