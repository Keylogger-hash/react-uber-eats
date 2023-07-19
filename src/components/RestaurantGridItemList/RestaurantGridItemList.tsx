import styles from '@/app/page.module.css'
import './RestaurantGridItemList.css'
import {RestaurantGridItem} from "@/components/RestaurantGridItem/RestaurantGridItem";
export const RestaurantGridItemList = ()=>{
    return (
        <div className='restaurant_grid_item_list'>
            <div className={styles.container}>
                <div className='restaurant_grid_item_wrapper'>
                    <p className='restaurant_grid_item_header'>Закуски</p>
                    <div className='restaurant_grid'>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                        <RestaurantGridItem></RestaurantGridItem>
                    </div>
                </div>
            </div>
        </div>
    )
}