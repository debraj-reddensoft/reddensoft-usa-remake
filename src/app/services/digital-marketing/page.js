"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import digitalmarketing from "@/assets/images/digital-marketing.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import seo2 from "@/assets/images/seo-2.webp"
import smm from "@/assets/images/smm.webp"
import ppc from "@/assets/images/ppc.webp"
import emailmarketing2 from "@/assets/images/email-marketing-2.webp"
import contentmarketing2 from "@/assets/images/content-marketing-2.webp"
import linkbuilding from "@/assets/images/link-building.webp"
import orm from "@/assets/images/orm.webp"
import ecommercemarketing from "@/assets/images/ecommerce-marketing.webp"
import trackrecord from "@/assets/images/track-record.svg"
import customizedstrategies from "@/assets/images/customized-strategies.svg"
import expertteam from "@/assets/images/expert-team.svg"
import transparentreporting from "@/assets/images/transparent-reporting.svg"
import cuttingedge from "@/assets/images/cutting-edge.svg"
import roifocused from "@/assets/images/roi-focused.svg"
import clientcentric from "@/assets/images/client-centric.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function DigitalMarketing() {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const works = [
        {
            id: 1,
            title: "Trispire",
            desc: "Trispire Solutions, one of our latest projects, is about transforming healthcare delivery through innovative technologies. The mission of this website is to empower healthcare providers by offering them a comprehensive platform designed to streaml...",
            thumb: trispirescreen,
            link: "trispire"
        },
        {
            id: 2,
            title: "RoboCent",
            desc: "RoboCent is dedicated to empowering political campaigns with cutting-edge communication tools that enhance voter engagement and drive impactful outreach. This platform provides a comprehensive suite of features designed to streamline the process of c...",
            thumb: robocentscreen,
            link: "robocent"
        }
    ];

    const designs = [
        {
            title: "Proven Track Record",
            desc: "Our digital marketing company in USA has delivered results across industries and helped businesses grow online.",
            icon: trackrecord,
        },
        {
            title: "Customized Strategies",
            desc: "We craft tailored digital marketing services in USA based on your audience, goals, and budget.",
            icon: customizedstrategies,
        },
        {
            title: "Expert Team",
            desc: "Work with certified professionals skilled in every digital channel, from SEO to PPC and email.",
            icon: expertteam,
        },
        {
            title: "Transparent Reporting",
            desc: "Receive detailed campaign analytics to measure real-time performance.",
            icon: transparentreporting,
        },
        {
            title: "Cutting-Edge Tools",
            desc: "We use industry-leading tools and AI-based platforms to improve efficiency and accuracy.",
            icon: cuttingedge,
        },
        {
            title: "ROI-Focused",
            desc: "Every strategy is optimized for performance to ensure maximum impact.",
            icon: roifocused,
        },
        {
            title: "Client-Centric Approach",
            desc: "We collaborate with you at every step to align strategies with your vision.",
            icon: clientcentric,
        },

    ];

    const workflows = [
        {
            title: "Discovery & Analysis",
            desc: "We begin with deep research to understand your business, competitors, and target audience.",
        },
        {
            title: "Strategy Development",
            desc: "Based on insights, we craft a custom plan to meet your unique objectives.",
        },
        {
            title: "Implementation",
            desc: "We execute your campaigns across digital channels, including SEO, PPC, and social media.",
        },
        {
            title: "Monitoring & Optimization",
            desc: "We continually optimize for better performance using real-time data.",
        },
        {
            title: "Reporting & Analysis",
            desc: "Regular performance reports with insights and improvement suggestions.",
        },
    ]

    const services = [
        {
            thumb: seo2,
            title: "Search Engine Optimization (SEO)",
            desc: "Our search engine optimization services help your website rank higher on search engines to generate long-term organic traffic. With comprehensive keyword research, on-page optimization, technical SEO, and local SEO strategies, we help boost your visibility and attract your ideal audience.",
        },
        {
            thumb: smm,
            title: "Social Media Marketing",
            desc: "Our social media marketing agency in USA builds strong brand connections through platforms like Facebook, Instagram, and LinkedIn. We craft platform-specific content, manage your profiles, and launch targeted campaigns to drive meaningful engagement and brand awareness.",
        },
        {
            thumb: ppc,
            title: "Pay-per-click (PPC) Advertising",
            desc: "Our PPC services focus on data-backed strategies that ensure you get the most out of your ad spend. We create, manage, and optimize campaigns on platforms such as Google Ads and Bing to drive high-converting traffic to your website quickly and efficiently.",
        },
        {
            thumb: emailmarketing2,
            title: "Email Marketing",
            desc: "As a leading email marketing agency in USA, we help brands nurture leads and retain customers through personalized and well-crafted email marketing services. From promotional emails to automated sequences, we design campaigns that increase open rates and conversions.",
        },
        {
            thumb: contentmarketing2,
            title: "Content Marketing",
            desc: "We offer content marketing services that establish authority and drive traffic. From blogs to infographics and videos, our team creates compelling content that resonates with your target audience and enhances your brand’s credibility.",
        },
        {
            thumb: linkbuilding,
            title: "Link Building",
            desc: "Our link building services help improve your domain authority by acquiring high-quality backlinks. These links are earned from relevant, authoritative sources to strengthen your SEO and drive referral traffic to your site.",
        },
        {
            thumb: orm,
            title: "Online Reputation Management (ORM)",
            desc: "Our online reputation management services in USA safeguard and improve your brand’s public perception. We monitor reviews, manage negative feedback, and boost positive online visibility to build trust with your customers.",
        },
        {
            thumb: ecommercemarketing,
            title: "eCommerce Marketing",
            desc: "Our digital marketing agency in USA provides tailored strategies for online retailers. Whether it's SEO, PPC, email, or social media marketing services, we help you increase product visibility, grow sales, and build loyal customers for your eCommerce store.",
        },
    ];

    const accordions = [
        {
            title: "How long does it take to see results from digital marketing campaigns?",
            content: "Most clients begin seeing measurable results within 3 to 6 months, depending on the service and goals.",
        },
        {
            title: "What digital marketing channels do you specialize in?",
            content: "We specialize in SEO, PPC, social media, email, content marketing, and more.",
        },
        {
            title: "Do you provide customized marketing plans?",
            content: "Absolutely. All strategies are tailored to your business’s goals, market, and budget.",
        },
        {
            title: "How do you measure the success of your digital marketing efforts?",
            content: "We track key performance indicators (KPIs) such as traffic, conversions, engagement, and ROI.",
        },
        {
            title: "Can you help with my existing digital marketing efforts?",
            content: "Yes. We can evaluate and optimize your current strategies for improved results.",
        }
    ];

    return(
        <>
            <title>Digital marketing company USA I Digital marketing agency</title>
            <meta name="title" content="Digital marketing company USA I Digital marketing agency" />
            <meta name="description" content="Boost your online presence with a leading Digital Marketing Agency in USA. We offer result-driven Digital Marketing Services to grow your brand effectively." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Digital Marketing Company in </div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Maximize Your Reach with Expert <span className="text-[#FFDD1A] font-bold">Digital Marketing Solutions</span>.</div>
                </div>
                <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} alt="Hero banner" priority width="auto" height="auto"/>
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="7"
                />
            </div>

            <div className="py-12 lg:py-20 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                            <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Service <span className="text-secondary">Overview</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">digital marketing company in USA </span> leverages strategic and data-driven digital marketing to enhance your online presence, engage your audience, and increase conversions. From SEO to paid ads and content strategy, our <span className="text-secondary">digital marketing services</span> in USA are crafted to meet your unique goals and deliver results that matter.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary font-bold">Comprehensive Strategy: </span>Our digital marketing services in USA provide full-funnel digital marketing campaigns designed to meet your brand's specific goals. Increased Visibility: Grow your brand’s digital footprint and get noticed by the right audience.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Increased Visibility: </span>Grow your brand’s digital footprint and get noticed by the right audience.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Targeted Traffic: </span>Attract highly qualified leads who are more likely to convert.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Measurable Results: </span>Detailed analytics and real-time performance metrics help you track success.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="500"><span className="text-secondary font-bold">Engagement & Loyalty: </span>Build deeper connections with your audience to increase retention.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="600"><span className="text-secondary font-bold">Higher ROI: </span>We optimize every campaign to maximize your return on ad spend and effort.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={digitalmarketing} alt="Digital marketing icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                            </div>
                            <div className="absolute -bottom-8 lg:bottom-1/2 lg:transform lg:translate-y-1/2 -right-20 xl:-right-24 bg-secondary h-[280px] w-[140px] lg:h-[400px] lg:w-[200px] xl:h-[550px] xl:w-[275px] rounded-r-full z-0" data-aos="zoom-in" data-aos-delay="400"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">Our Services</h2>
                    <ul className="service_devider flex flex-wrap -mx-3 lg:mx-0">
                        { services.map((service, s) => (
                            <li className="w-full sm:w-1/2 lg:w-full py-7 lg:py-10 px-3 lg:px-0 h-full" key={s} data-aos="fade-up" data-aos-delay={200 + (s * 100)}>
                                <div className={`relative overflow-hidden h-full flex flex-wrap items-center justify-between ${s % 2 === 0 ? 'flex-row text-left' : 'flex-row-reverse lg:text-right'}`}>
                                    <Image className="w-1/2 lg:max-w-[420px] w-full h-auto rounded-lg" src={service.thumb} alt={service.title} width="auto" height="auto"/>
                                    <div className="w-1/2 mt-8 lg:mt-0 lg:max-w-[420px] w-full">
                                        <h3 className="text-lg xl:text-3xl font-bold pb-3 lg:pb-6">{service.title}</h3>
                                        <p className="text-sm xl:text-base font-light" dangerouslySetInnerHTML={{__html: service.desc}}></p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg_element flip py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative px-5 2xl:px-0">
                    <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">US</span></h2>
                    <ul className="flex flex-wrap justify-center -mx-4">
                        { designs.map((design, d) => (
                            <li className="w-full sm:w-1/2 lg:w-1/4 p-4" key={d} data-aos="fade-up" data-aos-delay={200 + (d * 100)}>
                                <div className="relative bg-white rounded-xl px-6 py-8 h-full text-center flex flex-col items-center shadow-med">
                                    <Image className="mb-6 h-12 w-auto xl:h-16" src={design.icon} alt={design.title} width="auto" height="auto"/>
                                    <h3 className="text-secondary text-base xl:text-lg font-semibold pb-3">{design.title}</h3>
                                    <p className="text-sm xl:text-base font-normal">{design.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="banner_bg py-16 lg:py-24">
                <PortfolioArea />
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="8"
                />
            </div>

            <div className="bg_element py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap justify-between z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center order-1 lg:order-none">
                        <ul className="max-w-4xl flex flex-wrap justify-center -mx-2">
                            { workflows.map((workflow, w) => (
                                <li className="w-full sm:w-1/2 p-2" key={w} data-aos="fade-up" data-aos-delay={200 + (w * 100)}>
                                    <div className="relative bg-white rounded-xl px-6 py-8 h-full shadow-med">
                                        <h3 className="text-secondary text-base xl:text-lg 2xl:text-xl font-semibold pb-3">{workflow.title}</h3>
                                        <p className="text-sm xl:text-base font-normal">{workflow.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:sticky lg:top-32 w-full lg:w-1/3 h-full">
                        <div className="mb-4 lg:mb-0 flex flex-col items-start lg:pl-10">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our Workflow /</span> Process</h2>
                            <p className="text-sm xl:text-base font-normal py-7" data-aos="fade-right" data-aos-delay="200">Our process at Reddensoft is set up to guarantee smooth operation at every level of development. We start by comprehending your objectives followed by investigation and analysis. On the next steps, we brainstorm and build wireframes and prototypes, and communicate with you throughout the design process. Following approval of the concept, our focus shifts to development, integrating AI technologies, digital marketing tactics, and UI/UX design. Our thorough testing and feedback loop guarantee that we consistently provide scalable, superior products.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 lg:px-0">
                    <div className='w-full md:pb-[60px] md:md-[60px]'>
                        <div className="max-w-[900px] mx-auto mb-10 xl:mb-14">
                            <h2 className="text-3xl sm:text-4xl xl:text-5xl sm:leading-tight xl:leading-snug font-black text-center" data-aos="zoom-in-up" data-aos-delay="200">Frequently Asked <span className="text-secondary">Questions</span></h2>
                        </div>
                        <div className="max-w-[900px] mx-auto w-full">
                            {accordions.map((accordion, a) => (
                                <div className={`py-5 sm:py-7 ${accordions.length !== (a + 1) ? 'border-b border-slate-200' : ''}`} key={a} data-aos="fade-right" data-aos-delay={200 + (a * 100)}>
                                    <button onClick={() => onTitleClick(a)} className={`flex items-center w-full justify-between rounded-[10px] ${activeIndex === a ? 'rounded-bl-none rounded-br-none  ' : ''} relative `}>
                                        <span className="text-base sm:text-lg lg:text-2xl font-light text-left mr-3">{accordion.title}</span>
                                        <Image src={rightarrow} alt="Right arrow icon" className={`h-3 sm:h-4 w-auto transform transition-all ease-in-out duration-300 flex-shrink-0 ${activeIndex === a ? '-rotate-90' : 'rotate-90'}`} width="auto" height="auto"/>
                                    </button>                                    
                                    <div className={`text-sm lg:text-lg text-slate-900 font-light overflow-hidden transition-all ease-in-out duration-300 pr-8 ${activeIndex === a ? 'pt-3 sm:pt-5 max-h-96' : 'pt-0 max-h-0'}`}>{accordion.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_element pb-28 2xl:pb-28">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto px-5 lg:px-0">
                    <Advertisement/>
                </div>
            </div>
        </>
    )
}