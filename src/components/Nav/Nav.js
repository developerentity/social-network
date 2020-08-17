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
                <a className={style.item}>
                    News
                </a>
            </div>
            <div>
                <a className={style.item}>
                    Music
                </a>
            </div>
            <div>
                <a className={style.item}>
                    Settings
                </a>
            </div>
        </nav>
    )
}

export default Nav;