'use client';
import './BackButton.css'
export const BackButton = ()=>{
    const ReturnToTopPage = ()=>{
        window.scrollTo({top:0,behavior: 'smooth'})
    }
    return (
        <div className='back_button' onClick={ReturnToTopPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895429 0.895431 0 2 0H78C79.1046 0 80 0.895431 80 2V78C80 79.1046 79.1046 80 78 80H2C0.895429 80 0 79.1046 0 78V2Z" fill="#59BD5A"/>
                <path d="M39.4818 27.0326L39.5156 27L47 34.2503L45.4301 35.7004L40.3757 30.8753V52H38.6221V30.8435L33.5344 35.7004L32 34.2503L39.4669 27L39.4822 27.0326H39.4818Z" fill="white"/>
            </svg>
        </div>
    )
}