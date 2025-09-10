"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import fintech from "@/assets/images/fintech.webp";
import Starfield from "@/components/StarField";
import cybersecurity from "@/assets/images/cybersecurity.webp"
import customertrust from "@/assets/images/customer-trust.webp"
import protection from "@/assets/images/protection.webp"
import integration from "@/assets/images/integration.webp"
import regulatorycompliance from "@/assets/images/regulatory-compliance.webp"
import endtoendsolutions from "@/assets/images/end-to-end-solutions.svg"
import expertiseinnovation from "@/assets/images/expertise-innovation.svg"
import healthcareproviders from "@/assets/images/healthcare-providers.svg"
import globalpresence from "@/assets/images/global-presence.svg"
import scalablesolution from "@/assets/images/scalable-solution.svg"
import securityandcompliance from "@/assets/images/securityandcompliance.svg"
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";

export default function Fintech() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const solutions = [
        {
            title: "Blockchain & Cryptocurrency Solutions:",
            desc: "We assist fintech companies in implementing blockchain technologies to boost transaction transparency, lower costs, and improve security. Our blockchain solutions support cryptocurrency wallets, payment processing, and other decentralized financial services for seamless and secure transactions.",
        },
        {
            title: "AI-Driven Risk Management & Fraud Prevention:",
            desc: "Using machine learning and AI, we provide real-time fraud detection solutions that help identify suspicious activity and mitigate risks. Our AI algorithms evolve with emerging threats, continuously strengthening financial security and protecting both businesses and customers.",
        },
        {
            title: "Digital Payment Solutions: ",
            desc: "From mobile wallets and contactless payments to secure card-not-present transactions, Reddensoft USA delivers advanced digital payment systems. Our solutions streamline the payment process, reduce friction for consumers, and enhance the overall customer experience.",
        },
        {
            title: "Open Banking API Integrations: ",
            desc: "Our customized APIs enable fintech firms to integrate with third-party platforms, unlocking the potential of open banking. These integrations help you offer innovative, customer-centric financial solutions while expanding your digital service portfolio.",
        },
        {
            title: "Robo-Advisory Platforms:",
            desc: "We develop AI-based robo-advisory platforms that provide personalized investment strategies, portfolio management, and financial advice. Our solutions cater to both individual and institutional investors, providing an efficient way to manage assets and grow wealth.",
        },
        {
            title: "Regulatory Compliance Solutions (RegTech):",
            desc: "Stay ahead of the curve with our RegTech solutions that automate compliance with critical regulations such as KYC/AML, PSD2, and GDPR. These solutions simplify regulatory processes while ensuring your business remains fully compliant with industry standards.",
        },
        {
            title: "Customer Identity & Authentication Solutions:",
            desc: "Reddensoft USA offers cutting-edge identity verification, biometric authentication, and multi-factor authentication (MFA) solutions that strengthen security during customer onboarding and transactions. Our robust systems ensure the highest level of data protection."
        }
    ];

    const services = [
        {
            thumb: cybersecurity,
            title: "Cybersecurity & Fraud Prevention:",
            desc: "The rise of digital financial services has made fintech companies prime targets for cyberattacks and fraud. Securing sensitive financial data and preventing breaches are top priorities that require advanced technology solutions to stay ahead of evolving threats.",
        },
        {
            thumb: regulatorycompliance,
            title: "Regulatory Compliance:",
            desc: "Complying with constantly changing regulations—such as GDPR, PSD2, and KYC/AML requirements—remains a significant challenge for fintech companies. Meeting these regulations requires continuous monitoring and adaptable systems.",
        },
        {
            thumb: protection,
            title: "Data Privacy & Protection:",
            desc: "Handling vast amounts of personal and financial data comes with a critical need for robust data protection. Financial institutions must balance the need for innovation with the demand for strict data security and regulatory compliance.",
        },
        {
            thumb: integration,
            title: "Legacy Systems Integration:",
            desc: "Fintech companies often face difficulties when attempting to integrate modern technologies with outdated legacy systems. These integration challenges can hinder innovation and create inefficiencies, making it harder to compete in a fast-moving market.",
        },
        {
            thumb: customertrust,
            title: "Customer Trust & Adoption:",
            desc: "Gaining and maintaining consumer trust is a challenge for fintech companies. Providing secure, transparent, and user-friendly solutions is essential for driving customer adoption and long-term loyalty.",
        },
    ];
    
    const objectives = [
        {
            title: "AI & Machine Learning for Credit Scoring:",
            desc: "AI and machine learning enable fintech companies to create more inclusive, accurate credit scoring systems. By utilizing alternative data sources, AI-driven credit scoring models reduce biases and improve financial access for underbanked populations.",
        },
        {
            title: "Blockchain for Secure Payments & Transparency:",
            desc: "Blockchain technology provides a secure, decentralized platform for financial transactions. By reducing intermediaries and transaction costs, blockchain offers faster, more transparent payments—benefiting both consumers and financial institutions.",
        },
        {
            title: "Digital Wallets & Mobile Payments:",
            desc: "As mobile payment platforms and digital wallets continue to gain traction, fintech companies can provide simpler and more convenient payment solutions for consumers. The widespread use of contactless payments and mobile banking apps offers significant opportunities for innovation in financial services.",
        },
        {
            title: "Personalized Financial Services:",
            desc: "With AI and big data, fintech companies can deliver tailored financial products and services. Personalized investment recommendations, robo-advisory services, and customized insurance policies will enhance customer satisfaction and drive loyalty.",
        },
        {
            title: "Regtech Solutions:",
            desc: "RegTech offers opportunities for fintech companies to automate and streamline their compliance processes. These tools can minimize risk, reduce manual work, and help businesses meet regulatory requirements with greater efficiency.",
        },
        {
            title: "Open Banking & APIs:",
            desc: "Open banking, powered by secure APIs, allows fintech companies to offer new services such as account aggregation, lending, and cross-institutional payments. It drives innovation while ensuring compliance with regulatory standards.",
        },
    ];

    const designs = [
        {
            title: "Expertise in the Fintech Ecosystem:",
            desc: "With years of deep expertise in fintech and digital transformation, Reddensoft USA is well-positioned to help businesses succeed in the evolving financial services landscape.",
            icon: expertiseinnovation,
        },
        {
            title: "Comprehensive, End-to-End Fintech Solutions:",
            desc: "We offer a full range of fintech services, from blockchain integrations and AI-based fraud detection to compliance automation and mobile payment systems. Whatever your needs, we provide integrated solutions that drive results.",
            icon: endtoendsolutions,
        },
        {
            title: "Customized Solutions for Your Business:",
            desc: "No two financial businesses are the same. At Reddensoft USA, we understand that each organization has unique needs. Our tailored fintech solutions ensure that your business has the tools it needs to achieve your specific objectives.",
            icon: healthcareproviders,
        },
        {
            title: "Security & Compliance as a Priority:",
            desc: "Security and regulatory compliance are at the core of everything we do. We ensure that all our fintech solutions meet the highest standards of data protection, helping you operate securely and stay compliant.",
            icon: securityandcompliance,
        },
        {
            title: "Scalable & Flexible Solutions:",
            desc: "Our fintech solutions are designed to grow with your business. Whether you're a startup or a large financial institution, we offer scalable, flexible technology that can adapt to your needs as you expand.",
            icon: scalablesolution,
        },
        {
            title: "Local Expertise with Global Reach:",
            desc: "With offices in the USA and a worldwide client base, Reddensoft USA offers local expertise backed by a global perspective. We understand the intricacies of the American fintech market, combined with a robust international network for innovative solutions.",
            icon: globalpresence,
        },
    ];

    return(
        <>
        <title>Fintech app development company USA I Reddensoft USA </title>
        <meta name="title" content="Fintech App Development Services USA | ReddenSoft USA" />
        <meta name="description" content="Transform your fintech solutions with Reddensoft's app development services in USA. We deliver secure, and innovative financial technology solutions." />

          <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
              <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
              <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-black 2xl:leading-[60px]">Driving Innovation in Fintech with Cutting-Edge Technology Solutions</div>
                  <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Empowering <span className="text-[#FFDD1A] font-bold">Financial Services </span> with <span className="text-[#FFDD1A] font-bold"> Advanced Digital Solutions</span></div>
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
                    <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Industry  <span className="text-secondary"> Overview</span> </h2>
                    <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">The fintech sector is radically transforming the financial services landscape. By combining finance with advanced technologies like blockchain, artificial intelligence (AI), and digital payments, fintech is reshaping how financial services operate. It offers increased efficiency, improved customer service, and a broader reach, facilitating financial inclusion globally. From decentralized finance (DeFi) to smarter risk management, fintech is defining the future of finance</h3>
                    <h4 className="text-base font-semibold pt-4">Key Applications in Technology:</h4>
                    <ul className="lg:max-w-[650px] py-4 pl-5">
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Digital Payments
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Blockchain& Cryptocurrencies
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">AI for Risk Management & Fraud Detection
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Robo-Advisory & Wealth Management
                       </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Insurtech (Insurance Technology)
                       </li>
                       <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Regtech (Regulatory Technology)
                       </li>
                    </ul>
                </div>
                <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                    <div className="relative z-1">
                        <Image className="rounded-2xl w-full h-auto" src={fintech} alt="Fintech icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                    <ul className="max-w-4xl flex flex-wrap justify-center -mx-2">
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
                    <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Reddensoft's</span> Fintech Solutions</h2>
                        <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Reddensoft USA offers a broad spectrum of fintech solutions designed to meet the specific needs of financial institutions, businesses, and startups. Our solutions harness the latest technologies to optimize financial services and increase efficiency.</p>
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
                            <h2 className="max-w-lg text-3xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">Industry <span className="text-black">Opportunities</span></h2>
                            <p className="lg:max-w-sm text-sm xl:text-base pt-4">Fintech offers numerous opportunities to enhance financial services and deliver innovative, customer-first solutions. The following trends present significant opportunities for growth:</p>
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
                Interested in transforming your fintech business? Let's discuss how we can help you innovate and grow with our fintech solutions.
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
                    <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">Reddensoft USA</span></h2>
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