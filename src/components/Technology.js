"use client"
import Image from "next/image";
import fullstack from "@/assets/images/fullstack.webp"
import web from "@/assets/images/web.webp"
import cloud from "@/assets/images/cloud.webp"
import frontend from "@/assets/images/frontend.webp"
import native from "@/assets/images/native.webp"
import shopify from "@/assets/images/shopify.webp"
import react from "@/assets/images/react.webp"
import wordpress from "@/assets/images/wordpress.webp"
import backend from "@/assets/images/backend.webp"
import bi from "@/assets/images/bi.webp"
import java from "@/assets/images/java.webp"
import net from "@/assets/images/net.webp"
import python from "@/assets/images/python.webp"
import ux from "@/assets/images/ux.webp"
import ai from "@/assets/images/ai.webp"
import openai from "@/assets/images/openai.webp"
import data from "@/assets/images/data.webp"
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";

export default function Technology({alignment}) {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const technologies = [
        {
            title: 'Full-stack',
            img: fullstack
        },
        {
            title: 'Web',
            img: web
        },
        {
            title: 'Cloud',
            img: cloud
        },
        {
            title: 'Frontend',
            img: frontend
        },
        {
            title: 'Mobile',
            img: native
        },
        {
            title: 'Shopify',
            img: shopify
        },
        {
            title: 'ReactJS',
            img: react
        },
        {
            title: 'WordPress',
            img: wordpress
        },
        {
            title: 'Backend',
            img: backend
        },
        {
            title: 'BI',
            img: bi
        },
        {
            title: 'Java',
            img: java
        },
        {
            title: '.NET',
            img: net
        },
        {
            title: 'Python',
            img: python
        },
        {
            title: 'UI/UX',
            img: ux
        },
        {
            title: 'AI/ML',
            img: ai
        },
        {
            title: 'Open AI',
            img: openai
        },
        {
            title: 'Data Engineering',
            img: data
        },
    ];

    return (
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto px-5 lg:px-0"> 
            <h2 className="text-5xl xl:text-6xl 2xl:text-[80px] text-white leading-tight font-black text-center" data-aos="zoom-in-up">{alignment ? "טֶכנוֹלוֹגִיָה" : "Embracing the Advanced Tech"}</h2>
            <h3 className="max-w-5xl mx-auto text-base xl:text-lg 2xl:text-2xl text-white font-regular pt-3.5 text-center" data-aos="zoom-in" dir={alignment ? "rtl" : "ltr"}>Our <span className="text-secondary">{alignment ? "החדשנות" : "software development company in the US"}</span> {alignment ? "אנו משתמשים בגרסאות העדכניות ביותר של הטכנולוגיות היעילות ביותר כדי להבטיח שהפרויקט שלך נמצא בחזית" : "stays ahead with the latest frameworks and programming tools. From web and mobile apps to enterprise platforms—we use cutting-edge technology to fuel your digital transformation."}</h3>
            
            
            <ul className="flex flex-wrap justify-center max-w-[1300px] mx-auto my-12 2xl:my-16">
                { technologies.map((technology, t) => (
                    <li className="px-1 py-1.5 lg:px-1.5 lg:py-2" key={t} data-aos="zoom-in-up" data-aos-delay={100 + (t * 50)}>
                        <div className={`flex items-center bg-primary rounded-[35px] h-10 lg:h-12 xl:h-14 xl:h-[70px] px-4 py-1.5 lg:px-6 lg:py-3 xl:px-7 xl:py-4 border border-white-trans ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                            <Image className="w-auto max-h-5 max-w-5 lg:max-w-6 lg:max-h-6 xl:w-auto xl:max-h-8" src={technology.img}  alt={technology.isDecorative ? "" : `Visual representation of ${technology.title}`} width="auto" height="auto"/>
                            <h4 className={`text-sm lg:text-lg xl:text-[22px] text-white leading-8 font-semibold ${alignment ? 'pr-3 xl:pr-5' : 'pl-3 xl:pl-5'}`}>{technology.title}</h4>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="1000">
                {
                    alignment ? <GlobalButton title="בואו נדבר" link="/contact-form/he" alignment/> : <GlobalButton title="Let's Talk" link="/contact-form"/>
                }
            </div>
        </div>
    )
}