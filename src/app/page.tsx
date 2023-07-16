import Image from 'next/image'
import styles from './page.module.css'
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
                <div>
                    <div className={styles.search_input}>
                        Поиск по ресторанам и кухням
                    </div>
                    <div className={styles.search_rectangle}>
                    </div>
                </div>
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
