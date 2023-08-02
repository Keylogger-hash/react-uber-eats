import './RegisterFormFooter.css'
import React from "react";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import {AuthStatus} from "@/helpers/constants/auth";


export const RegisterFormFooter = ()=>{
    const {isAuth,toggle} = useContext(AuthContext);
    const changeToRegister = ()=>{
        toggle(AuthStatus.AuthRegisterStatus)
    }
    return (
        <div className={'form_footer'}>
            <div onClick={changeToRegister}>
                Регистрация
            </div>
        </div>
    )
}