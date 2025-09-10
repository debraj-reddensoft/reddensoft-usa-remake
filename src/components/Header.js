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
            <div className={`max-w-[1420px] mx-auto flex items-center px-5 py-5 border-x border-white-trans ${lang == 'he' ? 'flex-row' : ''}`}>
                <Link href="/">
                    <Image className="h-10 sm:h-12 xl:h-16 w-auto" src={logo} alt="Reddensoft logo" width="auto" height="auto"/>
                </Link>
                <div className={`flex items-center ${lang == 'he' ? 'ml-auto' : 'ml-auto'}`} ref={burgermenu}>
                    <ul className={`menu flex items-center ${mobileMenu ? 'mobile_menu' : ''}`}>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href="/" className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${isActivePath('/') || isActivePath('/he') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "Home" : "Home"}</span>
                            </Link>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/about" : "/about"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${isActivePath('/about') || isActivePath('/about') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "About" : "About"}</span>
                            </Link>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4" ref={submenu}>
                            <span className={`relative flex items-center p-1.5 cursor-pointer hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/services') || pathname.startsWith('/industries') ? 'text-[#ff393c]' : 'text-white'}`} onClick={handleSubmenu}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "Solution" : "Solution"}</span>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${lang == 'he' ? 'ml-2.5' : 'ml-2.5'} transform transition-all duration-300 ${isSubmenu ? 'rotate-180' : 'rotate-0'}`}>
                                    <path d="M9.88625 -4.86836e-08L11 1.1776L5.5 7L-2.89893e-07 1.1776L1.11375 -4.32142e-07L5.5 4.64115L9.88625 -4.86836e-08Z" fill="#ffffff"/>
                                </svg>
                                <span className={`triangle ${isSubmenu ? 'block' : 'hidden'}`}></span>
                            </span>
                            <div className={`lg:absolute lg:top-full lg:bg-gradient-to-t from-[#171E46] to-[#2B3778] mt-1 lg:mt-0 transition-all ease-in-out duration-300 overflow-hidden ${lang == 'he' ? 'lg:right-0 lg:left-0' : 'lg:left-0 lg:right-0'} ${isSubmenu ? 'max-h-[2000px] shadow-lg lg:border-b lg:border-[#4D568F]' : 'overflow-hidden max-h-0 shadow-none lg:border-b lg:border-white-trans'}`}>
                                <div className={`max-w-[1484px] mx-auto flex flex-wrap xl:flex-nowrap flex-col lg:flex-row`}>
                                    <div className="relative bg-gradient-to-t from-[#171E46] to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-auto xl:grow pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ? "Services" : "Services"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/ui-ux-design" : "/services/ui-ux-design"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/ui-ux-design') || isActivePath('/services/ui-ux-design') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ui & ux design" clr={isActivePath('/services/ui-ux-design') || isActivePath('/services/ui-ux-design') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "UI & UX Design" : "UI & UX Design"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/website-development" : "/services/website-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/website-development') || isActivePath('/services/website-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="website development" clr={isActivePath('/services/website-development') || isActivePath('/services/website-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Website Development" : "Website Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/mobile-app-development" : "/services/mobile-app-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/mobile-app-development') || isActivePath('/services/mobile-app-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="mobile app development" clr={isActivePath('/services/mobile-app-development') || isActivePath('/services/mobile-app-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Mobile App Development" : "Mobile App Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/graphic-design" : "/services/graphic-design"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/graphic-design') || isActivePath('/services/graphic-design') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="graphic design" clr={isActivePath('/services/graphic-design') || isActivePath('/services/graphic-design') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Graphic Design" : "Graphic Design"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/ai-design-research" : "/services/ai-design-research"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/ai-design-research') || isActivePath('/services/ai-design-research') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai design & research" clr={isActivePath('/services/ai-design-research') || isActivePath('/services/ai-design-research') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "AI Design & Research" : "AI Design & Research"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/wordpress-development" : "/services/wordpress-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/wordpress-development') || isActivePath('/services/wordpress-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="wordpress development" clr={isActivePath('/services/wordpress-development') || isActivePath('/services/wordpress-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "WordPress Development" : "WordPress Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/saas-development" : "/services/saas-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/saas-development') || isActivePath('/services/saas-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="saas development" clr={isActivePath('/services/saas-development') || isActivePath('/services/saas-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "SaaS Development" : "SaaS Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/services/digital-marketing" : "/services/digital-marketing"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/services/digital-marketing') || isActivePath('/services/digital-marketing') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="digital marketing" clr={isActivePath('/services/digital-marketing') || isActivePath('/services/digital-marketing') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Digital Marketing" : "Digital Marketing"}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className="bg-gradient-to-t from-[#171E46] relative to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-1/3 2xl:max-w-[480px] flex-shrink-0 pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ? "Industries" : "Industries"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/wellness" : "/industries/wellness"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/wellness') || isActivePath('/industries/wellness') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="healthcare" clr={isActivePath('/industries/wellness') || isActivePath('/industries/wellness') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Healthcare" : "Healthcare"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/ecommerce" : "/industries/ecommerce"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/ecommerce') || isActivePath('/industries/ecommerce') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ecommerce" clr={isActivePath('/industries/ecommerce') || isActivePath('/industries/ecommerce') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "eCommerce" : "eCommerce"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/media-telco" : "/industries/media-telco"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/media-telco') || isActivePath('/industries/media-telco') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="media & telco" clr={isActivePath('/industries/media-telco') || isActivePath('/industries/media-telco') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Media & Telco" : "Media & Telco"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/fintech" : "/industries/fintech"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/fintech') || isActivePath('/industries/fintech') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="fintech" clr={isActivePath('/industries/fintech') || isActivePath('/industries/fintech') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Fintech" : "Fintech"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/technology" : "/industries/technology"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/technology') || isActivePath('/industries/technology') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="technology" clr={isActivePath('/industries/technology') || isActivePath('/industries/technology') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Technology" : "Technology"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/artificial-intelligence" : "/industries/artificial-intelligence"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/artificial-intelligence') || isActivePath('/industries/artificial-intelligence') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="artificial intelligence" clr={isActivePath('/industries/artificial-intelligence') || isActivePath('/industries/artificial-intelligence') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Artificial Intelligence" : "Artificial Intelligence"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/industries/cybersecurity" : "/industries/cybersecurity"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/industries/cybersecurity') || isActivePath('/industries/cybersecurity') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="cybersecurity" clr={isActivePath('/industries/cybersecurity') || isActivePath('/industries/cybersecurity') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Cybersecurity" : "Cybersecurity"}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className={`rounded-xl lg:bg-black/20 xl:bg-transparent flex flex-col lg:flex-row xl:flex-col relative w-full xl:w-1/4 flex-shrink-0 pt-8 pb-4 xl:pt-12 lg:pb-8 lg:px-4`}>
                                       
                                        <div className="w-full lg:w-1/2 xl:w-full">
                                            <h2 className="text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3">{lang == 'he' ? 'WebSite Maintenance' : 'WebSite Maintenance'}</h2>
                                            <p className="xl:max-w-sm text-white px-4 text-sm">{lang == 'he' ? 'Website maintenance is a set of tasks to keep your website updated. Reach us for the most affordable website maintenance cost.' : 'Website maintenance is a set of tasks to keep your website updated. Reach us for the most affordable website maintenance cost.'}</p>
                                        </div>
                                        <Link href={lang == 'he' ? "/services/maintenance-cost" : "/services/maintenance-cost"} className={`mt-4 z-10 flex items-center bg-white ms-4 h-11 2xl:h-12 text-sm 2xl:text-base rounded-3xl mt-2 ${lang == 'he' ? 'pl-4 pr-2.5 mr-auto' : 'pl-4 pr-2.5 mr-auto'}`}>
                                            <span className={`text-[14px] font-bold ${lang == 'he' ? 'pr-2' : 'pr-2'}`}>{lang == 'he' ? 'Start Maintenance Now' : 'Start Maintenance Now'}</span>
                                            <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex items-center justify-center bg-secondary">
                                                <svg width="12" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4" ref={submenu2}>
                            <span className={`relative flex items-center p-1.5 cursor-pointer hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/ai') ? 'text-[#ff393c]' : 'text-white'}`} onClick={handleSubmenu2}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "AI" : "AI"}</span>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${lang == 'he' ? 'ml-2.5' : 'ml-2.5'} transform transition-all duration-300 ${isSubmenu2 ? 'rotate-180' : 'roatte-0'}`}>
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
                                                <Link href={lang == 'he' ? "/ai/ai-development" : "/ai/ai-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-development') || isActivePath('/ai/ai-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai development" clr={isActivePath('/ai/ai-development') || isActivePath('/ai/ai-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "AI Development" : "AI Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-consulting" : "/ai/ai-consulting"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-consulting') || isActivePath('/ai/ai-consulting') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai consulting" clr={isActivePath('/ai/ai-consulting') || isActivePath('/ai/ai-consulting') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "AI Consulting" : "AI Consulting"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-copilot-development" : "/ai/ai-copilot-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-copilot-development') || isActivePath('/ai/ai-copilot-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai copilot development" clr={isActivePath('/ai/ai-copilot-development') || isActivePath('/ai/ai-copilot-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "AI Copilot Development" : "AI Copilot Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ai-agent-development" : "/ai/ai-agent-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ai-agent-development') || isActivePath('/ai/ai-agent-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ai agent development" clr={isActivePath('/ai/ai-agent-development') || isActivePath('/ai/ai-agent-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "AI Agent Development" : "AI Agent Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-1/2 px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/ml-development" : "/ai/ml-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/ml-development') || isActivePath('/ai/ml-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="ml development" clr={isActivePath('/ai/ml-development') || isActivePath('/ai/ml-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "ML Development" : "ML Development"}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className="relative bg-gradient-to-t from-[#171E46] to-[#2B3778] rounded-xl lg:bg-none w-full lg:w-1/2 xl:w-1/4 mx-auto pt-6 pb-4 lg:pt-12 lg:pb-8 lg:px-4 mb-2 lg:mb-0">
                                        <span className={`text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3`}>{lang == 'he' ?  "Generative AI" : "Generative AI"}</span>
                                        <ul className="py-2 flex flex-wrap">
                                            <li className="w-full px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-consulting" : "/ai/generative-ai-consulting"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-consulting') || isActivePath('/ai/generative-ai-consulting') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai consulting" clr={isActivePath('/ai/generative-ai-consulting') || isActivePath('/ai/generative-ai-consulting') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Generative AI consulting" : "Generative AI consulting"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-full px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-development" : "/ai/generative-ai-development"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-development') || isActivePath('/ai/generative-ai-development') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai development" clr={isActivePath('/ai/generative-ai-development') || isActivePath('/ai/generative-ai-development') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Generative AI Development" : "Generative AI Development"}</span>
                                                </Link>
                                            </li>
                                            <li className="w-full px-4 py-3 text-sm font-normal whitespace-nowrap">
                                                <Link href={lang == 'he' ? "/ai/generative-ai-integration" : "/ai/generative-ai-integration"} className={`flex items-center hover:text-[#ff393c] transition duration-300 ${isActivePath('/ai/generative-ai-integration') || isActivePath('/ai/generative-ai-integration') ? 'text-[#ff393c] font-medium underline' : 'text-white font-light'}`}>
                                                    <Icon title="generative ai integration" clr={isActivePath('/ai/generative-ai-integration') || isActivePath('/ai/generative-ai-integration') ? '#ff393c' : '#ffffff'}/>
                                                    <span className={`text-sm 2xl:text-base leading-6 ${lang == 'he' ? 'ml-2.5' : 'ml-2.5'}`}>{lang == 'he' ? "Generative AI Integration" : "Generative AI Integration"}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <span className={`hidden lg:block absolute ${lang == 'he' ? 'left-0' : 'right-0'} top-11 bottom-11 border-r border-white/20`}></span>
                                    </div>
                                    <div className={`rounded-xl lg:bg-black/20 xl:bg-transparent flex flex-col lg:flex-row xl:flex-col relative w-full xl:w-1/3 flex-shrink-0 pt-8 pb-4 xl:pt-12 lg:pb-8 lg:px-4`}>
                                        <div className="w-full lg:w-1/2 xl:w-full">
                                            <h2 className="text-lg xl:text-xl 2xl:text-3xl leading-6 font-bold uppercase text-white px-4 mb-3">{lang == 'he' ? 'Hire AI Developers' : 'Hire AI Developers'}</h2>
                                            <p className="xl:max-w-sm text-white px-4 text-sm">{lang == 'he' ? 'Hire expert ChatGPT developers to build AI chatbots and automate your business processes.' : 'Hire expert ChatGPT developers to build AI chatbots and automate your business processes.'}</p>
                                        </div>
                                        <Link href={lang == 'he' ? "/ai/hire-chatgpt-developers" : "/ai/hire-chatgpt-developers"} className={`mt-4 z-10 flex items-center bg-white ms-4 h-11 2xl:h-12 text-sm 2xl:text-base rounded-3xl mt-2 ${lang == 'he' ? 'pl-4 pr-2.5 mr-auto' : 'pl-4 pr-2.5 mr-auto'}`}>
                                            <span className={`text-[14px] font-bold ${lang == 'he' ? 'pr-2' : 'pr-2'}`}>{lang == 'he' ? 'Hire Now' : 'Hire Now'}</span>
                                            <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex items-center justify-center bg-secondary">
                                                <svg width="12" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/portfolio" : "/portfolio"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/portfolio') || isActivePath('/portfolio') || isActivePath('/portfolio') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "Portfolio" : "Portfolio"}</span>
                            </Link>
                        </li>
                        <li className="px-2 xl:px-3 2xl:px-4">
                            <Link href={lang == 'he' ? "/blog" : "/blog"} className={`block p-1.5 hover:text-[#ff393c] transition duration-300 ${pathname.startsWith('/blog') ? 'text-[#ff393c]' : 'text-white'}`}>
                                <span className={`text-sm xl:text-base 2xl:text-lg leading-6 font-medium uppercase`}>{lang == 'he' ? "blog" : "blog"}</span>
                            </Link>
                        </li>
                        <li className={`flex md:hidden !pt-5 ${lang == 'he' ? 'justify-end ' : 'justify-start'}`} dir="ltr">
                            {lang == 'he' ? <GlobalButton title="Contact" link="/contact-form" alignment/> : <GlobalButton title="Contact" link="/contact-form" />}
                        </li>
                    </ul>
                    <div className={`hidden md:block ${lang == 'he' ? 'pl-5 ' : 'pl-5'}`}>
                        {lang == 'he' ? <GlobalButton title="Contact" link="/contact-form" alignment/> : <GlobalButton title="Contact" link="/contact-form" />}
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