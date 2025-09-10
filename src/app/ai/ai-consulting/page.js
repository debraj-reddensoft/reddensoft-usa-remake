"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import aiconsulting from "@/assets/images/ai-consulting.webp"
import endtoend from "@/assets/images/end-to-end.webp"
import deepexperience from "@/assets/images/deep-experience.webp"
import extensivetechnical from "@/assets/images/extensive-technical.webp"
import responsibleaidevelopment from "@/assets/images/responsible-ai-development.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function AiConsulting() {
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
            title: "Tailored Solutions",
            desc: "We provide AI consulting services customized to your specific business needs, leveraging industry expertise to solve complex challenges effectively.",
        },
        {
            title: "Full Lifecycle Support",
            desc: "From initial consultation to post-implementation support, we guide your AI projects every step of the way, ensuring seamless integration and long-term success.",
        },
        {
            title: "Ethical AI Practices",
            desc: "We ensure that our AI solutions are built responsibly, prioritizing transparency, fairness, and compliance to foster trust and integrity in your AI initiatives.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Transform your financial services with AI solutions that enhance fraud detection, automate processes, and offer data-driven customer insights.",
        },
        {
            title: "Retail",
            desc: "Improve customer engagement, optimize inventory, and boost sales with personalized AI solutions designed for the retail industry.",
        },
        {
            title: "Healthcare",
            desc: "Streamline diagnostics, enhance patient care, and improve operational efficiency through AI-powered healthcare solutions.",
        },
        {
            title: "Insurance",
            desc: "Automate claims processing, enhance risk management, and improve customer service with AI consulting services in the insurance sector.",
        },
        {
            title: "Manufacturing",
            desc: "Improve operational efficiency, reduce downtime, and optimize supply chains with AI-driven solutions for manufacturing industries.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Leverage AI for route optimization, predictive maintenance, and smarter supply chain management.",
        },
        {
            title: "Automotive",
            desc: "Innovate with AI for autonomous driving, predictive maintenance, and smart manufacturing in the automotive industry.",
        },
        {
            title: "Hospitality",
            desc: "Enhance guest experiences and streamline operations with AI-driven solutions tailored to the hospitality industry.",
        }
    ]

    const services = [
        {
            thumb: extensivetechnical,
            title: "Extensive Technical Skills",
            desc: "As an AI consulting company, we bring deep technical expertise across various AI domains, from machine learning and deep learning to natural language processing and computer vision.",
        },
        {
            thumb: deepexperience,
            title: "Deep Experience and Expertise",
            desc: "With years of experience, our AI business consultants have helped organizations across diverse industries unlock the full potential of AI.",
        },
        {
            thumb: endtoend,
            title: "End-to-End Development",
            desc: "We offer complete AI consulting services, from initial strategy development and data preparation to full-scale implementation and optimization.",
        },
        {
            thumb: responsibleaidevelopment,
            title: "Responsible AI Development",
            desc: "We ensure that all our AI solutions are ethically sound and comply with industry standards and regulations, fostering trust and accountability in every solution we create.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your AI consulting services?",
          content: "Our AI consulting services cater to a broad range of industries, including banking, retail, healthcare, insurance, manufacturing, supply chain, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "We work closely with your team to understand your specific needs and challenges, ensuring that the AI consulting services we offer align perfectly with your business objectives.",
        },
        {
          title: "What types of AI services do you provide?",
          content: "As an AI consulting company, we offer a wide array of services, including AI strategy development, AI opportunity mapping, custom AI model development, and full end-to-end AI implementation.",
        },
        {
          title: "Do you offer support after the AI solution is deployed?",
          content: "Yes, we provide ongoing support and optimization, ensuring that your AI systems remain up-to-date, efficient, and aligned with your evolving business needs.",
        },
        {
          title: "How secure are your AI solutions?",
          content: "Security is a top priority. Our AI consulting firm ensures all our solutions adhere to the highest security standards, protecting your data and ensuring compliance with relevant regulations.",
        }
    ];

    return(
        <>
            <title>AI Consulting Services | AI Consulting Firm</title>
            <meta name="title" content="AI Consulting Services | AI Consulting Firm" />
            <meta name="description" content="Looking for AI consulting services? Our AI consulting firm delivers customized AI solutions to optimize business processes and drive results. Reach us now." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Smarter AI Solutions</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Unlock the full potential of Artificial Intelligence, from strategy to implementation, for your business with our expert <span className="text-[#FFDD1A] font-bold">AI consulting services</span>.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">At Reddensoft, we have comprehensive <span className="text-secondary">AI consulting services</span> where we harness the transformative power of AI to improve the operational capabilities of a business. Our experts understand the unique challenges and opportunities, and can create custom strategies that bring up tangible results. We are efficient in Generative AI also having expertise in leveraging the latest models like Gemini, ChatGPT and more. We can guide you through each step - starting from improving operations through intelligent automation to exploring capabilities of GenAI.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">AI Strategy Development: </span>Design a roadmap for your AI journey, aligning AI strategies with your business objectives for maximum impact and measurable results.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">AI Opportunity Mapping: </span>Identify areas within your business that can benefit from AI solutions, enabling you to leverage technology to solve key challenges.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Domain-Specific Model Development: </span>Develop specialized AI models for your industry that drive efficiency, innovation, and competitive advantage.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Data Engineering: </span>Ensure your data is clean, well-structured, and ready for AI-powered applications with our advanced data engineering services.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={aiconsulting} alt="AI consulting service icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">As a provider of AI services, we specialize in providing innovative solutions for a variety of industries, such as banking and finance, retail, healthcare, insurance, manufacturing and supply chain, automotive, and hospitality. Our experience includes AI development, AI consulting, AI copilot development, AI agent development, and Machine Learning (ML) solutions. We collaborate closely with companies to create and execute tailored AI-driven strategies that improve customer experience, drive innovation, and increase operational efficiency. With a thorough understanding of the particular challenges faced by each industry, we provide scalable and significant AI solutions that are suited to your particular business requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">AI Consulting Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">AI Consulting Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">As a leading AI consulting firm, we are committed to delivering personalized, scalable AI solutions that meet the unique challenges of your business. Here's what makes us different.</p>
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