'use client';

import './SearchBar.css';
import { useContext} from "react";
import React from "react";
import {SearchContext} from "@/context/SearchContext";
import {SearchProps} from "@/interfaces/search.interface";
export const SearchBar:React.FC = ()=>{
    const {searchValue, setSearchValue} = useContext<SearchProps>(SearchContext)
    const onChangeEvent = (event:React.FormEvent<HTMLInputElement>)=>{
        if (event.target!== null){
            setSearchValue(event.target.value)
        } else{
            setSearchValue('')
        }
    }
    return (
        <input type="text" className={'search_input'} onChange={onChangeEvent} value={searchValue} placeholder={'Поиск по ресторанам и кухням'}/>
    )
}
