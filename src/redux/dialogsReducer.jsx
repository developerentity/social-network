const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_MESSAGE = "CHANGE_MESSAGE";

export const actionCreatorAddMessage = () => {
    return { type: ADD_MESSAGE }
}
export const actionCreatorChangeMessage = (text) => {
    return { type: CHANGE_MESSAGE, newText: text }
}

const dialogsReducer = (store, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                m: store.newMessageText
            }
            store.messagesData.push(newMessage)
            store.newMessageText = ''
            return store
        case CHANGE_MESSAGE:
            store.newMessageText = action.newText
            return store
        default:
            return store
    }
}

export default dialogsReducer;