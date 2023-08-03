'use client';

import './ButtonLogin.css'
import {LoginModal} from "@/components/LoginModal/LoginModal";
import {useState} from "react";
import {AuthStatus} from "@/helpers/constants/auth";
import {AuthContext} from "@/context/AuthContext";

export const ButtonLogin = ()=>{
    const [isAuth,toggle] = useState<AuthStatus>(AuthStatus.CloseWindow);

    // let [showModal,setShowModal] = useState(false);
    const handleClick = ()=>{
        if(toggle){
            toggle(AuthStatus.AuthRegisterStatus)
        }
    }

    let ElementButtonLogin = <div onClick={handleClick} className='button_login'>Войти</div>

    return (
        <div>
            <AuthContext.Provider value={{isAuth,toggle}}>
            {isAuth===AuthStatus.CloseWindow?
                ElementButtonLogin:
                <div>
                    {ElementButtonLogin}
                    <LoginModal></LoginModal>
                </div>
            }
            </AuthContext.Provider>
        </div>
    )

}