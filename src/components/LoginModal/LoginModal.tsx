import {LoginForm} from "@/components/LoginModal/LoginForm/LoginForm";

'use client;'
import './LoginModal.css'
import {MouseEvent} from "react";
import React from "react";
export interface LoginModalProps {
    ShowModal:boolean,
    toggle:()=>{}
}
export const LoginModal:React.FC<LoginModalProps> = ({ShowModal,toggle}:LoginModalProps)=>{
    const isActive = ShowModal ? 'active':'non_active'
    const mainClass = `modal ${isActive}`
    return (
        <div className='fixed-overlay'>
            <div className={mainClass}>
                <div className='modal_container'>
                    <div onClick={toggle} className='close_button'>
                        close
                    </div>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>

    )
}