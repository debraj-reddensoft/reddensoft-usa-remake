"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import wordpressdevelopment from "@/assets/images/wordpress-development.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import customwordpress from "@/assets/images/custom-wordpress.webp"
import wordpressplugin from "@/assets/images/wordpress-plugin.webp"
import woocommerce from "@/assets/images/woocommerce.webp"
import wordpressmaintenance from "@/assets/images/wordpress-maintenance.webp"
import wordpressseo from "@/assets/images/wordpress-seo.webp"
import wordpresstheme from "@/assets/images/wordpress-theme.webp"
import provenexperience from "@/assets/images/proven-experience.svg"
import ongoingsupport from "@/assets/images/on-going-support.svg"
import transparentprocess from "@/assets/images/transparent-process.svg"
import latesttechnology from "@/assets/images/latest-technology.svg"
import wordpressdevelopers from "@/assets/images/wordpress-developers.svg"
import wptailoredsolutions from "@/assets/images/wp-tailored-solutions.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function WordpressDevelopment() {
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
            title: "Proven Experience",
            desc: "With years of experience in building high-quality WordPress websites, our team ensures timely delivery and results that meet your budget. We have the expertise needed to handle projects across various industries, making us a trusted WordPress development company in USA.",
            icon: provenexperience,
        },
        {
            title: "Tailored Solutions",
            desc: "We understand that every business is unique. That’s why we offer customized ecommerce WordPress development in USA that perfectly aligns with your goals and requirements.",
            icon: wptailoredsolutions,
        },
        {
            title: "Expert WordPress Developers",
            desc: "Our certified WordPress web developers have in-depth knowledge of coding, design, and customization, ensuring top-quality service and a fully functional website built to your specifications.",
            icon: wordpressdevelopers,
        },
        {
            title: "Latest Technology",
            desc: "We stay up-to-date with the latest WordPress tools, technologies, and plugins, ensuring your website is built with cutting-edge solutions for future scalability and performance.",
            icon: latesttechnology,
        },
        {
            title: "Transparent Process",
            desc: "At Reddensoft USA, we keep you informed throughout the entire development process. Our goal is to make the development journey collaborative, ensuring that you understand every step along the way.",
            icon: transparentprocess,
        },
        {
            title: "On-going Support",
            desc: "Post-launch, we offer WordPress web development services that keep your website free of bugs, fully optimized, and secure with regular updates and maintenance.",
            icon: ongoingsupport,
        },
        
    ];

    const workflows = [
        {
            title: "Discovery & Planning",
            desc: "We begin by analyzing your business objectives, target audience, and brand vision. Based on this information, we create a strategic development plan for your WordPress website that aligns with your goals.",
        },
        {
            title: "Design & Development",
            desc: "Our WordPress website developers create wireframes and mockups before starting the actual development. We ensure that the website is responsive, intuitive, and packed with features that provide an outstanding user experience.",
        },
        {
            title: "Testing & Quality Assurance",
            desc: "Before launching your site, our team conducts extensive testing to ensure it works seamlessly across all devices and browsers. We verify that the website is fully optimized for performance, security, and usability.",
        },
        {
            title: "Launch & Optimization",
            desc: "Once everything is ready, we go live with your WordPress website. We perform on-page SEO optimization and speed testing to ensure the website loads quickly and offers an excellent user experience across all platforms.",
        },
       
    ]

    const services = [
        {
            thumb: customwordpress,
            title: "Custom WordPress Development",
            desc: "We specialize in designing custom WordPress websites tailored to your unique needs. From custom theme development to plugin integration, our WordPress website developer team delivers a complete solution that aligns with your brand’s vision and functionality requirements.",
        },
        {
            thumb: wordpresstheme,
            title: "WordPress Theme Development & Customization",
            desc: "Our WordPress development agency in USA offers custom theme development and theme customization to reflect your brand’s identity. Whether you need a brand-new design or want to tailor an existing theme, we deliver beautiful, functional, and responsive themes.",
        },
        {
            thumb: wordpressplugin,
            title: "Custom WordPress Plugin Development",
            desc: "We create custom plugins that enhance the functionality of your website. If the built-in WordPress plugins don’t meet your needs, we can build custom solutions tailored to your website’s specifications.",
        },
        {
            thumb: woocommerce,
            title: "WooCommerce Development",
            desc: "As experts in ecommerce WordPress development in USA, we provide powerful WooCommerce solutions for building online stores. We handle everything from custom store setups to integrating secure payment gateways, ensuring a seamless shopping experience for your customers.",
        },
        {
            thumb: wordpressmaintenance,
            title: "WordPress Maintenance & Support",
            desc: "We provide ongoing WordPress web development services and support to ensure your website runs smoothly. Our services include patching, backups, performance optimization, and troubleshooting to maintain your site’s security and functionality.",
        },
        {
            thumb: wordpressseo,
            title: "WordPress SEO Services",
            desc: "Every WordPress website we build is designed with SEO in mind. Our team ensures that your website is optimized for search engines, increasing its chances of ranking higher on Google and driving more organic traffic to your site.",
        },
    ];

    const accordions = [
        {
          title: "How long does it take to develop a WordPress website?",
          content: "Development time depends on the complexity of the website. A simple blog or business site can take a few weeks, while complex e-commerce sites usually take 1-3 months.",
        },
        {
          title: "Will you be able to assist me with my existing WordPress site?",
          content: "Yes, we offer optimization, redesign, and troubleshooting services for existing WordPress websites to improve performance and functionality.",
        },
        {
          title: "What are the costs associated with WordPress development?",
          content: "Costs vary depending on the complexity and customization of the project. Contact us for a free consultation and a personalized quote.",
        },
        {
          title: "Do you offer e-commerce WordPress development?",
          content: "Yes, we specialize in WooCommerce and can build a fully customized e-commerce website tailored to your business needs.",
        },
        {
          title: "How do you keep WordPress websites secure?",
          content: "We implement a range of security measures, including regular patch updates, secure hosting, SSL certificates, and the use of advanced security plugins to protect your site.",
        },
       
    ];

    return(
        <>
            <title>WordPress development in USA I WordPress development agency </title>
            <meta name="title" content="Wordpress Development Company USA | Wordpress Developer" />
            <meta name="description" content="Choose a trusted WordPress Development Company in USA. Hire expert WordPress developers to build custom, scalable & feature-rich websites for your business." />
         
            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">WordPress Development Company in the</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Build <span className="text-[#FFDD1A] font-bold">Scalable </span> and <span className="text-[#FFDD1A] font-bold">Custom Websites</span>.</div>
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
                            <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Service <span className="text-secondary">Overview</span></h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">At <span className="text-secondary">Reddensoft USA</span>, our <span className="text-secondary">WordPress development company in USA</span> empowers businesses to create and scale user-friendly, functional, and highly customizable websites. Whether you're looking for a simple blog, a professional portfolio, or an advanced e-commerce store, we offer <span className="text-secondary">WordPress web development services in USA</span> that align perfectly with your business goals. Our <span className="text-secondary">WordPress development company in USA</span> focuses on creating bespoke websites that are designed to grow with your business, offering seamless user experiences and exceptional performance</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Custom Solutions: </span>Our WordPress web development services in USA provide custom-configured WordPress websites designed to meet your specific business needs. These custom solutions enhance the user experience, providing your customers with the functionality and design that best fits your goals.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">Responsive Design: </span>We build responsive websites that ensure your site looks great and functions smoothly across all devices, from desktops to smartphones. Whether you’re browsing on a large screen or a mobile device, your WordPress site will always offer a top-notch experience.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Scalable Platforms: </span>Our WordPress development agency in USA offers scalable solutions that grow with your business. Whether you're a small business owner or a large organization, our websites are built to handle increased traffic and additional features with ease.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">SEO Optimized: </span>All our WordPress websites are designed with SEO best practices in mind. We ensure your website has the right SEO-optimized code, quality content, and current best practices to boost your search engine rankings and drive more organic traffic.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">User-Friendly CMS: </span>We provide an intuitive content management system (CMS) with WordPress, making it easy for you to build and maintain your website content. Our WordPress web developers ensure that your site is as easy to manage as it is to navigate.</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Enhanced Security: </span>We implement strong security measures to protect your website from potential threats. With our WordPress development services in USA, we ensure your site remains secure and your data protected through regular updates and robust security solutions.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={wordpressdevelopment} alt="Wordpress development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                    <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">Reddensoft?</span></h2>
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
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our </span> Workflow</h2>
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