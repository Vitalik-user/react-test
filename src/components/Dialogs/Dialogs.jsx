import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} icon={d.icon}/>);
    let messagesElement = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let onAddMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if(!props.isAuth) return <Navigate to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;