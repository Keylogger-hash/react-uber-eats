import './FooterGrid.css'
import Image from 'next/image'
import Link from "next/link";
import {Dropdown} from "@/components/Footer/Dropdown/Dropdown";
export const FooterGrid = ()=>{
    return (
        <div className='footer_grid'>
            <div className='footer_grid_item'>
                <Dropdown></Dropdown>
                <p>#UberEats</p>
                <div className={'footer_grid_logo_item'}>
                    <Image src='/FooterLogos/facebook.svg' alt='facebook' width={24} height={24}></Image>
                    <Image src='/FooterLogos/twitter.svg' alt='twitter' width={24} height={24}></Image>
                    <Image src='/FooterLogos/instagram.svg' alt='instagram' width={24} height={24}></Image>
                </div>
            </div>
            <div className='footer_grid_item'>
                <Link href={"/"}>Об UberEats</Link>
                <Link href={"/"}>Станьте партнёром по доставке</Link>
                <Link href={"/"}>Станьте парнёром-рестораном</Link>
            </div>
            <div className='footer_grid_item'>
                <Link href={"/"}>Все города</Link>
                <Link href={"/"}>Цены</Link>
                <Link href={"/"}>Помощь</Link>
                <Link href={"/"}>FAQs</Link>
            </div>
        </div>
    )
}