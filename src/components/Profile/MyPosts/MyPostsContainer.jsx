import MyPosts from './MyPosts';
import {
    actionCreatorAddPost,
    actionCreatorChangePost
} from './../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostFunc: () => {
            dispatch(actionCreatorAddPost())
        },
        changePostFunc: (body) => {
            dispatch(actionCreatorChangePost(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;