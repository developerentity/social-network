const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (body) => {
    return { type: ADD_MESSAGE, body }
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            let newMessage = {
                m: action.body
            }
            let stateCopy = { ...state }
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            return stateCopy
        }

        default:
            return state
    }
}

export default dialogsReducer;