import styles from "@/app/page.module.css";
import './Header.css'
import {ButtonLogin} from "@/components/Header/ButtonLogin/ButtonLogin";
import {HeaderCartLogo} from "@/components/Header/HeaderCartLogo/HeaderCartLogo";
import {HeaderLogo} from "@/components/Header/HeaderLogo/HeaderLogo";
export const Header = async ()=>{
    return (
        <header className='header'>
            <div className={styles.container}>
                <div className='header_wrapper'>
                    <div className='header_logo'>
                        <HeaderLogo></HeaderLogo>
                    </div>
                    <div className='header_block'>
                        <ButtonLogin></ButtonLogin>
                        <HeaderCartLogo></HeaderCartLogo>
                    </div>
                </div>
            </div>
        </header>
    )
}