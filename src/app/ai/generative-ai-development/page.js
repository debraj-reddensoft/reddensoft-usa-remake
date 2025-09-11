"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import generativeaidevelopment from "@/assets/images/generative-ai-development.webp"
import enhancedcreativity from "@/assets/images/enhanced-creativity.webp"
import increasedautomation from "@/assets/images/increased-automation.webp"
import increasedproductivity from "@/assets/images/increased-productivity.webp"
import costoptimization from "@/assets/images/cost-optimization.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function GenerativeAiDevelopment() {
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

    const objectives = [
        {
            title: "Sector-Specific Expertise",
            desc: "Our Generative AI Developers have deep domain experience, allowing us to build impactful solutions tailored to your industry’s unique needs.",
        },
        {
            title: "Custom-Built & Scalable",
            desc: "We develop flexible solutions that grow with your business—ensuring your AI investment delivers long-term value.",
        },
        {
            title: "Smooth Implementation",
            desc: "We ensure a seamless transition with AI that integrates effortlessly into your systems, without disrupting your daily operations.",
        },
        {
            title: "Evolving Intelligence",
            desc: "As a provider of Generative AI Development Services in USA, we keep your AI models updated, optimized, and aligned with the latest innovations.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Automate fraud detection, compliance, and customer service using advanced Generative AI Development Solutions in USA that reduce risk and enhance trust.",
        },
        {
            title: "Retail",
            desc: "Deliver personalized shopping experiences, streamline operations, and improve inventory management with help from our expert Generative AI Developers.",
        },
        {
            title: "Healthcare",
            desc: "Use AI to assist with diagnosis, treatment planning, and patient engagement—improving care delivery and outcomes.",
        },
        {
            title: "Insurance",
            desc: "Speed up claims, personalize client services, and manage risks more effectively with our advanced Generative AI Development Services in USA.",
        },
        {
            title: "Manufacturing",
            desc: "Boost quality control and operational efficiency with predictive AI tools for process optimization and equipment monitoring.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Use AI to improve inventory planning, demand forecasting, and delivery accuracy while reducing costs.",
        },
        {
            title: "Automotive",
            desc: "Accelerate innovation in autonomous systems, smart manufacturing, and vehicle design with our intelligent Generative AI Development Solutions in USA.",
        },
        {
            title: "Hospitality",
            desc: "Deliver AI-powered booking, personalized services, and intelligent support systems to enhance guest satisfaction and streamline operations.",
        },
        
    ]

    const services = [
        {
            thumb: increasedautomation,
            title: "Process Automation",
            desc: "Save time and resources by automating repetitive tasks. Our AI models increase efficiency and reduce operational overhead.",
        },
        {
            thumb: increasedproductivity,
            title: "Productivity Gains",
            desc: "Empower teams with smart tools that improve workflow efficiency, decision-making, and project execution.",
        },
        {
            thumb: enhancedcreativity,
            title: "Enhanced Creativity",
            desc: "Let AI augment human creativity. Whether it’s writing, designing, or innovating, our tools enable your team to produce more in less time.",
        },
        {
            thumb: costoptimization,
            title: "Cost Efficiency",
            desc: "Lower operational costs through smarter processes and intelligent decision support powered by AI-driven automation",
        }
    ];

    const accordions = [
        {
          title: "Which industries benefit most from your Generative AI services?",
          content: "We offer Generative AI Development Solutions in USA for finance, retail, healthcare, insurance, logistics, manufacturing, hospitality, and more.",
        },
        {
          title: "How do you ensure alignment with our strategic goals?",
          content: "Our Generative AI Developers work hand-in-hand with your team to design and deploy solutions that directly support your KPIs and business roadmap.",
        },
        {
          title: "What services do you include in generative AI development?",
          content: "We offer Generative AI Development Services in USA including model design, NLP, deep learning, consulting, and full-scale deployment.",
        },
        {
          title: "Do you provide ongoing support after launch?",
          content: "Yes, we provide continuous updates, performance monitoring, and optimization to keep your AI tools effective and up-to-date.",
        },
        {
          title: "How secure are your solutions?",
          content: "Data security is paramount. We use enterprise-grade encryption, secure APIs, and follow strict compliance standards for every Generative AI solution we build.",
        }
    ];

    return(
        <>
            <title>Gen-AI Development company USA I Gen-AI Solutions </title>
            <meta name="title" content="Generative AI Development Company | Generative AI Development Services" />
            <meta name="description" content="Explore advanced generative AI development services that drive innovation and efficiency in your business. Get specialized AI services from our professionals." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Supercharge Your Business with Generative AI Development</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">As a <span className="text-secondary font-bold">Generative AI Development Company in USA</span>, Reddensoft delivers future-ready solutions to elevate creative capabilities across industries.</div>
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

            <div className="py-16 lg:py-24 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                        <h2 className="lg:max-w-[650px] text-3xl 2xl:text-[50px] 2xl:leading-tight font-black" data-aos="fade-right" data-aos-delay="100">Services We <span className="text-secondary">Offer</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our Generative AI Development Solutions in USA are built to help organizations integrate cutting-edge AI technologies across departments. From ideation to execution, we ensure your business stays ahead of the curve.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Generative AI Consulting </span>Get strategic insight from our experts. We help uncover the best use cases, select the right technologies, and align generative AI solutions with your core business objectives.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Data-Driven Intelligence </span>Transform data into actionable insights. Our Generative AI Development Services in USA empower better decision-making with streamlined data processing and analysis.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Custom Industry-Specific Models </span>From healthcare to retail, we build AI models tailored to your sector. Our skilled Generative AI Developers craft solutions for tasks like NLP, content creation, and image generation.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Full-Scale Generative AI Development </span>We handle everything—from architecture to deployment. Our scalable Generative AI solutions are designed to enhance your workflows, creativity, and output quality.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={generativeaidevelopment} alt="Generative AI development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                            </div>
                            <div className="absolute -bottom-8 lg:bottom-1/2 lg:transform lg:translate-y-1/2 -right-20 xl:-right-24 bg-secondary h-[280px] w-[140px] lg:h-[400px] lg:w-[200px] xl:h-[550px] xl:w-[275px] rounded-r-full z-0" data-aos="zoom-in" data-aos-delay="400"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-8 lg:pb-10 border-b border-[#dadada]">
                <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                    <BrandsSlider />
                </div>
            </div>

            <div className="bg_element py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap justify-between z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center order-1 lg:order-none">
                        <ul className="max-w-4xl flex flex-wrap -mx-2">
                            { solutions.map((solutions, o) => (
                                <li className="w-full sm:w-1/2 p-2" key={o} data-aos="fade-up" data-aos-delay={100 + (o * 50)}>
                                    <div className="relative bg-white rounded-xl px-6 py-8 h-full shadow-med">
                                        <h3 className="text-secondary text-base xl:text-lg 2xl:text-xl font-semibold pb-3">{solutions.title}</h3>
                                        <p className="text-sm xl:text-base font-light">{solutions.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:sticky lg:top-32 w-full lg:w-1/3 h-full">
                        <div className="mb-4 lg:mb-0 flex flex-col items-start lg:pl-10">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Industries </span>We Serve</h2>
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">As a full-service Generative AI Development Company in USA, we serve a wide range of industries, helping organizations unlock AI’s full potential in ethical and impactful ways.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="max-w-2xl mx-auto text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">Generative AI Development Services</h2>
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
            
            <div className="py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap justify-between z-1 px-5 2xl:px-0">
                    <div className="lg:w-1/3 lg:sticky lg:top-[130px] h-full w-full">
                        <div className="mb-8 lg:mb-0 flex flex-col items-start pr-5">
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Makes Our <span className="text-black">Generative AI Development Stand Out?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">At Reddensoft USA, we’re more than just a Generative AI Development Company in USA—we're your AI innovation partner. Here’s what sets us apart:</p>
                            <div className="flex justify-center mt-10">
                                <GlobalButton title="Get A Free Quote" link="/contact-form"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center ">
                        <ul className="max-w-5xl mx-auto w-full list_devider">
                            { objectives.map((objective, o) => (
                                <li className="w-full mb-7 lg:mb-0" key={o} data-aos="fade-up" data-aos-delay={200 + (o * 100)}>
                                    <div className={`relative overflow-hidden h-full flex items-center justify-between flex-col ${o % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        <h3 className={`w-full lg:w-1/2 text-lg xl:text-3xl font-bold lg:px-10 py-2 lg:py-5 ${o % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>{objective.title}</h3>
                                        <p className={`w-full lg:w-1/2 text-sm xl:text-base font-light lg:px-10 py-2 lg:py-5 ${o % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>{objective.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
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