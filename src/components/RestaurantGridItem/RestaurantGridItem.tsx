import './RestaurantGridItem.css'
import {RestaurantProps} from "@/interfaces/restaurant.interface";
import Image from 'next/image'
import Link from "next/link";


export function RestaurantGridItem({RestaurantName,TimeDelivery,Currency,Kitchen,ImageSrc}:RestaurantProps){
    const KitchenString = Kitchen.join(" ")
    return (
        <div>
            <Link href={'/restaurant'}>
                <div className='grid_item'>
                    <Image src={ImageSrc} width={356} height={256} alt={RestaurantName}></Image>
                    <p className='grid_header'>{RestaurantName}</p>
                    <p className='grid_subtitle'>{Currency} • {KitchenString}</p>
                    <p className='grid_time_delivery'>{TimeDelivery}</p>
                </div>
            </Link>
        </div>

    )
}