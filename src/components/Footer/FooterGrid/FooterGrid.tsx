import './FooterGrid.css'
import Image from 'next/image'
import {Dropdown} from "@/components/Footer/Dropdown/Dropdown";
export const FooterGrid = ()=>{
    return (
        <div className='footer_grid'>
            <div className='footer_grid_item'>
                <Dropdown></Dropdown>
                <p>#UberEats</p>
                <div>
                    <Image src='/FooterLogos/facebook.svg' alt='facebook' width={24} height={24}></Image>
                    <Image src='/FooterLogos/twitter.svg' alt='twitter' width={24} height={24}></Image>
                    <Image src='/FooterLogos/instagram.svg' alt='instagram' width={24} height={24}></Image>
                </div>
            </div>
            <div className='footer_grid_item'>
                <a>Об UberEats</a>
                <a>Станьте партнёром по доставке</a>
                <a>Станьте парнёром-рестораном</a>
            </div>
            <div className='footer_grid_item'>
                <a>Все города</a>
                <a>Цены</a>
                <a>Помощь</a>
                <a>FAQs</a>
            </div>
        </div>
    )
}