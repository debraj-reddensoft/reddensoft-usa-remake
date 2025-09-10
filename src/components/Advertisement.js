import Image from "next/image";
import womanlaptop from "@/assets/images/woman-laptop.webp"
import curveline from "@/assets/images/curve-line.png"
import texture from "@/assets/images/texture.webp"
import Link from "next/link";

export default function Advertisement({alignment}) {
    return (
        <div className={`relative flex flex-wrap md:flex-nowrap items-center bg-gradient-to-t from-[#F91015] to-[#CD0307] rounded-2xl overflow-hidden py-6 md:py-0 ${alignment ? 'pr-6 lg:pr-8 xl:pr-12 pl-2 sm:pl-6' : 'pl-6 lg:pl-8 xl:pl-12 pr-2 sm:pr-6'}`} dir={alignment ? 'rtl' : 'ltr'}>
            <div className="relative z-2 w-full md:max-w-[380px] 2xl:max-w-[500px] w-full md:p-3 my-4 md:my-10">
                <h3 className="text-xl lg:text-2xl 2xl:text-4xl text-white font-black uppercase">{alignment ? 'שמור על האתר שלך' : 'Keep Your Website'}</h3>
                <h3 className="max-w-md text-3xl lg:text-5xl 2xl:text-7xl text-white font-black uppercase">{alignment ? 'פועל בצורה חלקה 24/7!' : 'Running Smoothly 24/7!'}</h3>
            </div>
            <div className={`relative z-2 w-full md:max-w-[380px] w-full flex flex-col items-start md:py-1.5 overflow-hidden my-4 md:my-10 ${alignment ? 'pr-8 sm:pr-14 pl-5' : 'pl-8 sm:pl-14 pr-5'}`}>
                { alignment ?
                    <p className="text-lg 2xl:text-xl leading-tight text-white font-medium">ודא שהאתר שלך תמיד מהיר, בטוח ומעודכן. יש לנו שירותי תחזוקת אתרים מקצועיים המותאמים לעסק שלך. תן לנו לטפל בטכנולוגיה, כדי שתוכל להתמקד בצמיחה!</p>
                    : <p className="text-lg 2xl:text-xl leading-tight text-white font-medium">Make sure your website is always <span className="font-black">quick, safe, and updated</span>. We have professional website maintenance services tailored for your business. Let us handle the tech, so you can focus on growth!</p>
                }
                <Link href={alignment ? "/services/maintenance-cost/he" : "/services/maintenance-cost"} className={`flex items-center bg-white h-11 2xl:h-12 text-sm 2xl:text-base rounded-3xl mt-5 ${alignment ? 'pl-2.5 pr-6' : 'pl-6 pr-2.5'}`}>
                    <span className={`text-base font-bold uppercase ${alignment ? 'pl-4' : 'pr-4'}`}>{alignment ? 'התחל' : 'Get Started'}</span>
                    <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex items-center justify-center rounded-full bg-secondary">
                        <svg width="12" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform ${alignment ? 'rotate-180' : 'rotate-0'}`}>
                            <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                        </svg>
                    </span>
                </Link>
                <Image src={curveline} className={`absolute top-1/2 transform -translate-y-1/2 ${alignment ? 'right-0 -scale-x-100' : 'left-0 scale-x-100'}`} alt="" priority width="auto" height="auto"/>
            </div>
            <div className={`hidden lg:block relative z-2 max-w-[300px] 2xl:max-w-[400px] w-full ${alignment ? 'mr-auto' : 'ml-auto'}`}>
                <Image src={womanlaptop} className={`pt-4 ${alignment ? '-scale-x-100' : 'scale-x-100'}`} alt="Woman with laptop icon" priority width="auto" height="auto"/>
            </div>
            <div className={`absolute top-16 bg-[#B80004] h-[800px] w-[400px] z-1 ${alignment ? '-left-12 rounded-r-full' : '-right-12 rounded-l-full'}`}></div>
            <div className={`absolute bottom-3/4 bg-[#B80004] h-[300px] w-[150px] z-1 ${alignment ? '-right-12 rounded-l-full' : '-left-12 rounded-r-full'}`}></div>
            <Image src={texture} className="absolute left-0 top-0 h-full w-full object-cover z-0" alt="Textures icon" priority width="auto" height="auto"/>
        </div>
    )
}