import {AuthLoginForm} from "@/components/LoginModal/Auth/AuthLoginForm/AuthLoginForm";
import {EmailLoginForm} from "@/components/LoginModal/Auth/EmailLoginForm/EmailLoginForm";
import {EmailRegisterForm} from "@/components/LoginModal/Auth/EmailRegisterForm/EmailRegisterForm";
import React from "react";


export const AuthForm = ()=>{
    return (
        <div>
            {
                isAuth===AuthStatus.Auth?
                    <AuthLoginForm></AuthLoginForm>:
                    isAuth===AuthStatus.Login?
                        <EmailLoginForm></EmailLoginForm>:
                        <EmailRegisterForm></EmailRegisterForm>
            }
        </div>
    )
}