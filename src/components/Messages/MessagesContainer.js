import Messages from './Messages';
import {
    actionCreatorAddMessage,
    actionCreatorChangeMessage
} from './../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
        newMessageText: state.messagePage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessageFunc: () => {
            dispatch(actionCreatorAddMessage())
        },
        changeMessageFunc: (body) => {
            dispatch(actionCreatorChangeMessage(body))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

