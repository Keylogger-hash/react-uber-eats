import {AuthCloseButton} from "@/components/LoginModal/Auth/AuthBack/AuthCloseButton/AuthCloseButton";
import {AuthBackButton} from "@/components/LoginModal/Auth/AuthBack/AuthBackButton/AuthBackButton";
import React, {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import {AuthStatus} from "@/helpers/constants/auth";


export const AuthBack = ()=>{
    const {isAuth,toggle} = useContext(AuthContext)
    return (
        <div>
            {isAuth===AuthStatus.AuthRegisterStatus || isAuth === AuthStatus.AuthLoginStatus?
                <AuthCloseButton></AuthCloseButton>:
                <AuthBackButton></AuthBackButton>
            }
        </div>
    )
}