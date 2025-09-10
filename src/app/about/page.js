"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import uidesign from "@/assets/images/ui-design.webp"
import amalgamation from "@/assets/images/amalgamation.svg"
import goals from "@/assets/images/goals.svg"
import tech from "@/assets/images/tech.svg"
import mission from "@/assets/images/mission.svg"
import vision from "@/assets/images/vision.svg"
import corevalues from "@/assets/images/core-values.svg"
import Starfield from "@/components/StarField";
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";

export default function About() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const outlines = [
        {
            icon: mission,
            title: "Our Mission",
            desc: "Reddensoft USA is committed to empowering businesses by enhancing efficiency and innovation through next-generation technologies. We help you visualize your goals and leverage modern tech to accelerate your growth.",
        },
        {
            icon: vision,
            title: "Our Vision",
            desc: "To become a global leader in software innovation by delivering top-quality, cost-effective, and timely technology solutions to our clients across the world.",
        },
        {
            icon: corevalues,
            title: "Core Values",
            desc: "At Reddensoft USA, we specialize in developing premium web applications, intelligent software solutions, and performance-driven digital strategies that enable real business growth.",
        },
    ]

    const approaches = [
        {
            icon: goals,
            title: "Your Goals Are Our Focus",
            desc: "Your business objectives guide every step of our process. We tailor our strategies and technologies to meet your unique challenges and drive your business forward.",
        },
        {
            icon: amalgamation,
            title: "Fusing Innovation & Creativity",
            desc: "We believe true impact lies at the intersection of creativity and technology. Our design and development solutions are a reflection of this balance—smart, functional, and beautifully crafted.",
        },
        {
            icon: tech,
            title: "Powered by Technology",
            desc: "Leveraging the latest tools and platforms, we build future-ready solutions that help scale your business exponentially.",
        },
    ];

    const objectives = [
        {
            title: "Future-Ready Tech Built Around Your Goals",
            desc: "We apply the most advanced technologies to optimize your business operations and encourage innovation. Our process starts with understanding your goals and ends with seamlessly integrating the right tech into your business model—keeping you competitive in today’s fast-paced market.",
        },
        {
            title: "Elite Talent. Always Available",
            desc: "Our team of expert developers, designers, and consultants is available wherever and whenever you need them. Whether it’s remote collaboration or on-site engagement, we’re equipped to meet challenges head-on and deliver results. With pride, we bring together the best minds to support your vision—no matter your location.",
        },
        {
            title: "Flexible Strategy, Unshakable Drive",
            desc: "We recognize that no two businesses are the same. That’s why we adapt our strategies to fit your specific needs and evolve with your goals. Our team thrives under pressure and is committed to navigating challenges with a relentless can-do attitude.",
        },
        {
            title: "Relationships Over Revenue",
            desc: "Our core belief is that lasting relationships are more important than quick profits. We prioritize building trust, making decisions that serve long-term success, and creating partnerships rooted in mutual respect and shared growth.",
        },
    ];

    return(
        <>
            <title>About Us | ReddenSoft USA: Your IT Solutions Partner</title>
            <meta name="title" content="About Us | ReddenSoft USA: Your IT Solutions Partner" />
            <meta name="description" content="Explore the mission and values of ReddenSoft USA. We provide innovative IT solutions and web development services to help your business grow and succeed." />

            <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    {/* <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Know More</div> */}
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">ABOUT US</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Creating Exceptional User <span className="text-[#FFDD1A] font-bold">Experiences</span> That Drive <span className="text-secondary font-bold">Growth</span>.</div>
                </div>
                <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} alt="Hero banner" priority width="auto" height="auto"/>
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="9"
                />
            </div>


            <div className="py-20 lg:py-28 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                            <h2 className="lg:max-w-[650px] text-3xl 2xl:text-[50px] 2xl:leading-tight font-black" data-aos="fade-right" data-aos-delay="100">WHO <span className="text-secondary">WE ARE</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">At Reddensoft USA, we’re a passionate team of forward-thinking developers, designers, and AI experts dedicated to delivering innovative mobile app and AI-powered solutions. Our mission is to help businesses succeed through cutting-edge technologies and human-centric design. With deep experience across industries and platforms, we create powerful, scalable applications that enhance performance and elevate the user experience.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">User-First Design: </span>We build intuitive, engaging solutions by focusing on how real users interact with technology.</li>
                                <li className="list-disc text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">AI-Powered Solutions: </span>We integrate AI to bring smarter, faster, and more personalized experiences that help businesses operate more efficiently.</li>
                                <li className="list-disc text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Full-Cycle Development: </span>From initial concept to launch and post-launch support, we handle every phase of development with precision and care.</li>
                                <li className="list-disc text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Scalable Architecture: </span>Our solutions are built to evolve with your business, offering flexibility and long-term value.</li>
                                <li className="list-disc text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Cross-Platform Excellence: </span>We specialize in creating seamless experiences across iOS, Android, and the web—maximizing reach and impact.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={uidesign} alt="UI design icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                            </div>
                            <div className="absolute -bottom-10 -right-12 xl:-bottom-14 xl:-right-24 bg-secondary h-[280px] w-[140px] md:h-[380px] md:w-[190px] xl:h-[550px] xl:w-[275px] rounded-r-full z-0" data-aos="zoom-in" data-aos-delay="400"></div>
                        </div>
                    </div>
                    
                    <div className="bg_element !bg-cover pt-10 xl:pt-16 lg:pt-24">
                        <ul className="flex flex-wrap -mx-2 xl:-mx-4">
                            { outlines.map((outline, o) => (
                                <li className="w-auto sm:w-1/3 p-2 xl:p-4" key={o} data-aos="fade-up" data-aos-delay={200 + (o * 100)}>
                                    <div className="relative bg-white rounded-xl text-center flex flex-col items-center px-6 py-8 h-full shadow-med">
                                        <Image className="mb-6 h-12 w-auto xl:h-16" src={outline.icon} alt={outline.title} width="auto" height="auto"/>
                                        <h3 className="text-secondary text-base xl:text-lg 2xl:text-xl font-semibold pb-3">{outline.title}</h3>
                                        <p className="text-sm xl:text-base font-normal">{outline.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="banner_bg py-16 xl:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center order-1 lg:order-none">
                        <ul className="flex flex-wrap justify-center -mx-2 xl:-mx-4">
                            { approaches.map((approach, a) => (
                                <li className="w-full sm:w-1/3 p-2 xl:p-4" key={a} data-aos="fade-up" data-aos-delay={200 + (a * 100)}>
                                    <div className="no_shadow relative bg-white rounded-xl px-6 py-8 h-full text-center flex flex-col items-center shadow-med">
                                        <Image className="mb-6 h-12 w-auto xl:h-16" src={approach.icon} alt={approach.title} width="auto" height="auto"/>
                                        <h3 className="text-secondary text-base xl:text-lg font-semibold pb-3">{approach.title}</h3>
                                        <p className="text-sm xl:text-base font-normal">{approach.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 h-full lg:pl-12">
                        <div className="mb-4 lg:mb-0 lg:max-w-xs 2xl:max-w-md text-white flex flex-col items-center lg:items-start text-center lg:text-left py-5">
                            <h2 className="text-3xl sm:text-4xl 2xl:text-6xl leading-snug font-black uppercase" data-aos="fade-right" data-aos-delay="100">Our Approach</h2>
                            <h3 className="text-base sm:text-xl 2xl:text-2xl leading-6 font-normal pt-3 pb-2 sm:pt-5 sm:pb-3" data-aos="fade-right" data-aos-delay="200">Innovation, Agility, and Dedication</h3>
                            <p className="text-sm sm:text-base 2xl:text-lg leading-6 font-light" data-aos="fade-right" data-aos-delay="300">We approach every project with passion and a drive for excellence. With a mindset of continuous improvement, we remain customer-focused, goal-oriented, and committed to lasting relationships. As technology enthusiasts, we aim to empower businesses with solutions that offer high ROI and measurable success.</p>
                        </div>
                    </div>
                </div>
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="10"
                />
            </div>

            <div className="py-16 lg:py-24">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap justify-between z-1 px-5 2xl:px-0">
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-[130px] h-full h-full">
                        <div className="mb-8 lg:mb-0 flex flex-col items-start pr-5">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black" data-aos="fade-right" data-aos-delay="100">How We Help</h2>
                            <h2 className="text-4xl xl:text-5xl 2xl:text-7xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Clients</span> Stay Ahead</h2>
                            <div className="flex justify-center mt-10">
                                <GlobalButton title="Get a Free Quote" link="/contact-form" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-full flex flex-col justify-center ">
                        <ul className="max-w-5xl mx-auto w-full list_devider">
                            { objectives.map((objective, o) => (
                                <li className="w-full mb-5 lg:mb-0" key={o} data-aos="fade-up" data-aos-delay={200 + (o * 100)}>
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
        </>
    )
}