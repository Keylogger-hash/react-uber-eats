'use client';

import './ButtonLogin.css'
import {LoginModal} from "@/components/LoginModal/LoginModal";
import {useState} from "react";
import {AuthStatus} from "@/helpers/constants/auth";
import {AuthContext} from "@/context/AuthContext";
import HeaderUser from "@/components/Header/HeaderUser/HeaderUser";
import {useSession} from "next-auth/react";
export const ButtonLogin = ()=>{
    const [isAuth,toggle] = useState<AuthStatus>(AuthStatus.CloseWindow);
    const {data:session} = useSession()
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
                session?<HeaderUser/>:ElementButtonLogin:
                <div>
                    {ElementButtonLogin}
                    <LoginModal></LoginModal>
                </div>
            }
            </AuthContext.Provider>
        </div>
    )

}