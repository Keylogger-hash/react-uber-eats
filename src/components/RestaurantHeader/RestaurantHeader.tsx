import './RestaurantHeader.css'
import Image from "next/image";
import {RestaurantDetailData} from "@/data/restaurant-detail.data";
import styles from '@/app/page.module.css';
export const RestaurantHeader = ()=>{
    const KitchenString:string = RestaurantDetailData.Kitchen.join(" ")
    return (
        <div className='restaurant_header'>
            <Image
                src={RestaurantDetailData.ImageSrc}
                alt="traktir"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: '100%', height: '364px' }} // optional
            />
            <div className={styles.container}>
                <div className='restaurant_image_overlay'>
                        <div className='restaurant_flex_container'>
                            <p className={'restaurant_header_title'}>{RestaurantDetailData.RestaurantName}</p>
                            <div className='restaurant_block'>
                                <p className='restaurant_sub_title'>{RestaurantDetailData.Currency} • {KitchenString}</p>
                                <div className='restaurant_delivery_time'>
                                    40 - 50 мин
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}