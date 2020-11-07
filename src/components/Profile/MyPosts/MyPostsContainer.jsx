import MyPosts from './MyPosts';
import {
    actionCreatorAddPost
} from './../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostFunc: (body) => {
            dispatch(actionCreatorAddPost(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;