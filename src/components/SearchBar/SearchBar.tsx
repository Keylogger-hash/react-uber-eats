'use client';

import './SearchBar.css';
import {ChangeEvent, useContext, useRef, useState} from "react";
import React from "react";
import {SearchContext} from "@/context/SearchContext";
export const SearchBar:React.FC = ()=>{
    const [search,setSearch] = useContext(SearchContext)
    const searchElement = useRef<HTMLDivElement>(null)
    const onChangeEvent = (event:React.FormEvent<HTMLInputElement>)=>{
        if (event.target!== null){
            setSearch(event.target.value)
        } else{
            setSearch('')
        }
    }
    return (
        <input type="text" className={'search_input'} onChange={onChangeEvent} value={search} placeholder={'Поиск по ресторанам и кухням'}/>
    )
}
