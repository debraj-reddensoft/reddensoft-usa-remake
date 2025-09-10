"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import uidesign from "@/assets/images/ui-design.webp"
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
import Advertisement from "@/components/Advertisement";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function UxDesign() {
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

    const designs = [
        {
            title: "Experienced Professionals",
            desc: "Our team brings years of experience in the USA market, delivering designs that deliver measurable impact.",
            icon: team,
        },
        {
            title: "User-First Mindset",
            desc: "Everything we create is informed by user research and behavior to ensure it aligns with real-world expectations.",
            icon: approach,
        },
        {
            title: "Latest Tools & Trends",
            desc: "We use top-tier design software and stay ahead of the curve in trends and technologies.",
            icon: techniques,
        },
        {
            title: "Client Collaboration",
            desc: "Your vision drives our process. We work closely with you at every stage to ensure the result is exactly what you imagined.",
            icon: collaboration,
        },
        {
            title: "Tailored Solutions",
            desc: "No cookie-cutter designs—our services are fully customized to reflect your brand and meet your specific needs.",
            icon: solution,
        },
        {
            title: "Proven Outcomes",
            desc: "Our designs have helped businesses improve engagement, boost retention, and increase ROI.",
            icon: result,
        },
        {
            title: "Continual Support",
            desc: "We stay involved post-launch, offering updates, optimizations, and iterations as your business grows.",
            icon: support,
        },
    ];

    const workflows = [
        {
            title: "Discovery Call",
            desc: "We begin by understanding your project scope, goals, users, and brand identity.",
        },
        {
            title: "User Research & Personas",
            desc: "We perform deep user research to define behaviors, needs, and potential pain points.",
        },
        {
            title: "Wireframing& Prototyping",
            desc: "We craft wireframes and interactive prototypes to visualize the product’s flow and structure.",
        },
        {
            title: "Design & Refinement",
            desc: "High-fidelity designs are created, refined, and optimized based on user interaction best practices.",
        },
        {
            title: "Testing & Feedback",
            desc: "Usability testing helps us fine-tune the design based on real-world user feedback.",
        },
        {
            title: "Development Handoff",
            desc: "We prepare developer-ready files and collaborate closely to ensure seamless implementation.",
        },
    ]

    const services = [
        {
            thumb: consulting,
            title: "Web UI/UX",
            desc: "Our UI UX design services for websites focus on developing clean, modern, and intuitive user interfaces that not only look great but work beautifully. We emphasize smooth navigation, responsive layouts, and accessibility, ensuring users engage effectively across devices. From initial wireframes to final design and testing, our UI UX design firm in USA ensures your website becomes a high-performing digital touchpoint that drives conversions and customer satisfaction.",
        },
        {
            thumb: design,
            title: "Mobile UI/UX",
            desc: "Mobile experiences demand precision, and as a trusted UI UX design agency in USA, we deliver designs that are sleek, fast, and frictionless. Whether your app is for iOS, Android, or both, we create highly functional and visually appealing interfaces tailored for mobile users. From gesture controls to micro-animations, we sweat every detail to provide an exceptional mobile user experience that enhances engagement, retention, and user loyalty.",
        },
        {
            thumb: system,
            title: "Motion Design",
            desc: "Motion brings digital experiences to life. Our UI UX design services include motion design that adds interactive flair, improves user flow, and communicates brand messages effectively. From animated elements and smooth transitions to impactful visuals, motion helps guide users, build emotion, and create more engaging journeys. Perfect for apps, websites, and promotional content that wants to leave a lasting impression.",
        },
        {
            thumb: research,
            title: "AR/VR Experience Design",
            desc: "We push the limits of digital interaction with immersive AR/VR design experiences. Whether it's for eCommerce, training, or product demos, our team creates realistic environments that foster engagement and interaction. From ideation to integration, we deliver AR and VR solutions that align with your brand goals, supported by the latest technologies. It’s time to turn imagination into immersive digital reality.",
        },
    ];

    const accordions = [
        {
          title: "What makes your UI/UX design process different?",
          content: "We prioritize research-driven design and collaborative feedback loops that ensure the final product is both functional and delightful.",
        },
        {
          title: "Can you redesign my current product?",
          content: "Yes! Our UI UX design company in USA specializes in transforming outdated interfaces into modern, user-friendly experiences.",
        },
        {
          title: "Will I be involved in the process?",
          content: "Absolutely. Our collaborative approach ensures your input shapes the final result at every stage.",
        },
        {
          title: "What kind of testing do you offer?",
          content: "We conduct usability tests, heat maps, A/B testing, and more to refine designs based on real user behavior.",
        },
        {
          title: "Will the design be ready for development?",
          content: "Yes, we provide fully organized files with specifications, assets, and annotations for a seamless dev handoff.",
        },
        {
          title: "Do you offer post-launch support?",
          content: "We do! We continue optimizing your product after launch to ensure lasting impact and usability.",
        },
    ];

    return(
        <>
            <title>UI UX Design Company in USA I ui ux design firm</title>
            <meta name="title" content="UI UX Design Agency in USA | UI UX Design Services" />
            <meta name="description" content="Looking for a top UI UX Design Agency in USA? We offer expert UI UX Design Services to create user-friendly, innovative, and engaging digital experiences." />

            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">UI/UX Design in the</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">
                    Creating Exceptional User <span className="text-[#FFDD1A] font-bold">Experiences</span> That Drive <span className="text-secondary font-bold">Engagement</span>.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">As a leading UI UX design company in USA, we specialize in creating intuitive, visually striking, and functionally seamless interfaces tailored to meet modern business needs. Our mission is to turn your ideas into engaging digital experiences by blending innovation, design thinking, and user-first strategies. Our UI UX design services are built around enhancing user satisfaction, improving usability, and maximizing business impact.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">User-Centered Design: </span>Our designs are shaped by deep insights into your audience’s behavior and expectations.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Responsive across All Devices: </span>We ensure your product delivers a consistent and optimized experience on mobile, desktop, and beyond.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Interactive Prototypes: </span>Visualize your product before development with fully interactive prototypes that bring your vision to life.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={uidesign} alt="UI design icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our</span> Workflow</h2>
                            <p className="text-sm xl:text-base font-normal py-7" data-aos="fade-right" data-aos-delay="200">At Reddensoft USA, our workflow is built for clarity, speed, and precision—ensuring your project hits its goals on time and with excellence.</p>
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