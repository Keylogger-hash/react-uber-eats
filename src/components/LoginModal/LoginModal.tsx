'use client;'
import {useState} from "react";
import {LoginLogo} from "@/components/LoginModal/LoginLogo/LoginLogo";
import {AuthForm} from "@/components/LoginModal/Auth/Auth";
import {AuthBack} from "@/components/LoginModal/AuthBack/AuthBack";
import {LoginModalProps} from "@/interfaces/login-modal.interface";
import {AuthStatus} from "@/helpers/constants/auth";
import {AuthContext} from "@/context/AuthContext";
import './LoginModal.css'
import React from "react";



export const LoginModal:React.FC<LoginModalProps> = ({ShowModal,toggle}:LoginModalProps)=>{
    const isActive = ShowModal ? 'active':'non_active'
    const [isAuth,setAuth] = useState<AuthStatus>(AuthStatus.Auth);
    const mainClass = `modal ${isActive}`
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