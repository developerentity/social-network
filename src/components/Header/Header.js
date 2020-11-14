import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {

    const [hide, setHide] = useState(false)

    return (
        <div className={style.header}>
            <div className={style.headerText}>The orbit</div>
            <div className={style.loginNL}>
                <div className={style.loginInput}>
                    {props.isAuth
                        ? <div className={style.btn}
                            onMouseOver={() => setHide(true)}
                            onMouseLeave={() => setHide(false)} >
                            <div className={hide ? style.hide : null}>{props.login}</div>
                            <div className={!hide ? style.hide : null} onClick={props.getLogout}>Logout</div>
                        </div>
                        : <NavLink to='/login'><div className={style.btn + ' ' + style.login}>Login</div> </NavLink>}
                </div>
            </div>
        </div>
    )
}

export default Header;
