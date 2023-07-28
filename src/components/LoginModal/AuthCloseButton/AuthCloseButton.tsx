import React from "react";
import './AuthCloseButton.css'

export const AuthCloseButton = ()=>{
    return (
        <div  className='close_button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" fill={"none"}>
                <rect width="24" height="24" fill="white"/>
                <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}