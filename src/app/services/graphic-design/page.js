"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import graphicdesign from "@/assets/images/graphic-design.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import brandidentity from "@/assets/images/brand-identity.webp"
import digitaldesign from "@/assets/images/digital-design.webp"
import packagingdesign from "@/assets/images/packaging-design.webp"
import presentationdesign from "@/assets/images/presentation-design.webp"
import printdesign from "@/assets/images/print-design.webp"
import team from "@/assets/images/team.svg"
import tailordsolutions from "@/assets/images/tailord-solutions.svg"
import cuttingedge from "@/assets/images/cutting-edge.svg"
import collaboration from "@/assets/images/collaboration.svg"
import provenimpact from "@/assets/images/proven-impact.svg"
import endtoendservice from "@/assets/images/end-to-end-service.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function GraphicDesign() {
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
            title: "Experienced Designers",
            desc: "Our team is made up of skilled designers with extensive experience across various industries.",
            icon: team,
        },
        {
            title: "Tailored Solutions",
            desc: "We design custom solutions to meet your specific business needs and objectives.",
            icon: tailordsolutions,
        },
        {
            title: "Cutting-Edge Tools",
            desc: "We use the latest design software and tools to create modern, high-quality visuals.",
            icon: cuttingedge,
        },
        {
            title: "Collaborative Approach",
            desc: "We keep you involved throughout the design process to ensure the final product reflects your vision.",
            icon: collaboration,
        },
        {
            title: "Proven Impact",
            desc: "Our business logo design services have helped clients increase brand awareness, customer engagement, and sales.",
            icon: provenimpact,
        },
        {
            title: "End-to-End Service",
            desc: "From concept to final delivery, we manage every aspect of the design process to ensure quality.",
            icon: endtoendservice,
        },

    ];

    const workflows = [
        {
            title: "Initial Consultation",
            desc: "We begin by understanding your brand, goals, and vision.",
        },
        {
            title: "Research & Conceptualization",
            desc: "Conduct market research and brainstorming sessions to generate initial design concepts.",
        },
        {
            title: "Design Development",
            desc: "Our designers refine the concepts based on your feedback to ensure alignment with your brand’s identity.",
        },
        {
            title: "Client Feedback & Revisions",
            desc: "We present designs for your feedback and make revisions to ensure satisfaction.",
        },
        {
            title: "Final Delivery",
            desc: "Once approved, we prepare and deliver the final design files in the required formats.",
        },
        {
            title: "Post-Launch Support",
            desc: "Our graphic design company in USA provides ongoing support for any further design needs or tweaks.",
        },
    ]

    const services = [
        {
            thumb: brandidentity,
            title: "Brand Identity Design",
            desc: "Creating a strong visual identity is key to standing out. Our graphic design services in USA include logo design services, typography, color schemes, and comprehensive brand guidelines that guarantee your brand maintains consistency across all channels. We help you build trust, recognition, and customer loyalty with every design.",
        },
        {
            thumb: printdesign,
            title: "Print Design",
            desc: "We offer professional graphic design services in USA for a variety of print materials such as brochures, business cards, flyers, and annual reports. Whether for an event or large-scale marketing campaign, our designs ensure your materials grab attention and leave a lasting impression.",
        },
        {
            thumb: digitaldesign,
            title: "Digital Design",
            desc: "Our digital graphic design services focus on crafting visually compelling assets for websites, social media, and digital ads. From banners to email templates, infographics, and landing pages, we ensure that all designs are engaging and user-friendly, enhancing your online presence.",
        },
        {
            thumb: packagingdesign,
            title: "Packaging Design",
            desc: "Packaging plays a crucial role in product perception. We design creative and functional packaging that stands out on the shelf while telling your product's unique story. From concept to final product, our designs reflect your brand identity and ensure your packaging delivers both aesthetics and utility.",
        },
        {
            thumb: presentationdesign,
            title: "Presentation Design",
            desc: "Make a memorable impact with our expertly crafted presentations. Whether for investor pitches, client presentations, or team meetings, we create visually appealing PowerPoint and Keynote slides that make your content shine and keep your audience engaged.",
        },
    ];

    const accordions = [
        {
            title: "What is your graphic design process like?",
            content: "Our process is collaborative. From the initial consultation to the final design delivery, we ensure your feedback is incorporated at every step.",
        },
        {
            title: "Can you work with an existing brand identity?",
            content: "Absolutely! We specialize in refreshing and enhancing existing brand identities while keeping the essence intact.",
        },
        {
            title: "How long does a typical design project take?",
            content: "The timeline varies based on the project’s complexity, but most designs are delivered within 2 to 4 weeks.",
        },
        {
            title: "Do you offer design for social media?",
            content: "Yes, we create custom designs for all major social media platforms such as Facebook, Instagram, and LinkedIn, tailored to your brand's goals.",
        },
        {
            title: "Can you help with printing and production?",
            content: "Yes, we provide print management services, overseeing everything from vendor selection to ensuring high-quality production.",
        },
        {
            title: "Do you offer revisions during the design process?",
            content: "Yes, we provide multiple rounds of revisions to ensure the final product meets your expectations.",
        },
        {
            title: "Will I receive the source files?",
            content: "Yes, we deliver all necessary files in the required formats, including layered source files for future needs.",
        }
    ];

    return(
        <>
            <title>Graphic design company I Graphic design agency in USA </title>
            <meta name="title" content="Graphic Design Agency USA | Graphic Design Services" />
            <meta name="description" content="Discover a top Graphic Design Agency in USA. We provide exceptional Graphic Design Services to create visually stunning and impactful designs for your brand." />

            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Graphic Design Company in</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Creating Visual <span className="text-[#FFDD1A] font-bold"> Excellence</span> for the best <span className="text-secondary font-bold">User Experience</span>.</div>
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

            <div className="py-12 lg:py-20 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                            <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Service <span className="text-secondary">Overview</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">At <span className="text-secondary">Reddensoft</span> USA, we specialize in graphic design that brings your brand’s vision to life. Whether you’re looking for a complete brand identity, print materials, or engaging digital assets, our talented design team creates solutions that effectively communicate your message. As a <span className="text-secondary">graphic design company in USA</span>, we merge creativity with strategic thinking to produce designs that resonate with your audience and elevate brand recognition</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary font-bold">Custom Visual Identity: </span>Tailored designs that reflect your brand’s core values and connect with your target audience.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Engaging Marketing Materials: </span>From brochures to banners, we craft designs that enhance your marketing efforts.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Responsive Digital Graphics: </span>Optimized for all digital platforms to ensure your designs are consistent across devices.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Creative Solutions: </span>Our graphic design services in USA go beyond beauty; they provide real business solutions and create lasting impressions.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="500"><span className="text-secondary font-bold">Collaborative Design Process: </span>We work closely with you at every stage to ensure the final design aligns with your goals.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={graphicdesign} alt="Graphic design icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <ul className="max-w-4xl flex flex-wrap -mx-2">
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
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our Workflow </span> Process</h2>
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