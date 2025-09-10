"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import webdevelopment from "@/assets/images/web-development.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import system from "@/assets/images/design-system.webp"
import design from "@/assets/images/ux-design.webp"
import consulting from "@/assets/images/ux-consulting.webp"
import research from "@/assets/images/research-usability.webp"
import team from "@/assets/images/team.svg"
import approach from "@/assets/images/approach.svg"
import techniques from "@/assets/images/techniques.svg"
import collaboration from "@/assets/images/collaboration.svg"
import solution from "@/assets/images/solution.svg"
import result from "@/assets/images/result.svg"
import support from "@/assets/images/support.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";

export default function SeoSmm() {
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
            title: "Experienced Design Team",
            desc: "Our UI/UX experts have years of experience creating high-quality, user-centric designs that drive results.",
            icon: team,
        },
        {
            title: "User-First Approach",
            desc: "We prioritize user research and feedback to ensure our designs meet the needs of your target audience.",
            icon: approach,
        },
        {
            title: "Cutting-Edge Tools & Techniques",
            desc: "We use the latest design software and industry best practices to deliver modern, innovative solutions.",
            icon: techniques,
        },
        {
            title: "Collaborative Process",
            desc: "We work closely with clients at every stage, ensuring your vision and input shape the final product.",
            icon: collaboration,
        },
        {
            title: "Custom Solutions",
            desc: "Every project is tailored to fit your specific business needs and brand identity.",
            icon: solution,
        },
        {
            title: "Proven Results",
            desc: "Our portfolio showcases projects that have significantly boosted user engagement, satisfaction, and retention for our clients.",
            icon: result,
        },
        {
            title: "Ongoing Support",
            desc: "We provide continuous support and iteration to ensure your design remains effective as your business evolves.",
            icon: support,
        },
    ];

    const workflows = [
        {
            title: "Initial Consultation",
            desc: "Understand your project goals, target audience, and brand values.",
        },
        {
            title: "User Research & Persona Development",
            desc: "Conduct research to understand user needs, pain points, and behaviors.",
        },
        {
            title: "Wireframes & Prototypes",
            desc: "Develop wireframes and interactive prototypes to map out user journeys.",
        },
        {
            title: "Design & Iteration",
            desc: "Create high-fidelity designs with a focus on visual appeal and user interaction.",
        },
        {
            title: "User Testing & Feedback",
            desc: "Conduct usability testing to gather feedback and make necessary refinements.",
        },
        {
            title: "Handoff & Collaboration",
            desc: "Deliver designs to the development team and collaborate to ensure accurate implementation.",
        },
    ]

    const services = [
        {
            thumb: consulting,
            title: "Web UI/UX",
            desc: "Our Web UI/UX service is designed to create visually appealing and highly functional websites that offer seamless user experiences. We focus on intuitive navigation, responsive design, and engaging visuals that cater to the needs of your users while reflecting your brand's identity. <br/><br/>From wireframes and interactive prototypes to final design and testing, our team ensures your website stands out and performs effectively across all devices. With a user-centric approach, we prioritize ease of use and accessibility, enabling visitors to find what they need quickly and interact with your content effortlessly. Let us transform your website into a digital experience that captivates users and achieves business goals.",
        },
        {
            thumb: design,
            title: "Mobile UI/UX",
            desc: "Our Mobile UI/UX service ensures your mobile app provides an outstanding user experience. We create designs that are not only visually appealing but also intuitive and easy to navigate, focusing on user interactions that enhance functionality and user satisfaction. <br/><br/>Whether you need iOS or Android designs, our team develops solutions that respond seamlessly to different screen sizes and resolutions. We pay attention to the smallest details, from touch gestures to micro-interactions, to create a cohesive and enjoyable experience. By integrating your brand’s identity with best practices in mobile design, we help your app engage users and drive retention and loyalty.",
        },
        {
            thumb: system,
            title: "Motion Design",
            desc: "Motion design is the art of bringing static visuals to life through animation, adding depth and interactivity to your digital products. Our service uses motion graphics to capture attention, guide users, and communicate messages in an engaging and memorable way. <br/><br/>From animated transitions and micro-interactions to full-scale animated sequences, we craft motion designs that align with your brand's aesthetic and enhance usability. This service is perfect for websites, apps, and marketing materials that aim to stand out and create a deeper connection with users. Motion design helps make your brand more dynamic and adds an emotional layer to your digital storytelling.",
        },
        {
            thumb: research,
            title: "AR/VR Experience Design",
            desc: "Our AR/VR Experience Design service offers immersive digital experiences that push the boundaries of user interaction. We create interactive, realistic environments that captivate and engage your audience, making your brand unforgettable. <br/><br/>From conceptualization and prototyping to development and final integration, we design AR and VR solutions that align with your business objectives. Whether you're looking to enhance e-commerce, training programs, or educational content, our team blends creativity with technology to build experiences that resonate. By leveraging the latest in AR and VR technology, we bring your ideas to life, helping you stand out in a rapidly evolving digital landscape.",
        },
    ];

    const accordions = [
        {
          title: "What makes your UI/UX design process different?",
          content: "Our process is deeply rooted in user research and collaborative design, ensuring that we create solutions that are both visually appealing and highly functional.",
        },
        {
          title: "Can you help improve an existing product's design?",
          content: "Absolutely! We specialize in redesigns and enhancements that optimize user experience and align with current market trends.",
        },
        {
          title: "How involved will I be in the design process?",
          content: "We value your input and keep you involved through regular updates and feedback loops to make sure your vision is reflected in the final design.",
        },
        {
          title: "What kind of user testing do you conduct?",
          content: "We conduct a range of user tests, from remote usability studies to in-person focus groups, to gather valuable feedback for refining our designs.",
        },
        {
          title: "Will I receive a final design that's ready for development?",
          content: "Yes, we provide fully detailed design files, including specifications and assets, making it easy for your development team to bring the design to life.",
        },
        {
          title: "Do you offer post-launch support?",
          content: "Yes, we provide post-launch services to make adjustments, implement updates, and ensure the design continues to meet user needs.",
        },
    ];

    return(
        <>
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">SEO & SMM in</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">ISRAEL</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Creating Exceptional <span className="text-[#FFDD1A] font-bold">User Experiences</span> to <span className="text-secondary font-bold">Drive Engagement</span>.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">Our UI/UX design service focuses on crafting intuitive and visually appealing interfaces that ensure a <span className="text-secondary">seamless user experience</span>. We combine creativity and user-centric design principles to make your <span className="text-secondary">digital products engaging, functional, and easy to use</span>.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">User-Centric Design: </span>We prioritize user needs and behaviors to create interfaces that resonate with your target audience.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Responsive & Adaptive Layouts: </span>Our designs are optimized for all devices, ensuring a consistent experience from desktop to mobile.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Interactive Prototypes: </span>We build interactive prototypes that help you visualize your product before development starts.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={webdevelopment} alt="Web development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-2/5 h-full">
                        <div className="lg:max-w-xs 2xl:max-w-md text-white flex flex-col items-start py-5">
                            <h2 className="text-5xl xl:text-6xl 2xl:text-[80px] leading-none font-black uppercase" data-aos="fade-right" data-aos-delay="100">Our Case Studies</h2>
                            <p className="max-w-sm text-base xl:text-xl 2xl:text-2xl leading-6 font-normal py-7" data-aos="fade-right" data-aos-delay="200">Explore our past projects showcasing our expertise in UI/UX design.</p>
                            <div className="flex justify-start" data-aos="fade-left">
                                <GlobalButton title="View Our Work" link="/portfolio"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 h-full flex flex-col justify-center">
                        <ul className="flex flex-wrap justify-end -mx-4 xl:-mx-5">
                            { works.map((work, w) => (
                                <li className="w-full sm:w-1/2 p-4 xl:p-5" key={work.id} data-aos="fade-up" data-aos-delay={200 + (w * 100)}>
                                    <div className="no_shadow relative overflow-hidden bg-white pb-2 rounded-2xl h-full">
                                        <div className="bg-cyan-900 flex items-center justify-center p-5">
                                            <Image className="w-full max-h-52 h-full w-auto" src={work.thumb} alt={work.title} width="auto" height="auto"/>
                                        </div>
                                        <div className="px-5 py-5 xl:px-7 xl:py-6">
                                            <h3 className="text-base xl:text-lg 2xl:text-2xl font-semibold pb-4">{work.title}</h3>
                                            <p className="text-sm xl:text-base xl:leading-6 font-normal pb-2">{work.desc}</p>
                                        </div>
                                        <Link href="#" className="absolute -right-10 -bottom-10 transform rotate-45 block w-20 h-20 bg-secondary">
                                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-8 left-1.5 transform -rotate-45">
                                                <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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
                    <div className="w-full lg:w-3/5 h-full flex flex-col justify-center order-1 lg:order-none">
                        <ul className="max-w-3xl flex flex-wrap -mx-2">
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
                    <div className="w-full lg:w-2/5 h-full">
                        <div className="mb-4 lg:mb-0 flex flex-col items-start lg:pl-10">
                            <h2 className="text-5xl xl:text-6xl 2xl:text-[80px] 2xl:leading-none font-black uppercase" data-aos="fade-right" data-aos-delay="100">Our Workflow</h2>
                            <p className="text-sm xl:text-base font-normal py-7" data-aos="fade-right" data-aos-delay="200">Our process at Reddensoft is set up to guarantee smooth operation at every level of development. We start by comprehending your objectives followed by investigation and analysis. On the next steps, we brainstorm and build wireframes and prototypes, and communicate with you throughout the design process. Following approval of the concept, our focus shifts to development, integrating AI technologies, digital marketing tactics, and UI/UX design. Our thorough testing and feedback loop guarantee that we consistently provide scalable, superior products.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 lg:px-0">
                    <div className='w-full md:pb-[60px] md:md-[60px]'>
                        <div className="max-w-[700px] mx-auto mb-10 xl:mb-14">
                            <h2 className="text-lg sm:text-2xl xl:text-3xl sm:leading-tight xl:leading-snug text-center font-bold uppercase mb-2 sm:mb-0" data-aos="zoom-in-up" data-aos-delay="100">Learn more about our</h2>
                            <h2 className="text-4xl sm:text-5xl xl:text-6xl sm:leading-tight xl:leading-snug font-black text-center" data-aos="zoom-in-up" data-aos-delay="200"><span className="text-secondary">UI/UX </span>Design Services</h2>
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
        </>
    )
}