const ADD_MESSAGE = "ADD_MESSAGE"

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    m: string
}

const initialState = {
    dialogsData: [
        { id: 1, name: "Bogdan" },
        { id: 2, name: "Vera" },
        { id: 3, name: "Nadezhda" },
        { id: 4, name: "Lyubov" }
    ] as Array<DialogType>,
    messagesData: [
        { m: "First message to Dev" },
        { m: "Second random message" },
        { m: "Third crazy message" }
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

type AddMessageType = {
    type: typeof ADD_MESSAGE
    body: string
}

export const addMessage = (body: string): AddMessageType => {
    return { type: ADD_MESSAGE, body }
}

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

export default dialogsReducer