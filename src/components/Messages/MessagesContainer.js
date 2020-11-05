import Messages from './Messages';
import {
    actionCreatorAddMessage,
    actionCreatorChangeMessage
} from './../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Messages);