import './LoginFormFooter.css'
import React from "react";
import Link from "next/link";



export const LoginFormFooter = ()=>{
    return (
        <div className={'form_footer'}>
            Уже есть аккаут?
            <Link href={"#"}>
                Войти
            </Link>
        </div>
    )
}