import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
// import sidebarReducer from './sidebarReducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._callSubscriber(this._state)
    }
}

export default store;