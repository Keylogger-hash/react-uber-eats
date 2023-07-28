import styles from "@/app/page.module.css";
import {FooterLogo} from "@/components/Footer/FooterLogo/FooterLogo";
import {FooterLine} from "@/components/Footer/FooterLine/FooterLine";
import {FooterGrid} from "@/components/Footer/FooterGrid/FooterGrid";
import {FooterStoreLogo} from "@/components/Footer/FooterStoreLogo/FooterStoreLogo";
import {FooterBottom} from "@/components/Footer/FooterBottom/FooterBottom";
import './Footer.css'
import {BackButton} from "@/components/Footer/BackButton/BackButton";
export const Footer = ()=>{
    return (
        <footer className='footer'>
            <div className={styles.container}>
                <div className='footer_wrapper'>
                    <FooterLogo></FooterLogo>
                    <FooterLine></FooterLine>
                    <div className='footer_container'>
                        <FooterGrid></FooterGrid>
                    </div>
                    <FooterLine></FooterLine>
                    <FooterStoreLogo></FooterStoreLogo>
                    <FooterLine></FooterLine>
                    <div className='footer_container'>
                        <FooterBottom></FooterBottom>
                    </div>
                    <BackButton></BackButton>
                </div>
            </div>
        </footer>
    )
}