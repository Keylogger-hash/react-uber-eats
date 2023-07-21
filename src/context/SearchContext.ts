
import {createContext} from "react";
export interface SearchProps{
    searchValue: string,
    setSearchValue: ()=>{}
}
export const SearchContext = createContext([]);