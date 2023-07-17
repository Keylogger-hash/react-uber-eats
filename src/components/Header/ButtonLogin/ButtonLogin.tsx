'use client';

import './ButtonLogin.css'
import {LoginModal} from "@/components/LoginModal/LoginModal";
import {useState} from "react";

export const ButtonLogin = ()=>{
    let [showModal,setShowModal] = useState(false);
    const toggle = ()=>{
        setShowModal(!showModal)
    }

    let ElementButtonLogin = <div onClick={toggle} className='button_login'>Войти</div>

    return (
        <div>
            {showModal?<LoginModal ShowModal={showModal} toggle={toggle}></LoginModal>:ElementButtonLogin}
        </div>
    )
    // if (showModal){
    //     return (
    //         <LoginModal ShowModal={showModal}></LoginModal>
    //     )
    // } else{
    //     return (
    //
    //     )
    // }
}