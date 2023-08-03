import React from "react";
import './AuthCloseButton.css'
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import {AuthStatus} from "@/helpers/constants/auth";
export const AuthCloseButton = ()=>{
    const {isAuth,toggle} = useContext(AuthContext);
    const closeModal = ()=>{
        if(toggle){
            toggle(AuthStatus.CloseWindow)
        }
    }
    return (
        <div onClick={closeModal} className='close_button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" fill={"none"}>
                <rect width="24" height="24" fill="white"/>
                <path d="M7 17L16.8995 7.10051" stroke="gray" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7.00001L16.8995 16.8995" stroke="gray" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}