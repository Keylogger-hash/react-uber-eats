'use client'
import './RestaurantGridItemList.css'
import {RestaurantGridItem} from "@/components/RestaurantGridItem/RestaurantGridItem";
import {RestaurantsData} from "@/data/restaurants.data";
import {ReactNode} from "react";
import {useContext} from "react";
import {SearchContext} from '@/context/SearchContext';

export const   RestaurantGridItemList = () =>{

    const search = useContext(SearchContext);
    const RestaurantListFilter = RestaurantsData.filter(
        restaurant=>
            restaurant.RestaurantName.toLowerCase().includes(search.toString().toLowerCase())
    )
    const GridItemListData: ReactNode[] = RestaurantListFilter.map((restaurant, index)=>{
        return (
            <RestaurantGridItem {...restaurant} key={index}></RestaurantGridItem>
        )
    })

    return (
        <div className='grid_wrapper'>
            {GridItemListData}
        </div>
    )
}
