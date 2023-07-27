import '../Form.css'
import React from "react";


export const RegisterForm = ()=>{
    return (
        <div>
            <div className={'login_form'}>
                <div className={'login_title'}>
                    Регистрация
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
                        placeholder={'Имя и фамилия'}
                    />
                </div>
                <div className={'login_input_wrapper'}>
                    <label
                        className={'login_label'}
                        htmlFor={"email"}>
                    </label>
                    <input
                        className={"login_input"}
                        type={"text"}
                        id={"email"}
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
                <button className={'login_button'}>Зарегистрироваться</button>
            </div>
            <div className={'form_footer'}>
                Уже есть аккаут?
                <a>
                    Войти
                </a>
            </div>
        </div>
    )
}