import React from 'react';
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogsItems}>
            <div>
                {props.icon}
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}
export default DialogItem;