import './RestaurantGridItem.css'
import Image from "next/image";
export interface RestaurantItemProps {
    Title:string,
    SubTitle:string,
    Price:number,
    Currency:string,
    ImageSource:string
}
export const RestaurantGridItem = ({Title,SubTitle,Price,Currency,ImageSource}:RestaurantItemProps)=>{
    return (
        <div className='restaurant_grid_item'>
            <div className='restaurant_grid_item_block'>
                <p className='restaurant_grid_item_title'>{Title}</p>
                <p className='restaurant_grid_item_sub_title'>{SubTitle}</p>
                <p className='restaurant_grid_item_price'>{Price} {Currency}</p>
            </div>
            <Image src={ImageSource} alt={Title} width={170} height={160}></Image>
        </div>
    )
}