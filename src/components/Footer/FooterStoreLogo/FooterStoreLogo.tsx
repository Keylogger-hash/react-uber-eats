import './FooterStoreLogo.css'
import Image from 'next/image'
export const FooterStoreLogo = ()=>{
    return (
        <div className='footer_store_logo'>
            <Image src='/FooterStoreLogos/AppStore.png' alt='App store' width={120} height={40}></Image>
            <Image src='/FooterStoreLogos/GooglePlay.png' alt='Google play' width={120} height={40}></Image>
        </div>
    )
}