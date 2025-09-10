import Image from "next/image";
import marvihimthumb from "@/assets/images/marvihim-thumb.webp"
import trispirethumb from "@/assets/images/trispire-thumb.webp"
import robocentthumb from "@/assets/images/robocent-thumb.webp"
import origamithumb from "@/assets/images/origami-thumb.webp"
import candidsyncthumb from "@/assets/images/candidsync-thumb.webp"
import reflexiveaithumb from "@/assets/images/reflexiveai-thumb.webp"
import dashboardthumb from "@/assets/images/dashboard-thumb.webp"
import chatbotthumb from "@/assets/images/chatbot-thumb.webp"
import easyposthumb from "@/assets/images/easypos-thumb.webp"
import trendhivethumb from "@/assets/images/trendhive-thumb.webp"
import arrowthumb from "@/assets/images/arrow-thumb.webp"
import sasradarthumb from "@/assets/images/sasradar-thumb.webp"
import signuluthumb from "@/assets/images/signulu-thumb.webp"
import stannpthumb from "@/assets/images/stannp-thumb.webp"
import ricomanthumb from "@/assets/images/ricoman-thumb.webp"
import epthumb from "@/assets/images/ep-thumb.webp"
import zohnathumb from "@/assets/images/zohna-thumb.webp"
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'

export default function PortfolioArea({alignment}) {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const works = [
        // {
        //     id: 1,
        //     title: "Arrow",
        //     desc: alignment ? "Arrow הוא ממשק מרכזי שנועד להקל על יצירה, ניהול ומעקב אחר קמפיינים של קופונים." : "Arrow is a centralized interface designed to facilitate the creation, management, and tracking of coupon campaigns.",
        //     thumb: arrowthumb,
        //     link: "arrow"
        // },
        {
            id: 1,
            title: "Marvihim",
            desc: alignment ? "פיתוח פלטפורמת שירות פיננסי מקיף המתמחה בהחזרי מס לשכירים. איתור קרנות פנסיה אבודות, וארגון פוליסות ביטוח." : "To develop a comprehensive financial service platform specializing in tax refunds for salaried employees. locating lost pension funds, and organizing insurance policies.",
            thumb: marvihimthumb,
            link: "marvihim"
        },
        {
            id: 2,
            title: "RoboCent",
            desc: alignment ? "RoboCent מחויב להעצמת קמפיינים פוליטיים עם כלי תקשורת חדישים המשפרים את מעורבות הבוחרים ומניעים חשיפה משפיעה." : "RoboCent is dedicated to empowering political campaigns with cutting-edge communication tools that enhance voter engagement and drive impactful outreach.",
            thumb: robocentthumb,
            link: "robocent"
        },
        {
            id: 3,
            title: "Trispire",
            desc: alignment ? "Trispire Solutions, אחד מהפרויקטים האחרונים שלנו, עוסק בשינוי מתן שירותי בריאות באמצעות טכנולוגיות חדשניות." : "TriSpire was created by mental health professionals for mental health professionalsTrispire Solutions, one of our latest projects, is about transforming healthcare delivery through innovative technologies.",
            thumb: trispirethumb,
            link: "trispire"
        },
        // {
        //     id: 4,
        //     title: "Origami",
        //     desc: alignment ? "אוריגמי הוא אחד השחקנים הנודעים באוריגמי והאתר אופנתי ומרשים באותה מידה! אנו מודים ללקוח שלנו Origami שנתן לנו את ההזדמנות למתג מחדש את אתר האינטרנט שלו." : "Origami is one of the renowned player in Origami and the site is as Stylish and impressive! We would thanks our client Origami for giving us the opportunity to re-brand their website.",
        //     thumb: origamithumb,
        //     link: "origami"
        // },
        {
            id: 5,
            title: "CandidSync",
            desc: alignment ? "Candidsync הוא הפתרון היחיד למציאת הצלמים הטובים ביותר אצלך, בין אם אתה מטייל או משפיע על מדיה חברתית או בעסק אחר." : "Candidsync is the one stop solution to find the best empaneled photographers at your place whether you are a traveler or a social media influencer or in other business.",
            thumb: candidsyncthumb,
            link: "candidsync"
        },
        {
            id: 6,
            title: "Reflexiveai",
            desc: alignment ? "חברת ייעוץ תוכנה ו-SaaS, מתחזקת מסגרת קוד פתוח של Seneca JS ובונה כלים DevRel." : "A software consultancy & SaaS company, maintaining Seneca JS Open Source framework & building DevRel tools.",
            thumb: reflexiveaithumb,
            link: "reflexiveai"
        },
        {
            id: 7,
            title: "Dashboard",
            desc: alignment ? "חברת ייעוץ תוכנה ו-SaaS, מתחזקת מסגרת קוד פתוח של Seneca JS ובונה כלים DevRel." : "A software consultancy & SaaS company, maintaining Seneca JS Open Source framework & building DevRel tools.",
            thumb: dashboardthumb,
            link: "dashboard"
        },
        {
            id: 8,
            title: "Easypos",
            desc: alignment ? "מערכת נקודות מכירה חלקה שנועדה לייעל את הפעילות העסקית שלך. פשט עסקאות, נהל מלאי וקבל תובנות בזמן אמת, הכל במקום אחד. מושלם עבור עסקים בכל גודל!" : "A seamless point-of-sale system designed to streamline your business operations. Simplify transactions, manage inventory, and gain real-time insights, all in one place. Perfect for businesses of any size!",
            thumb: easyposthumb,
            link: "easypos"
        },
        {
            id: 9,
            title: "Chatbot",
            desc: alignment ? "Chatbot פתרון ChatGPT מותאם אישית לעסקים. שפר את האינטראקציות עם הלקוחות, הפוך את התמיכה לאוטומטי וספק חוויות מותאמות אישית ללקוחות שלך, והכל עם צ'אט בוט שנבנה כדי להתאים לצרכים הייחודיים שלך!" : "Chatbot A customized ChatGPT solution tailored for businesses. Enhance customer interactions, automate support, and provide personalized experiences to your clients, all with a chatbot built to fit your unique needs!",
            thumb: chatbotthumb,
            link: "chatbot"
        },
        {
            id: 10,
            title: "TrendHive",
            desc: alignment ? "בן לווית המסחר האולטימטיבי שלך! הישאר לפני השוק עם עדכונים בזמן אמת, תובנות חכמות וכלים אינטואיטיביים למסחר חלק. מעצימה אותך לסחור חכם יותר, בכל זמן ובכל מקום." : "Your ultimate trading companion! Stay ahead of the market with real-time updates, smart insights, and intuitive tools for seamless trading. Empowering you to trade smarter, anytime, anywhere.",
            thumb: trendhivethumb,
            link: "trendhive"
        },
        {
            id: 11,
            title: "Ricoman",
            desc: alignment ? "Ricoman הוא הפתרון היחיד לכל פרויקט תאורה. כשהם העלו את הרעיון לחזק את הנוכחות המקוונת שלהם אז עזרנו להם עם הרעיונות החדשניים והיעילים ביותר." : "Ricoman is the one stop solution for any lighting project. When they came up with the idea to stronger their online presence then we helped them with the most innovative and effective ideas.",
            thumb: ricomanthumb,
            link: "ricoman"
        },
        {
            id: 12,
            title: "Sasradar",
            desc: alignment ? "זה מביא אינטליגנציה פעילה עד קצה האצבע שלך שמייעל את האפליקציה שלך בצורה הטובה ביותר ועוזר לך להתבלט מהקהל. הכלים החכמים והיעילים עוזרים לך לנתח את השוק על ידי קבלת החלטות מתאימות." : "It brings actionable intelligence to your fingertip that optimizes your app the most and help you to stand out from the crowd. The smart and efficient tools help you to analyze the marketplace by taking appropriate decisions.",
            thumb: sasradarthumb,
            link: "sasradar"
        },
        {
            id: 13,
            title: "Signulu",
            desc: alignment ? "המיתוג מחדש של Signulu כלל שיפוץ מלא של האתר והאפליקציה לנייד שלה כדי לשפר את חווית המשתמש והפונקציונליות. האתר משמש כמרכז מרכזי למשתמשים לחקור את ההיצע של Signulu, להזמין שירותי גישה וגישה למשאבים יקרי ערך בקלות." : "Signulu's rebranding included a complete overhaul of its website and mobile app to enhance user experience and functionality. The website serves as a central hub for users to explore Signulu's offerings, book services, and access valuable resources with ease.",
            thumb: signuluthumb,
            link: "signulu"
        },
        {
            id: 14,
            title: "Stannp",
            desc: alignment ? "מתן פתרונות SaaS עבור דיוור ישיר, מציע לעסקים גישה דיגיטלית ומשולבת לחלוטין לייעל את תהליכי הדיוור הישיר שלהם." :"Providing SaaS solutions for direct mail, offering businesses a fully digital and integrated approach to streamline their direct mail processes.",
            thumb: stannpthumb,
            link: "stannp"
        },
        {
            id: 15,
            title: "EP",
            desc: alignment ? "קהילת מומחי ההגנה על מנהלים נועדה ליצור אופק חדש הן עבור הסוכן והן עבור סוכנויות שיכולות לעסוק בשירותי אבטחה פרטיים ברמה הגבוהה ביותר המספקים עסקים." : "Executive Protection Specialist Community is meant to create a new horizon for both the agent and agencies who can get engaged in topnotch private security service providing business.",
            thumb: epthumb,
            link: "ep"
        },
        // {
        //     id: 16,
        //     title: "Zohna",
        //     desc: alignment ? "זוהנה היא הפתרון האחד לכל התייפייפות והזנה. זה מכסה קשת עצומה של מוצרי ייפוי ורישום בלוגים מסוגננים עם פתרון השיווק המשויך החל מטיפול בעור, בריאות לבריאות ועד הזנת שיער, איפור ובניית ציפורניים." : "Zohna is the one-stop solution for all beautification and nourishment. It covers a huge spectrum of beautification products and stylish blog writeups with the affiliated marketing solution starting from skin care, health wellness to hair nourishment, makeup and nailsart.",
        //     thumb: zohnathumb,
        //     link: "zohna"
        // },
    ];

    return(
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap z-[11] px-5 2xl:px-0" dir={alignment ? 'rtl' : 'ltr'}>
            <div className="w-full lg:w-1/3 h-full">
                <div className="lg:max-w-xs 2xl:max-w-md text-white flex flex-col items-start py-5">
                    <h2 className="text-4xl xl:text-5xl 2xl:text-6xl leading-none font-black uppercase" data-aos="fade-right" data-aos-delay="100">{alignment ? 'מקרי המקרה שלנו' : 'Our Case Studies'}</h2>
                    <p className="lg:max-w-xs text-base xl:text-xl 2xl:text-2xl leading-6 font-light py-7" data-aos="fade-right" data-aos-delay="200">{alignment ? 'חקור את הפרויקטים הקודמים שלנו המציגים את המומחיות שלנו בעיצוב ממשק משתמש/UX.' : 'Explore our past projects showcasing our expertise in UI/UX design.'}</p>
                    <div className="flex justify-start" data-aos="fade-left" dir="ltr">
                        { alignment ? <GlobalButton title="הצג את העבודה שלנו" link="/portfolio/he" alignment/> : <GlobalButton title="View Our Work" link="/portfolio" /> }
                    </div>
                    <div className="flex justify-between w-[72px] pt-10" dir="ltr">
                        <button className="w-8 h-8 rounded-full border border-white/20 flex justify-center items-center" onClick={scrollPrev} aria-label="Go to previous slide">
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1.48078L7.48594 0L0 7.3125L7.48594 14.625L9 13.1442L3.03281 7.3125L9 1.48078Z" fill="#ffffff"/>
                            </svg>
                        </button>
                        <button className="w-8 h-8 rounded-full border border-white/20 flex justify-center items-center" onClick={scrollNext} aria-label="Go to next slide">
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.48078L1.51406 0L9 7.3125L1.51406 14.625L0 13.1442L5.96719 7.3125L0 1.48078Z" fill="#ffffff"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`relative w-full lg:w-2/3 h-full flex flex-col justify-center ${alignment ? 'pr-0 lg:pr-14 xl:pr-0' : 'pl-0 lg:pl-14 xl:pl-0'}`}>
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container" dir="ltr">
                        { works.map((work, w) => (
                            <div className="embla__slide w-full xs:w-1/2 xl:w-1/3 flex-shrink-0 px-1.5 xl:px-2.5" key={work.id} dir={alignment ? 'rtl' : 'ltr'}>
                                <div className="no_shadow relative overflow-hidden bg-white pb-2 rounded-2xl h-full">
                                    <div className="bg-gray-100 flex items-center justify-center p-1">
                                        <Image className="w-full max-h-52 h-full w-auto rounded-t-xl object-cover object-top" src={work.thumb} alt={work.title} width="auto" height="auto"/>
                                    </div>
                                    <div className="px-5 py-5 xl:px-6 xl:py-6">
                                        <h3 className="text-base xl:text-lg 2xl:text-xl font-semibold pb-2">{work.title}</h3>
                                        <p className="text-sm xl:text-sm font-normal mb-2 line-clamp-4">{work.desc}</p>
                                    </div>
                                    <Link href={alignment ? `/portfolio/he/${work.link}` : `/portfolio/${work.link}`} className={`absolute -bottom-10 transform block w-20 h-20 bg-secondary ${alignment ? "-left-10 -rotate-45 mr-auto" : "-right-10 rotate-45 ml-auto"}`} >
                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute top-8 transform ${alignment ? "right-1.5 -rotate-[135deg]" : "left-1.5 -rotate-45"}`}>
                                            <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}