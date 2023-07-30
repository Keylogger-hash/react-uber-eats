import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {RestaurantHeader} from "@/components/RestaurantHeader/RestaurantHeader";
import {RestaurantChooseDishes} from "@/components/ChooseDishes/RestaurantChooseDishes";
import {DishGridItemList} from "@/components/DishGridItemList/DishGridItemList";
export default function Restaurant() {
    return (
        <div>
            <Header></Header>
            <RestaurantHeader></RestaurantHeader>
            <RestaurantChooseDishes></RestaurantChooseDishes>
            <DishGridItemList></DishGridItemList>
            <Footer></Footer>
        </div>
    )
}