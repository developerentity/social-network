import Messages from './Messages';
import {
    actionCreatorAddMessage,
    actionCreatorChangeMessage
} from './../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
        newMessageText: state.messagePage.newMessageText,
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

const AuthRedirectComponent = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer;

