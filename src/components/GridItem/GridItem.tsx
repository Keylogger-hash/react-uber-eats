import './GridItem.css'
import Image from 'next/image'
import Profile from '../../../public/RestaurantImages/Макдоналдс — Газетный.png'
export interface RestaurantItem{
    ProductName:string,
    TimeDelivery: string,
    Currency:string,
    Kitchen: string[],
    ImageSrc: string
}
export function GridItem({ProductName,TimeDelivery,Currency,Kitchen,ImageSrc}:RestaurantItem){
    const KitchenString = Kitchen.join(" ")
    return (
        <div>
            <a href={'/restaurant'}>
                <div className='grid_item'>
                    <Image src={ImageSrc} width={356} height={256} alt={ProductName}></Image>
                    <p className='grid_header'>{ProductName}</p>
                    <p className='grid_subtitle'>{Currency} • {KitchenString}</p>
                    <p className='grid_time_delivery'>{TimeDelivery}</p>
                </div>
            </a>
        </div>

    )
}