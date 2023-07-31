'use client;'
import React, {useContext} from "react";
import {LoginLogo} from "@/components/LoginModal/LoginLogo/LoginLogo";
import {AuthForm} from "@/components/LoginModal/Auth/Auth";
import {AuthBack} from "@/components/LoginModal/Auth/AuthBack/AuthBack";
import {AuthStatus} from "@/helpers/constants/auth";
import {AuthContext} from "@/context/AuthContext";
import './LoginModal.css'


export const LoginModal:React.FC = ()=>{
    const {isAuth,toggle} = useContext(AuthContext);
    const isActive = isAuth!==AuthStatus.CloseWindow ? 'active':'non_active'
    const mainClass = `modal ${isActive}`
    // const changeAuthWindow = ()=>{
    //     setAuth(isAuth)
    // }
    return (
        <div className='fixed-overlay'>
            <div className={mainClass}>
                <div className='modal_container'>
                    <AuthBack></AuthBack>
                    <LoginLogo></LoginLogo>
                    <AuthForm></AuthForm>
                </div>
            </div>
        </div>

    )
}