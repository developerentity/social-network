const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_MESSAGE = "CHANGE_MESSAGE";

export const actionCreatorAddMessage = () => {
    return { type: ADD_MESSAGE }
}
export const actionCreatorChangeMessage = (text) => {
    return { type: CHANGE_MESSAGE, newText: text }
}

const initialState = {
    dialogsData: [
        { id: 1, name: "Bogdan" },
        { id: 2, name: "Vera" },
        { id: 3, name: "Nadezhda" },
        { id: 4, name: "Lyubov" }
    ],
    messagesData: [
        { m: "First message to Dev" },
        { m: "Second random message" },
        { m: "Third crazy message" }
    ],
    newMessageText: "Placeholder"
};

const dialogsReducer = (store = initialState, action) => {

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