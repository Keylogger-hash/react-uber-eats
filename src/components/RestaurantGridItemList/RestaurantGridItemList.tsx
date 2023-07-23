import styles from '@/app/page.module.css'
import './RestaurantGridItemList.css'
import {RestaurantGridItem} from "@/components/RestaurantGridItem/RestaurantGridItem";
import {RestaurantItemProps} from "@/components/RestaurantGridItem/RestaurantGridItem";
import {ReactNode} from "react";



const RestaurantData:RestaurantItemProps[] = [
    {
        Title:'Сельдь на бородинском хлебе',
        SubTitle:'',
        Price:240,
        Currency:'₽',
        ImageSource:'/rest/Capture1.png'
    },
    {
        Title:'Соленья ассорти',
        SubTitle:'',
        Price:320,
        Currency:'₽',
        ImageSource:'/rest/Capture2.png'
    },
    {
        Title:'Грибы маринованные',
        SubTitle:'',
        Price:300,
        Currency:'₽',
        ImageSource:'/rest/Capture3.png'
    },
    {
        Title:'Сало домашнее с горчицей',
        SubTitle:'',
        Price:320,
        Currency:'₽',
        ImageSource:'/rest/Capture4.png'
    },
    {
        Title:'Малосольная семга',
        SubTitle:'',
        Price:390,
        Currency:'₽',
        ImageSource:'/rest/Capture5.png'
    },
    {
        Title:'Язык говяжий с хреном',
        SubTitle:'',
        Price:350,
        Currency:'₽',
        ImageSource:'/rest/Capture6.png'
    },
]
const RestaurantItemNodes:ReactNode[] = RestaurantData.map((item,index)=><RestaurantGridItem {...item} key={index}/>)
export const RestaurantGridItemList = ()=>{
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