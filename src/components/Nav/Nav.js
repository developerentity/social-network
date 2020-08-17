import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.activeName}>
                    Profile
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/messages' activeClassName={style.activeName}>
                    Messages
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/news' activeClassName={style.activeName}>
                    News
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/music' activeClassName={style.activeName}>
                    Music
                </NavLink>
            </div>
            <div  className={style.item}>
                <NavLink to='/settings' activeClassName={style.activeName}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;