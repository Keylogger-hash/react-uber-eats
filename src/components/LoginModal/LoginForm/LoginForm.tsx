import '../Form.css'
import React from "react";


export const LoginForm = ()=>{
    return (
        <div>
            <div className={'login_form'}>
                <div className={'login_title'}>
                    Войти
                </div>
                <div className={'login_input_wrapper'}>
                    <label
                        className={'login_label'}
                        htmlFor={"username"}>
                    </label>
                    <input
                        className={"login_input"}
                        type={"text"}
                        id={"username"}
                        placeholder={'Почта'}
                    />
                </div>
                <div className={'login_input_wrapper'}>
                    <label
                        className={'login_label'}
                        htmlFor={"password"}>
                    </label>
                    <input
                        className={"login_input"}
                        type={"password"}
                        id={"password"}
                        placeholder={'Пароль'}
                    />
                </div>
                <button className={'login_button'}>Войти</button>
            </div>
            <div className={'form_footer'}>
                <a>
                    Регистрация
                </a>
            </div>
        </div>
    )
}