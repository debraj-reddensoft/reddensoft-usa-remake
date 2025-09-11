"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import generativeaiintegration from "@/assets/images/generative-ai-integration.webp"
import dataanalysis from "@/assets/images/data-analysis.webp"
import contentgeneration from "@/assets/images/content-generation.webp"
import customersupport from "@/assets/images/customer-support.webp"
import virtualtraining from "@/assets/images/virtual-training.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function GenerativeAiIntegration() {
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
            title: "Cross-Sector Expertise",
            desc: "We bring hands-on knowledge of various industries, allowing us to craft AI systems that solve real-world problems with speed and precision.",
        },
        {
            title: "Frictionless Integration",
            desc: "Our Generative AI Integration approach ensures your existing tools and systems work in harmony with new AI solutions, improving productivity from day one.",
        },
        {
            title: "Built to Scale",
            desc: "Our solutions grow with your business. From startups to enterprises, we ensure your AI systems evolve to meet increasing demands and complexity.",
        },
        {
            title: "Always-On Innovation",
            desc: "Stay ahead of the curve with continuously evolving Generative AI Integration Services. We provide upgrades and support to keep your systems cutting-edge.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Accelerate financial operations with AI-driven automation, fraud detection, and decision support that enhances performance and regulatory compliance.",
        },
        {
            title: "Retail",
            desc: "Transform customer experiences through real-time personalization, optimized inventory systems, and targeted recommendations powered by intelligent AI engines.",
        },
        {
            title: "Healthcare",
            desc: "Empower healthcare delivery with automated diagnostics, treatment optimization, and patient monitoring for improved outcomes and operational effectiveness.",
        },
        {
            title: "Insurance",
            desc: "Drive operational efficiency with automated underwriting, smart claims processing, and AI-enhanced customer engagement tailored for the insurance sector.",
        },
        {
            title: "Manufacturing",
            desc: "Implement AI for process refinement, predictive equipment maintenance, and intelligent quality checks to maximize productivity and minimize downtime.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Improve logistics through AI-based demand forecasting, route optimization, and automated inventory planning for smoother, smarter operations.",
        },
        {
            title: "Automotive",
            desc: "Fuel automotive innovation with AI systems for self-driving features, predictive maintenance, and intelligent design processes that redefine performance.",
        },
        {
            title: "Hospitality",
            desc: "Deliver hyper-personalized guest services and optimize operations through AI-driven automation, reservation systems, and experience management.",
        },
        
    ]

    const services = [
        {
            thumb: customersupport,
            title: "AI-Powered Customer Assistance",
            desc: "Automate support with intelligent agents that handle customer inquiries 24/7, increasing responsiveness and reducing workload on support teams.",
        },
        {
            thumb: contentgeneration,
            title: "Automated Content Production",
            desc: "Generate personalized, on-brand content at scale — from marketing assets to product descriptions — using advanced generative tools that save time and maintain consistency.",
        },
        {
            thumb: dataanalysis,
            title: "Data Intelligence & Predictive Insights",
            desc: "Extract actionable insights from large data sets using AI-driven analysis, enabling faster, more confident decision-making.",
        },
        {
            thumb: virtualtraining,
            title: "AI-Based Simulations & Training",
            desc: "Deliver immersive, interactive learning experiences with AI simulations customized to your organization’s learning and development goals.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your Generative AI Integration services?",
          content: "We offer Generative AI Integration Servicesin USAfor a wide range of sectors including banking, healthcare, retail, insurance, manufacturing, logistics, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "Our team collaborates with you to assess your current processes and tailor AI strategies that deliver measurable results aligned with your objectives.",
        },
        {
          title: "What kinds of AI solutions can you integrate into our systems?",
          content: "We offer custom integrations for customer support automation, content creation, simulations, predictive analytics, and more — fully customized for your organization.",
        },
        {
          title: "Do you offer support after the AI solution is implemented?",
          content: "Yes, we provide post-launch support, optimization, and updates to ensure your AI systems remain effective and aligned with evolving business needs.",
        },
        {
          title: "How secure are your AI solutions?",
          content: "Security is fundamental to our approach. We implement rigorous protocols to protect data integrity and ensure compliance with industry regulations throughout the integration process.",
        }
    ];

    return(
        <>
            <title>Gen-AI integration USA I Generative AI application Development </title>
            <meta name="title" content="Transform Business with Generative AI Integration Services" />
            <meta name="description" content="Enhance creativity and efficiency with Generative AI Integration. Partner with us to bring AI-powered solutions to your business. Contact us today." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Generative AI Integration</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">At Reddensoft USA, we specialize in <span className="text-secondary font-bold">Generative AI Integration Servicesin</span> USA that help businesses transform operations, boost creativity, and gain a competitive edge.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">Generative AI Integration</span> solutions empower organizations to embed intelligent AI capabilities into their core systems, enabling smarter processes, automated workflows, and data-driven innovation. We guide clients through each phase — from initial evaluation to full rollout — ensuring results that scale with your business.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Tailored Generative AI Application Development </span>Design intelligent applications built around your specific use cases. Our engineers create bespoke AI models and platforms that seamlessly connect with your infrastructure, delivering high-value business results.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Strategic Generative AI Consulting </span>Navigate the AI landscape with clarity. Our consultants analyze your operations and craft a strategic roadmap to implement impactful Generative AI Integration across departments.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Workflow-Centric AI Integration </span>Embed AI seamlessly into your business processes. Our team ensures every element of Generative AI Integration aligns with your existing systems, optimizing workflows without disruption.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">End-to-End Support & Optimization </span>Our Generative AI Integration Services include continuous updates and enhancements to keep your solutions future-ready, efficient, and tuned for peak performance.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={generativeaiintegration} alt="Generative AI integration icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Our Generative AI Integration Servicesin USAare built to adapt to your industry’s unique demands, delivering customized AI-powered innovations that enhance every part of your business process.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="max-w-2xl mx-auto text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">Generative AI Integration Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">Generative AI Integration Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">At Reddensoft USA, we don’t just provide AI — we deliver scalable, high-impact Generative AI Integration Servicesin USAtailored for long-term success.</p>
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
                                        <Image src={rightarrow} alt="right arrow icon" className={`h-3 sm:h-4 w-auto transform transition-all ease-in-out duration-300 flex-shrink-0 ${activeIndex === a ? '-rotate-90' : 'rotate-90'}`} width="auto" height="auto"/>
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