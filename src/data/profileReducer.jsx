const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST";

export const actionCreatorAddPost = () => {
    return { type: ADD_POST }
}
export const actionCreatorChangePost = (text) => {
    return { type: CHANGE_POST, newText: text }
}

const profileReducer = (store, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: store.newPostText,
            like: 0
        }
        store.postsData.push(newPost)
        store.newPostText = ''
    }
    else if (action.type === CHANGE_POST) {
        store.newPostText = action.newText;
    }

    return store;
}

export default profileReducer;