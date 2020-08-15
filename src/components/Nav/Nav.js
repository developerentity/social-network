import React from 'react';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div>
                <a className={style.item}>
                    Profile
                </a>
            </div>
            <div>
                <a className={style.item}>
                    Messages
                </a>
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