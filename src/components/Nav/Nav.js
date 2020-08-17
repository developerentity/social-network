import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to='/profile' className={style.item}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/messages' className={style.item}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='/news' className={style.item}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to='/music' className={style.item}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={style.item}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;