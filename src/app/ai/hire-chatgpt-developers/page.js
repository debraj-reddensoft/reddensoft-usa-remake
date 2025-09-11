"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import Starfield from "@/components/StarField";
import GlobalButton from "@/components/GlobButton";
import HireDeveloper from "@/components/HireDeveloper";
import BrandsSlider from "@/components/BrandsSlider";
import approach from "@/assets/images/approach.svg";
import hourly from "@/assets/images/hourly.svg";
import expert from "@/assets/images/expert.svg";
import fulltime from "@/assets/images/fulltime.svg";
import team from "@/assets/images/team.svg";
import appdevelopers from "@/assets/images/app-developers.svg";
import assessment from "@/assets/images/assessment.svg";
import strategy from "@/assets/images/strategy.svg";
import model from "@/assets/images/model.svg";
import integration from "@/assets/images/integration.svg";
import maintenance from "@/assets/images/maintenance.svg";
import rightarrow from "@/assets/images/right-arrow.png"
import aitailordsolution from "@/assets/images/ai-tailord-solution.svg";
import { useEffect, useState } from "react";
import AOS from "aos";

export default function About() {
    const [selectedTriangle, setSelectedTriangle] = useState('Model');
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
    }, [])

    const hireNow = () => {
        window.scrollTo(0, 0);
    }

    const objectives = [
        {
            title: "Strategic ChatGPT Consultation",
            desc: "Our specialists provide expert guidance to help you identify where ChatGPT can bring the most value to your business and how best to implement it.",
        },
        {
            title: "Smooth ChatGPT Integration",
            desc: "We offer comprehensive support to seamlessly integrate ChatGPT into your apps, platforms, and internal systems for uninterrupted performance.",
        },
        {
            title: "Custom Chatbot Development",
            desc: "You can hire skilled ChatGPT developers from our team to create intelligent, responsive chatbots that elevate customer support and engagement.",
        },
        {
            title: "Ongoing Maintenance & Enhancements",
            desc: "Our solutions come with post-deployment support and regular upgrades, so your ChatGPT tools remain secure, up-to-date, and efficient.",
        },
    ];

    const approaches = [
        {
            icon: approach,
            title: "Fast and Flexible Hiring",
            desc: "Hire ChatGPT Developers in USA on demand to accelerate your project delivery without compromising on quality or timelines.",
        },
        {
            icon: team,
            title: "Team Scalability",
            desc: "Whether you need one expert or a full team, our chatgpt development services in USA scale with your project, giving you full control over your resources.",
        },
        {
            icon: appdevelopers,
            title: "Code Quality Assurance",
            desc: "We follow industry-standard practices to ensure the stability, security, and long-term performance of all AI implementations.",
        },
        {
            icon: aitailordsolution,
            title: "Affordable AI Solutions",
            desc: "Our solutions are designed to deliver maximum value—Hire ChatGPT Developers in USA at competitive rates without compromising technical excellence.",
        },
    ];

    const accordions = [
        {
          title: "How can ChatGPT developers contribute to my project?",
          content: "They enhance projects with AI-driven features like automated conversations, content generation, and real-time language processing—boosting efficiency and user engagement.",
        },
        {
          title: "What should I consider when choosing ChatGPT developers?",
          content: "Look for expertise in machine learning, NLP, and OpenAI tools, along with practical experience integrating ChatGPT across different platforms.",
        },
        {
          title: "How can I evaluate the skills of ChatGPT developers before hiring?",
          content: "Review portfolios, test their problem-solving abilities, conduct interviews, and ensure they understand how to apply AI in real-world business scenarios.",
        },
        {
          title: "Can I hire ChatGPT developers for short-term or hourly projects?",
          content: "Absolutely. You can engage our developers for fixed-scope tasks or hire them on an hourly basis depending on your specific needs.",
        },
        {
          title: "What is the cost of hiring ChatGPT developers in USA?",
          content: "Costs vary based on experience level, location, and complexity of the project. For an accurate estimate, contact us with your project details.",
        },
    ];

    return(
        <>
            <title>ChatGPT developers USA I Hire ChatGPT Experts USA </title>
            <meta name="title" content="Hire ChatGPT Developers | ChatGPT Development Services"/>
            <meta name="description" content="Improve client interaction with ChatGPT Development Services. Hire ChatGPT Developers to build advanced, conversational AI applications." />

            <div className="banner_bg flex flex-col items-center justify-center px-5 lg:px-0 py-12 lg:py-16">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] w-full mx-auto relative flex flex-wrap justify-between z-10 sm:px-5 2xl:px-0">
                    <HireDeveloper />
                </div>
                <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} alt="Hero banner" priority width="auto" height="auto"/>
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="19"
                />
            </div>
            <div className="py-8 lg:py-10 border-b border-[#dadada]">
                <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                    <BrandsSlider />
                </div>
            </div>
            <div className="py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap justify-between z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-[130px] h-full h-full">
                        <div className="lg:max-w-md mb-8 lg:mb-0 flex flex-col item-center lg:items-start lg:pr-5">
                            <h2 className="text-2xl xl:text-4xl 2xl:text-5xl 2xl:leading-[65px] font-black text-center lg:text-left" data-aos="fade-right" data-aos-delay="100">Services By Our</h2>
                            <h2 className="text-3xl xl:text-5xl 2xl:text-7xl 2xl:leading-7xl font-black uppercase text-center lg:text-left" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">ChatGPT</span> Experts</h2>
                            <p className="text-lg xl:text-xl 2xl:text-2xl font-light py-7 text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">Let our experienced U.S.-based team guide your AI initiatives with reliable chatgpt development services in USA, ensuring seamless results tailored to your industry needs.</p>
                            <div className="flex justify-center mt-2">
                                <GlobalButton title="Get a Free Quote" link="/contact-form" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center mt-5 lg:mt-0">
                        <ul className="max-w-5xl mx-auto w-full zigzag_list">
                            { objectives.map((objective, o) => (
                                <li className="w-full flex mb-8 lg:mb-0" key={o} data-aos="fade-up" data-aos-delay={200 + (o * 100)}>
                                    <div className={`relative w-full lg:w-1/2 overflow-hidden h-full flex items-center justify-between flex-col px-6 py-5 lg:p-0 bg-gray-100 lg:bg-transparent rounded-lg ${o % 2 === 0 ? 'text-center lg:text-right mr-auto' : 'text-center lg:text-left ml-auto'}`}>
                                        <h3 className={`w-full text-lg xl:text-2xl font-black lg:px-10 py-1 lg:py-2 ${o % 2 === 0 ? '' : ''}`}>{objective.title}</h3>
                                        <p className={`w-full text-sm xl:text-base font-normal lg:px-10 py-1 lg:py-2 ${o % 2 === 0 ? '' : ''}`}>{objective.desc}</p>
                                    </div>
                                    <label>{o + 1}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-16 xl:py-24 border-t border-[#dadada]">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <h2 className="max-w-lg lg:max-w-3xl mx-auto text-2xl lg:text-3xl 2xl:text-4xl 2xl:leading-tight font-bold text-center" data-aos="fade-right" data-aos-delay="100">Get <span className="text-secondary">ChatGPT Developers</span> for Your Business Based on Your Needs</h2>
                    <ul className="flex flex-wrap justify-center -mx-4 mt-10">
                        <li className="max-w-xs sm:max-w-none lg:max-w-xs w-full p-4 self-center">
                            <div className="flex flex-col sm:flex-row lg:flex-col justify-between sm:-mx-5 lg:mx-0">
                                <div className="justify-center lg:justify-start sm:w-1/3 lg:w-auto flex items-center border-b sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b sm:px-5 lg:px-0 py-4 sm:py-2 lg:py-6">
                                    <Image className="mr-3 lg:mr-5 h-8 lg:h-12 w-auto" src={hourly} alt="Hour icon" width="auto" height="auto"/>
                                    <h3 className="text-slate-800 text-base xl:text-lg font-medium">Hourly Hiring</h3>
                                </div>
                                <div className="justify-center lg:justify-start sm:w-1/3 lg:w-auto flex items-center border-b sm:border-b-0 sm:border-r lg:border-r-0 lg:border-b sm:px-5 lg:px-0 py-4 sm:py-2 lg:py-6">
                                    <Image className="mr-3 lg:mr-5 h-8 lg:h-12 w-auto" src={expert} alt="Expert icon" width="auto" height="auto"/>
                                    <h3 className="text-slate-800 text-base xl:text-lg font-medium">150+ Experts</h3>
                                </div>
                                <div className="justify-center lg:justify-start sm:w-1/3 lg:w-auto flex items-center sm:px-5 lg:px-0 py-4 sm:py-2 lg:py-6">
                                    <Image className="mr-3 lg:mr-5 h-8 lg:h-12 w-auto" src={fulltime} alt="Full-time icon" width="auto" height="auto"/>
                                    <h3 className="text-slate-800 text-base xl:text-lg font-medium">Full-Time hiring</h3>
                                </div>
                            </div>
                        </li>
                        <li className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="relative bg-white border-2 border-secondary/10 hover:border-secondary/50 px-8 lg:px-5 2xl:px-7 py-7 xl:py-8 rounded-lg overflow-hidden transition-all duration-300">
                                <div className="relative z-1">
                                    <h4 className="text-base lg:text-lg tracking-widest text-center text-slate-800">Monthly (USD)</h4>
                                    <div className="text-3xl xl:text-5xl font-bold text-secondary text-center my-2">$2250</div>
                                    <ul className="py-5">
                                        <li className="flex items-start max-w-xs text-base xl:text-lg font-normal py-1.5 text-slate-800">
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2.5 flex-shrink-0"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" fill="#DD0004"/></svg>
                                            Suitable for long-term engagement
                                        </li>
                                        <li className="flex items-start text-base xl:text-lg font-normal py-1.5 text-slate-800">
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2.5 flex-shrink-0"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" fill="#DD0004"/></svg>
                                            Dedicated team of developers, Scrum Master, QAs, and architects
                                        </li>
                                        <li className="flex items-start text-base xl:text-lg font-normal py-1.5 text-slate-800">
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2.5 flex-shrink-0"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" fill="#DD0004"/></svg>
                                            160 hours per month
                                        </li>
                                    </ul>
                                </div>
                                <div className="absolute top-[200px] left-0 bg-[#DD0004]/10 h-[400px] w-[200px] rounded-r-full z-0"></div>
                            </div>
                        </li>
                        <li className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="relative h-full bg-white bg-white border-2 border-secondary/10 hover:border-secondary/50 px-8 lg:px-5 2xl:px-7 py-7 xl:py-8 rounded-lg overflow-hidden transition-all duration-300">
                                <div className="relative z-1">
                                    <h4 className="text-base lg:text-lg tracking-widest text-center text-slate-800">Hourly (USD)</h4>
                                    <div className="text-3xl xl:text-5xl font-bold text-primary text-center my-2">$20</div>
                                    <ul className="py-5">
                                        <li className="flex items-start text-base xl:text-lg font-normal py-1.5 text-slate-800">
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2.5 flex-shrink-0"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" fill="#DD0004"/></svg>
                                            Dedicated developer
                                        </li>
                                        <li className="flex items-start text-base xl:text-lg font-normal py-1.5 text-slate-800">
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2.5 flex-shrink-0"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" fill="#DD0004"/></svg>
                                            Pay as you go
                                        </li>
                                        <li className="flex items-start max-w-xs text-base xl:text-lg font-normal py-1.5 text-slate-800">
                                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2.5 flex-shrink-0"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z" fill="#DD0004"/></svg>
                                            Suitable for short-term engagement
                                        </li>
                                    </ul>
                                </div>
                                <div className="absolute top-[200px] left-0 bg-[#DD0004]/10 h-[400px] w-[200px] rounded-r-full z-0"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="botted_bg bg-gray-100 py-16 xl:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative z-1 px-5 2xl:px-0">
                    <h2 className="text-2xl xl:text-3xl 2xl:text-4xl 2xl:leading-tight font-black uppercase text-center" data-aos="fade-right" data-aos-delay="100">Why You Should</h2>
                    <h2 className="text-3xl xl:text-4xl 2xl:text-6xl 2xl:leading-tight font-black uppercase text-center" data-aos="fade-right" data-aos-delay="100">Hire From <span className="text-secondary">Reddensoft USA</span></h2>
                    <p className="max-w-3xl mx-auto text-lg xl:text-xl 2xl:text-2xl font-light text-center pt-5 pb-10" data-aos="fade-right" data-aos-delay="200">As a Generative AI and ChatGPT development company, Reddensoft USA provides the expertise, scalability, and reliability you need to implement high-impact AI technologies.</p>
                    <ul className="flex flex-wrap justify-center -mx-2 xl:-mx-4">
                        { approaches.map((approach, a) => (
                            <li className="w-full sm:w-1/2 lg:w-1/4 p-2 xl:p-4" key={a} data-aos="fade-up" data-aos-delay={200 + (a * 100)}>
                                <div className="relative no_shadow relative bg-white rounded-xl px-6 py-8 h-full text-center flex flex-col items-center shadow-med overflow-hidden">
                                    <Image className="mb-6 h-12 w-auto xl:h-16" src={approach.icon} alt={approach.title} width="auto" height="auto"/>
                                    <h3 className="text-secondary text-base xl:text-lg font-semibold pb-3">{approach.title}</h3>
                                    <p className="text-sm xl:text-base font-normal">{approach.desc}</p>
                                    <div className="absolute top-[200px] left-0 bg-[#DD0004]/[.08] h-[400px] w-[200px] rounded-r-full z-0"></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="py-16 xl:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <h2 className="max-w-3xl mx-auto text-2xl xl:text-3xl 2xl:text-4xl 2xl:leading-tight font-bold text-center" data-aos="fade-right" data-aos-delay="100">Our Approach To <span className="text-secondary whitespace-nowrap">AI Consulting</span></h2>
                    <p className="max-w-3xl mx-auto text-lg xl:text-xl 2xl:text-2xl font-light text-center pt-5 pb-10" data-aos="fade-right" data-aos-delay="200">Our top-notch AI experts work with you to monitor closely and understand unique project challenges and goals. It helps create specialized AI strategies and solutions [to bring in significant results. </p>
                    <ul className="flex items-end justify-center sm:pt-10 pb-20">
                        <li className="relative w-[15vw] -mr-[5vw]" onMouseOver={() => setSelectedTriangle('Assessment')} data-aos="zoom-in-left" data-aos-delay="400">
                            <svg width="620" height="380" viewBox="0 0 620 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto transition-all duration-300 ${selectedTriangle == 'Assessment' ? 'opacirty-100' : 'opacity-20'}`}>
                                <path d="M309.794 0C314.323 0 316.999 3.66795 316.999 3.66795L620 380H0L302.795 3.66795C302.795 3.66795 305.266 0 309.794 0Z" fill="#DD0004"/>
                            </svg>
                            <Image className={`absolute left-1/2 top-1/2 h-[4vw] sm:h-[3vw] w-auto transform -translate-x-1/2 -translate-y-1/3 ${selectedTriangle == 'Assessment' ? 'invert opacity-100 brightness-0' : 'opacity-20'}`} src={assessment} alt="Assessment icon" priority width="auto" height="auto"/>
                            <div className={`absolute left-1/2 top-full transform -translate-x-1/2 h-10 sm:h-20 flex flex-col items-center text-sm sm:text-base whitespace-nowrap ${selectedTriangle == 'Assessment' ? 'text-secondary' : 'text-gray-500'}`}>
                                <span className={`hor_line ${selectedTriangle == 'Assessment' ? 'active' : ''}`}></span>
                                Assessment
                            </div>
                        </li>
                        <li className="relative w-[25vw] -mr-[10vw]" onMouseOver={() => setSelectedTriangle('Strategy')} data-aos="zoom-in-left" data-aos-delay="300">
                            <svg width="620" height="380" viewBox="0 0 620 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto transition-all duration-300 ${selectedTriangle == 'Strategy' ? 'opacirty-100' : 'opacity-20'}`}>
                                <path d="M309.794 0C314.323 0 316.999 3.66795 316.999 3.66795L620 380H0L302.795 3.66795C302.795 3.66795 305.266 0 309.794 0Z" fill="#DD0004"/>
                            </svg>
                            <Image className={`absolute left-1/2 top-1/2 h-[5vw] sm:h-[4vw] w-auto transform -translate-x-1/2 -translate-y-1/3 ${selectedTriangle == 'Strategy' ? 'invert opacity-100 brightness-0' : 'opacity-20'}`} src={strategy} alt="Strategy icon" priority width="auto" height="auto"/>
                            <div className={`absolute left-1/2 top-full transform -translate-x-1/2 h-16 sm:h-20 flex flex-col items-center text-sm sm:text-base whitespace-nowrap ${selectedTriangle == 'Strategy' ? 'text-secondary' : 'text-gray-500'}`}>
                                <span className={`hor_line ${selectedTriangle == 'Strategy' ? 'active' : ''}`}></span>
                                Strategy
                            </div>
                        </li>
                        <li className="relative w-[35vw]" onMouseOver={() => setSelectedTriangle('Model')} data-aos="zoom-in-up" data-aos-delay="100">
                            <svg width="620" height="380" viewBox="0 0 620 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto transition-all duration-300 ${selectedTriangle == 'Model' ? 'opacirty-100' : 'opacity-20'}`}>
                                <path d="M309.794 0C314.323 0 316.999 3.66795 316.999 3.66795L620 380H0L302.795 3.66795C302.795 3.66795 305.266 0 309.794 0Z" fill="#DD0004"/>
                            </svg>
                            <Image className={`absolute left-1/2 top-1/2 h-[6vw] sm:h-[5vw] w-auto transform -translate-x-1/2 -translate-y-1/3 ${selectedTriangle == 'Model' ? 'invert opacity-100 brightness-0' : 'opacity-20'}`} src={model} alt="Model icon" priority width="auto" height="auto"/>
                            <div className={`absolute left-1/2 top-full transform -translate-x-1/2 h-24 sm:h-20 flex flex-col items-center text-sm sm:text-base whitespace-nowrap ${selectedTriangle == 'Model' ? 'text-secondary' : 'text-gray-500'}`}>
                                <span className={`hor_line ${selectedTriangle == 'Model' ? 'active' : ''}`}></span>
                                Data Prep & Model
                            </div>
                        </li>
                        <li className="relative w-[25vw] -ml-[10vw]" onMouseOver={() => setSelectedTriangle('Integration')} data-aos="zoom-in-right" data-aos-delay="300">
                            <svg width="620" height="380" viewBox="0 0 620 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto transition-all duration-300 ${selectedTriangle == 'Integration' ? 'opacirty-100' : 'opacity-20'}`}>
                                <path d="M309.794 0C314.323 0 316.999 3.66795 316.999 3.66795L620 380H0L302.795 3.66795C302.795 3.66795 305.266 0 309.794 0Z" fill="#DD0004"/>
                            </svg>
                            <Image className={`absolute left-1/2 top-1/2 h-[5vw] sm:h-[4vw] w-auto transform -translate-x-1/2 -translate-y-1/3 ${selectedTriangle == 'Integration' ? 'invert opacity-100 brightness-0' : 'opacity-20'}`} src={integration} alt="Integration icon" priority width="auto" height="auto"/>
                            <div className={`absolute left-1/2 top-full transform -translate-x-1/2 h-16 sm:h-20 flex flex-col items-center text-sm sm:text-base whitespace-nowrap ${selectedTriangle == 'Integration' ? 'text-secondary' : 'text-gray-500'}`}>
                                <span className={`hor_line ${selectedTriangle == 'Integration' ? 'active' : ''}`}></span>
                                Integration
                            </div>
                        </li>
                        <li className="relative w-[15vw] -ml-[5vw]" onMouseOver={() => setSelectedTriangle('Maintenance')} data-aos="zoom-in-right" data-aos-delay="400">
                            <svg width="620" height="380" viewBox="0 0 620 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-auto transition-all duration-300 ${selectedTriangle == 'Maintenance' ? 'opacirty-100' : 'opacity-20'}`}>
                                <path d="M309.794 0C314.323 0 316.999 3.66795 316.999 3.66795L620 380H0L302.795 3.66795C302.795 3.66795 305.266 0 309.794 0Z" fill="#DD0004"/>
                            </svg>
                            <Image className={`absolute left-1/2 top-1/2 h-[4vw] sm:h-[3vw] w-auto transform -translate-x-1/2 -translate-y-1/3 ${selectedTriangle == 'Maintenance' ? 'invert opacity-100 brightness-0' : 'opacity-20'}`} src={maintenance} alt="Maintenance icon" priority width="auto" height="auto"/>
                            <div className={`absolute left-1/2 top-full transform -translate-x-1/2 h-10 sm:h-20 flex flex-col items-center text-sm sm:text-base whitespace-nowrap ${selectedTriangle == 'Maintenance' ? 'text-secondary' : 'text-gray-500'}`}>
                                <span className={`hor_line ${selectedTriangle == 'Maintenance' ? 'active' : ''}`}></span>
                                Maintenance
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="banner_bg py-16 xl:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative  z-1 px-5 2xl:px-0">
                    <h3 className="text-white text-[25px] md:text-[40px] md:leading-[50px] leading-[33px] font-bold max-w-full md:max-w-[900px] mx-auto text-center">Hire Top-Notch ChatGPT Developers</h3>
                    <p className="max-w-4xl mx-auto text-lg xl:text-xl 2xl:text-2xl font-light text-white text-center pt-5" data-aos="fade-right" data-aos-delay="200">At Reddensoft USA, we have expert ChatGPT developers for tailored and smart solutions to skyrocket your operations. Join us today.</p>
                    <div className="flex justify-center mt-10">
                        <button className="flex items-center bg-secondary h-[52px] 2xl:h-[60px] rounded-[30px] flex-row pl-7 2xl:pl-10 pr-3.5" onClick={hireNow}>
                            <span className="text-base 2xl:text-[19px] leading-6 text-white font-bold uppercase pr-4">Hire Now</span>
                            <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full flex items-center justify-center rounded-full bg-white">
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-0">
                                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#001A32"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <Starfield
                    starCount={1000}
                    starColor={[255, 255, 255]}
                    speedFactor={0.05}
                    backgroundColor="black"
                    id="14"
                />
            </div>
            <div className="py-16 xl:py-24">
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
                                        <Image src={rightarrow} alt="right arrow icon" className={`h-3 sm:h-4 w-auto transform transition-all ease-in-out duration-300 flex-shrink-0 ${activeIndex === a ? '-rotate-90' : 'rotate-90'}`} width="auto" height="auto"/>
                                    </button>                                    
                                    <div className={`text-sm lg:text-lg text-slate-900 font-light overflow-hidden transition-all ease-in-out duration-300 pr-8 ${activeIndex === a ? 'pt-3 sm:pt-5 max-h-96' : 'pt-0 max-h-0'}`}>{accordion.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}