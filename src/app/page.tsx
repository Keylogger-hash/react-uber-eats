"use client"
import Image from 'next/image'
import styles from './page.module.css'
import {SearchBar} from "@/components/SearchBar/SearchBar";
import {GridItemList} from "@/components/GridItemList/GridItemList";
import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
import {createContext} from "react";
import {useState} from "react";
import {SearchContext, SearchProps} from '@/context/SearchContext';

export default function Home() {
    const [searchValue,setSearchValue] = useState('')
    return (
          <div>
              <Header></Header>
            <main className={styles.main}>
              <div className={styles.container}>
                  <div className={styles.main_wrapper}>
                      <SearchContext.Provider value={[searchValue,setSearchValue]}>
                          <SearchBar></SearchBar>
                      </SearchContext.Provider>
                      <div className={styles.main_header}>
                          Рестораны в Москве
                      </div>
                      <SearchContext.Provider value={[searchValue]}>
                          <GridItemList></GridItemList>
                      </SearchContext.Provider>
                  </div>
              </div>
            </main>
            <Footer></Footer>
          </div>
      )
}
