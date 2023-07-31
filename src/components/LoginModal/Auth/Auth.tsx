import {AuthLoginForm} from "@/components/LoginModal/Auth/AuthLoginForm/AuthLoginForm";
import {AuthRegisterForm} from "@/components/LoginModal/Auth/AuthRegisterForm/AuthRegisterForm";
import {EmailLoginForm} from "@/components/LoginModal/Auth/EmailLoginForm/EmailLoginForm";
import {EmailRegisterForm} from "@/components/LoginModal/Auth/EmailRegisterForm/EmailRegisterForm";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext";
import {AuthStatus} from "@/helpers/constants/auth";

import React from "react";


export const AuthForm = ()=>{
    const {isAuth, toggle} = useContext(AuthContext);
    return (
        <div>
            {
                isAuth===AuthStatus.AuthLoginStatus?
                    <AuthLoginForm></AuthLoginForm>:
                    isAuth===AuthStatus.EmailLoginStatus?
                        <EmailLoginForm></EmailLoginForm>:
                            isAuth===AuthStatus.AuthRegisterStatus?
                                <AuthRegisterForm></AuthRegisterForm>:
                                isAuth===AuthStatus.EmailRegisterStatus?
                                    <EmailRegisterForm></EmailRegisterForm>:
                                    <div>
                                        None
                                    </div>
            }
        </div>
    )
}