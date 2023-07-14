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
        <div className='grid_item'>
            <Image src={ImageSrc} width={256} height={356} alt={"Image"}></Image>
            <h1>{ProductName}</h1>
            <p className='subtitle'>{Currency} • {KitchenString}</p>
            <p>{TimeDelivery}</p>
        </div>
    )
}