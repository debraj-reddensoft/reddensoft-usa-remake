"use client"
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import us from "@/assets/images/us.svg"
import is from "@/assets/images/is.svg"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect, useRef } from "react";
import Icon from "@/components/Icon";

export default function Header(){
    const pathname = usePathname();
    const [lang, setLang] = useState('en');
    const [isSubmenu, setIsSubmenu] = useState(false);
    const [isSubmenu2, setIsSubmenu2] = useState(false);
    const [mobileMenu, setMobilemenu] = useState(false);
    const [hasPathname, sethasPathname] = useState('');
    const submenu = useRef();
    const submenu2 = useRef();
    const burgermenu = useRef();
    const router  = useRouter();

    const handleSubmenu = () => {
        setIsSubmenu(!isSubmenu);
    }
    const handleSubmenu2 = () => {
        setIsSubmenu2(!isSubmenu2);
    }
    const changeLanguage = (lang) => {
        setLang(lang);
        
        if(lang === "he"){
            if(pathname !== '/' && !pathname.includes('/blog/') && !pathname.includes('/portfolio/')){
                router.push(`${pathname}/he`);
            } else if(pathname == '/'){
                router.push(`/he`);
            } else {
                const segments = pathname.split('/');
                segments.splice((segments.length - 1), 0 , 'he');
                const newPath = segments.join('/');
                router.push(newPath);
            }
        } else{
            const newPath = pathname.replace('he', '')
            router.push(newPath);
        }
    }

    const isActivePath = (path) => (hasPathname !== '/' && hasPathname.endsWith("/") ? hasPathname.slice(0, -1) === path : hasPathname === path);

    useEffect(() => {
        window.scrollTo(0, 0);

        sethasPathname(pathname);
        setIsSubmenu(false);
        setIsSubmenu2(false);
        setMobilemenu(false);
    }, [pathname]);

    useEffect(() => {
        let handlerClickOutside = (e) => {                       
            if(!submenu.current.contains(e.target)){
                setIsSubmenu(false);
            }
            if(!submenu2.current.contains(e.target)){
                setIsSubmenu2(false);
            }
            if(!burgermenu.current.contains(e.target)){
                setMobilemenu(false);
            }
        }
        document.addEventListener("mousedown", handlerClickOutside);
    })

    useEffect(() => {
        if(pathname.includes('/he')){
            setLang("he");
        } else{
            setLang("en");
        }
    }, []);

    return(
        <div className="sticky top-0 bg-primary z-10 border-b border-white-trans">
            <div className={`max-w-[1420px] mx-auto flex items-center px-5 py-5 border-x border-white-trans ${lang == 'he' ? 'flex-row-reverse' : ''}`}>
                <Link href={lang == 'he' ? "/he" : "/"}>
                    <Image className="h-10 sm:h-12 xl:h-16 w-auto" src={logo} alt="Reddensoft logo" width="auto" height="auto"/>
                </Link>
                <div className={`flex items-center ${lang == 'he' ? 'flex-row-reverse mr-auto' : 'ml-auto'}`} ref={burgermenu}>
                    <ul className={`menu flex items-center ${mobileMenu ? 'mobile_menu' : ''} ${lang == 'he' ? 'he' : ''}`} dir={lang == 'he' ? 'rtl' : 'ltr'}>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/he" : "/"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${isActivePath('/') || isActivePath('/he') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "בַּיִת" : "Home"}</span>
                            </Link>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/about/he" : "/about"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${isActivePath('/about') || isActivePath('/about/he') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "אוֹדוֹת" : "About"}</span>
                            </Link>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4" ref={submenu}>
                            <span className={`relative flex items-center p-1.5 cursor-pointer hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/services') || pathname.startsWith('/industries') ? 'text-[#ff393c]' : 'text-white'}`} onClick={handleSubmenu}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "פִּתָרוֹן" : "Solution"}</span>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${lang == 'he' ? 'mr-2.5' : 'ml-2.5'} transform transition-all duration-300 ${isSubmenu ? 'rotate-180' : 'rotate-0'}`}>
                                    <path d="M9.88625 -4.86836e-08L11 1.1776L5.5 7L-2.89893e-07 1.1776L1.11375 -4.32142e-07L5.5 4.64115L9.88625 -4.86836e-08Z" fill="#ffffff"/>
                                </svg>
                                <span className={`triangle ${isSubmenu ? 'block' : 'hidden'}`}></span>
                            </span>
                            <div className={`lg:absolute lg:top-full lg:bg-gradient-to-t from-[#171E46] to-[#2B3778] mt-1 lg:mt-0 transition-all ease-in-out duration-300 overflow-hidden ${lang == 'he' ? 'lg:right-0 lg:left-0' : 'lg:left-0 lg:right-0'} ${isSubmenu ? 'max-h-[2000px] shadow-lg lg:border-b lg:border-[#4D568F]' : 'overflow-hidden max-h-0 shadow-none lg:border-b lg:border-white-trans'}`}>
                                <div className={`max-w-[1484px] mx-auto flex flex-wrap xl:flex-nowrap flex-col lg:flex-row`}>
                                    <div className="relative bg-gradient-to-t from-[#171E46] to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-auto xl:grow pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ? "שירותים" : "Services"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/ui-ux-design/he" : "/services/ui-ux-design"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/ui-ux-design') || isActivePath('/services/ui-ux-design/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ui & ux design" clr={isActivePath('/services/ui-ux-design') || isActivePath('/services/ui-ux-design/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "עיצוב UX וממשק משתמש" : "UI & UX Design"}</span>
                                                </Link>
                                            </li>
                                            {/* <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/product-development/he" : "/services/product-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/product-development') || isActivePath('/services/product-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="product development" clr={isActivePath('/services/product-development') || isActivePath('/services/product-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח מוצר" : "Product Development"}</span>
                                                </Link>
                                            </li> */}
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/website-development/he" : "/services/website-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/website-development') || isActivePath('/services/website-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="website development" clr={isActivePath('/services/website-development') || isActivePath('/services/website-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח אתרים" : "Website Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/mobile-app-development/he" : "/services/mobile-app-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/mobile-app-development') || isActivePath('/services/mobile-app-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="mobile app development" clr={isActivePath('/services/mobile-app-development') || isActivePath('/services/mobile-app-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח אפליקציות למובייל" : "Mobile App Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/graphic-design/he" : "/services/graphic-design"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/graphic-design') || isActivePath('/services/graphic-design/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="graphic design" clr={isActivePath('/services/graphic-design') || isActivePath('/services/graphic-design/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "עיצוב גרפי" : "Graphic Design"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/ai-design-research/he" : "/services/ai-design-research"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/ai-design-research') || isActivePath('/services/ai-design-research/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai design & research" clr={isActivePath('/services/ai-design-research') || isActivePath('/services/ai-design-research/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "עיצוב ומחקר בינה מלאכותית" : "AI Design & Research"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/wordpress-development/he" : "/services/wordpress-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/wordpress-development') || isActivePath('/services/wordpress-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="wordpress development" clr={isActivePath('/services/wordpress-development') || isActivePath('/services/wordpress-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח וורדפרס" : "WordPress Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/saas-development/he" : "/services/saas-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/saas-development') || isActivePath('/services/saas-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="saas development" clr={isActivePath('/services/saas-development') || isActivePath('/services/saas-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח SaaS" : "SaaS Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/digital-marketing/he" : "/services/digital-marketing"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/digital-marketing') || isActivePath('/services/digital-marketing/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="digital marketing" clr={isActivePath('/services/digital-marketing') || isActivePath('/services/digital-marketing/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "שיווק דיגיטלי" : "Digital Marketing"}</span>
                                                </Link>
                                            </li>
                                            {/* <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/seo-smm/he" : "/services/seo-smm"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/seo-smm') || isActivePath('/services/seo-smm/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="seo & smm" clr={isActivePath('/services/seo-smm') || isActivePath('/services/seo-smm/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>SEO & SMM</span>
                                                </Link>
                                            </li> */}
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className="bg-gradient-to-t from-[#171E46] relative to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-1/3 2xl:max-w-[480px] flex-shrink-0 pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ? "תעשיות" : "Industries"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/wellness/he" : "/industries/wellness"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/wellness') || isActivePath('/industries/wellness/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="healthcare" clr={isActivePath('/industries/wellness') || isActivePath('/industries/wellness/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "שירותי בריאות" : "Healthcare"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/ecommerce/he" : "/industries/ecommerce"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/ecommerce') || isActivePath('/industries/ecommerce/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ecommerce" clr={isActivePath('/industries/ecommerce') || isActivePath('/industries/ecommerce/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "מסחר אלקטרוני" : "eCommerce"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/media-telco/he" : "/industries/media-telco"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/media-telco') || isActivePath('/industries/media-telco/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="media & telco" clr={isActivePath('/industries/media-telco') || isActivePath('/industries/media-telco/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "מדיה וטלקו" : "Media & Telco"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/fintech/he" : "/industries/fintech"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/fintech') || isActivePath('/industries/fintech/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="fintech" clr={isActivePath('/industries/fintech') || isActivePath('/industries/fintech/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פינטק" : "Fintech"}</span>
                                                </Link>
                                            </li>
                                            {/* <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/saas/he" : "/industries/saas"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/saas') || isActivePath('/industries/saas/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="saas" clr={isActivePath('/industries/saas') || isActivePath('/industries/saas/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "סאס" : "Saas"}</span>
                                                </Link>
                                            </li> */}
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/technology/he" : "/industries/technology"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/technology') || isActivePath('/industries/technology/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="technology" clr={isActivePath('/industries/technology') || isActivePath('/industries/technology/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "טֶכנוֹלוֹגִיָה" : "Technology"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/artificial-intelligence/he" : "/industries/artificial-intelligence"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/artificial-intelligence') || isActivePath('/industries/artificial-intelligence/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="artificial intelligence" clr={isActivePath('/industries/artificial-intelligence') || isActivePath('/industries/artificial-intelligence/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "בינה מלאכותית" : "Artificial Intelligence"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/cybersecurity/he" : "/industries/cybersecurity"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/cybersecurity') || isActivePath('/industries/cybersecurity/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="cybersecurity" clr={isActivePath('/industries/cybersecurity') || isActivePath('/industries/cybersecurity/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "אבטחת סייבר" : "Cybersecurity"}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className={`rounded-xl lg:bg-black/20 xl:bg-transparent flex flex-col lg:flex-row xl:flex-col relative w-full xl:w-1/4 flex-shrink-0 pt-8 pb-4 xl:pt-12 lg:pb-8 lg:px-4`}>
                                       {/* <Link href="#" className="text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white flex mb-3"> <Icon title="cybersecurity" clr={isActivePath('/services/cybersecurity') || isActivePath('/services/cybersecurity/he') ? '#ff393c' : '#ffffff'}/>  <span className="ps-3">Website Maintenance</span></Link>  */}
                                      
                                        {/* <Image className="relative rounded-xl w-full h-auto z-3" src={whywe} alt="Why We" width="auto" height="auto"/> */}
                                        <div className="w-full lg:w-1/2 xl:w-full">
                                            <h2 className="text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3">{lang == 'he' ? 'תחזוקת אתר אינטרנט' : 'WebSite Maintenance'}</h2>
                                            <p className="xl:max-w-sm text-white px-4 text-sm">{lang == 'he' ? 'תחזוקת אתר היא קבוצה של משימות כדי לשמור על עדכון האתר שלך. פנה אלינו לקבלת עלות תחזוקת האתר המשתלמת ביותר.' : 'Website maintenance is a set of tasks to keep your website updated. Reach us for the most affordable website maintenance cost.'}</p>
                                        </div>
                                        <Link href={lang == 'he' ? "/services/maintenance-cost/he" : "/services/maintenance-cost"} className={`mt-4 z-10 flex items-center bg-white ms-4 h-11 2xl:h-12 text-sm 2xl:text-base rounded-3xl mt-2 ${lang == 'he' ? 'pr-4 pl-2.5 ml-auto' : 'pl-4 pr-2.5 mr-auto'}`}>
                                            <span className={`text-[14px] font-bold ${lang == 'he' ? 'pl-2' : 'pr-2'}`}>{lang == 'he' ? 'התחל תחזוקה עכשיו' : 'Start Maintenance Now'}</span>
                                            <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex items-center justify-center rounded-full bg-secondary">
                                                <svg width="12" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform ${lang == 'he' ? 'rotate-180' : 'rotate-0'}`}>
                                                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                                </svg>
                                            </span>
                                        </Link>
                                        {/* <div className={`absolute bottom-2 bg-[#B80004] z-2 h-[140px] w-[70px] 2xl:h-[200px] 2xl:w-[100px]  ${lang == 'he' ? 'rounded-l-full -left-1 2xl:-left-8' : 'rounded-r-full -right-1 2xl:-right-8'}`}></div> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4" ref={submenu2}>
                            <span className={`relative flex items-center p-1.5 cursor-pointer hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/ai') ? 'text-[#ff393c]' : 'text-white'}`} onClick={handleSubmenu2}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "AI" : "AI"}</span>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${lang == 'he' ? 'mr-2.5' : 'ml-2.5'} transform transition-all duration-300 ${isSubmenu2 ? 'rotate-180' : 'roatte-0'}`}>
                                    <path d="M9.88625 -4.86836e-08L11 1.1776L5.5 7L-2.89893e-07 1.1776L1.11375 -4.32142e-07L5.5 4.64115L9.88625 -4.86836e-08Z" fill="#ffffff"/>
                                </svg>
                                <span className={`triangle ${isSubmenu2 ? 'block' : 'hidden'}`}></span>
                            </span>
                            <div className={`lg:absolute lg:top-full lg:bg-gradient-to-t from-[#171E46] to-[#2B3778] mt-1 lg:mt-0 transition-all duration-300 overflow-hidden ${lang == 'he' ? 'lg:right-0 lg:left-0' : 'lg:left-0 lg:right-0'} ${isSubmenu2 ? 'max-h-[2000px] shadow-lg lg:border-b border-[#4D568F]' : 'overflow-hidden max-h-0 shadow-none'}`}>
                                <div className={`max-w-[1484px] mx-auto flex flex-wrap xl:flex-nowrap flex-col lg:flex-row`}>
                                    <div className="relative bg-gradient-to-t from-[#171E46] to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-2/5 pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ? "AI" : "AI"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-development/he" : "/ai/ai-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-development') || isActivePath('/ai/ai-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai development" clr={isActivePath('/ai/ai-development') || isActivePath('/ai/ai-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח בינה מלאכותית" : "AI Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-consulting/he" : "/ai/ai-consulting"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-consulting') || isActivePath('/ai/ai-consulting/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai consulting" clr={isActivePath('/ai/ai-consulting') || isActivePath('/ai/ai-consulting/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "ייעוץ בינה מלאכותית" : "AI Consulting"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-copilot-development/he" : "/ai/ai-copilot-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-copilot-development') || isActivePath('/ai/ai-copilot-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai copilot development" clr={isActivePath('/ai/ai-copilot-development') || isActivePath('/ai/ai-copilot-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח AI Copilot" : "AI Copilot Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-agent-development/he" : "/ai/ai-agent-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-agent-development') || isActivePath('/ai/ai-agent-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai agent development" clr={isActivePath('/ai/ai-agent-development') || isActivePath('/ai/ai-agent-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח סוכני AI" : "AI Agent Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ml-development/he" : "/ai/ml-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ml-development') || isActivePath('/ai/ml-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ml development" clr={isActivePath('/ai/ml-development') || isActivePath('/ai/ml-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "פיתוח ML" : "ML Development"}</span>
                                                </Link>
                                            </li>
                                            {/* <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/hire-chatgpt-developers/he" : "/ai/hire-chatgpt-developers"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/hire-chatgpt-developers') || isActivePath('/ai/hire-chatgpt-developers/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="hire chatgpt developers" clr={isActivePath('/ai/hire-chatgpt-developers') || isActivePath('/ai/hire-chatgpt-developers/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "שכור מפתחי ChatGPT" : "Hire ChatGPT Developers"}</span>
                                                </Link>
                                            </li> */}
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className="relative bg-gradient-to-t from-[#171E46] to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-1/4 mx-auto pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ? "AI גנרטיבי" : "Generative AI"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-full px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-consulting/he" : "/ai/generative-ai-consulting"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-consulting') || isActivePath('/ai/generative-ai-consulting/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai consulting" clr={isActivePath('/ai/generative-ai-consulting') || isActivePath('/ai/generative-ai-consulting/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "ייעוץ AI גנרטיבי" : "Generative AI consulting"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-full px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-development/he" : "/ai/generative-ai-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-development') || isActivePath('/ai/generative-ai-development/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai development" clr={isActivePath('/ai/generative-ai-development') || isActivePath('/ai/generative-ai-development/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "ייעוץ AI גנרטיבי" : "Generative AI Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-full px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-integration/he" : "/ai/generative-ai-integration"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-integration') || isActivePath('/ai/generative-ai-integration/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai integration" clr={isActivePath('/ai/generative-ai-integration') || isActivePath('/ai/generative-ai-integration/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "ייעוץ AI גנרטיבי" : "Generative AI Integration"}</span>
                                                </Link>
                                            </li>
                                            {/* <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-developers/he" : "/ai/generative-ai-developers"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-developers') || isActivePath('/ai/generative-ai-developers/he') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai developers" clr={isActivePath('/ai/generative-ai-developers') || isActivePath('/ai/generative-ai-developers/he') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'mr-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "ייעוץ AI גנרטיבי" : "Generative AI Developers"}</span>
                                                </Link>
                                            </li> */}
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className={`rounded-xl lg:bg-black/20 xl:bg-transparent flex flex-col lg:flex-row xl:flex-col relative w-full xl:w-1/3 flex-shrink-0 pt-8 pb-4 xl:pt-12 lg:pb-8 lg:px-4`}>
                                        <div className="w-full lg:w-1/2 xl:w-full">
                                            <h2 className="text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3">{lang == 'he' ? 'שכור מפתחי בינה מלאכותית' : 'Hire AI Developers'}</h2>
                                            <p className="xl:max-w-sm text-white px-4 text-sm">{lang == 'he' ? "שכור מפתחי ChatGPT מומחים כדי לבנות צ'אטבוטים של AI ולהפוך את התהליכים העסקיים שלך לאוטומטיים." : 'Hire expert ChatGPT developers to build AI chatbots and automate your business processes.'}</p>
                                        </div>
                                        <Link href={lang == 'he' ? "/ai/hire-chatgpt-developers/he" : "/ai/hire-chatgpt-developers"} className={`mt-4 z-10 flex items-center bg-white ms-4 h-11 2xl:h-12 text-sm 2xl:text-base rounded-3xl mt-2 ${lang == 'he' ? 'pr-4 pl-2.5 ml-auto' : 'pl-4 pr-2.5 mr-auto'}`}>
                                            <span className={`text-[14px] font-bold ${lang == 'he' ? 'pl-2' : 'pr-2'}`}>{lang == 'he' ? 'שכר עכשיו' : 'Hire Now'}</span>
                                            <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex items-center justify-center rounded-full bg-secondary">
                                                <svg width="12" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform ${lang == 'he' ? 'rotate-180' : 'rotate-0'}`}>
                                                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/portfolio/he" : "/portfolio"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/portfolio') || isActivePath('/portfolio') || isActivePath('/portfolio/he') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "תִיק" : "Portfolio"}</span>
                            </Link>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/blog/he" : "/blog"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/blog') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "בלוג" : "blog"}</span>
                            </Link>
                        </li>
                        <li className={`flex md:hidden !pt-5 ${lang == 'he' ? 'justify-end ' : 'justify-start'}`} dir="ltr">
                            {lang == 'he' ? <GlobalButton title="מַגָע" link="/contact-form/he" alignment/> : <GlobalButton title="Contact" link="/contact-form" />}
                        </li>
                    </ul>
                    {/* <div className={`flex items-center ${lang == 'he' ? 'mr-2 2xl:mr-3' : 'ml-2 2xl:ml-3'}`}>
                        <span onClick={() => changeLanguage("en")} className={`relative px-3 py-1.5 border-r border-white-trans after:content-[''] ${lang == 'en' ? 'after:absolute  after:h-0.5 after:bg-secondary after:left-3 after:right-3 after:-bottom-1 pointer-events-none' : 'cursor-pointer '}`}>
                            <Image className="h-3 xl:h-3.5 w-auto" src={us} alt="US icon" width="auto" height="auto"/>
                        </span>
                        <span onClick={() => changeLanguage("he")} className={`relative px-3 py-1.5 after:content-[''] ${lang == 'he' ? 'after:absolute  after:h-0.5 after:bg-secondary after:left-3 after:right-3 after:-bottom-1 pointer-events-none' : 'cursor-pointer '}`}>
                            <Image className="h-3 xl:h-3.5 w-auto" src={is} alt="IS icon" width="auto" height="auto"/>
                        </span>
                    </div> */}
                    <div className={`hidden md:block ${lang == 'he' ? 'pr-5 ' : 'pl-5 '}`}>
                        {lang == 'he' ? <GlobalButton title="מַגָע" link="/contact-form/he" alignment/> : <GlobalButton title="Contact" link="/contact-form" />}
                    </div>
                    <div className={`lg:hidden h-4 flex flex-col justify-between cursor-pointer ${lang == 'he' ? 'mr-4' : 'ml-4'}`} onClick={() => setMobilemenu(!mobileMenu)}>
                        <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileMenu ? 'rotate-45 translate-y-[7px]' : 'rotate-0 translate-y-0'}`}></span>
                        <span className={`h-0.5 bg-white rounded transition-all duration-300 ${mobileMenu ? 'w-0' : 'w-6'}`}></span>
                        <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${mobileMenu ? '-rotate-45 -translate-y-[7px]' : 'rotate-0 translate-y-0'}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}