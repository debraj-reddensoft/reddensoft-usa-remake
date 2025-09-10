"use client"
import Link from "next/link";
export default function GlobalButton(prop){
    return(
        <Link href={prop.link ? prop.link : "#"} className={`flex items-center bg-secondary h-[52px] 2xl:h-[60px] rounded-[30px] ${prop.alignment ? 'flex-row pl-5 sm:pl-7 2xl:pl-10 pr-3.5' : 'flex-row pl-5 sm:pl-7 2xl:pl-10 pr-3.5'}`}>
            <span className={`text-base 2xl:text-[19px] leading-6 text-white font-bold uppercase ${prop.alignment ? 'pr-3 sm:pr-4' : 'pr-3 sm:pr-4'}`}>{prop.title}</span>
            <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full flex items-center justify-center bg-white">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#001A32"/>
                </svg>
            </span>
        </Link>
    )
}