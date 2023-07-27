import {LoginForm} from "@/components/LoginModal/LoginForm/LoginForm";
import {RegisterForm} from "@/components/LoginModal/RegisterForm/RegisterForm";

'use client;'
import './LoginModal.css'
import {MouseEvent, useState} from "react";
import React from "react";
export interface LoginModalProps {
    ShowModal:boolean,
    toggle:()=>{}
}
export const LoginModal:React.FC<LoginModalProps> = ({ShowModal,toggle}:LoginModalProps)=>{
    const isActive = ShowModal ? 'active':'non_active'
    const [isAuth,setAuth] = useState(true);
    const AuthComponent = isAuth? <LoginForm ></LoginForm>: <RegisterForm></RegisterForm>;
    const mainClass = `modal ${isActive}`
    return (
        <div className='fixed-overlay'>
            <div className={mainClass}>
                <div className='modal_container'>
                    <div onClick={toggle} className='close_button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" fill={"none"}>
                            <rect width="24" height="24" fill="white"/>
                            <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>

    )
}