import './RestaurantHeader.css'
import Image from "next/image";

export const RestaurantHeader = ()=>{
    return (
        <div className='restaurant_header'>
            <Image
                src="/rest/traktir.png"
                alt="traktir"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: '100%', height: '364px' }} // optional
            />
            <div className='restaurant_image_overlay'>
                <div className='restaurant_flex_container'>
                    <h1>Трактир «Пушкин»</h1>
                    <div className='restaurant_block'>
                        <p className='restaurant_sub_title'>₽₽₽ • Европейская</p>
                        <div className='restaurant_delivery_time'>
                            40 - 50 мин
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}