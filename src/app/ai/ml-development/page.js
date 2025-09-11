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
            title: "Comprehensive ML Capabilities",
            desc: "From ml model development to deployment, we offer full-cycle solutions to ensure successful adoption and ROI.",
        },
        {
            title: "Expertise of a Full Stack ML Developer",
            desc: "Our team includes skilled full stack ml developer professionals who manage everything from data engineering to model optimization.",
        },
        {
            title: "High-Performance, Scalable Models",
            desc: "We design machine learning systems that scale with your operations while maintaining precision and reliability.",
        },
        {
            title: "Modern Tools & Techniques",
            desc: "Our development stack includes the latest frameworks and libraries, ensuring agile, efficient, and future-ready ML delivery.",
        }
    ];

    const solutions = [
        {
            title: "Banking and Finance",
            desc: "Implement ML for fraud prevention, credit scoring, and forecasting, driving smarter financial decisions and customer engagement.",
        },
        {
            title: "Retail",
            desc: "Use ML to personalize recommendations, automate restocking, and optimize pricing strategies to improve profitability.",
        },
        {
            title: "Healthcare",
            desc: "Predict patient outcomes, streamline diagnostics, and manage healthcare workflows with secure and compliant ML systems.",
        },
        {
            title: "Insurance",
            desc: "Leverage predictive models for claims automation, customer segmentation, and real-time risk analysis.",
        },
        {
            title: "Manufacturing",
            desc: "Boost operational efficiency through predictive maintenance, defect detection, and process automation.",
        },
        {
            title: "Logistics & Supply Chain",
            desc: "Enhance inventory tracking, demand forecasting, and route optimization through intelligent machine learning algorithms.",
        },
        {
            title: "Automotive",
            desc: "From autonomous navigation to smart manufacturing, our ML systems help accelerate innovation in the auto sector.",
        },
        {
            title: "Hospitality",
            desc: "Deliver exceptional guest experiences with personalized services and smart automation powered by machine learning.",
        },
        
    ]

    const services = [
        {
            thumb: bigdatatechnologies,
            title: "Big Data Technologies",
            desc: "Harness distributed computing and big data platforms to extract deep insights from high-volume datasets.",
        },
        {
            thumb: machinelearning,
            title: "Deep Neural Networks",
            desc: "Implement advanced deep learning for applications such as speech recognition, image classification, and autonomous decision systems.",
        },
        {
            thumb: datapreprocessing,
            title: "Data Preprocessing & Feature Engineering",
            desc: "Elevate model performance by refining your data with normalization, encoding, and advanced preprocessing techniques.",
        },
        {
            thumb: machinelearningalgorithms,
            title: "Algorithm Selection & Optimization",
            desc: "Leverage a range of machine learning algorithms, choosing the best approach for your business needs and datasets.",
        },
        {
            thumb: machinelearningframeworks,
            title: "Top ML Frameworks",
            desc: "Utilize tools like TensorFlow, PyTorch, and Scikit-Learn to create models that are accurate, flexible, and production-ready.",
        },
        {
            thumb: automl,
            title: "AutoML Integration",
            desc: "Fast-track development with AutoML tools that automate model training, tuning, and evaluation—speeding up time to market.",
        }
    ];

    const accordions = [
        {
          title: "Which industries benefit most from your ML services?",
          content: "Our ml development services in USA span multiple industries, including finance, retail, healthcare, insurance, automotive, and hospitality.",
        },
        {
          title: "How do you ensure the solution meets our goals?",
          content: "We align with your business strategy from day one, delivering models that are tailored to your KPIs and unique challenges.",
        },
        {
          title: "What machine learning services do you offer?",
          content: "We offer everything from ml model development and AutoML integration to data engineering and model deployment.",
        },
        {
          title: "Will you support us post-deployment?",
          content: "Yes, we provide continuous monitoring, updates, and performance tuning to keep your models effective and aligned with business evolution.",
        },
        {
          title: "How do you handle data security?",
          content: "Security is built into every solution. We use encrypted protocols, secure APIs, and comply with all major data privacy regulations.",
        }
    ];

    return(
        <>
            <title>ML development company USA I ML developers </title>
            <meta name="title" content="ML Development Company | Hire ML Development Services" />
            <meta name="description" content="Looking for a reliable ML development company for expert ML development services. Transform your business with smart, scalable machine learning solutions." />
            
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Power Your Business with Intelligent ML Development</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">As a premier <span className="text-[#FFDD1A] font-bold">ML development company in USA</span> we provide end-to-end <span className="text-secondary font-bold">ML development services in USA</span>, delivering data-driven, scalable solutions that optimize performance, automate workflows, and foster smarter innovation.</div>
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
                        <h2 className="lg:max-w-[650px] text-3xl 2xl:text-[50px] 2xl:leading-tight font-black" data-aos="fade-right" data-aos-delay="100">Services <span className="text-secondary">We Offer</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Unlock the power of <span className="text-secondary">machine learning (ML)</span> for your business with our tailored <span className="text-secondary">ML development services</span>. From strategy and model development to seamless implementation, our ML development company delivers intelligent solutions that drive efficiency, innovation, and growth.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">ML Strategy & Planning </span>Design a clear, result-oriented ML roadmap tailored to your organization’s vision, backed by expert guidance to maximize ROI.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">MLOps Framework Design </span>Streamline the lifecycle of your machine learning models with our MLOps strategies—ensuring reliable, repeatable, and automated deployments.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Advanced Data Architecture </span>Transform raw data into model-ready formats. Our data engineering processes enable clean, organized, and scalable data pipelines.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Custom ML Model Development </span>We offer specialized ml model development services built to your unique use case—solving complex challenges with tailored solutions.</li>
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
                            <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">As a seasoned ml development company in USA, we serve a broad spectrum of industries, delivering domain-specific ML solutions for measurable results.</p>
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
                            <p className="lg:max-w-sm text-xl pt-4">As a forward-thinking ml development company in USA, Reddensoft USA is committed to building robust, intelligent systems that solve real-world problems.</p>
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