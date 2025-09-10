"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import mldevelopment from "@/assets/images/ml-development.webp"
import bigdatatechnologies from "@/assets/images/big-data-technologies.webp"
import machinelearning from "@/assets/images/machine-learning.webp"
import datapreprocessing from "@/assets/images/data-preprocessing.webp"
import machinelearningalgorithms from "@/assets/images/machine-learning-algorithms.webp"
import machinelearningframeworks from "@/assets/images/machine-learning-frameworks.webp"
import automl from "@/assets/images/auto-ml.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import BrandsSlider from "@/components/BrandsSlider";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function MlDevelopment() {
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
            title: "End-to-End ML Solutions",
            desc: "From ML model development to deployment, we provide a complete solution, ensuring that your machine learning models deliver results from day one.",
        },
        {
            title: "Full Stack ML Developer Expertise",
            desc: "Our team of full-stack ML developers brings expertise across all stages of the ML pipeline, ensuring seamless development and deployment.",
        },
        {
            title: "Scalable and Robust Solutions",
            desc: "We design ML models that are not only accurate but also scalable and efficient, ensuring long-term value for your business.",
        },
        {
            title: "Industry-Leading Tools and Frameworks",
            desc: "We utilize the latest tools and frameworks in machine learning to build models that are precise, reliable, and easy to integrate with existing systems.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Revolutionize financial services with ML development services that drive predictive analytics, risk management, and customer insights.",
        },
        {
            title: "Retail",
            desc: "Personalize customer experiences, optimize inventory, and enhance sales strategies with cutting-edge machine learning solutions for the retail sector.",
        },
        {
            title: "Healthcare",
            desc: "Improve patient care, streamline processes, and predict health outcomes using AI and ML tools tailored to the healthcare industry.",
        },
        {
            title: "Insurance",
            desc: "Automate claims processing, optimize risk models, and enhance customer service with ML model development in insurance.",
        },
        {
            title: "Manufacturing",
            desc: "Use machine learning to predict equipment failures, optimize supply chains, and boost operational efficiency in manufacturing.",
        },
        {
            title: "Supply Chain and Logistics",
            desc: "Enhance route optimization, fleet management, and inventory control with ML solutions designed for logistics and supply chain management.",
        },
        {
            title: "Automotive",
            desc: "Innovate the automotive industry with deep learning for autonomous driving, predictive maintenance, and smart manufacturing.",
        },
        {
            title: "Hospitality",
            desc: "Improve guest experiences and optimize operational workflows through personalized, ML-driven solutions in the hospitality sector.",
        },
        
    ]

    const services = [
        {
            thumb: bigdatatechnologies,
            title: "Big Data Technologies",
            desc: "Utilize big data tools and techniques to analyze massive datasets, enabling actionable insights and smarter decision-making.",
        },
        {
            thumb: machinelearning,
            title: "Deep Learning",
            desc: "Implement advanced deep learning models for tasks such as image recognition, natural language processing, and autonomous systems.",
        },
        {
            thumb: datapreprocessing,
            title: "Data Preprocessing",
            desc: "Improve the accuracy of your ML models through thorough data preprocessing, including data cleaning, transformation, and feature engineering.",
        },
        {
            thumb: machinelearningalgorithms,
            title: "Machine Learning Algorithms",
            desc: "Choose from a wide range of machine learning algorithms to build models that best suit your data and business requirements.",
        },
        {
            thumb: machinelearningframeworks,
            title: "Machine Learning Frameworks",
            desc: "Utilize industry-leading machine learning frameworks like TensorFlow, PyTorch, and Scikit-Learn for building and deploying efficient models.",
        },
        {
            thumb: automl,
            title: "AutoML",
            desc: "Speed up your model development process with AutoML, allowing you to automate the design and tuning of machine learning models.",
        }
    ];

    const accordions = [
        {
          title: "What industries can benefit from your ML development services?",
          content: "Our ML development services cater to industries such as banking, retail, healthcare, insurance, manufacturing, supply chain and logistics, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the ML solution aligns with our business goals?",
          content: "We closely collaborate with your team to understand your objectives, then design and implement ML models that specifically address your challenges and goals.",
        },
        {
          title: "What kind of machine learning services can you provide?",
          content: "We specialize in ML model development, custom solutions, data engineering, MLOps consulting, and more, helping businesses leverage the full potential of machine learning.",
        },
        {
          title: "Do you offer support after deploying the ML solution?",
          content: "Yes, we provide ongoing maintenance and updates, ensuring that your ML models continue to perform optimally as your business evolves.",
        },
        {
          title: "How secure are your ML solutions?",
          content: "We prioritize security and compliance, integrating advanced encryption, secure APIs, and privacy-first practices into all our ML development services to protect your data.",
        }
    ];

    return(
        <>
            <title>ML Development Company | Hire ML Development Services</title>
            <meta name="title" content="ML Development Company | Hire ML Development Services" />
            <meta name="description" content="Looking for a reliable ML development company for expert ML development services. Transform your business with smart, scalable machine learning solutions." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Empower Your Business with Smarter ML Solutions</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Our tailored <span className="text-[#FFDD1A] font-bold">ML development</span> services create intelligent solutions for strategy and model development to seamless implementation that drive efficiency, innovation, and growth.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Unlock the power of <span className="text-secondary">machine learning (ML)</span> for your business with our tailored <span className="text-secondary">ML development services</span>. From strategy and model development to seamless implementation, our ML development company delivers intelligent solutions that drive efficiency, innovation, and growth.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">ML Consulting and Strategy Building: </span>Develop a comprehensive roadmap for adopting machine learning technologies, aligning them with your business objectives for maximum impact.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">MLOps Consulting: </span>Optimize the deployment and operations of ML models with our MLOps consulting services, ensuring smooth and scalable production workflows.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Data Engineering: </span>Leverage advanced data engineering services to clean, process, and transform data for more effective and efficient machine learning applications.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Custom ML Model Development: </span>Our ML model development services are tailored to your specific needs, creating bespoke solutions that solve complex business challenges.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={mldevelopment} alt="ML development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">ML Development Services</h2>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">What Sets Our <span className="text-black">ML Development Apart?</span></h2>
                            <p className="lg:max-w-sm text-xl pt-4">As a leading ML development company, we deliver custom machine learning solutions designed to fit your unique business needs. Here's how we stand out.</p>
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