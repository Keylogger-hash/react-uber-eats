import Image from "next/image";
import {LoginFormFooter} from "@/components/LoginModal/Auth/LoginFormFooter/LoginFormFooter";
import {RegisterFormFooter} from "@/components/LoginModal/Auth/RegisterFormFooter/RegisterFormFooter";
import {AuthContext} from "@/context/AuthContext";
import {IAuthProps} from "@/interfaces/auth.interface";
import {useContext} from "react";
import './AuthOptions.css'
import {AuthStatus} from "@/helpers/constants/auth";

export const AuthOptions = ()=>{
    const {isAuth,toggle} = useContext<IAuthProps>(AuthContext);
    console.log(isAuth)
    function changeToEmailRegister(){
        if(toggle){
            toggle(AuthStatus.EmailRegisterStatus)
        }
    }
    function changeToEmailLogin(){
        if(toggle){
            toggle(AuthStatus.EmailLoginStatus)
        }
    }
    return (
        <div>
            <div className={'auth_form'}>
                {isAuth && isAuth === AuthStatus.AuthLoginStatus?
                    <h1 className={'auth_header'}>Вход в аккаунт</h1>:
                    <h1 className={'auth_header'}>Регистрация</h1>
                }
                <button className={'auth_button'}>
                    <div className={"image_wrapper"}>
                        <Image
                            src={"/AuthIcon/email.svg"}
                            width={24}
                            height={24}
                            alt={"email"}
                        />
                    </div>
                    { isAuth === AuthStatus.AuthLoginStatus?
                        <div className={'auth_label'} onClick={changeToEmailLogin}>
                            Почта
                        </div>:
                        <div className={'auth_label'} onClick={changeToEmailRegister}>
                            Почта
                        </div>
                    }

                </button>
                <button className={'auth_button'}>
                    <div className={"image_wrapper"}>
                        <Image
                            width={24}
                            height={24}
                            src={"/AuthIcon/google.svg"}
                            alt={"google"}
                        />
                    </div>
                    <div className={'auth_label'}>
                        Google
                    </div>
                </button>
                <button className={'auth_button'}>
                    <div className={"image_wrapper"}>
                        <Image
                            width={24}
                            height={24}
                            src={"/AuthIcon/apple.svg"}
                            alt={"apple"}
                        />
                    </div>
                    <div className={'auth_label'}>
                        Apple
                    </div>
                </button>
            </div>
            {isAuth && isAuth===AuthStatus.AuthLoginStatus ?
                <RegisterFormFooter></RegisterFormFooter> :
                <LoginFormFooter></LoginFormFooter>
            }

        </div>
    )
}