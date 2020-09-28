const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

let store = {
    _callSubscriber() {
        console.log("Changed")
    },
    _state: {
        messagePage: {
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
        },
        profilePage: {
            postsData: [
                {
                    avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                    text: `First post text`,
                    like: 13
                },
                {
                    avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                    text: `Second post text`,
                    like: 21
                },
                {
                    avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                    text: `Third post text`,
                    like: 8
                },
                {
                    avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                    text: `Fourth post text`,
                    like: 5
                },
                {
                    avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                    text: `Fifth post text`,
                    like: 21
                }
            ],
            newPostText: 'Placeholder'
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                text: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === CHANGE_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                m: this._state.messagePage.newMessageText
            }
            this._state.messagePage.messagesData.push(newMessage)
            this._state.messagePage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === CHANGE_MESSAGE) {
            this._state.messagePage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const actionCreatorAddPost = () => {
    return { type: ADD_POST }
};
export const actionCreatorChangePost = (text) => {
    return { type: CHANGE_POST, newText: text }
}
export const actionCreatorAddMessage = () => {
    return { type: ADD_MESSAGE }
}
export const actionCreatorChangeMessage = (text) => {
    return { type: CHANGE_MESSAGE, newText: text }
}

export default store;