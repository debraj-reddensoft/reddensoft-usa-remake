"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import webdevelopment from "@/assets/images/web-development.webp"
import websitedevelopment from "@/assets/images/website-development.webp"
import trispirescreen from "@/assets/images/trispire-screen.webp"
import robocentscreen from "@/assets/images/robocent-screen.webp"
import customwebdesign from "@/assets/images/custom-web-design.webp"
import ecommercedevelopment from "@/assets/images/ecommerce-development.webp"
import applicationdevelopment from "@/assets/images/application-development.webp"
import cms from "@/assets/images/cms.webp"
import redesign from "@/assets/images/redesign.webp"
import team from "@/assets/images/team.svg"
import tailordsolutions from "@/assets/images/tailord-solutions.svg"
import userfocused from "@/assets/images/user-focused.svg"
import responsivedesign from "@/assets/images/responsive-design.svg"
import seooptimized from "@/assets/images/seo-optimized.svg"
import agileproccess from "@/assets/images/agile-proccess.svg"
import endtoend from "@/assets/images/end-to-end.svg"
import supportmaintenance from "@/assets/images/support-maintenance.svg"
import rightarrow from "@/assets/images/right-arrow.png"
import Starfield from "@/components/StarField";
import Advertisement from "@/components/Advertisement";
import Link from "next/link";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioArea from "@/components/Portfolio";

export default function WebsiteDevelopment() {
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
            title: "Experienced Web Designers & Developers",
            desc: "Our team of web developers near me brings years of experience in creating high-performance, visually appealing websites for businesses of all sizes and industries. We combine technical expertise with creative design to deliver outstanding results.",
            icon: team,
        },
        {
            title: "Tailored Solutions",
            desc: "We don’t believe in one-size-fits-all solutions. Every website we create is custom-designed to meet your specific business requirements, ensuring a unique web presence that supports your brand and goals.",
            icon: tailordsolutions,
        },
        {
            title: "User-Focused Approach",
            desc: "We prioritize user experience, designing websites that are easy to navigate, visually engaging, and optimized for maximum engagement. Our designs foster smooth navigation, making it easy for users to take action.",
            icon: userfocused,
        },
        {
            title: "Responsive Design",
            desc: "All of our websites are mobile-first and responsive, ensuring they perform flawlessly on every device, from desktops to smartphones. This approach guarantees that your website looks great and functions optimally across all platforms.",
            icon: responsivedesign,
        },
        {
            title: "SEO-Optimized Websites",
            desc: "We integrate SEO best practices from the beginning of the project. By optimizing your website for search engines, we help improve your search engine rankings and visibility, bringing more organic traffic to your site.",
            icon: seooptimized,
        },
        {
            title: "Agile Development Process",
            desc: "With an agile approach, we ensure flexibility and quick turnaround for your website development project. Our iterative development process ensures regular feedback and alignment with your business objectives.",
            icon: agileproccess,
        },
        {
            title: "End-to-End Services",
            desc: "From the initial consultation and design to development, testing, and ongoing support, our website development company in USA offers end-to-end services to ensure a seamless experience throughout the entire process.",
            icon: endtoend,
        },
        {
            title: "Ongoing Support & Maintenance",
            desc: "Our job doesn’t end once the website is launched. We offer post-launch support and maintenance services to ensure your website remains secure, updated, and optimized for performance in the long term.",
            icon: supportmaintenance,
        },
    ];

    const workflows = [
        {
            title: "Initial Consultation",
            desc: "We start by understanding your business goals, target audience, and brand identity, which helps us create a strategy for your website development project.",
        },
        {
            title: "Research & Planning",
            desc: "We conduct in-depth research into your industry, competitors, and target audience. Based on this research, we develop a strategic plan to ensure your website meets your business objectives.",
        },
        {
            title: "Wireframing & Prototyping",
            desc: "We design wireframes and prototypes to map out the website structure and user journey. This ensures clarity on the website layout and user interactions before development begins.",
        },
        {
            title: "Design & Development",
            desc: "Our team transforms the wireframes into a visually appealing, fully functional website. We use the latest web development technologies to ensure scalability, performance, and security.",
        },
        {
            title: "Quality Assurance & Testing",
            desc: "We conduct rigorous testing on various devices and browsers to ensure your website functions smoothly. Our web development agency in USA tests for performance, user experience, and security to ensure everything works perfectly.",
        },
        {
            title: "Launch & Deployment",
            desc: "Once everything is approved, we launch your website. We make sure everything is set up correctly on your domain and fully optimized for performance.",
        },
        {
            title: "Post-Launch Support",
            desc: "After launch, we provide ongoing support and maintenance to keep your website secure, updated, and running at peak performance.",
        },
    ]

    const services = [
        {
            thumb: customwebdesign,
            title: "Custom Web Design",
            desc: "Our team of web developers near me crafts visually captivating and responsive web designs that reflect your brand and engage users. We focus on intuitive navigation, compelling visuals, and responsive design, ensuring every element of the website enhances the user experience.",
        },
        {
            thumb: websitedevelopment,
            title: "Web Development",
            desc: "Using the latest technologies, we develop high-performance websites that are scalable and secure. From front-end development using HTML5, CSS3, and JavaScript frameworks like React and Angular, to back-end development using Node.js, PHP, and Ruby on Rails, our web development agency in USA builds websites that are both visually appealing and functionally powerful.",
        },
        {
            thumb: ecommercedevelopment,
            title: "E-commerce Web Development",
            desc: "As an ecommerce website developer, we specialize in creating custom e-commerce platforms that drive sales and improve customer experience. Whether you're building a simple online store or a multi-vendor marketplace, we use platforms like Shopify, WooCommerce, Magento, and BigCommerce to deliver secure, scalable, and user-friendly solutions.",
        },
        {
            thumb: cms,
            title: "Content Management Systems (CMS)",
            desc: "We offer CMS development services that allow you to easily manage and update your website content. Specializing in platforms like WordPress, Drupal, and Joomla, our website design and development services in USA enable you to have complete control over your website content with an easy-to-use interface.",
        },
        {
            thumb: applicationdevelopment,
            title: "Web Application Development",
            desc: "We develop custom web applications tailored to your specific business needs. From customer portals to project management tools, our website development services in USA provide interactive, high-performance applications that offer real-time collaboration, security, and seamless user experiences.",
        },
        {
            thumb: redesign,
            title: "Website Redesign & Optimization",
            desc: "If your current website isn’t performing as expected, our team can help. We specialize in website redesign and development services in USA, improving user experience, load speed, and overall performance to increase conversions and enhance your online presence.",
        },
    ];

    const accordions = [
        {
            title: "How long does it take to build a website?",
            content: "The timeline varies depending on the complexity of the project. Typically, it takes about 6-12 weeks for a custom website, but we’ll provide a more accurate estimate based on your specific needs.",
        },
        {
            title: "Do you offer SEO services for websites?",
            content: "Yes, we integrate SEO best practices into every website we build. We also offer dedicated SEO services to help improve your search engine rankings.",
        },
        {
            title: "Will my website be mobile-friendly?",
            content: "Absolutely! We design all our websites to be fully responsive, ensuring a seamless experience across desktops, tablets, and smartphones.",
        },
        {
            title: "Can you redesign my existing website?",
            content: "Yes, we specialize in redesigning websites. We’ll work with you to refresh your site’s design and optimize it for better user experience, performance, and SEO.",
        },
        {
            title: "Do you offer ongoing website maintenance?",
            content: "Yes, we offer ongoing maintenance packages to ensure your website remains secure, updated, and performing well.",
        },
        {
            title: "What technologies do you use for web development?",
            content: "We use a wide range of technologies including HTML5, CSS3, JavaScript, PHP, React, Node.js, WordPress, and more, depending on your project requirements.",
        },
        {
            title: "Do you offer e-commerce development?",
            content: "Yes, we specialize in ecommerce website development using platforms like Shopify, WooCommerce, Magento, and BigCommerce to create secure and scalable e-commerce solutions.",
        },
    ];

    return(
        <>
            <title>Website development company I Website design and development services in USA</title>
            <meta name="title" content="Web Development Company USA | Web Development Services" />
            <meta name="description" content="Partner with a leading Web Development Company in USA. We deliver cutting-edge Web Development Services to create robust, scalable, and tailored solutions" />

            <div className="banner_bg h-[250px] md:h-[250px] xl:h-[450px] flex flex-col items-center justify-center px-5 2xl:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Website Development Company in the </div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">USA</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Building <span className="text-[#FFDD1A] font-bold">Engaging </span> & Scalable <span className="text-secondary font-bold">Websites</span>.</div>
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
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base xl:leading-6 font-nomral pt-3.5" data-aos="fade-right" data-aos-delay="100">At <span className="text-secondary">Reddensoft USA</span>, we specialize in creating stunning, high-performance websites that help businesses establish a strong and lasting online presence. <span className="text-secondary">Our website development company in USA</span> combines creativity with the latest technologies to build user-friendly, responsive websites that not only look fantastic but also deliver measurable results. Our <span className="text-secondary">website development services in USA</span> are designed to ensure your website performs optimally, engages users, and drives conversions.</h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary font-bold">Custom Web Solutions: </span>Our website development services in USA create bespoke websites tailored specifically for your business needs, target audience, and brand identity. We ensure every website is built to match your business goals and provide a personalized experience for your users.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Responsive & Mobile-Friendly: </span>Every website we develop is fully optimized for all devices, ensuring a seamless and intuitive user experience across desktops, tablets, and smartphones. As a website development company in USA, we ensure your site looks and performs beautifully no matter the device.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="300"><span className="text-secondary font-bold">SEO-Friendly Design: </span>Our websites are built with SEO best practices in mind to help improve your search engine rankings. From structure to content, every aspect of your site is designed to help you attract organic traffic and gain visibility on search engines.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="400"><span className="text-secondary font-bold">Scalable & Secure: </span>We build websites on scalable platforms that grow with your business. Security is also a top priority, ensuring that your website is protected from threats and meets compliance standards.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="500"><span className="text-secondary font-bold">Fast Loading Speed: </span>We optimize websites to load quickly, ensuring your visitors experience smooth, seamless browsing. Faster load times not only enhance user experience but also improve conversion rates and search engine rankings.</li>
                                <li className="list-disc text-sm xl:text-base font-normal py-2" data-aos="fade-right" data-aos-delay="600"><span className="text-secondary font-bold">Ongoing Support & Maintenance: </span>Post-launch, we offer ongoing support and maintenance to ensure your website stays up-to-date, secure, and fully optimized as your business grows and evolves.</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col justify-center self-center px-5">
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
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Our Workflow</span> Process</h2>
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