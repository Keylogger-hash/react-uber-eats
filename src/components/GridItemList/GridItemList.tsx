import './GridItemList.css'
import {GridItem,RestaurantItem} from "@/components/GridItem/GridItem";
import {ReactNode} from "react";

const RestaurantList: RestaurantItem[] = [
    {
        ProductName:"Макдоналдс — Газетный",
        TimeDelivery:"25 - 35 мин",
        Currency: "₽₽",
        Kitchen:["Бургеры"],
        ImageSrc:'/RestaurantImages/Макдоналдс — Газетный.png'
    },
    {
        ProductName:"DimSum & Co — ЦДМ",
        TimeDelivery:"40 - 50 мин",
        Currency: "₽₽",
        Kitchen:["Японская","Китайская","Азиатская"],
        ImageSrc:'/RestaurantImages/DimSum & Co — ЦДМ.png'
    },
    {
        ProductName:"ДвижОК — Манежная",
        TimeDelivery:"35 - 45 мин",
        Currency: "₽₽",
        Kitchen:["Американская","Европейская"],
        ImageSrc:'/RestaurantImages/ДвижОК — Манежная.png'
    },
    {
        ProductName:"НЯ — NHA",
        TimeDelivery:"30 - 40 мин",
        Currency: "₽₽",
        Kitchen:["Вьетнамская"],
        ImageSrc:'/RestaurantImages/НЯ — NHA.png'
    },
    {
        ProductName:"Точка Дзы — Цветной",
        TimeDelivery:"40 - 50 мин",
        Currency: "₽₽",
        Kitchen:["Вьетнамская"],
        ImageSrc:'/RestaurantImages/Точка Дзы — Цветной.png'
    },
    {
        ProductName:"Cinnabon",
        TimeDelivery:"25 - 35 мин",
        Currency: "₽₽",
        Kitchen:["Выпечка","Десерты","Капкейки"],
        ImageSrc:'/RestaurantImages/Cinnabon.png'
    },
    {
        ProductName:"PIZZELOVE",
        TimeDelivery:"15 - 25 мин",
        Currency: "₽₽",
        Kitchen:["Пицца"],
        ImageSrc:'/RestaurantImages/PIZZELOVE.png'
    },
    {
        ProductName:"Zю кафе — Тверская",
        TimeDelivery:"25 - 35 мин",
        Currency: "₽₽",
        Kitchen:["Японская"],
        ImageSrc:'/RestaurantImages/Zю кафе — Тверская.png'
    },
    {
        ProductName:"Bar BQ Cafe — Манежная",
        TimeDelivery:"30 - 40 мин",
        Currency:"₽₽",
        Kitchen:["Европейская"],
        ImageSrc:'/RestaurantImages/Bar BQ Cafe — Манежная.png'
    }
];
const GridItemListData: ReactNode[] = RestaurantList.map((restaurant, index)=>{

    return (
        <GridItem {...restaurant} key={index}></GridItem>
    )
})
export const   GridItemList = () =>{
    return (
        <div className='grid_wrapper'>
            {GridItemListData}
        </div>
    )
}
