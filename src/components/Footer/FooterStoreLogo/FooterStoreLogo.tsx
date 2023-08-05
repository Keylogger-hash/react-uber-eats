import './FooterStoreLogo.css'
import Image from 'next/image'
import Link from "next/link";
export const FooterStoreLogo = ()=>{
    return (
        <div className='footer_store_logo'>
            <Link href={"https://apps.apple.com/ru/"}>
                <Image src='/FooterStoreLogos/AppStore.png' alt='App store' width={120} height={40}></Image>
            </Link>
            <Link href={"https://play.google.com/"}>
                <Image src='/FooterStoreLogos/GooglePlay.png' alt='Google play' width={120} height={40}></Image>
            </Link>
        </div>
    )
}