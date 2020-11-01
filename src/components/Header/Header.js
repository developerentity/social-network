import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {

    return (
        <div className={style.header}>
            <h1>Header text</h1>
            <div className={style.loginNL}>
                {props.isAuth ?
                    <div>{props.login}</div> :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;
