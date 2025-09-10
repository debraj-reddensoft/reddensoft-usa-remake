"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import technology from "@/assets/images/technology.webp";
import innovation from "@/assets/images/innovation.svg";
import customsolutions from "@/assets/images/custom-solutions.svg";
import futureproof from "@/assets/images/future-proof-solutions.svg";
import endtechnology from "@/assets/images/end-to-end-technology.svg";
import securitycompliance from "@/assets/images/security-compliance.svg";
import localexpertise from "@/assets/images/local-expertise.svg";
import Starfield from "@/components/StarField";
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import datasecurity from "@/assets/images/data-security.webp"
import legacysystems from "@/assets/images/legacy-systems.webp"
import scalabilityperformance from "@/assets/images/scalability-performance.webp"
import talentshortage from "@/assets/images/talent-shortage.webp"
import technologyadoption from "@/assets/images/technology-adoption.webp"
import { useEffect } from "react";
import AOS from "aos";

export default function Technology() {
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
            title: "Expertise & Innovation in Technology:",
            desc: "At Reddensoft USA, we combine cutting-edge technology expertise with a commitment to driving innovation. Our team is dedicated to delivering exceptional digital solutions that solve complex business problems.",
            icon: innovation,
        },
        {
            title: "Tailored Solutions for Every Business:",
            desc: "We understand that each company has its own unique needs. That’s why we offer bespoke solutions tailored specifically to your industry, maximizing results and ROI.",
            icon: customsolutions,
        },
        {
            title: "Scalable Solutions for Growth:",
            desc: "Whether you're scaling up or expanding into new markets, Reddensoft’s solutions are designed to grow with your business, providing the flexibility and agility you need to thrive in an ever-evolving landscape.",
            icon: futureproof,
        },
        {
            title: "Comprehensive Technology Services:",
            desc: "From initial consulting to final implementation and ongoing support, Reddensoft offers end-to-end services. We’re your long-term partner for digital transformation, helping you navigate every stage of the journey.",
            icon: endtechnology,
        },
        {
            title: "Security & Compliance at the Core:",
            desc: "We prioritize security in all our solutions, ensuring that your systems are protected, compliant with industry standards, and built to mitigate emerging threats in the digital world.",
            icon: securitycompliance,
        },
        {
            title: "Global Expertise, Local Impact:",
            desc: "With offices in the USA and a worldwide customer base, Reddensoft blends local industry knowledge with global reach, delivering innovative technology solutions that meet the highest standards of excellence.",
            icon: localexpertise,
        },
    ];

    const solutions = [
        {
            title: "Cloud Solutions & Infrastructure:",
            desc: "Reddensoft delivers complete cloud services, from migration to full infrastructure management, ensuring businesses have scalable, flexible, and cost-effective cloud environments. We partner with top cloud platforms like AWS, Azure, and Google Cloud.",
        },
        {
            title: "AI & Machine Learning Solutions:",
            desc: "Harness the potential of AI and machine learning to create more intelligent automation systems, predictive models, and data-driven insights, enhancing decision-making across all business areas.",
        },
        {
            title: "Custom Software Development:",
            desc: "Our team designs and develops tailored software solutions, whether it's mobile apps, enterprise software, or cloud-native platforms, ensuring they are scalable, secure, and optimized for your business.",
        },
        {
            title: "Robotic Process Automation (RPA):",
            desc: "Eliminate manual tasks with Reddensoft's RPA solutions, automating repetitive processes in customer service, data entry, and more to improve efficiency and allow your team to focus on higher-value work.",
        },
        {
            title: "Cybersecurity Solutions:",
            desc: "We provide comprehensive cybersecurity services, including threat detection, vulnerability analysis, incident response, and data protection, safeguarding your business against evolving cyber threats.",
        },
        {
            title: "IoT Solutions:",
            desc: "Reddensoft offers end-to-end IoT capabilities, from device connectivity to real-time data collection, enabling smarter decision-making and optimization across industries like manufacturing, healthcare, and retail.",
        },
        {
            title: "Data Analytics & Business Intelligence (BI):",
            desc: "Transform your data into actionable insights with Reddensoft's advanced analytics solutions, helping your business identify trends, forecast market changes, and optimize operational strategies.",
        },
        {
            title: "DevOps & CI/CD:",
            desc: "Enhance your software development lifecycle with Reddensoft’s DevOps and CI/CD services, accelerating your release cycles and improving code quality and consistency through automation.",
        },
    ]

    const services = [
        {
            thumb: datasecurity,
            title: "Data Security & Privacy:",
            desc: "As more businesses transition to digital platforms, the risk of data breaches and cyber threats escalates. Ensuring that sensitive information remains secure and adheres to privacy laws is a top priority for organizations today",
        },
        {
            thumb: legacysystems,
            title: "Legacy System Compatibility:",
            desc: "Integrating new technologies with outdated systems remains a significant hurdle for many businesses, slowing down the adoption of modern tech and reducing overall operational efficiency.",
        },
        {
            thumb: talentshortage,
            title: "Talent Shortage & Expertise Gap:",
            desc: "The fast-growing demand for technology specialists, particularly in AI, cybersecurity, and cloud computing, has led to a critical shortage of skilled professionals, posing a challenge to tech advancement.",
        },
        {
            thumb: technologyadoption,
            title: "Adoption & Transformation Challenges:",
            desc: "Many organizations struggle with adapting to new technologies due to resistance from employees or lack of strategic planning. Successfully managing the transformation process is key to ensuring smooth adoption.",
        },
        {
            thumb: scalabilityperformance,
            title: "Scalability & Performance:",
            desc: "With growth comes complexity. Businesses need technology solutions that can scale alongside their increasing demands, ensuring system performance and stability as operations expand.",
        },
    ];

    const objectives = [
        {
            title: "Cloud Transformation:",
            desc: "With cloud adoption accelerating, businesses are moving away from traditional infrastructure. Cloud technologies offer flexibility, cost-efficiency, and global access, empowering organizations to operate more effectively.",
        },
        {
            title: "AI & Automation to Boost Efficiency:",
            desc: "AI and automation tools are reshaping business operations. Whether it's through chatbots, robotic process automation (RPA), or advanced data analytics, AI is helping companies increase productivity and streamline workflows.",
        },
        {
            title: "Actionable Data Insights:",
            desc: "Big data analytics offers businesses a goldmine of insights that can drive strategic decisions, customer insights, and operational improvements, ultimately increasing business agility.",
        },
        {
            title: "Cybersecurity Solutions for a Digital Age:",
            desc: "As cyber threats evolve, businesses need cutting-edge cybersecurity to protect against data breaches, ransomware, and sophisticated attacks. AI and machine learning are essential in fortifying defenses.",
        },
        {
            title: "IoT for Smarter Operations:",
            desc: "The Internet of Things is revolutionizing industries by offering real-time data and predictive analytics. From smart cities to advanced manufacturing, IoT is transforming business models and driving operational optimization.",
        },
        {
            title: "SaaS Growth and Innovation:",
            desc: "The demand for SaaS solutions continues to surge, as companies embrace cloud-based software for everything from CRM systems to project management tools, optimizing operations and reducing overhead.",
        },
    ]


    return(
        <>
        <title>Technology app development USA I Advanced tech solutions USA </title>
        <meta name="title" content="Technology App Development Services | ReddenSoft USA" />
        <meta name="description" content="Unlock innovative technology solutions with Reddensoft's app development services in USA. We deliver cutting-edge, scalable solutions for diverse industries." />

        <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-black 2xl:leading-[60px]">Shaping the Future of Technology, Today</div>
                <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Empower your business with the latest <span className="text-[#FFDD1A] font-bold">technological innovations</span> and <span className="text-[#FFDD1A] font-bold">digital transformation</span></div>
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
        <div className="py-16 lg:py-24 overflow-hidden">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                <div className="flex flex-wrap -mx-5">
                    <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                        <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Industry <span className="text-secondary"> Overview </span></h2>
                        <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">The technology sector stands at the forefront of digital evolution, offering groundbreaking advancements that influence virtually every aspect of business. From cloud computing to AI-driven automation, companies across industries are leveraging technology to stay competitive in a fast-moving market.</h3>
                        <h4 className="text-base font-semibold pt-4">Key Applications in Technology:</h4>
                        <ul className="lg:max-w-[650px] py-4 pl-5">
                            <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cloud Computing & Cloud Infrastructure
                            </li>
                            <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Artificial Intelligence (AI) & Machine Learning (ML)</li>
                            <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Internet of Things (IoT)
                            </li>
                            <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Big Data & Analytics
                            (IoT)
                            </li>
                            <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cybersecurity
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Digital Transformation & Automation
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Software Development & DevOps

                        </li>
                        </ul>
                    </div>
                    <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                        <div className="relative z-1">
                            <Image className="rounded-2xl w-full h-auto" src={technology} alt="Technology icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Reddensoft's</span> Solutions for Technology</h2>
                        <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Reddensoft as a technology solution provider, works for next-gen engineering software frameworks for development and management, cloud migration for future edge computing solutions. Follow our services for digital transformation, consultation and software solution.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 py-16 lg:py-24">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1024px] mx-auto z-1 px-5 2xl:px-0">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-black text-center sm:mb-5 lg:mb-10" data-aos="zoom-in-up">Industry Challenges</h2>
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
                    <h2 className="max-w-lg text-3xl 2xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">Industry <span className="text-black">Opportunities</span></h2>
                        <p className="lg:max-w-sm text-sm xl:text-base pt-4">Reddensoft, a top tier technology solution provider has specialization in cloud transformation, AI and automation, cybersecurity innovation and data-driven insights and analytics. </p>
                        <div className="flex justify-center mt-10">
                            <GlobalButton title="Get a Free Quote" link="/contact-form"/>
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
        <div className="banner_bg py-16 xl:py-24">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative  z-1 px-5 2xl:px-0">
              <h3 className="text-white text-[25px] md:text-[40px] md:leading-[50px] leading-[33px] font-bold max-w-full md:max-w-[900px] mx-auto text-center">
                Transform your business with Reddensoft's technology solutions. Let's discuss how we can help you innovate and grow.
              </h3>
              <div className="flex justify-center mt-10">
                <GlobalButton title="Schedule Free Consultation" link="/contact-form"/>
              </div>
            </div>
            <Starfield
              starCount={1000}
              starColor={[255, 255, 255]}
              speedFactor={0.05}
              backgroundColor="black"
              id="14"
            />
        </div>
          
        <div className="bg_element flip py-16 lg:py-24">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative px-5 2xl:px-0">
                <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">Why Partner with <span className="text-secondary">Reddensoft</span> </h2>
                <ul className="flex flex-wrap justify-center -mx-4">
                    { designs.map((design, d) => (
                        <li className="w-full sm:w-1/2 lg:w-1/3 p-4" key={d} data-aos="fade-up" data-aos-delay={200 + (d * 100)}>
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

        <div className="bg_element pb-28 2xl:pb-28 border-b border-[#dadada]">
            <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                <Testimonials />
            </div>
        </div>
    </>
    )
}