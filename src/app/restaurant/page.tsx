import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import Image from "next/image";
export default function Restaurant() {
    return (
        <div>
            <Header></Header>
            <Image src="/rest/traktir.png" alt="traktir" width={640} height={480}/>
            <Footer></Footer>
        </div>
    )
}