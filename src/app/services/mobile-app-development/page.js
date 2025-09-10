"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import mobileappdevelopment from "@/assets/images/mobile-app-development.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import seo from "@/assets/images/seo.webp"
import socialmedia from "@/assets/images/social-media.webp"
import crossplatformapp from "@/assets/images/cross-platform-app.webp"
import emailmarketing from "@/assets/images/email-marketing.webp"
import contentmarketing from "@/assets/images/content-marketing.webp"
import rightarrow from "@/assets/images/right-arrow.png"
import agileproccess from "@/assets/images/agile-proccess.svg"
import appdevelopers from "@/assets/images/app-developers.svg"
import costeffective from "@/assets/images/cost-effective.svg"
import focusperformance from "@/assets/images/focus-performance.svg"
import qualityassurance from "@/assets/images/quality-assurance.svg"
import securityfirst from "@/assets/images/security-first.svg"
import tailordsolutions from "@/assets/images/tailord-solutions.svg"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function MobileAppDevelopment() {
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
            title: "Skilled Mobile App Developers",
            desc: "Our experienced team of mobile app developers has delivered successful projects across industries.",
            icon: appdevelopers,
        },
        {
            title: "Tailored Development",
            desc: "Every app is designed around your goals, branding, and business model.",
            icon: tailordsolutions,
        },
        {
            title: "Optimized for Performance",
            desc: "We build apps that are fast, reliable, and scalable.",
            icon: focusperformance,
        },
        {
            title: "Agile Methodology",
            desc: "Our iterative process keeps your project on track with regular updates and feedback loops.",
            icon: agileproccess,
        },
        {
            title: "Thorough QA",
            desc: "We conduct rigorous testing to ensure your app performs flawlessly on all platforms.",
            icon: qualityassurance,
        },
        {
            title: "Security-Focused",
            desc: "Our apps are built with best-in-class security practices to protect user data and ensure compliance.",
            icon: securityfirst,
        },
        {
            title: "Cost-Effective Delivery",
            desc: "We deliver high-quality solutions that align with your budget and timeline.",
            icon: costeffective,
        },

    ];

    const workflows = [
        {
            title: "Initial Consultation",
            desc: "We learn about your goals, business, and users to define the project scope.",
        },
        {
            title: "Research & Strategy",
            desc: "We study user behavior, competitor apps, and market trends to shape your product strategy.",
        },
        {
            title: "Wireframes & Prototypes",
            desc: "We design user flows and develop clickable prototypes to validate UX early.",
        },
        {
            title: "Design Execution",
            desc: "Our team crafts intuitive, attractive UI designs tailored for your audience and brand.",
        },
        {
            title: "App Development",
            desc: "Our mobile app developers bring your app to life with scalable, clean code using the best tools and technologies.",
        },
        {
            title: "Quality Assurance",
            desc: "We run extensive testing on devices and platforms to ensure a bug-free, seamless experience.",
        },
        {
            title: "Launch & Deployment",
            desc: "We manage the app store submission process and assist with launch-readiness.",
        },
        {
            title: "Post-Launch Support",
            desc: "Ongoing updates, feature enhancements, and support keep your app competitive and high-performing.",
        },
    ]

    const services = [
        {
            thumb: seo,
            title: "iOS App Development",
            desc: "Our experienced iPhone app developer team creates premium iOS apps that seamlessly integrate with Apple’s ecosystem. We use Swift, ARKit, HealthKit, and other advanced tools to develop feature-rich, high-performance iOS applications for enterprise and consumer needs. Whether it’s for the App Store or internal use, we deliver scalable iOS solutions with sleek interfaces and robust functionality.",
        },
        {
            thumb: socialmedia,
            title: "Android App Development",
            desc: "Our android app developer experts build custom Android applications tailored for smartphones, tablets, and other Android-powered devices. We use Kotlin, Java, and Android Studio to develop apps optimized for speed, security, and multi-device compatibility. Our Android apps deliver intuitive user experiences and meet the highest standards of performance and design",
        },
        {
            thumb: crossplatformapp,
            title: "Cross-Platform App Development",
            desc: "Expand your reach with a single codebase that supports both iOS and Android platforms. Using frameworks like Flutter, React Native, and Xamarin, we develop cross-platform apps with near-native performance. Our mobile app development company in USA ensures consistent UX across devices while minimizing time-to-market and cost of development.",
        },
        {
            thumb: emailmarketing,
            title: "App UI/UX Design",
            desc: "User experience is critical to your app’s success. Our in-house design team creates stunning, user-focused interfaces that balance functionality with aesthetics. From prototyping to final UI, our mobile app development services in USA emphasize usability, responsiveness, and visual appeal to keep users engaged.",
        },
        {
            thumb: contentmarketing,
            title: "App Maintenance & Support",
            desc: "App development doesn't stop at launch. We offer continuous monitoring, bug fixes, performance optimization, and feature enhancements. Our mobile app development company in USA ensures your app remains current, stable, and secure while adapting to evolving user demands and platform updates.",
        },
    ];

    const accordions = [
        {
            title: "What is the average timeline for developing a mobile app?",
            content: "Most apps take between 2 to 6 months to develop depending on complexity. We’ll provide a custom timeline after understanding your needs.",
        },
        {
            title: "Do you build apps for both iOS and Android?",
            content: "Yes, our mobile app development services in USA include both native and cross-platform solutions for iOS and Android.",
        },
        {
            title: "What technologies do you use for app development?",
            content: "We use Swift, Kotlin, Java, Flutter, React Native, and Xamarin depending on the project requirements.",
        },
        {
            title: "Will my app be listed on App Store and Google Play?",
            content: "Yes, we handle all aspects of the submission process for both platforms to ensure a smooth launch.",
        },
        {
            title: "Can you redesign our existing app?",
            content: "Absolutely! We can improve both design and performance for existing apps through complete redesigns.",
        },
        {
            title: "Do you provide post-launch support?",
            content: "Yes, we offer long-term maintenance and support to keep your app optimized and up to date.",
        },
        {
            title: "What kind of post-launch support do you provide?",
            content: "We offer continuous support after your app is launched, including regular updates, optimization, and troubleshooting.",
        },
        {
            title: "What’s included in your post-launch services?",
            content: "Our team handles bug fixes, updates, analytics tracking, feature upgrades, and more after the app is live.",
        }
    ];

    return(
        <>
            <title>App development agency in USA I Android and iPhone developer</title>
            <meta name="title" content="Mobile App Development USA | Android & IOS App Developers" />
            <meta name="description" content="Leading mobile app development in USA. Hire expert Android and iOS app developers to create innovative, user-friendly, and scalable mobile solutions." />

            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">App Development Services in the</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">
                        Building 
                        <span className="text-[#FFDD1A] font-bold"> Innovative </span>
                        and
                        <span className="text-secondary font-bold"> Scalable </span> Apps
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

            <div className="py-12 lg:py-20 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                            <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Service <span className="text-secondary">Overview</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">
                                At Reddensoft USA, we are a trusted <span className="text-secondary">mobile app development company in USA</span> delivering tailored digital solutions for modern businesses. Our services span the full app lifecycle—from concept and design to development, testing, deployment, and post-launch support. Whether you're building for iOS, Android, or both, we use the latest technologies to create robust, user-friendly apps that enhance engagement, boost conversions, and scale with your business. 
                                <br /><br /> 
                                As a leading <span className="text-secondary">mobile app development company in USA</span>, we focus on creating high-performance applications that meet real user needs and align with your strategic goals
                            </h3>
                            
                            <ul className="lg:max-w-[650px] pb-5 pl-5">
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary font-bold">Custom Mobile App Solutions: </span>Our app development agency in USA delivers personalized solutions tailored to your business needs and industry standards.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Cross-Platform Development: </span>Get consistent performance and design across iOS and Android platforms.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Scalable Architecture: </span>We build apps with future growth in mind, using flexible, scalable technologies.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">User-Centric Design: </span>Intuitive design that enhances user engagement and maximizes retention.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="500"><span className="text-secondary font-bold">End-to-End Development: </span>Our mobile app development services in USA manage the entire app journey, from ideation to launch.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="600"><span className="text-secondary font-bold">Ongoing Support & Maintenance: </span>We offer comprehensive post-launch support to keep your app optimized, secure, and up to date.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={mobileappdevelopment} alt="Mobile app development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                    <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">Why Choose Reddensoft <span className="text-secondary">USA</span></h2>
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
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our Workflow </span> / Process</h2>
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