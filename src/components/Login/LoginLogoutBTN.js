import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { getLogout } from "../../redux/authReducer"
import style from '../Header/Header.module.css'

const LoginLogoutBTN = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const login = useSelector(state => state.auth.login)
    const [hide, setHide] = useState(false)

    return (
        <div className={style.loginInput}>
            {isAuth
                ? <div className={style.btn}
                    onMouseOver={() => setHide(true)}
                    onMouseLeave={() => setHide(false)} >
                    <div className={hide ? style.hide : null}>{login}</div>
                    <div className={!hide ? style.hide : null} onClick={() => dispatch(getLogout())}>Logout</div>
                </div>
                : <NavLink to='/login'><div className={style.btn + ' ' + style.login}>Login</div> </NavLink>}
        </div>
    )
}

export default LoginLogoutBTN;