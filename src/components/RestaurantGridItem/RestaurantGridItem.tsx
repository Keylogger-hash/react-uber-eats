import './RestaurantGridItem.css'
import Image from "next/image";

export const RestaurantGridItem = ()=>{
    return (
        <div className='restaurant_grid_item'>
            <div className='restaurant_grid_item_block'>
                <p className='restaurant_grid_item_title'>Сельдь на бородинском хлебе</p>
                <p className='restaurant_grid_item_sub_title'>С яйцом и огурцом</p>
                <p className='restaurant_grid_item_price'>240 ₽</p>
            </div>
            <Image src='/rest/Capture1.png' alt='Capture' width={170} height={160}></Image>
        </div>
    )
}