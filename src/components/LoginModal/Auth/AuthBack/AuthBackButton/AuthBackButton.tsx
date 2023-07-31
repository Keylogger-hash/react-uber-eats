import React, {useContext} from "react";
import './AuthBackButton.css'
import Image from "next/image";
import {AuthContext} from "@/context/AuthContext";
import {AuthStatus} from "@/helpers/constants/auth";

export const AuthBackButton = ()=>{
    const {isAuth,toggle} = useContext(AuthContext);
    function returnToAuthLogin(){
        toggle(AuthStatus.AuthLoginStatus)
    }
    function returnToAuthRegister(){
        toggle(AuthStatus.AuthRegisterStatus)
    }
    const returnAuth = isAuth===AuthStatus.EmailLoginStatus?returnToAuthLogin:returnToAuthRegister
    return (
        <div onClick={returnAuth} className={'login_back_button'}>
            <Image
                src={"/back-arrow-2.svg"}
                width={18}
                height={18}
                alt={"Назад"}
            />
            Назад
        </div>
    )
}