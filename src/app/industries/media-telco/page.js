"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import mediatelco from "@/assets/images/media-telco.webp"
import networkcongestion from "@/assets/images/network-congestion.webp"
import privacysecurity2 from "@/assets/images/privacy-security-2.webp"
import customerexperience2 from "@/assets/images/customer-experience-2.webp"
import operationalcosts from "@/assets/images/operational-costs.webp"
import networkcoverage from "@/assets/images/network-coverage.webp"
import Starfield from "@/components/StarField";
import mediatelcom from "@/assets/images/media-telco.svg"
import focussecurity from "@/assets/images/focus-security.svg"
import comprehensivesolution from "@/assets/images/comprehensive-solution.svg"
import tailordsolutions from "@/assets/images/tailord-solutions.svg"
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";

export default function MediaTelco() {

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
      title: "Industry Expertise & Innovation:",
      desc: "Reddensoft brings years of experience in the media and telecommunications sectors, delivering cutting-edge, technology-driven solutions that address the unique challenges and opportunities within the industry.",
      icon: mediatelcom,
    },
    {
      title: "Comprehensive Solutions for End-to-End Success:",
      desc: "From network optimization to content personalization and data analytics, Reddensoft offers a wide range of services to enhance your operations, improve customer engagement, and drive long-term success.",
      icon: comprehensivesolution,
    },
    {
      title: "Customized Solutions for Every Client:",
      desc: "We understand that each telecom and media business has its own set of needs and objectives. Our tailored solutions ensure your organization can thrive in today’s fast-changing landscape, increasing both efficiency and profitability.",
      icon: tailordsolutions,
    },
    {
      title: "Emphasis on Security & Compliance:",
      desc: "At Reddensoft, security is a top priority. We ensure that all our solutions are secure, compliant with industry standards, and designed to protect your data, network, and customers from emerging threats.",
      icon: focussecurity,
    },
  ];

  const solutions = [
    {
      title: "5G Network Optimization & Automation",
      desc: "Reddensoft empowers telecom providers to maximize the performance of their 5G networks through AI-driven automation, improving data speeds, user experiences, and operational efficiency.",
    },
    {
      title: "Cloud-Based Telecom Solutions",
      desc: "We offer cloud-based services that enable telecom operators to enhance their offerings, simplify network operations, and reduce the need for costly physical infrastructure. Our cloud solutions also improve content distribution across global networks.",
    },
    {
      title: "AI-Driven Content Personalization",
      desc: "Reddensoft leverages the power of AI and big data to help media companies create highly personalized content experiences, boosting user engagement and driving monetization opportunities.",
    },
    {
      title: "OTT Platform Development & Optimization",
      desc: "We support media companies in developing and optimizing their OTT platforms, delivering seamless content to a variety of devices, complete with secure payment solutions and real-time analytics for improved content strategies.",
    },
    {
      title: "Cybersecurity Solutions for Telecom",
      desc: "Safeguarding telecom and media infrastructures against cyber threats is paramount. Reddensoft provides comprehensive cybersecurity solutions, including real-time threat detection, encryption, and secure cloud-based services.",
    },
    {
      title: "Customer Insights & Data Analytics",
      desc: "Reddensoft helps media and telecom companies utilize big data to gain actionable insights into customer behavior, preferences, and trends. These insights empower more effective marketing and service delivery, leading to operational improvements and better customer experiences.",
    },
  ];

  const services = [
    {
      thumb: networkcongestion,
      title: "Network Congestion & Latency",
      desc: "With the growing demand for high-speed data and streaming services, telecom companies face challenges in managing network congestion and ensuring low-latency performance, particularly in urban and densely populated areas.",
    },
    {
      thumb: privacysecurity2,
      title: "Data Privacy & Security",
      desc: "Telecom companies manage vast amounts of sensitive data, making them prime targets for cyberattacks. Ensuring data protection and meeting privacy regulations, such as GDPR and CCPA, remains an ongoing challenge.",
    },
    {
      thumb: operationalcosts,
      title: "High Operational Costs",
      desc: "Telecom operators must balance improving service quality with controlling costs. Optimizing infrastructure and streamlining operations is key to maintaining competitiveness and profitability.",
    },
    {
      thumb: customerexperience2,
      title: "Customer Retention & Experience",
      desc: "In today’s competitive environment, retaining customers is more important than ever. Media and telecom companies need to enhance service offerings, provide excellent customer support, and offer personalized experiences to ensure loyalty.",
    },
    {
      thumb: networkcoverage,
      title: "Regulatory Compliance & Network Coverage",
      desc: "The telecommunications industry faces complex regulations while also striving to extend coverage to underserved areas. Adapting to regulatory changes and ensuring universal access is an ongoing challenge.",
    },
  ];
      
  const objectives = [
    {
      title: "5G & Next-Gen Networks",
      desc: "The deployment of 5G networks presents exciting opportunities for telecom companies to deliver ultra-fast speeds, ultra-low latency, and enhanced connectivity, paving the way for smart cities, autonomous vehicles, and immersive entertainment.",
    },
    {
      title: "Cloud Services & Virtualization",
      desc: "Cloud-based solutions enable telecom and media organizations to scale services more efficiently, reduce infrastructure costs, and provide more flexible offerings—ranging from content distribution to network optimization.",
    },
    {
      title: "AI-Driven Customer Insights",
      desc: "AI and machine learning tools allow telecom providers to proactively identify customer issues, deliver personalized experiences, and enhance customer service—improving both retention and satisfaction.",
    },
    {
      title: "OTT Platforms & Content Distribution",
      desc: "With the growing demand for OTT content, media companies have new opportunities to expand their reach, forge direct relationships with audiences, and deliver personalized content experiences.",
    },
    {
      title: "Cybersecurity as a Service",
      desc: "As digital threats increase, telecom and media companies can leverage advanced cybersecurity technologies to protect their networks and customer data from breaches, ransomware, and other attacks.",
    },
    {
      title: "Edge Computing for Faster Services",
      desc: "Edge computing is transforming how telecom companies process and deliver data, enabling faster decision-making and reduced latency for end-users accessing content and services.",
    },
  ];


  return(
      <>
          <title>Media and telco App solutions USA I Reddensoft USA </title>
          <meta name="title" content="Media & Telco App Development Services | ReddenSoft USA" />
          <meta name="description" content="Enhance your media & telecom business with expert app development services in USA. We deliver innovative, scalable solutions for the industry’s unique needs." />

          <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
              <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-black 2xl:leading-[60px]">Transforming Media & Telecom with Cutting-Edge Technology</div>
                <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Enhance your <span className="text-[#FFDD1A] font-bold">media and telecom operations</span> to boost customer engagement and streamline network management </div>
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
                    <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Industry <span className="text-secondary"> Overview</span> </h2>
                    <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">The media and telecommunications sector is rapidly evolving, fueled by the rise of digital technologies and growing consumer expectations for faster, more tailored services. To stay competitive, companies are integrating AI, 5G, cloud computing, and big data into their business models—whether delivering content across diverse platforms or managing complex communication networks</h3>
                    <h4 className="text-base font-semibold pt-4">Key Applications in Media & Telco:</h4>
                    <ul className="lg:max-w-[650px] py-4 pl-5">
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">5G Connectivity & Network Expansion</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cloud Solutions & Infrastructure</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200">AI-Driven Content Customization</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Over-the-Top (OTT) Streaming Platforms</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Big Data & Consumer Insights</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Virtual & Augmented Reality Experiences</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Telecom Network Management & Automation</li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cybersecurity for Media & Telecom</li>
                    </ul>
                </div>
                <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                    <div className="relative z-1">
                        <Image className="rounded-2xl w-full h-auto" src={mediatelco} alt="Media telco icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Reddensoft's</span> Solutions for Media & Telcom</h2>
                        <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">As a software solution supplier for the media and telco sectors, Reddensoft covers a wide range of topics, highlighting digital innovation and customer-centric solutions.  We contribute to the development of cutting-edge digital solutions that transform and reinvent the worldwide media and communication environment.</p>
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
                        <p className="lg:max-w-sm text-sm xl:text-base pt-4">Among the many services we offer to the media and telecommunications companies are 5G and next-generation networks, AI-driven customer insights, and more.</p>
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
                  Ready to revolutionize your media and telecom services? Let’s discuss how Reddensoft can help you innovate, improve customer experiences, and drive operational excellence.
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
                <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">Reddensoft</span></h2>
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