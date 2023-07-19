import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {RestaurantHeader} from "@/components/RestaurantHeader/RestaurantHeader";
import {RestaurantChooseDishes} from "@/components/RestaurantChooseDishes/RestaurantChooseDishes";
import {RestaurantGridItemList} from "@/components/RestaurantGridItemList/RestaurantGridItemList";
export default function Restaurant() {
    return (
        <div>
            <Header></Header>
            <RestaurantHeader></RestaurantHeader>
            <RestaurantChooseDishes></RestaurantChooseDishes>
            <RestaurantGridItemList></RestaurantGridItemList>
            <Footer></Footer>
        </div>
    )
}