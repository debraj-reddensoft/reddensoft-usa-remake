"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import aidevelopment from "@/assets/images/ai-development.webp"
import naturallanguageprocessing2 from "@/assets/images/natural-language-processing-2.webp"
import predictiveanalytics2 from "@/assets/images/predictive-analytics-2.webp"
import deeplearning from "@/assets/images/deep-learning.webp"
import datascience from "@/assets/images/data-science.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function AiDevelopment() {
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
            title: "Custom AI Solutions",
            desc: "Whether you need AI chatbot development services, an AI application developer, or a full-scale enterprise solution, we tailor everything to your business needs.",
        },
        {
            title: "Advanced AI Models",
            desc: "Utilize sophisticated AI techniques, including large language models (LLMs), to provide accurate, context-aware responses and automate key processes.",
        },
        {
            title: "Seamless Multi-Agent Systems",
            desc: "Our AI solutions can coordinate multiple agents to work together seamlessly, ensuring cohesive and efficient operations across departments.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Transform your financial services with AI-powered analytics, fraud detection, and customer insights that build trust and drive efficiency.",
        },
        {
            title: "Retail",
            desc: "Personalize customer experiences, optimize inventory, and boost sales with AI solutions tailored to the retail industry.",
        },
        {
            title: "Healthcare",
            desc: "Improve patient care, streamline operations, and enhance diagnostic accuracy with AI tools tailored to the healthcare sector.",
        },
        {
            title: "Insurance",
            desc: "Automate claims processing, risk assessments, and customer support with AI, reducing costs and improving service delivery.",
        },
        {
            title: "Manufacturing & Supply Chain",
            desc: "Optimize operations, reduce downtime, and predict maintenance needs with AI-driven solutions in manufacturing and logistics.",
        },
        {
            title: "Automotive",
            desc: "Enhance vehicle safety, optimize manufacturing, and develop autonomous driving solutions using cutting-edge AI technology.",
        },
        {
            title: "Hospitality",
            desc: "Elevate guest experiences with AI-powered personalization and automation, improving service and operational efficiency.",
        },
        
    ]

    const services = [
        {
            thumb: deeplearning,
            title: "Machine Learning & Deep Learning",
            desc: "Unlock insights from your data using advanced machine learning and deep learning models that evolve with every interaction.",
        },
        {
            thumb: predictiveanalytics2,
            title: "Predictive Analytics",
            desc: "Use AI to forecast trends, customer behaviors, and market movements, enabling you to make data-driven decisions.",
        },
        {
            thumb: naturallanguageprocessing2,
            title: "Natural Language Processing (NLP)",
            desc: "Enable your systems to understand and interact with human language, enhancing customer experiences and automating communication.",
        },
        {
            thumb: datascience,
            title: "Data Science & Computer Vision",
            desc: "Leverage data science to turn raw data into valuable insights, and computer vision to automate image recognition and visual data analysis.",
        },
    ];

    const accordions = [
        {
          title: "How does your AI development service align with my business goals?",
          content: "We work closely with your team to understand your unique challenges and business objectives, then design custom AI solutions to address them effectively.",
        },
        {
          title: "What is the scope of your AI development services?",
          content: "We offer a wide range of services, including AI chatbot development, custom AI application development, and AI integration into existing workflows.",
        },
        {
          title: "What industries do you specialize in?",
          content: "Our AI development services cater to industries such as banking, finance, retail, healthcare, manufacturing, logistics, and hospitality.",
        },
        {
          title: "Will I receive support after the AI solution is implemented?",
          content: "Yes, we offer ongoing maintenance and continuous improvement services to keep your AI solutions performing optimally and aligned with your business goals.",
        },
        {
          title: "How secure are your AI solutions?",
          content: "Security is a top priority. Our AI solutions incorporate advanced security measures to protect your data and ensure compliance with industry regulations.",
        }
    ];

    return(
        <>
            <title>AI Development Company | Expert AI Development Services</title>
            <meta name="title" content="AI Development Company | Expert AI Development Services" />
            <meta name="description" content="Hire the best AI development company for tailored AI development services. Grow your business with our smart, innovative, and scalable AI solutions." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Boost Your Business with AI Development Solutions</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">We deliver state-of-the-art <span className="text-[#FFDD1A] font-bold">AI development</span> solutions to provide the customers with comprehensive and <span className="text-secondary font-bold">tailored services</span> for their best business performance.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">AI development</span> service is designed to maximize your business potential and streamline the business workflow alongside operational efficiency. Starting from AI consultancy to custom AI app development and integration into the workflow - we have a wide array of comprehensive AI services.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">AI/ML Strategy Consulting: </span>Develop a strategic roadmap to leverage AI and machine learning, aligning them with your business objectives for maximum ROI.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">PoC and MVP Development: </span>Validate your AI concepts with a proof of concept (PoC) or MVP, ensuring that your AI solution delivers value before full-scale deployment.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Custom AI Application Development: </span>From design to deployment, we do bespoke AI application development that streamline operations and enhance business processes.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">AI Integration: </span>Seamlessly integrate AI solutions into your existing systems to ensure smooth workflows and enhanced productivity.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={aidevelopment} alt="AI development service icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <ul className="max-w-4xl flex flex-wrap justify-center -mx-2">
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
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">AI Development Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">AI Development Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">Our AI development company excels in creating intelligent systems that analyze complex datasets, adapt to evolving business needs, and provide actionable insights. Here’s how we stand out.</p>
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