import {AuthCloseButton} from "@/components/LoginModal/AuthBack/AuthCloseButton/AuthCloseButton";
import {AuthBackButton} from "@/components/LoginModal/AuthBack/AuthBackButton/AuthBackButton";
import React from "react";


export const AuthBack = ()=>{

    return (
        <div>
            {true?
                <AuthCloseButton></AuthCloseButton>:
                <AuthBackButton></AuthBackButton>
            }
        </div>
    )
}