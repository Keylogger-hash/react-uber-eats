import {useState,useEffect} from "react";

const getIsMobile = (innerWidth:number):boolean =>{
    return (innerWidth<768)
}

export const useGetIsMobile = ()=>{
    const [isMobile,setIsMobile] = useState(false);
    useEffect(() => {
        const setMobileSize = ()=>{
            setIsMobile(getIsMobile(window.innerWidth))
        }
        setMobileSize()
        window.addEventListener('resize',setMobileSize)
        return ()=> window.removeEventListener('resize',setMobileSize)

    }, [isMobile]);
    return (
        isMobile
    )
}