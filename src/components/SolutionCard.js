"use client"
import Image from "next/image";
import Link from "next/link";

export default function SolutionCard({data:{...solution}, alignment}) {
  return (
    <div className={`relative overflow-hidden bg-white px-6 pt-6 pb-10 xl:pt-8 xl:pb-14 rounded-2xl shadow-med h-full ${alignment ? 'text-right' : 'text-left'}`} key={solution.id} dir={alignment ? 'rtl' : 'ltr'}>
        <Image className={`mb-6 h-16 w-auto xl:h-20 ${alignment ? 'ml-auto' : 'mr-auto'}`} src={solution.img} alt={solution.title} width="auto" height="auto"/>
        <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold pb-3">{solution.title}</h3>
        <p className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal pb-2">{solution.desc}</p>
        <Link aria-label="Learn more" href={solution.link} className={`absolute -bottom-10 ${alignment ? '-left-10  transform -rotate-45' : '-right-10 transform rotate-45'} block w-20 h-20 bg-secondary`}>
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute top-8 transform ${alignment ? 'right-1.5 -rotate-[135deg]' : 'left-1.5 -rotate-45'}`}>
                <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
            </svg>
        </Link>
    </div>
  )
}
