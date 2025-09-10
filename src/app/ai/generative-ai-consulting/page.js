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
            title: "Expertise Across Domains",
            desc: "We provide deep insights into how generative AI can benefit various industries, leveraging our knowledge to offer cutting-edge, customized solutions.",
        },
        {
            title: "Autonomous and Scalable Solutions",
            desc: "Our AI models are capable of learning autonomously, adapting to evolving needs, and scaling as your business grows.",
        },
        {
            title: "Continuous Innovation",
            desc: "As a trusted generative AI consultant, we ensure your solutions stay at the forefront of innovation with ongoing improvements and updates to your systems.",
        },
        {
            title: "Seamless Integration",
            desc: "We integrate generative AI solutions seamlessly into your existing infrastructure, ensuring minimal disruption and maximum efficiency.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Transform your financial operations with generative AI, driving smarter decision-making and automation. Our solutions optimize risk management, compliance, and customer engagement.",
        },
        {
            title: "Retail",
            desc: "Elevate your retail business by leveraging AI to deliver personalized experiences and optimize inventory management. Generate insights from customer data to enhance sales strategies.",
        },
        {
            title: "Healthcare",
            desc: "Revolutionize healthcare by using AI to streamline diagnosis, treatment planning, and patient management. Our solutions ensure better outcomes and operational efficiency.",
        },
        {
            title: "Insurance",
            desc: "Transform your insurance operations by automating claim processes, risk assessment, and customer service. Generative AI improves underwriting efficiency and enhances customer retention.",
        },
        {
            title: "Manufacturing",
            desc: "Implement AI-powered systems for predictive maintenance, process optimization, and quality control. Drive operational excellence and boost productivity with our tailored solutions.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Optimize logistics with AI-powered route optimization, inventory management, and predictive analytics. Improve delivery times and reduce costs for a competitive edge.",
        },
        {
            title: "Automotive",
            desc: "Integrate AI into automotive systems for autonomous driving, predictive maintenance, and intelligent design. Accelerate innovation in this rapidly evolving industry with our generative AI solutions.",
        },
        {
            title: "Hospitality",
            desc: "Enhance guest experiences with AI-driven personalization in bookings, services, and customer support. Streamline operations and improve satisfaction with our tailored solutions.",
        },
        
    ]

    const services = [
        {
            thumb: deeplearningprocessing,
            title: "Deep Learning and Natural Language Processing",
            desc: "We specialize in developing advanced NLP solutions to process and generate human-like text, enabling personalized customer interactions, content generation, and much more.",
        },
        {
            thumb: computervisionsynthesis,
            title: "Computer Vision and Image Synthesis",
            desc: "Utilize AI to analyze visual data and generate images. Our computer vision and image synthesis solutions can transform industries such as retail, healthcare, and manufacturing by automating visual tasks and enhancing image-related workflows.",
        },
        {
            thumb: reinforcementlearning,
            title: "Reinforcement Learning and Simulation",
            desc: "Optimize decision-making and processes through reinforcement learning. Our solutions simulate complex environments to test and improve AI models, delivering scalable outcomes in real-time.",
        },
        {
            thumb: dataengineering,
            title: "Data Engineering",
            desc: "Enhance the quality and scalability of your data pipelines. Our data engineering team ensures your data is clean, well-organized, and prepared for sophisticated AI model training and deployment.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your generative AI consulting services?",
          content: "We serve industries such as banking, retail, healthcare, insurance, manufacturing, supply chain, logistics, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the AI solution aligns with our business goals?",
          content: "Our generative AI consultants work closely with your team to understand your objectives and tailor solutions that drive measurable business outcomes.",
        },
        {
          title: "What kinds of AI developments can you do?",
          content: "We specialize in deep learning, natural language processing, image synthesis, reinforcement learning, and data engineering, all customized for your business needs.",
        },
        {
          title: "Do you provide ongoing support after implementation?",
          content: "Yes, we offer continuous support and optimization to ensure your generative AI solutions evolve with your business and technology.",
        },
        {
          title: "How secure are your AI solutions?",
          content: "Security is paramount. We ensure compliance with data privacy regulations and implement robust security protocols to protect your data.",
        }
    ];

    return(
        <>
            <title>Generative AI Consultant | Generative AI Consulting Services</title>
            <meta name="title" content="Generative AI Consultant | Generative AI Consulting Services" />
            <meta name="description" content="Our generative AI consulting helps businesses unlock new possibilities. To drive your business growth, partner with our trusted generative AI consultant today." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Generative AI Consulting</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Being a leading <span className="text-[#FFDD1A] font-bold">generative AI consulting</span> company, we help the businesses achieve transformative results, from strategy formulation to seamless implementation.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our <span className="text-secondary">generative AI consulting</span> services help businesses integrate innovative AI models for creativity, automation, and enhanced decision-making. We guide you through the process from the initial assessment to full-scale deployment, ensuring your business is ready for the future.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Use Case Identification and Feasibility Evaluation: </span>Identify key opportunities where generative AI can add value. We assess the feasibility of these use cases within your business context, ensuring high-impact implementation.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Technology Assessment and Selection: </span>Leverage expert guidance in selecting the best AI technologies for your needs. We provide a comprehensive analysis of the tools, models, and frameworks that are best suited for your goals.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Compliance and Security Consultation: </span>Ensure compliance with industry regulations and safeguard your data. Our generative AI consultants help you navigate security protocols, providing robust AI solutions that meet legal and regulatory standards.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Data Engineering: </span>Build a solid data infrastructure for successful AI deployment. Our data engineers ensure that your data is clean, structured, and ready for the integration of generative AI systems.</li>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Being a top service provider of generative AI solutions, we are experts in revolutionizing sectors like manufacturing, supply chain and logistics, banking and finance, retail, healthcare, insurance, and automotive. Our proficiency in developing and integrating generative AI enables companies to take advantage of advanced algorithms' ability to produce insights, automate procedures, and improve decision-making. Our Gen-AI solutions are designed to satisfy your particular industry demands, whether you're trying to create individualized consumer experiences, streamline supply chains, or boost operational effectiveness. We guarantee the smooth integration of generative AI technologies to propel your company's innovation, scalability, and long-term growth.
                            </p>
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
                            <p className="lg:max-w-sm text-xl pt-4">Our generative AI consulting company is dedicated to delivering high-performance, tailored solutions that can handle diverse datasets, enhance user engagement, and offer strategic insights. Here's how we stand out.</p>
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