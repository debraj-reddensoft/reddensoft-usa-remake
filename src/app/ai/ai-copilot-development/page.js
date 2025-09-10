"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import aicopilot from "@/assets/images/ai-copilot.webp"
import extensiveexperience from "@/assets/images/extensive-experience.webp"
import expertaiprofessionals from "@/assets/images/expert-ai-professionals.webp"
import tailoredapproach from "@/assets/images/tailored-approach.webp"
import securitycompliance from "@/assets/images/security-compliance.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function AiCopilot() {
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
            title: "Tailored AI Copilot Solutions",
            desc: "We specialize in delivering AI Copilot developers that are custom-built to meet the specific needs of your business, ensuring seamless integration and maximum impact.",
        },
        {
            title: "Full Lifecycle Support",
            desc: "From initial consultation and strategy development to deployment and ongoing optimization, we provide end-to-end support throughout the AI development process.",
        },
        {
            title: "Ethical and Responsible AI",
            desc: "We prioritize transparency, fairness, and compliance in all our AI initiatives, ensuring that your AI solutions are ethically sound and meet industry regulations.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Enhance fraud detection, streamline operations, and improve customer experience through AI-powered solutions.",
        },
        {
            title: "Retail",
            desc: "Boost customer engagement, optimize inventory management, and personalize offerings with AI-driven insights and automation.",
        },
        {
            title: "Healthcare",
            desc: "Improve patient care, assist in diagnostics, and streamline administrative tasks using AI Copilot systems designed for healthcare providers.",
        },
        {
            title: "Insurance",
            desc: "Automate claims processing, enhance risk analysis, and provide personalized customer experiences with AI solutions for the insurance industry.",
        },
        {
            title: "Manufacturing",
            desc: "Improve operational efficiency, reduce downtime, and optimize production lines using AI-driven solutions in manufacturing.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Utilize AI for smarter routing, predictive maintenance, and enhanced logistics performance.",
        },
        {
            title: "Automotive",
            desc: "Develop AI Copilots for autonomous driving, vehicle diagnostics, and smart manufacturing within the automotive sector.",
        },
        {
            title: "Hospitality",
            desc: "Improve guest experience and streamline operations through AI-powered solutions in the hospitality industry.",
        },
        
    ]

    const services = [
        {
            thumb: tailoredapproach,
            title: "Tailored Approach",
            desc: "We understand that every business is unique. Our AI Copilot developers build solutions specifically suited to your industry, goals, and challenges.",
        },
        {
            thumb: expertaiprofessionals,
            title: "Expert AI Professionals",
            desc: "Our team of seasoned AI experts brings deep knowledge and advanced technical skills, ensuring that your AI solutions are cutting-edge and effective.",
        },
        {
            thumb: extensiveexperience,
            title: "Extensive Experience",
            desc: "With a proven track record in AI development, we bring years of experience in building AI Copilots that empower teams and drive significant business outcomes.",
        },
        {
            thumb: securitycompliance,
            title: "Security and Compliance Assurance",
            desc: "Data security is at the core of our AI solutions. We ensure that all AI systems meet stringent security requirements, including data protection standards such as GDPR, HIPAA, and more.",
        },
    ];

    const accordions = [
        {
          title: "What is an AI Copilot, and how does it benefit my business?",
          content: "An AI Copilot is an intelligent, AI-powered assistant that works alongside human teams to improve productivity and decision-making. It can assist in tasks such as customer service, decision support, process automation, and more.",
        },
        {
          title: "How can AI Copilot development help in streamlining operations?",
          content: "AI Copilots automate routine tasks, provide real-time data insights, and assist decision-makers in navigating complex workflows, thereby improving efficiency and reducing operational costs.",
        },
        {
          title: "Which industries can benefit from AI Copilot development services?",
          content: "Our AI Copilot solutions cater to a wide range of industries, including banking, retail, healthcare, insurance, manufacturing, supply chain, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the security of AI Copilot solutions?",
          content: "Reddensoft ensures that all AI Copilot development services comply with the highest security standards, including end-to-end encryption, data protection protocols, and industry-specific regulations such as GDPR and HIPAA.",
        },
        {
          title: "What sets Reddensoft apart as an AI Copilot development company?",
          content: "Reddensoft stands out for its customized AI solutions, expert AI developers, full-lifecycle support, and commitment to ethical AI development, ensuring your AI systems are not only powerful but also secure and compliant.",
        }
    ];

    return(
        <>
            <title>AI Copilot Development Company | AI Copilot Development Services</title>
            <meta name="title" content="AI Copilot Development Company | AI Copilot Development Services" />
            <meta name="description" content="Hire the best AI Copilot Development Company for cutting-edge AI Copilot Development Services designed to streamline workflows and drive growth." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with AI Copilot Development Solutions</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Unlock the true potential of AI with our <span className="text-[#FFDD1A] font-bold">AI Copilot Development</span> services to get tailored <span className="text-secondary font-bold">AI-driven solutions</span> for enhancing business performance, and creating seamless user experiences.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Reddensoft's <span className="text-secondary">AI Copilot Development services</span> are designed to transform your business with next-gen AI-powered copilots that enhance productivity, streamline workflows, and offer real-time support. Here's a glimpse of the services we offer.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">AI Strategy Development and Consulting: </span>Craft a strategic roadmap for AI integration tailored to your specific business objectives, ensuring that AI solutions provide measurable value.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Data Analysis: </span>Leverage our data analytics expertise to derive actionable insights that feed into your AI systems, improving decision-making and efficiency across operations.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">MVP and PoC Development: </span>From proof of concept (PoC) to MVP development, we help you test the viability of AI Copilot solutions with real-world applications, reducing risk and accelerating innovation.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Custom AI Copilot Development: </span>We create bespoke AI Copilot developers that integrate seamlessly into your operations, whether for customer service, decision support, or automation of routine tasks.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={aicopilot} alt="AI copilot service icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">AI Copilot Development Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">AI Copilot Consulting Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">At Reddensoft, our AI Copilot development services are driven by innovation, security, and a deep commitment to client success. Here's what makes our AI solutions stand out</p>
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