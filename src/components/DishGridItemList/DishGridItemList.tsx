import styles from '@/app/page.module.css'
import './DishGridItemList.css'
import {DishGridItem} from "@/components/DishGridItem/DishGridItem";
import {DishesData} from "@/data/dishes.data"
import {ReactNode} from "react";



const RestaurantItemNodes:ReactNode[] = DishesData.map((item,index)=><DishGridItem {...item} key={index}/>)
export const DishGridItemList = ()=>{
    return (
        <div className='restaurant_grid_item_list'>
            <div className={styles.container}>
                <div className='restaurant_grid_item_wrapper'>
                    <p className='restaurant_grid_item_header'>Закуски</p>
                    <div className='restaurant_grid'>
                        {RestaurantItemNodes}
                    </div>
                </div>
            </div>
        </div>
    )
}