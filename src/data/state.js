let store = {
    _rerenderEntireTree() {
        console.log("Changed")
    },
    _state: {
        messagePage: {
            dialogsData: [
                { key: 1, id: 1, name: "Bogdan" },
                { key: 2, id: 2, name: "Vera" },
                { key: 3, id: 3, name: "Nadezhda" },
                { key: 4, id: 4, name: "Lyubov" }
            ],
            messagesData: [
                { key: 1, m: "First message to Dev" },
                { key: 2, m: "Second random message" },
                { key: 3, m: "Third crazy message" }
            ]
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

    addPost() {
        let newPost = {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree(this._state)
    },

    changePost(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state)
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
}

export default store;