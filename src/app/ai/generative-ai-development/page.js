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
            title: "Industry-Specific Expertise",
            desc: "Our Generative AI Developers have deep expertise across a range of industries, ensuring that the AI solutions we develop are tailored to meet your unique challenges and objectives.",
        },
        {
            title: "Tailored and Scalable Solutions",
            desc: "We create solutions that can scale with your business as it grows, ensuring long-term viability and continual impact.",
        },
        {
            title: "Seamless Integration",
            desc: "We ensure that AI models and solutions integrate smoothly into your existing infrastructure, minimizing disruption while maximizing value.",
        },
        {
            title: "Continuous Improvement",
            desc: "As a trusted Generative AI Development Services provider, we ensure that your AI solutions evolve with the latest technological advancements, keeping you ahead of the competition.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Transform your financial operations with Generative AI Development Solutions. Automate risk management, compliance, and customer engagement while improving decision-making and operational efficiency.",
        },
        {
            title: "Retail",
            desc: "Leverage AI to enhance customer experiences and optimize inventory management. Our Generative AI Developers help retail businesses boost sales strategies, personalize offerings, and improve supply chain efficiency.",
        },
        {
            title: "Healthcare",
            desc: "Revolutionize healthcare delivery with AI-driven solutions that streamline diagnosis, enhance treatment planning, and improve patient management for better outcomes.",
        },
        {
            title: "Insurance",
            desc: "Automate insurance processes such as claims handling, risk assessment, and customer service. Our Generative AI Development Services help improve efficiency and customer satisfaction in the insurance industry.",
        },
        {
            title: "Manufacturing",
            desc: "Drive operational excellence with AI-powered solutions for predictive maintenance, process optimization, and quality control, boosting both productivity and product quality.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Optimize logistics and supply chain management with AI tools that provide insights for route optimization, inventory management, and demand forecasting. Stay ahead of the competition by reducing costs and improving service delivery.",
        },
        {
            title: "Automotive",
            desc: "Accelerate automotive innovation by integrating AI into design, manufacturing, and autonomous driving systems. Our Generative AI Development Solutions help automotive businesses stay at the forefront of technology.",
        },
        {
            title: "Hospitality",
            desc: "Enhance guest satisfaction and streamline operations in hospitality with AI-driven solutions that personalize services, automate bookings, and improve customer support.",
        },
        
    ]

    const services = [
        {
            thumb: increasedautomation,
            title: "Increased Automation",
            desc: "Drive operational efficiency with AI-powered automation. By automating routine tasks, you can reduce costs and free up valuable resources to focus on strategic goals.",
        },
        {
            thumb: increasedproductivity,
            title: "Increased Productivity",
            desc: "Enhance productivity across your organization with generative AI tools that improve decision-making, streamline workflows, and optimize resource management.",
        },
        {
            thumb: enhancedcreativity,
            title: "Enhanced Creativity",
            desc: "Unleash the full potential of your creative teams with AI-driven solutions that assist in content generation, design, and ideation, allowing for more innovative outputs.",
        },
        {
            thumb: costoptimization,
            title: "Cost Optimization",
            desc: "Reduce costs and improve profitability with AI-powered solutions that automate key processes, improve accuracy, and help you make smarter financial decisions.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your Generative AI Development Services?",
          content: "We offer Generative AI Development Solutions to industries including banking, retail, healthcare, insurance, manufacturing, supply chain, logistics, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "Our Generative AI Developers work closely with your team to understand your business needs, customizing solutions that directly support your strategic objectives and drive measurable results.",
        },
        {
          title: "What kinds of generative AI development can you provide?",
          content: "We specialize in deep learning, natural language processing, image synthesis, reinforcement learning, and custom AI solutions, all tailored to your specific business challenges.",
        },
        {
          title: "Do you offer ongoing support after AI solutions are deployed?",
          content: "Yes, we provide continuous maintenance and optimization services to ensure that your generative AI solutions evolve with your business and stay at the cutting edge of technology.",
        },
        {
          title: "How secure are your generative AI solutions?",
          content: "Security is a top priority. We implement best-in-class security protocols, ensuring that your AI systems comply with data privacy regulations and safeguard your sensitive information.",
        }
    ];

    return(
        <>
            <title>Generative AI Development Company | Generative AI Development Services</title>
            <meta name="title" content="Generative AI Development Company | Generative AI Development Services" />
            <meta name="description" content="Explore advanced generative AI development services that drive innovation and efficiency in your business. Get specialized AI services from our professionals." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Generative AI Development</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">As a leading <span className="text-[#FFDD1A] font-bold">Generative AI Development</span> Company, we create <span className="text-secondary font-bold">AI solutions</span> that drive innovation, improve productivity and creativity.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">Generative AI Development Solutions</span> provide businesses with the tools to integrate advanced AI technologies across various domains. We guide you from use case identification to deployment, ensuring your company is well-positioned for the future.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Generative AI Consulting: </span>Harness the power of AI with our expert consulting services. We help identify key use cases, evaluate AI technologies, and align generative AI solutions with your business goals for maximum impact.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Data Analysis: </span>Use AI to derive valuable insights from large datasets. Our Generative AI Development Services streamline the data analysis process, enabling smarter decision-making and deeper understanding of market trends.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Domain-specific Generative AI Model Development: </span>We develop custom AI models tailored to your industry’s needs. Whether it's natural language processing, image synthesis, or other advanced applications, our Generative AI Developers deliver specialized solutions that enhance your operations.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Generative AI Solutions Development: </span>From conceptualization to deployment, we provide end-to-end development of generative AI solutions. Our solutions are designed to scale with your business, improving efficiency, creativity, and innovation across your workflows.</li>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Being a top service provider of generative AI solutions, we are experts in revolutionizing sectors like manufacturing, supply chain and logistics, banking and finance, retail, healthcare, insurance, and automotive. Our proficiency in developing and integrating generative AI enables companies to take advantage of advanced algorithms' ability to produce insights, automate procedures, and improve decision-making. Our Gen-AI solutions are designed to satisfy your particular industry demands, whether you're trying to create individualized consumer experiences, streamline supply chains, or boost operational effectiveness. We guarantee the smooth integration of generative AI technologies to propel your company's innovation, scalability, and long-term growth.</p>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">Generative AI Development Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">Our Generative AI Development Company stands out in the market due to our ability to create highly customized, scalable AI solutions that integrate seamlessly into your existing workflows. Here's how we distinguish ourselves</p>
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