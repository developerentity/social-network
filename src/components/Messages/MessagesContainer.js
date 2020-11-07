import Messages from './Messages';
import { actionCreatorAddMessage } from './../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessageFunc: (body) => {
            dispatch(actionCreatorAddMessage(body))
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