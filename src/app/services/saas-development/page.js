"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import saasdevelopment from "@/assets/images/saas-development.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import customsaasapplication from "@/assets/images/custom-saas-application.webp"
import cloudinfrastructuresetup from "@/assets/images/cloud-infrastructure-setup.webp"
import saasintegration from "@/assets/images/saas-integration.webp"
import saasproducts from "@/assets/images/saas-products.webp"
import saasplatform from "@/assets/images/saas-platform.webp"
import rootcompetencies from "@/assets/images/root-competencies.svg"
import continualsupport from "@/assets/images/continual-support.svg"
import securitycompliances from "@/assets/images/security-compliances.svg"
import topnotchtechnologies from "@/assets/images/top-notch-technologies.svg"
import scalability from "@/assets/images/scalability.svg"
import personalizedsolutions from "@/assets/images/personalized-solutions.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function SaasDevelopment() {
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
            title: "Deep-rooted Competencies",
            desc: "comprehensive solutions for businesses across various sectors. From startups to large enterprises, our SaaS development company in USA provides a range of services to meet diverse business needs.",
            icon: rootcompetencies,
        },
        {
            title: "Personalized Solutions",
            desc: "At Reddensoft USA, we understand that every business is unique. Our team works closely with you to design a SaaS platform that meets the specific needs of your business model and growth strategy. We make sure your solution is personalized for optimal results.",
            icon: personalizedsolutions,
        },
        {
            title: "Scalability",
            desc: "Our SaaS development services in USA are built with scalability in mind. We ensure that your SaaS solutions grow seamlessly with your business, maintaining high performance and reliability as user demands and data volumes increase",
            icon: scalability,
        },
        {
            title: "Top Notch Technologies",
            desc: "We stay up to date with the latest cloud technologies, development frameworks, and security practices. Our team uses cutting-edge tools to deliver state-of-the-art SaaS app development services that meet the highest industry standards.",
            icon: topnotchtechnologies,
        },
        {
            title: "Security and Compliance",
            desc: "We take security seriously. Our SaaS app development company in USA ensures your platform is built using the latest security protocols and meets all relevant compliance standards, such as GDPR and HIPAA, to protect your data and ensure regulatory compliance.",
            icon: securitycompliances,
        },
        {
            title: "Continual Support",
            desc: "We offer comprehensive post-launch support and maintenance services to keep your SaaS platform secure, updated, and performing at its best. Our ongoing support ensures your product remains robust and effective for the long term.",
            icon: continualsupport,
        },
    ];

    const workflows = [
        {
            title: "Discovery and Planning",
            desc: "We start by understanding your business goals, target audience, and SaaS objectives. This allows us to create a strategic development plan tailored to your unique needs and ensures that the resulting SaaS platform aligns with your vision.",
        },
        {
            title: "Design and Prototyping",
            desc: "We create wireframes and prototypes that showcase the user interface and user experience of your SaaS platform. This ensures that the design meets your requirements and promotes early user adoption.",
        },
        {
            title: "Development and Coding",
            desc: "Using the latest technologies, our SaaS developers build your SaaS platform, ensuring scalability, high performance, and security. We focus on delivering a robust and secure product.",
        },
        {
            title: "Testing and Quality Assurance",
            desc: "Our quality assurance process ensures your SaaS platform performs flawlessly. We conduct rigorous testing across various environments and devices to check functionality, security, and user experience.",
        },
        {
            title: "Deployment and Launch",
            desc: "Once the platform is ready, we deploy it on the cloud, ensuring it is integrated seamlessly with your existing systems. We also optimize the deployment for maximum performance and scalability.",
        },
    ]

    const services = [
        {
            thumb: customsaasapplication,
            title: "Custom-SaaS Application Development",
            desc: "Our SaaS app development company in USA specializes in building tailored SaaS applications that address your unique business needs. Whether you need solutions for team collaboration, project management, or any other use case, our SaaS developers ensure the development of robust, secure, and high-performance applications.",
        },
        {
            thumb: saasproducts,
            title: "SaaS Products Designing & Prototyping",
            desc: "At Reddensoft USA, we offer intuitive design and prototyping services to create visually appealing and user-friendly interfaces for your SaaS products. Our focus on SaaS product development ensures that your platform not only looks great but also delivers an exceptional user experience.",
        },
        {
            thumb: cloudinfrastructuresetup,
            title: "Cloud Infrastructure Setup",
            desc: "We provide comprehensive cloud infrastructure setup services, helping you choose and configure the best hosting solutions for your SaaS product. Whether you're using AWS, Google Cloud, or Azure, we ensure your platform is secure, scalable, and cost-effective.",
        },
        {
            thumb: saasplatform,
            title: "SaaS Platform Migration",
            desc: "Our SaaS development services in USA also include seamless migration services for businesses looking to move from legacy or traditional systems to cloud-based SaaS platforms. Our team ensures a smooth, disruption-free transition that doesn't compromise performance.",
        },
        {
            thumb: saasintegration,
            title: "SaaS Integration Services",
            desc: "We provide robust integration services to connect your SaaS platform with other enterprise systems, third-party tools, and external APIs. This ensures smooth data exchanges and streamlined workflows, enhancing your operational efficiency.",
        },
    ];

    const accordions = [
        {
          title: "How long does it take to develop a SaaS product?",
          content: "The timeline varies based on the complexity of the project. Simple applications typically take 2-4 months, while more complex SaaS platforms may take 6-12 months.",
        },
        {
          title: "Can you migrate my existing software to SaaS?",
          content: "Yes, our SaaS development services in USA specialize in migrating existing solutions to cloud-based SaaS platforms with minimal disruption to your operations.",
        },
        {
          title: "How much does it cost to develop a SaaS solution?",
          content: "The cost depends on the features, complexity, and customization requirements. Contact us for a free consultation and a personalized quote based on your specific needs.",
        },
        {
          title: "Do you provide regular support and updates for SaaS products?",
          content: "Yes, we offer flexible support and maintenance packages to keep your SaaS platform secure, up-to-date, and functioning at its best.",
        },
        {
          title: "How will you secure my SaaS applications?",
          content: "Our SaaS development company in USA implements the latest security practices, including data encryption, secure authentication, and regular security audits, to ensure your SaaS platform remains safe and compliant with industry standards like GDPR and HIPAA.",
        },
    ];

    return(
        <>
            <title>SaaS development services I SaaS development agency USA</title>
            <meta name="title" content="SaaS App Development Company​ & Services USA" />
            <meta name="description" content="Partner with a leading SaaS app development company in USA. We offer expert SaaS development services to build scalable, secure, and innovative solutions." />

            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">SaaS Development in the </div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Build Scalable, <span className="text-[#FFDD1A] font-bold">Efficient,</span> and Custom <span className="text-[#FFDD1A] font-bold">SaaS Solutions</span>.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">At Reddensoft USA, our SaaS development services in USA are designed to empower businesses by providing scalable, secure and feature-rich cloud-based applications Whether you're building a CRM tool, an ERP system, or any other SaaS product, our SaaS development company in USA offers comprehensive end-to-end development services that are tailored to meet your unique business requirements. <br/><br/> Our team of expert SaaS developers works with cutting-edge technologies to create solutions ensuring high performance and long-term success. We are committed to bringing your ideas to life with precision and innovation. </h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Custom SaaS Solutions: </span>At Reddensoft USA, we create custom SaaS platforms that are tailored to your business needs, workflows, and target audiences. Our goal is to ensure maximum user engagement while improving operational efficiency. Each solution is crafted with care to meet your specifications.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Scalable Infrastructure: </span>Our SaaS development services in USA are designed to ensure that your SaaS products can grow with your business. Using cloud technologies, we create scalable solutions that maintain performance even as user demand and data grow. </li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">User-friendly interface: </span>We believe in building intuitive, user-friendly dashboards and interfaces that enhance the overall user experience. By focusing on usability, we ensure that your customers and employees find your SaaS application easy to navigate and use effectively.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Security & Compliance: </span>As a leading SaaS development agency in USA, we prioritize the security of your SaaS product. Our team incorporates advanced security measures, such as data encryption and secure user authentication.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">High Availability: </span>Our solutions are designed for maximum reliability and uptime. We implement robust systems and failover mechanisms to ensure high availability, ensuring that your SaaS product is always accessible to users when needed.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">API Integrations: </span>We make sure that your SaaS platform seamlessly integrates with external systems and third-party applications. Our SaaS app development experts provide you with the necessary APIs to facilitate smooth data exchange, ensuring efficient workflows and improved productivity. </li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col justify-center self-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={saasdevelopment} alt="SASS development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">OUR</span> Workflow</h2>
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