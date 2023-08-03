import {useGetIsMobile} from "@/hooks/useGetIsMobile";
import './DishGridItemHeader.css'

export const DishGridItemHeader = ()=>{
    const isMobile = useGetIsMobile();
    return (
        <div>
            <div className='restaurant_grid_item_header'>Закуски
                {
                    isMobile?
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" viewBox="0 0 50 1" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H50V1H0V0Z" fill="#757575"/>
                        </svg>
                        : <p></p>
                }
            </div>

        </div>

    )
}