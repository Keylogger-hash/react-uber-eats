import './FooterBottom.css'
import Link from "next/link";
export const FooterBottom = ()=>{
    return (
        <div className='footer_bottom'>
            <Link href={"/"} className='footer_bottom_item'>© 2017 Uber Technologies Inc.</Link>
            <Link href={"/"} className='footer_bottom_item'>Обработка персональных данных</Link>
            <Link href={"/"} className='footer_bottom_item'>Пользовательское соглашение</Link>
        </div>
    )
}