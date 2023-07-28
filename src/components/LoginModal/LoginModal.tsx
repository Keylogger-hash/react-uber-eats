'use client;'
import {LoginForm} from "@/components/LoginModal/LoginForm/LoginForm";
import {RegisterForm} from "@/components/LoginModal/RegisterForm/RegisterForm";
import {AuthForm} from "@/components/LoginModal/AuthForm/AuthForm";
import {LoginLogo} from "@/components/LoginModal/LoginLogo/LoginLogo";
import {AuthCloseButton} from "@/components/LoginModal/AuthCloseButton/AuthCloseButton";
import {AuthBackButton} from '@/components/LoginModal/AuthBackButton/AuthBackButton';
import {ButtonLogin} from "@/components/Header/ButtonLogin/ButtonLogin";
import './LoginModal.css'
import {useState} from "react";
import React from "react";
export interface LoginModalProps {
    ShowModal:boolean,
    toggle:()=>{}
}
enum AuthStatus {
    Login = 'login',
    Auth = 'auth',
    Register = 'register'
}
export interface AuthProps {
    isAuth:AuthStatus
    setAuth:()=>{}
}
export const LoginModal:React.FC<LoginModalProps> = ({ShowModal,toggle}:LoginModalProps)=>{
    const isActive = ShowModal ? 'active':'non_active'
    const [isAuth,setAuth] = useState<AuthStatus>(AuthStatus.Auth);
    const mainClass = `modal ${isActive}`
    return (
        <div className='fixed-overlay'>
            <div className={mainClass}>
                <div className='modal_container'>
                    {isAuth===AuthStatus.Auth?
                        <AuthCloseButton></AuthCloseButton>:
                        <AuthBackButton></AuthBackButton>
                    }
                    <LoginLogo></LoginLogo>
                    {
                        isAuth===AuthStatus.Auth?
                            <AuthForm></AuthForm>:
                            isAuth===AuthStatus.Login?
                                <LoginForm></LoginForm>:
                                <RegisterForm></RegisterForm>
                    }
                </div>
            </div>
        </div>

    )
}