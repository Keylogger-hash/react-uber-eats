import React from "react";
import './AuthBackButton.css'
import Image from "next/image";
export const AuthBackButton = ()=>{
    return (
        <div className={'login_back_button'}>
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