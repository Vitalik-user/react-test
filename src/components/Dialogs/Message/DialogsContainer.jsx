import React from 'react';
import Dialogs from "../Dialogs";
import {addMessageActionCreator, updateNewMessageTextActiveCreator} from "../../../redux/dialogs-reducer";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActiveCreator(text));
        }
    }
}


/*let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);