import '../../Form.css'
import './AuthLoginForm.css'
import Image from "next/image";
import {LoginFormFooter} from "@/components/LoginModal/Auth/LoginFormFooter/LoginFormFooter";
export const AuthLoginForm = ()=>{
    return (
        <div>
            <div className={'auth_form'}>
                <button className={'auth_button'}>
                    <div className={"image_wrapper"}>
                        <Image
                            src={"/AuthIcon/email.svg"}
                            width={24}
                            height={24}
                            alt={"email"}
                        />
                    </div>
                    <div className={'auth_label'}>
                        Почта
                    </div>
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
            <LoginFormFooter></LoginFormFooter>
        </div>
    )
}