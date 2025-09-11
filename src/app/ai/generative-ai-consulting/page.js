"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import generativeaiconsulting from "@/assets/images/generative-ai-consulting.webp"
import reinforcementlearning from "@/assets/images/reinforcement-learning.webp"
import computervisionsynthesis from "@/assets/images/computer-vision-synthesis.webp"
import deeplearningprocessing from "@/assets/images/deep-learning-processing.webp"
import dataengineering from "@/assets/images/data-engineering.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function GenerativeAiConsulting() {
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
            title: "Industry-Specific Knowledge",
            desc: "Our cross-sector experience ensures tailored strategies. Every solution is backed by real-world understanding of your domain and operational needs.",
        },
        {
            title: "Adaptive AI Frameworks",
            desc: "Our AI systems are built to learn and evolve, helping you stay agile in fast-changing market environments.",
        },
        {
            title: "Commitment to Innovation",
            desc: "As your trusted Generative AI consultantin USA, we continuously optimize your systems with the latest AI innovations and upgrades.",
        },
        {
            title: "Streamlined Deployment",
            desc: "We integrate Generative AI consulting solutions into your existing environment without disruption, ensuring seamless operations from day one.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Enhance operations with AI-driven automation, real-time analytics, and risk assessment tools. Deliver smarter customer service and efficient compliance.",
        },
        {
            title: "Retail",
            desc: "Improve sales with AI-generated insights and personalized customer experiences. Manage inventory, pricing, and marketing strategies more effectively.",
        },
        {
            title: "Healthcare",
            desc: "Enable faster diagnoses and treatment recommendations with AI-based decision support. Automate administrative processes for greater efficiency.",
        },
        {
            title: "Insurance",
            desc: "Modernize operations through automated claims, fraud detection, and predictive modeling. Generative AI consultantsin USA help streamline the entire insurance lifecycle.",
        },
        {
            title: "Manufacturing",
            desc: "Integrate AI to predict maintenance needs, optimize workflows, and improve production output. Ensure consistent quality through intelligent monitoring systems.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Use AI to forecast demand, optimize routes, and reduce delays. Enhance responsiveness and adaptability across the entire supply chain.",
        },
        {
            title: "Automotive",
            desc: "Accelerate innovation in electric and autonomous vehicles with AI-powered design, testing, and predictive maintenance tools.",
        },
        {
            title: "Hospitality",
            desc: "Deliver hyper-personalized guest services and improve booking efficiency. Use AI to tailor every customer touchpoint and optimize backend operations.",
        },
        
    ]

    const services = [
        {
            thumb: deeplearningprocessing,
            title: "Language Models and NLP Solutions",
            desc: "Harness powerful natural language processing to generate dynamic content, improve customer conversations, and power virtual assistants for deeper engagement.",
        },
        {
            thumb: computervisionsynthesis,
            title: "Visual Intelligence and AI Imaging",
            desc: "Use generative AI to process, analyze, and synthesize images. These tools enhance workflows in sectors like retail, manufacturing, and medical imaging.",
        },
        {
            thumb: reinforcementlearning,
            title: "Reinforcement Learning Engines",
            desc: "Train AI systems to make real-time decisions through simulation-based learning. Ideal for complex environments like logistics, operations, and robotics.",
        },
        {
            thumb: dataengineering,
            title: "Data Architecture and Engineering",
            desc: "Build strong, scalable data pipelines. Our team ensures your data foundation supports accurate, efficient training and performance of AI applications.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your generative AI consulting services?",
          content: "Our Generative AI consulting services cater to sectors such as finance, healthcare, insurance, retail, logistics, automotive, hospitality, and manufacturing.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "Our Generative AI consultantsin USA work hand-in-hand with your stakeholders to design customized AI strategies that drive measurable success.",
        },
        {
          title: "What kinds of AI capabilities do you provide?",
          content: "We develop AI solutions in natural language processing, visual intelligence, reinforcement learning, and data engineering, tailored to your business.",
        },
        {
          title: "Do you offer ongoing support after deployment?",
          content: "Absolutely. We provide continuous updates, optimization, and monitoring to ensure your AI systems evolve with your goals and market trends.",
        },
        {
          title: "How do you ensure security and compliance?",
          content: "We implement industry-best security standards and guide you through all regulatory requirements to ensure safe, compliant AI deployments.",
        }
    ];

    return(
        <>
            <title>Gen-AI consulting USA I Generative AI consulting services</title>
            <meta name="title" content="Generative AI Consultant | Generative AI Consulting Services" />
            <meta name="description" content="Our generative AI consulting helps businesses unlock new possibilities. To drive your business growth, partner with our trusted generative AI consultant today." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Generative AI Consulting</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Reddensoft USA enables companies to tap into the full potential of advanced AI tools to drive innovation and achieve measurable outcomes.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary font-bold">Generative AI consulting services</span> are designed to help businesses implement intelligent AI models that power innovation, automate operations, and elevate strategic decision-making. From initial discovery sessions to enterprise-wide deployment, we support your AI transformation at every stage.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Opportunity Mapping and Viability Analysis </span>Pinpoint high-value areas where Generative AI consultingin USA can create impact. We evaluate the practicality of each use case, ensuring your investment delivers tangible business outcomes.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Technology Evaluation and Recommendation </span>Get expert insights on the right tools, models, and platforms. Our team analyzes and recommends the most suitable tech stack to align with your strategic vision.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Security & Regulatory Guidance </span>Navigate the complexities of compliance and data protection. As experienced Generative AI consultants, we ensure all implementations meet industry-specific regulations and best practices.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Data Infrastructure Setup </span>Lay the groundwork for scalable AI deployment. Our engineers clean, organize, and prepare your data for seamless integration of next-gen generative AI systems.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={generativeaiconsulting} alt="Generative consulting icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Our Generative AI consulting servicesin USA are designed to scale across industries, helping organizations innovate faster and gain a competitive advantage.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="max-w-2xl mx-auto text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">Generative AI Consulting Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">Generative AI Consulting Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">At Reddensoft USA, we bring a practical, business-focused approach to Generative AI consulting. Our solutions adapt to complex datasets, scale with your needs, and enhance engagement across channels.</p>
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