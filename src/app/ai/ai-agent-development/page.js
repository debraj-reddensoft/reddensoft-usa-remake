"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import aiagentdevelopment from "@/assets/images/ai-agent-development.webp"
import customerservice from "@/assets/images/customer-service.webp"
import humanresources from "@/assets/images/human-resources.webp"
import financeaccounting from "@/assets/images/finance-accounting.webp"
import marketingsales from "@/assets/images/marketing-sales.webp"
import it from "@/assets/images/it.webp"
import security from "@/assets/images/security.webp"
import legalcompliance from "@/assets/images/legal-compliance.webp"
import operationslogistics from "@/assets/images/operations-logistics.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function AiAgentDevelopment() {
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
            title: "Autonomous Decision-Making",
            desc: "Agents from our AI Agent Development Company in USA act independently using real-time data to optimize decision-making across workflows.",
        },
        {
            title: "Skills Library Integration",
            desc: "Deploy AI agents with an expansive library of capabilities tailored to your business functions for enhanced productivity.",
        },
        {
            title: "Multimodal Interaction",
            desc: "Interact using text, speech, or visuals — our agents support diverse modes of communication for superior user engagement.",
        },
        {
            title: "Defined Multi-Agent Workflow",
            desc: "Coordinate multiple agents seamlessly to manage complex tasks with clarity and operational harmony.",
        },
        {
            title: "Customizable Conversation Patterns",
            desc: "Reflect your brand’s voice in every AI interaction with tailored conversational experiences built for relevance and authenticity.",
        },
        {
            title: "Enhanced LLM Inference",
            desc: "Leverage cutting-edge large language models to generate contextually aware, precise, and human-like responses at scale.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Use intelligent AI agents to automate financial analysis, risk assessment, and client support. Drive smarter, compliant, and secure transactions.",
        },
        {
            title: "Retail",
            desc: "Reinvent your retail strategy with AI for personalized shopping experiences, real-time inventory control, and customer engagement at scale.",
        },
        {
            title: "Healthcare",
            desc: "Improve diagnostics, optimize resource management, and personalize patient care with smart AI agents in clinical and administrative environments.",
        },
        {
            title: "Manufacturing",
            desc: "Harness AI-driven production planning, predictive analytics, and quality control to boost efficiency and reduce downtime.",
        },
        {
            title: "Logistics",
            desc: "Streamline fleet management and routing with AI-powered insights that cut delivery times and lower operational costs.",
        },
        {
            title: "Real Estate",
            desc: "Enable intelligent property matching, virtual agents for customer service, and AI-driven market analysis for faster closings and better outcomes.",
        },
        {
            title: "Hospitality",
            desc: "Elevate service delivery and personalize the guest journey with conversational AI agents tailored for hotels and travel.",
        },
        {
            title: "Media and Entertainment",
            desc: "Use AI for content generation, intelligent recommendation engines, and production workflow automation that captivates and converts.",
        },
    ]

    const services = [
        {
            thumb: customerservice,
            title: "Customer Service",
            desc: "Build 24/7 intelligent support agents that increase resolution rates and improve customer satisfaction across every touchpoint.",
        },
        {
            thumb: humanresources,
            title: "Human Resources",
            desc: "Automate hiring, streamline onboarding, and enhance employee engagement with intelligent HR agents.",
        },
        {
            thumb: financeaccounting,
            title: "Finance and Accounting",
            desc: "Increase speed and accuracy in financial reporting, bookkeeping, and audits with AI-powered process automation.",
        },
        {
            thumb: marketingsales,
            title: "Marketing and Sales",
            desc: "Personalize outreach, analyze customer behavior, and forecast trends to amplify conversions using data-driven AI agents.",
        },
        {
            thumb: it,
            title: "IT",
            desc: "Monitor systems, predict outages, and automate ticket resolution using intelligent tools designed to reduce IT friction.",
        },
        {
            thumb: security,
            title: "Security",
            desc: "Defend your enterprise with AI agents that detect threats in real time and coordinate rapid responses to mitigate cyber risk.",
        },
        {
            thumb: legalcompliance,
            title: "Legal and Compliance",
            desc: "Automate legal research, monitor policy adherence, and streamline documentation with AI tools that ensure accuracy and efficiency.",
        },
        {
            thumb: operationslogistics,
            title: "Operations and Logistics",
            desc: "Streamline operations with AI-driven optimization. Improve supply chain efficiency and operational excellence.",
        },
    ];

    const accordions = [
        {
          title: "What industries can benefit from your AI agent development services?",
          content: "Our AI Agent Development Services in USA support industries such as banking, retail, healthcare, manufacturing, logistics, real estate, hospitality, and media.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "We partner closely with your team to understand your objectives and develop a strategy that aligns AI capabilities with your growth goals.",
        },
        {
          title: "What kind of AI developments can you do?",
          content: "As a leading AI Agent Development Company in USA, we create intelligent agents for customer service, HR, finance, marketing, legal, IT, and more.",
        },
        {
          title: "Do you provide ongoing support after implementation?",
          content: "Yes, we offer full lifecycle support including performance monitoring, maintenance, and continuous improvements to ensure lasting success.",
        },
        {
          title: "How secure are your AI solutions?",
          content: "Security is built into everything we do. Our solutions include data encryption, access controls, and full compliance with industry regulations.",
        }
    ];

    return(
        <>
            <title>AI agent development I AI agent developer USA </title>
            <meta name="title" content="AI Agent Development Company | AI Agent Development Services" />
            <meta name="description" content="Empower your business with advanced AI Agent Development Services from a reliable AI Agent Development Company. Build smarter, automated solutions today." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Smarter AI Solutions</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Experience breakthrough automation with Reddensoft USA — an <span className="text-secondary font-bold">AI Agent Development Company in USA</span> that transforms how your business operates by delivering bespoke AI agents from planning to deployment.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">AI Agent Development Services in USA</span> are built to elevate enterprise intelligence. From evaluating your current tech landscape to integrating AI agents and refining workflows, our solutions adapt to evolving business needs. We help organizations stay ahead by making their operations smarter, faster, and future-ready.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">AI Agent Strategy Development </span>Craft a future-focused roadmap that integrates AI-driven automation across your processes. We align agent strategies with your business goals for high-impact outcomes.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Custom AI Agent Development</span>Our AI Agent Development Services in USA deliver bespoke agents designed for your specific workflows. From ideation to production, we help you achieve measurable efficiency gains.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">AI Agent Integration</span>Connect your new AI agents seamlessly into existing systems. We ensure minimal disruption, improved performance, and a smooth transition across your infrastructure.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Continuous Improvement and Maintenance </span>Future-proof your investment with regular updates and enhancements managed by expert AI agent developer teams, keeping your systems optimized as tech evolves.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={aiagentdevelopment} alt="AI agent development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">At Reddensoft USA, we bring the power of AI agents to a broad spectrum of industries. With a focus on results and innovation, our AI Agent Development Services in USA empower companies across sectors to streamline operations, improve customer experience, and enhance business intelligence with advanced automation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">AI Agent Development Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">AI Agents Development Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">At Reddensoft USA, we build adaptable and intelligent agents capable of accessing external data sources, understanding multi-channel communication, and customizing their behavior based on user preferences — offering unmatched flexibility in enterprise </p>
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