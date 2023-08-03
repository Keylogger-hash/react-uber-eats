'use client'
import './RestaurantChooseDishes.css'
import styles from '../../app/page.module.css';
import {useGetIsMobile} from "@/hooks/useGetIsMobile";
export const RestaurantChooseDishes = ()=>{
    let isMobile = useGetIsMobile();
    console.log(isMobile)
    return (
        <div className='restaurant_choose_dishes'>
            <div className={styles.container}>
                {isMobile?
                <div >
                </div>:
                    <div className='restaurant_choose_dishes_wrapper'>
                        <p className='active'>Закуски</p>
                        <p>Салаты</p>
                        <p>Супы</p>
                        <p>Горячие блюда</p>
                        <p>Гарниры</p>
                        <p>Десерты</p>
                    </div>
                }

            </div>
        </div>
    )
}