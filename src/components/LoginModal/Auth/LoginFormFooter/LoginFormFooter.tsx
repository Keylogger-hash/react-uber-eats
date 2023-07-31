import './LoginFormFooter.css'
import React from "react";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import {AuthStatus} from "@/helpers/constants/auth";


export const LoginFormFooter = ()=>{
    const {isAuth,toggle} = useContext(AuthContext);
    const changeToLogin= ()=>{
        if (toggle) {
            toggle(AuthStatus.AuthLoginStatus)
        }
    }
    return (
        <div className={'form_footer'}>
            Уже есть аккаут?
            <a onClick={changeToLogin}>
                Войти
            </a>
        </div>
    )
}