"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import aidesignresearch from "@/assets/images/ai-design-research.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import aiintegration from "@/assets/images/ai-integration.webp"
import virtualassistants from "@/assets/images/virtual-assistants.webp"
import computervision from "@/assets/images/computer-vision.webp"
import machinelearning from "@/assets/images/machine-learning.webp"
import predictiveanalytics from "@/assets/images/predictive-analytics.webp"
import naturallanguageprocessing from "@/assets/images/natural-language-processing.webp"
import aiexpertise2 from "@/assets/images/ai-expertise-2.svg"
import aidatasecurity from "@/assets/images/ai-data-security.svg"
import wayservice from "@/assets/images/way-service.svg"
import usercenterdesign from "@/assets/images/user-center-design.svg"
import scalabilityflexibility from "@/assets/images/scalability-flexibility.svg"
import innovativeresearch from "@/assets/images/innovative-research.svg"
import aitailordsolution from "@/assets/images/ai-tailord-solution.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function ServiceDesign() {
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

    const works = [
        {
            id: 1,
            title: "Trispire",
            desc: "Trispire Solutions, one of our latest projects, is about transforming healthcare delivery through innovative technologies. The mission of this website is to empower healthcare providers by offering them a comprehensive platform designed to streaml...",
            thumb: trispirescreen,
            link: "trispire"
        },
        {
            id: 2,
            title: "RoboCent",
            desc: "RoboCent is dedicated to empowering political campaigns with cutting-edge communication tools that enhance voter engagement and drive impactful outreach. This platform provides a comprehensive suite of features designed to streamline the process of c...",
            thumb: robocentscreen,
            link: "robocent"
        }
    ];

    const designs = [
        {
            title: "Expertise in AI",
            desc: "Our team of AI design services in USA, researchers, engineers, and designers is experienced in building custom AI solutions. We specialize in machine learning, natural language processing, computer vision, and data analytics to address your unique business challenges.",
            icon: aiexpertise2,
        },
        {
            title: "Tailored Solutions",
            desc: "We understand that every business has its own needs and objectives. By working closely with you, we craft AI solutions that align with your goals, industry requirements, and challenges.",
            icon: aitailordsolution,
        },
        {
            title: "Innovative Research",
            desc: "We prioritize research and development to build your AI solutions using the latest technologies and best practices. Our cutting-edge innovations ensure that your business stays competitive.",
            icon: innovativeresearch,
        },
        {
            title: "Scalability & Flexibility",
            desc: "Our AI solutions are scalable, allowing your business to grow seamlessly. Whether you need a small-scale solution or an enterprise-level system, we provide flexible and adaptable solutions that evolve with your needs.",
            icon: scalabilityflexibility,
        },
        {
            title: "User-centered design",
            desc: "Our design philosophy centers around creating AI systems that are intuitive, easy to use, and enhance the overall user experience, whether for customers or internal teams.",
            icon: usercenterdesign,
        },
        {
            title: "All-the-way Services",
            desc: "From initial consultation through full implementation and ongoing support, we provide end-to-end AI design services. Our solutions deliver continuous value, ensuring your AI systems work as intended at all times.",
            icon: wayservice,
        },
        {
            title: "Data Privacy & Security",
            desc: "Our AI research development services in USAprioritize the security of your data by adhering to the highest standards of data privacy, compliance regulations, and robust security protocols. Your AI applications will be secure and fully compliant with all relevant privacy laws.",
            icon: aidatasecurity,
        },
    ];

    const workflows = [
        {
            title: "Discovery and Analysis",
            desc: "We begin by understanding your business needs, objectives, and data requirements. Through detailed analysis of your existing systems and workflows, we identify the optimal opportunities for AI implementation.",
        },
        {
            title: "AI Strategy Development",
            desc: "After the analysis, we create an AI strategy tailored to your goals. This includes selecting the right technologies, defining KPIs, and setting realistic timelines for the project.",
        },
        {
            title: "Design and Prototyping",
            desc: "We design user-friendly interfaces for your AI systems, ensuring that both functionality and usability are in line with your business goals. Prototypes are created to ensure alignment with your needs.",
        },
        {
            title: "Development and Testing",
            desc: "The development phase follows, where we build robust AI systems, followed by extensive testing to ensure everything is operational, secure, and scalable.",
        },
        {
            title: "Deployment and Optimization",
            desc: "Once the system is deployed, we continually monitor and optimize it to ensure the best performance. Ongoing support and improvements are part of the service to ensure optimal results.",
        },
    ]

    const services = [
        {
            thumb: machinelearning,
            title: "Machine Learning & Deep Learning Development",
            desc: "At Reddensoft USA, we create intelligent systems that improve over time using machine learning and deep learning. By harnessing the power of structured and unstructured data, we help you build predictive models, generate recommendations, and develop advanced data analysis tools that drive productivity",
        },
        {
            thumb: naturallanguageprocessing,
            title: "Natural Language Processing (NLP)",
            desc: "Our NLP solutions convert written human language into machine-readable data, enabling innovative applications such as chatbots, emotion analysis, document summarization, and intelligent search engines—enhancing user interaction and providing valuable insights",
        },
        {
            thumb: computervision,
            title: "Computer Vision",
            desc: "Leverage computer vision technology to analyze and interpret visual data. Our solutions offer real-time insights for tasks such as facial recognition, object detection, augmented reality (AR), and more, improving user engagement and overall system performance",
        },
        {
            thumb: virtualassistants,
            title: "AI-Powered Chatbots & Virtual Assistants",
            desc: "Enhance customer service with AI-powered chatbots and virtual assistants. These intelligent bots learn from interactions, improve over time, and provide accurate responses, streamlining support and reducing response time",
        },
        {
            thumb: predictiveanalytics,
            title: "Predictive Analytics",
            desc: "Our predictive analytics services empower businesses to forecast trends, predict customer behavior, and make proactive decisions. Through machine learning models, we help organizations anticipate market demands and identify new opportunities for growth.",
        },
        {
            thumb: aiintegration,
            title: "AI Integration",
            desc: "We seamlessly integrate AI into your existing systems, whether it's embedding predictive analytics into your CRM or implementing a recommendation engine for your e-commerce platform. We ensure that AI enhances your business's performance, efficiency, and scalability.",
        },
    ];

    const accordions = [
        {
          title: "How long does it generally take to build an AI solution?",
          content: "The development timeline varies based on the complexity of the project, with smaller applications taking weeks and larger, more complex solutions taking several months.",
        },
        {
          title: "Do you provide continued support for AI applications?",
          content: "Yes, we provide ongoing support, ensuring your AI systems remain updated, functional, and relevant to your evolving needs",
        },
        {
          title: "What industries can benefit from AI solutions?",
          content: "AI solutions are versatile and can be applied across various industries, including healthcare, finance, retail, logistics, and more. We tailor each solution to meet the unique challenges of each sector.",
        },
        {
          title: "How do you ensure the applications stay secure?",
          content: "We implement robust security measures, including encryption, secure authentication, and privacy regulation compliance to ensure your AI systems are safe.",
        },
        {
          title: "Can you help with the integration of AI into existing systems?",
          content: "Yes, our AI research development services in USA offer comprehensive AI integration services that seamlessly embed AI capabilities into your existing systems, such as CRM, ERP, and e-commerce platforms.",
        }
    ];

    return(
        <>
            <title>AI development services in USA I AI design services</title>
            <meta name="title" content="AI Design Services USA | AI Tool Research Services" />
            <meta name="description" content="Discover top AI Design Services in USA. We offer cutting-edge AI tool research services to create innovative, efficient, and scalable AI-driven solutions." />

            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">AI Research and Development Services in</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">
                        Expand and Grow Your <span className="text-[#FFDD1A] font-bold">Business</span> with Latest <span className="text-secondary font-bold">AI Solutions</span>
                    </div>
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

            <div className="py-20 lg:py-28 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                            <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Service <span className="text-secondary">Overview</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">
                                At Reddensoft USA, we specialize in transforming businesses through state-of-the-art AI solutions. Our AI design services in USA combine the latest advancements in machine learning, natural language processing, computer vision, and data analytics to craft custom, adaptive, and user-centric solutions that address your unique business challenges. From improving workflow efficiency to driving increased profitability, our AI solutions provide the necessary tools to optimize processes, make smarter decisions, and fuel innovation.
                                <br/><br/>
                                Our team ensures that businesses benefit from intelligent systems that not only solve complex problems but also create new opportunities for growth and success.
                            </h3>
                            
                            <ul className="lg:max-w-[650px] pb-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Customized AI Solutions: </span>Our AI design services in USAare tailored to meet your company’s specific objectives, enabling optimized efficiency and enhanced customer experiences. Whether you need a small application or an enterprise system, we ensure that AI perfectly integrates into your business operations.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Insights Driven by Data: </span>By analyzing large sets of data, our AI research development services in USAcan generate actionable insights that enable smarter business decisions, improve productivity, and reveal opportunities for strategic growth.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Optimization and Efficiency: </span>Implementing AI technology into your systems can automate time-consuming tasks, minimize human error, and increase operational efficiency, freeing up valuable resources and saving costs</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Cutting-edge Research: </span>Our team in the USA is continuously advancing AI through dedicated research and development. With new algorithms and next-gen AI technologies, we ensure you always stay ahead of the competition</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">User-centric AI Designs: </span>We integrate human-centered design principles into our AI solutions, ensuring that technology is intuitive and delivers measurable benefits for end-users and other stakeholders</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Technology Needs Scaled: </span>Whether you're looking for a small, niche AI application or an enterprise-wide system, we provide scalable solutions to meet your growing needs and evolving market demands.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Continuous Improvement: </span>AI is a living technology that improves over time. Our solutions are built to continuously adapt to new data, ensuring that your business always operates at peak performance.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={aidesignresearch} alt="AI design research icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                            </div>
                            <div className="absolute -bottom-8 lg:bottom-1/2 lg:transform lg:translate-y-1/2 -right-20 xl:-right-24 bg-secondary h-[280px] w-[140px] lg:h-[400px] lg:w-[200px] xl:h-[550px] xl:w-[275px] rounded-r-full z-0" data-aos="zoom-in" data-aos-delay="400"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">Our Services</h2>
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

            <div className="bg_element flip py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative px-5 2xl:px-0">
                    <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">US</span></h2>
                    <ul className="flex flex-wrap justify-center -mx-4">
                        { designs.map((design, d) => (
                            <li className="w-full sm:w-1/2 lg:w-1/4 p-4" key={d} data-aos="fade-up" data-aos-delay={200 + (d * 100)}>
                                <div className="relative bg-white rounded-xl px-6 py-8 h-full text-center flex flex-col items-center shadow-med">
                                    <Image className="mb-6 h-12 w-auto xl:h-16" src={design.icon} alt={design.title} width="auto" height="auto"/>
                                    <h3 className="text-secondary text-base xl:text-lg font-semibold pb-3">{design.title}</h3>
                                    <p className="text-sm xl:text-base font-normal">{design.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="banner_bg py-16 lg:py-24">
                <PortfolioArea />
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="8"
                />
            </div>

            <div className="bg_element py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap justify-between z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center order-1 lg:order-none">
                        <ul className="max-w-4xl flex flex-wrap justify-center -mx-2">
                            { workflows.map((workflow, w) => (
                                <li className="w-full sm:w-1/2 p-2" key={w} data-aos="fade-up" data-aos-delay={200 + (w * 100)}>
                                    <div className="relative bg-white rounded-xl px-6 py-8 h-full shadow-med">
                                        <h3 className="text-secondary text-base xl:text-lg 2xl:text-xl font-semibold pb-3">{workflow.title}</h3>
                                        <p className="text-sm xl:text-base font-normal">{workflow.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:sticky lg:top-32 w-full lg:w-1/3 h-full">
                        <div className="mb-4 lg:mb-0 flex flex-col items-start lg:pl-10">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our</span> Workflow</h2>
                            <p className="text-sm xl:text-base font-normal py-7" data-aos="fade-right" data-aos-delay="200">Our process at Reddensoft is set up to guarantee smooth operation at every level of development. We start by comprehending your objectives followed by investigation and analysis. On the next steps, we brainstorm and build wireframes and prototypes, and communicate with you throughout the design process. Following approval of the concept, our focus shifts to development, integrating AI technologies, digital marketing tactics, and UI/UX design. Our thorough testing and feedback loop guarantee that we consistently provide scalable, superior products.</p>
                        </div>
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