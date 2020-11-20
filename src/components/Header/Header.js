import React from 'react';
import style from './Header.module.css';
import LoginLogoutBTN from '../Login/LoginLogoutBTN';

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.headerText}>The orbit</div>
            <div className={style.loginNL}>
                <LoginLogoutBTN />
            </div>
        </div>
    )
}

export default Header;
