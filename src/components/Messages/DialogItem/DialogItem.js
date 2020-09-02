import React from 'react';
import style from './../Messages.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={style.act}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;