"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
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
import awe365thumb from "@/assets/images/awe365-thumb.webp"
import bizminerthumb from "@/assets/images/bizminer-thumb.webp"
import csigmathumb from "@/assets/images/csigma-thumb.webp"
import ouicapitalthumb from "@/assets/images/ouicapital-thumb.webp"
import marvihimthumb from "@/assets/images/marvihim-thumb.webp"
import funnel from "@/assets/images/funnel.svg"
import Starfield from "@/components/StarField";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import PortfolioCard from "@/components/PortfolioCard";

export default function portfolio() {
    const [isDisplayFilter, setIsDisplayFilter] = useState(false);
    const [filterName, setFilterName] = useState('Categories');

    const dropdown = useRef();
    const filterBy = ['All', 'Web Design', 'Graphic Design', 'UI & UX Design'];

    const handleFilterDropdown = (e) => {
        setIsDisplayFilter(!isDisplayFilter);
    }

    const handleFilterSelection = (type) => {
        setFilterName(type);
        setIsDisplayFilter(false);
    }

    useEffect(() => {
        let handlerClickOutside = (e) => {            
            if(!dropdown.current.contains(e.target)){
                setIsDisplayFilter(false);
            }
        }

        document.addEventListener("mousedown", handlerClickOutside);

        return () => {
            document.removeEventListener("mousedown", handlerClickOutside);
        };
    })

    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const portfolios = [
        // {
        //     id: 1,
        //     title: "Arrow",
        //     desc: "Your ultimate trading companion! Stay ahead of the market with real-time updates, smart insights, and intuitive tools for seamless trading. Empowering you to trade smarter, anytime, anywhere.",
        //     technologies: [],
        //     thumb: arrowthumb,
        //     category: "UI & UX Design",
        //     figma: "",
        //     visit: "",
        // },
        {
            id: 1,
            title: "Marvihim",
            desc: "To develop a comprehensive financial service platform specializing in tax refunds for salaried employees. locating lost pension funds, and organizing insurance policies.",
            technologies: ["PHP", "Laravel", "React"],
            thumb: marvihimthumb,
            category: "UI & UX Design",
            figma: "",
            visit: ""
        },
        {
            id: 2,
            title: "Trispire",
            desc: "TriSpire was created by mental health professionals for mental health professionalsTrispire Solutions, one of our latest projects, is about transforming healthcare delivery through innovative technologies.",
            technologies: ["MySQL", "vue js", "Wordpress"],
            thumb: trispirethumb,
            category: "Web Design",
            figma: "https://www.figma.com/design/zXCDYkfOFuYvJq4FcAVSNI/TriSpire?node-id=64-2&node-type=canvas&t=2tcwslOaeZMLNBkT-0",
            visit: "https://trispiresolutions.com"
        },
        {
            id: 3,
            title: "Robocent",
            desc: "RoboCent is dedicated to empowering political campaigns with cutting-edge communication tools that enhance voter engagement and drive impactful outreach.",
            technologies: ["MySQL", "vue js", "Wordpress"],
            thumb: robocentthumb,
            category: "Web Design",
            figma: "https://www.figma.com/design/GkMXARDnQIKgFH5UpEHFYW/RoboCent?node-id=0-1&node-type=canvas&t=nuvNu8hAHGyelqQZ-0",
            visit: "https://robocent.com/"
        },
        // {
        //     id: 4,
        //     title: "Origami",
        //     desc: "Origami is one of the renowned player in Origami and the site is as Stylish and impressive! We would thanks our client Origami for giving us the opportunity to re-brand their website.",
        //     technologies: ["HTML", "CSS3", "Javascript", "CMS"],
        //     thumb: origamithumb,
        //     category: "Web Design",
        //     figma: "https://www.figma.com/design/yCK0WVefin2LWf8soyId1U/Origami-Landing-Page?node-id=0-1&p=f&t=yvNavjT1053IaZt1-0",
        //     visit: "#",
        // },
        {
            id: 5,
            title: "Candidsync",
            desc: "Candidsync is the one stop solution to find the best empaneled photographers at your place whether you are a traveler or a social media influencer or in other business.",
            technologies: ["vue js", "jQuery", "Bootstrap", "Wordpress"],
            thumb: candidsyncthumb,
            category: "Web Design",
            figma: "https://www.figma.com/design/4jtGdKMANtX4jAnHxANq8N/Candidsync-Website-Design?t=OabU5Tf6FNdWNgSj-0",
            visit: "https://www.candidsync.com/"
        },
        {
            id: 6,
            title: "Reflexiveai",
            desc: "A software consultancy & SaaS company, maintaining Seneca JS Open Source framework & building DevRel tools.",
            technologies: ["HTML", "CSS3", "javascript", "CMS"],
            thumb: reflexiveaithumb,
            category: "Web Design",
            figma: "https://www.figma.com/design/AhLBtYvQekIh5re9sabpBU/reflexive.ai-dashboard?node-id=0-1&p=f&t=F5Wd8qZCM4mFgHdk-0",
            visit: "https://works-reddensoft.com/reflexiveai"
        },
        {
            id: 7,
            title: "Dashboard",
            desc: "A software consultancy & SaaS company, maintaining Seneca JS Open Source framework & building DevRel tools.",
            technologies: ["HTML", "tailwindcss", "NextJs", "CMS"],
            thumb: dashboardthumb,
            category: "Graphic Design",
            figma: "https://www.figma.com/design/AhLBtYvQekIh5re9sabpBU/reflexive.ai-dashboard?node-id=0-1&p=f&t=Ffh3Fd4E6rI0xg4f-0",
            visit: "https://works-reddensoft.com/dashbord_new/"
        },
        {
            id: 8,
            title: "Easypos",
            desc: "A seamless point-of-sale system designed to streamline your business operations. Simplify transactions, manage inventory, and gain real-time insights, all in one place. Perfect for businesses of any size!",
            technologies: [],
            thumb: easyposthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/1v0xQwHxDkiWVSdVWaReYB/Pos-System-design?t=UGqO0GfjT6rDxiS2-0",
            visit: ""
        },
        {
            id: 9,
            title: "Chatbot",
            desc: "Chatbot A customized ChatGPT solution tailored for businesses. Enhance customer interactions, automate support, and provide personalized experiences to your clients, all with a chatbot built to fit your unique needs!",
            technologies: [],
            thumb: chatbotthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/r2ggpM9qcqRvBeNYbwrK7o/Chatbase-Dashboard?node-id=0-1&p=f&t=kx5x2XB5FAiIlBhC-0",
            visit: ""
        },
        {
            id: 10,
            title: "TrendHive",
            desc: "Your ultimate trading companion! Stay ahead of the market with real-time updates, smart insights, and intuitive tools for seamless trading. Empowering you to trade smarter, anytime, anywhere.",
            technologies: [],
            thumb: trendhivethumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?node-id=0-1&p=f&t=ZdLLaYz5cIMGXNSb-0",
            visit: ""
        },
        {
            id: 11,
            title: "Ricoman",
            desc: "Ricoman is the one stop solution for any lighting project. When they came up with the idea to stronger their online presence then we helped them with the most innovative and effective ideas.",
            technologies: ["PHP", "vue js", "Wordpress"],
            thumb: ricomanthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://ricoman.com/"
        },
        {
            id: 12,
            title: "Sasradar",
            desc: "It brings actionable intelligence to your fingertip that optimizes your app the most and help you to stand out from the crowd. The smart and efficient tools help you to analyze the marketplace by taking appropriate decisions.",
            technologies: ["PHP", "vue js", "Wordpress"],
            thumb: sasradarthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: ""
        },
        {
            id: 13,
            title: "Signulu",
            desc: "Signulu's rebranding included a complete overhaul of its website and mobile app to enhance user experience and functionality. The website serves as a central hub for users to explore Signulu's offerings, book services, and access valuable resources with ease.",
            technologies: ["PHP", "vue js", "Wordpress"],
            thumb: signuluthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://www.signulu.com/"
        },
        {
            id: 14,
            title: "Stannp",
            desc: "Providing SaaS solutions for direct mail, offering businesses a fully digital and integrated approach to streamline their direct mail processes.",
            technologies: ["MySQL", "vue js", "Laravel"],
            thumb: stannpthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: ""
        },
        {
            id: 15,
            title: "EP",
            desc: "Executive Protection Specialist Community is meant to create a new horizon for both the agent and agencies who can get engaged in topnotch private security service providing business.",
            technologies: ["MySQL", "vue js", "Laravel"],
            thumb: epthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://ep.works-reddensoft.com/"
        },
        // {
        //     id: 16,
        //     title: "Zohna",
        //     desc: "Zohna is the one-stop solution for all beautification and nourishment. It covers a huge spectrum of beautification products and stylish blog writeups with the affiliated marketing solution starting from skin care, health wellness to hair nourishment, makeup and nailsart.",
        //     technologies: ["MySQL", "vue js", "Laravel"],
        //     thumb: zohnathumb,
        //     category: "UI & UX Design",
        //     figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
        //     visit: "https://www.zohna.com/",
        // },
        {
            id: 17,
            title: "awe365",
            desc: "We are all about travel, action sports, extreme activities and adventures in the great outdoors.",
            technologies: ["MySQL", "vue js", "Laravel"],
            thumb: awe365thumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://awe365.com/"
        },
        {
            id: 18,
            title: "Bizminer",
            desc: "Bizminer content is used by thousands of accounting, valuation, brokerage, banking, CRE and consulting professionals; and by almost 200,000 business students. We are the official provider of financial and market analytics to the International Business Brokers Association (IBBA).",
            technologies: ["MySQL", "vue js", "Laravel"],
            thumb: bizminerthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://bizminer.com/"
        },
        {
            id: 19,
            title: "cSigma",
            desc: "To transform access to private debt capital markets by leveraging blockchain and AI. At cSIGMA we strive to provide vetted institutional-grade credit opportunities to lenders of all sizes in a frictionless process.",
            technologies: ["MySQL", "vue js", "Laravel"],
            thumb: csigmathumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://csigma.finance/"
        },
        {
            id: 20,
            title: "OuiCapital",
            desc: "In 2019, we hypothesized that the African startup ecosystem was coming of age, and set out to help bridge the early-stage financing gap on the continent.",
            technologies: ["MySQL", "Wordpress", "PHP"],
            thumb: ouicapitalthumb,
            category: "UI & UX Design",
            figma: "https://www.figma.com/design/HJIBlZR8PWB1G3ChKkh1sJ/Treading-App?t=pdzWsVeRSi85XjE0-0",
            visit: "https://www.ouicapital.vc/"
        },
    ];

    return(
        <>
            <title>ReddenSoft Israel | Portfolio: Our Success Stories</title>
            <meta name="title" content="ReddenSoft Israel | Portfolio: Our Success Stories" />
            <meta name="description" content="Explore our portfolio, where we showcase our best IT and web development projects. See how we transform businesses with expert solutions." />

            <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Explore Our Recent</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">PORTFOLIO</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Explore our recent portfolios to see how we've transformed ideas into<span className="text-[#FFDD1A] font-bold"> impactful solutions, tailored</span> to meet diverse <span className="text-secondary font-bold">client needs and industries.</span></div>
                </div>
                <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} priority alt="Hero banner" width="auto" height="auto"/>
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="3"
                />
            </div>
            <div className="bg-[#CD0307] py-10 xl:py-14 px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                    <div className="flex flex-col sm:flex-wrap sm:flex-row item-start items-center justify-between">
                        <h2 className="text-4xl xl:text-5xl 2xl:text-[60px] text-white leading-tight font-black mb-4 sm:mb-0" data-aos="zoom-in-up">Categories</h2>
                        <div className="relative w-72 flex items-center cursor-pointer bg-white rounded z-2 mb-5 sm:mb-0" ref={dropdown}>
                            <div className="grow relative flex items-center pl-4 py-2.5 pr-9" onClick={() => handleFilterDropdown()}>
                                <Image className="opacity-70" src={funnel} alt="Filter icon" width={16} height={16}/>
                                <div className="grow text-base text-primary font-normal px-2.5">{filterName}</div>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-300 ${isDisplayFilter ? 'rotate-180' : 'rotate-0'}`}>
                                    <path d="M9.88625 -4.86836e-08L11 1.1776L5.5 7L-2.89893e-07 1.1776L1.11375 -4.32142e-07L5.5 4.64115L9.88625 -4.86836e-08Z" fill="#666666"/>
                                </svg>
                            </div>
                            <div className={`absolute left-0 top-full w-full bg-white overflow-hidden rounded-lg mt-3 transition-all duration-300 ${isDisplayFilter ? 'max-h-screen shadow-lg' : 'max-h-0 shadow-none'}`}>
                                <ul className="py-2.5">
                                    {filterBy.map((filter, f) => (
                                        <li className={`px-4 py-2 text-base font-normal whitespace-nowrap ${filter == filterName ? 'text-secondary' : 'text-dark-gray'}`} key={f} onClick={() => handleFilterSelection(filter)}>{filter}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_element py-16 2xl:py-24 px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                    <ul className="flex flex-wrap justify-start -mx-4 xl:-mx-5">
                        { portfolios.map((portfolio, p) => (
                            (filterName == portfolio.category || filterName == 'All' || filterName == 'Categories') &&
                            <li className="w-full sm:w-full lg:w-1/2 p-4 xl:p-5" key={p} data-aos="fade-up" data-aos-delay={200 + (p * 100)}>
                                <PortfolioCard data={portfolio}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}