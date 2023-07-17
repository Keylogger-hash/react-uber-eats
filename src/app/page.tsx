import Image from 'next/image'
import styles from './page.module.css'
import {SearchBar} from "@/components/SearchBar/SearchBar";
import {GridItemList} from "@/components/GridItemList/GridItemList";
import {Footer} from "@/components/Footer/Footer";
import {Header} from "@/components/Header/Header";
export default function Home() {
  return (
      <div>
          <Header></Header>
        <main className={styles.main}>
          <div className={styles.container}>
              <div className={styles.main_wrapper}>
                    <SearchBar></SearchBar>
                  <div className={styles.main_header}>
                      Рестораны в Москве
                  </div>
                  <GridItemList></GridItemList>
              </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
  )
}
