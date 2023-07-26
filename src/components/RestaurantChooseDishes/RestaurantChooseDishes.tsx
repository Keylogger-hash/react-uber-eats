import './RestaurantChooseDishes.css'
import styles from '../../app/page.module.css';

export const RestaurantChooseDishes = ()=>{

    return (
        <div className='restaurant_choose_dishes'>
            <div className={styles.container}>
                <div className='restaurant_choose_dishes_wrapper'>

                    <p className='active'>Закуски</p>
                    <p>Салаты</p>
                    <p>Супы</p>
                    <p>Горячие блюда</p>
                    <p>Гарниры</p>
                    <p>Десерты</p>
                </div>
            </div>
        </div>
    )
}