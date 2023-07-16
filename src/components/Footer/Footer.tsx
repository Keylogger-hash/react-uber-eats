import styles from "@/app/page.module.css";
import {Logo} from "@/components/Footer/Logo/Logo";
import {FooterLine} from "@/components/Footer/FooterLine/FooterLine";
import {FooterGrid} from "@/components/Footer/FooterGrid/FooterGrid";
import {FooterStoreLogo} from "@/components/Footer/FooterStoreLogo/FooterStoreLogo";
import {FooterBottom} from "@/components/Footer/FooterBottom/FooterBottom";
import './Footer.css'
export const Footer = ()=>{
    return (
        <footer className='footer'>
            <div className={styles.container}>
                <div className='footer_wrapper'>
                    <Logo></Logo>
                    <FooterLine></FooterLine>
                    <FooterGrid></FooterGrid>
                    <FooterLine></FooterLine>
                    <FooterStoreLogo></FooterStoreLogo>
                    <FooterLine></FooterLine>
                    <FooterBottom></FooterBottom>
                </div>
            </div>
        </footer>
    )
}