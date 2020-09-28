const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

export const actionCreatorAddMessage = () => {
    return { type: ADD_MESSAGE }
}
export const actionCreatorChangeMessage = (text) => {
    return { type: CHANGE_MESSAGE, newText: text }
}

const dialogsReducer = (store, action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            m: store.newMessageText
        }
        store.messagesData.push(newMessage)
        store.newMessageText = ''
    }
    else if (action.type === CHANGE_MESSAGE) {
        store.newMessageText = action.newText
    }

    return store;
}

export default dialogsReducer;