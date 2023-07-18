'use client';

import './SearchBar.css';
import {ChangeEvent, useRef, useState} from "react";
import React from "react";
import {FormEventHandler} from "react";
export const SearchBar:React.FC = ()=>{
    let [searchValue,setSearchValue] = useState('');
    const searchElement = useRef<HTMLDivElement>(null)
    const onChangeEvent = (event:React.FormEvent<HTMLInputElement>)=>{
        if (event.target!== null){
            setSearchValue(event.target.value)
            console.log(searchValue)
        }
    }
    const onClick = ()=>{
        setSearchValue('')
    }

    return (
        <input type="text" onChange={onChangeEvent} value={searchValue} placeholder={'Поиск по ресторанам и кухням'}/>
    )
}
