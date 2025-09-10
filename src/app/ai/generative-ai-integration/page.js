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
            title: "Expertise Across Industries",
            desc: "We bring deep industry knowledge to every project, ensuring your AI solutions are tailored to your specific business challenges and opportunities.",
        },
        {
            title: "Seamless AI Integration",
            desc: "Our Generative AI Integration services ensure that AI tools are incorporated seamlessly into your workflows, enhancing operational efficiency without disruption.",
        },
        {
            title: "Scalable Solutions",
            desc: "Our generative AI systems are built for scalability. As your business grows, your AI solutions will adapt to new requirements and continue to deliver value.",
        },
        {
            title: "Continuous Innovation",
            desc: "We keep you ahead of the curve by ensuring your AI systems remain cutting-edge, with regular updates, enhancements, and support.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Transform banking processes with AI that enhances decision-making, automates financial analysis, and streamlines risk management. Our solutions drive smarter, more efficient operations in the financial sector.",
        },
        {
            title: "Retail",
            desc: "Boost retail performance by implementing AI for personalized customer experiences, optimized inventory management, and intelligent sales forecasting. Increase customer engagement and sales with tailored AI solutions.",
        },
        {
            title: "Healthcare",
            desc: "Revolutionize healthcare with AI that streamlines diagnosis, improves treatment planning, and automates patient management. Our solutions contribute to better patient outcomes and operational efficiency.",
        },
        {
            title: "Insurance",
            desc: "Leverage AI to enhance underwriting, streamline claims processing, and automate customer service. Improve operational efficiency and customer retention with generative AI solutions tailored to the insurance industry.",
        },
        {
            title: "Manufacturing",
            desc: "Increase productivity with AI-powered solutions for predictive maintenance, process optimization, and quality control. Implement AI technologies that enhance manufacturing efficiency and reduce downtime.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Optimize logistics operations with AI-driven tools for route optimization, inventory management, and demand forecasting. Improve efficiency, reduce costs, and enhance customer satisfaction through smarter logistics.",
        },
        {
            title: "Automotive",
            desc: "Integrate AI into automotive design and operations. From autonomous driving systems to predictive maintenance and intelligent manufacturing, our generative AI solutions drive innovation in the automotive industry.",
        },
        {
            title: "Hospitality",
            desc: "Enhance guest experiences in hospitality with AI-driven personalization. Automate services, optimize bookings, and improve customer interactions to drive satisfaction and loyalty.",
        },
        
    ]

    const services = [
        {
            thumb: customersupport,
            title: "Customer Support Automation",
            desc: "Enhance your customer service with AI-powered solutions that automate routine inquiries and tasks, providing personalized and efficient support around the clock.",
        },
        {
            thumb: contentgeneration,
            title: "Content Generation",
            desc: "Leverage AI to create high-quality, personalized content at scale. From blog posts to social media copy, our AI-driven tools ensure consistency and relevance, saving time and effort.",
        },
        {
            thumb: dataanalysis,
            title: "Data Analysis and Insights",
            desc: "Use AI to analyze large datasets and extract valuable insights. Our solutions enable data-driven decision-making, improving your strategies and operational efficiency.",
        },
        {
            thumb: virtualtraining,
            title: "Virtual Training and Simulations",
            desc: "Implement AI-driven training solutions to simulate real-world scenarios. Provide interactive, engaging learning experiences that can be customized to your organization's needs.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your Generative AI Integration services?",
          content: "We provide Generative AI Integration services across a wide range of industries, including banking, retail, healthcare, insurance, manufacturing, supply chain, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "Our team works closely with you to understand your business needs and goals, ensuring that the AI solutions we develop are perfectly aligned with your objectives and deliver measurable results.",
        },
        {
          title: "What kinds of AI solutions can you integrate into our systems?",
          content: "We specialize in AI solutions for customer support automation, content generation, data analysis, reinforcement learning, and more. Our team tailors solutions to your specific business requirements.",
        },
        {
          title: "Do you offer support after the AI solution is implemented?",
          content: "Yes, we provide ongoing support and maintenance services to ensure your AI solutions are continuously optimized and evolve alongside your business needs.",
        },
        {
          title: "How secure are your AI solutions?",
          content: "Security is a top priority. We implement robust security measures, ensuring compliance with industry standards and safeguarding your data throughout the AI deployment process.",
        }
    ];

    return(
        <>
            <title>Transform Business with Generative AI Integration Services</title>
            <meta name="title" content="Transform Business with Generative AI Integration Services" />
            <meta name="description" content="Enhance creativity and efficiency with Generative AI Integration. Partner with us to bring AI-powered solutions to your business. Contact us today." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Generative AI Integration</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">As a leading <span className="text-[#FFDD1A] font-bold">Generative AI Integration Services</span> provider, we help businesses get the transformative power of <span className="text-secondary font-bold">AI-driven</span> technologies.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">Generative AI Integration</span> services enable businesses to incorporate advanced AI technologies into their operations, creating tailored solutions for automation, creativity, and smarter decision-making. From initial consultation to full-scale implementation, we guide you every step of the way.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Custom Generative AI Application Development: </span>Build bespoke AI applications designed to meet your unique business needs. Our team develops AI models and systems that seamlessly integrate with your existing infrastructure to deliver powerful, customized solutions.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Generative AI Consulting: </span>Unlock the potential of AI with expert consulting. We assess your business needs and design strategies to implement generative AI solutions that foster innovation and efficiency across your organization.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Generative AI Integration Into Workflows: </span>Smoothly incorporate generative AI into your day-to-day operations. We ensure that AI tools function seamlessly within your workflows, optimizing processes and enhancing productivity.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Ongoing Maintenance and Support: </span>Stay ahead of technological advancements with continuous support. Our team ensures your generative AI solutions are regularly updated, optimized, and fine-tuned to keep pace with evolving business needs.</li>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Being a top service provider of generative AI solutions, we are experts in revolutionizing sectors like manufacturing, supply chain and logistics, banking and finance, retail, healthcare, insurance, and automotive. Our proficiency in developing and integrating generative AI enables companies to take advantage of advanced algorithms' ability to produce insights, automate procedures, and improve decision-making. Our Gen-AI solutions are designed to satisfy your particular industry demands, whether you're trying to create individualized consumer experiences, streamline supply chains, or boost operational effectiveness. We guarantee the smooth integration of generative AI technologies to propel your company's innovation, scalability, and long-term growth.</p>
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
                            <p className="lg:max-w-sm text-xl pt-4">Our Generative AI Integration Services are designed to deliver high-impact, customized solutions that evolve with your business. Here's how we stand apart from the competition.</p>
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