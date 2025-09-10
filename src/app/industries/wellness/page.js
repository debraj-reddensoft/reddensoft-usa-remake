"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import healthcaresolution from "@/assets/images/healthcare-solution.webp";
import dataprivacy2 from "@/assets/images/data-privacy-2.webp"
import legacysystem from "@/assets/images/legacy-system.webp"
import regulatorycompliance2 from "@/assets/images/regulatory-compliance-2.webp"
import costmanagement from "@/assets/images/cost-management.webp"
import patientengagement from "@/assets/images/patient-engagement.webp"
import Starfield from "@/components/StarField";
import healthcareexpertise from "@/assets/images/healthcare-expertise.svg"
import coresecurity from "@/assets/images/core-security.svg"
import comprehensivesolution from "@/assets/images/comprehensive-solution.svg"
import healthcareinnovation from "@/assets/images/healthcare-innovation.svg"
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";

export default function Wellness() {
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
            title: "Healthcare Expertise & Innovation",
            desc: "Reddensoft USA brings deep expertise in the healthcare sector, offering cutting-edge technology solutions that tackle the industry's most pressing challenges. Our solutions help organizations stay at the forefront of healthcare innovation.",
            icon: healthcareexpertise,
        },
        {
            title: "Comprehensive End-to-End Solutions",
            desc: "From telemedicine and AI diagnostics to EHR systems and big data analytics, we offer a complete suite of solutions designed to improve patient care, streamline operations, and ensure compliance with industry regulations.",
            icon: comprehensivesolution,
        },
        {
            title: "Custom Solutions Tailored for Healthcare Providers",
            desc: "At Reddensoft USA, we understand that each healthcare organization has unique needs. Our solutions are highly customizable, ensuring that we meet the specific demands of your institution and help you provide better care at optimized costs.",
            icon: healthcareinnovation,
        },
        {
            title: "Security & Compliance at the Core",
            desc: "We place the utmost importance on security and regulatory compliance. All of our healthcare solutions are designed to safeguard patient data and meet the highest standards for data protection, including HIPAA, GDPR, and other healthcare regulations.",
            icon: coresecurity,
        },
    ];

    const solutions = [
        {
            title: "Telemedicine & Virtual Care Platforms:",
            desc: "We help healthcare providers deploy and optimize telemedicine platforms that allow for secure, real-time consultations between patients and doctors. These platforms enhance accessibility and ease the burden on traditional healthcare facilities, improving the overall patient experience.",
        },
        {
            title: "AI & Machine Learning for Diagnostics & Decision Support:",
            desc: "We integrate AI-driven diagnostic tools that assist healthcare professionals in diagnosing conditions more quickly and accurately. Our machine learning algorithms can analyze medical images, genetic data, and patient records to deliver insights that lead to better patient outcomes.",
        },
        {
            title: "Electronic Health Records (EHR) Systems:",
            desc: "Reddensoft USA develops custom EHR solutions that streamline patient record management, enhance data accessibility, and improve communication between healthcare providers. Our EHR systems are designed to ensure regulatory compliance and optimize patient care.",
        },
        {
            title: "Wearable Health Devices & IoT Solutions:",
            desc: "We offer solutions to integrate wearable health devices into healthcare systems, enabling continuous patient monitoring. These devices provide healthcare providers with real-time data, allowing them to proactively manage patient conditions and improve overall care.",
        },
        {
            title: "Data Analytics & Healthcare Insights:",
            desc: "Reddensoft’s big data analytics platforms empower healthcare providers to leverage patient data for more informed decision-making. By analyzing vast amounts of healthcare data, we help organizations predict health trends, optimize treatments, and improve operational efficiency.",
        },
        {
            title: "Cybersecurity for Healthcare:",
            desc: "Securing patient data is critical in today’s healthcare landscape. Our cybersecurity solutions are tailored for the healthcare industry, providing comprehensive protection against cyberattacks. From threat detection to data encryption and secure cloud services, we ensure that healthcare systems remain safe and compliant.",
        },
    ];

    const services = [
        {
            thumb: dataprivacy2,
            title: "Data Security & Patient Privacy:",
            desc: "With the increasing digitization of healthcare data, protecting patient privacy has become one of the most significant concerns. Healthcare organizations must comply with regulations such as HIPAA and GDPR, all while safeguarding sensitive patient information from potential breaches.",
        },
        {
            thumb: legacysystem,
            title: "Integration of Legacy Systems:",
            desc: "Many healthcare organizations still operate on outdated infrastructure, and integrating these legacy systems with modern technologies is a major challenge. This lack of integration can lead to inefficiencies, fragmented care, and slow data exchange.",
        },
        {
            thumb: costmanagement,
            title: "Operational Efficiency & Cost Management:",
            desc: "Healthcare organizations are under constant pressure to deliver high-quality care while controlling costs. Implementing technology-driven automation, optimizing workflows, and reducing unnecessary overhead can help improve operational efficiency and reduce costs.",
        },
        {
            thumb: regulatorycompliance2,
            title: "Regulatory Compliance:",
            desc: "The healthcare sector is one of the most regulated industries. Adhering to ever-changing regulations can be daunting. Healthcare organizations need to ensure compliance with privacy laws, billing standards, and reporting regulations while avoiding penalties and safeguarding patient trust.",
        },
        {
            thumb: patientengagement,
            title: "Patient Engagement & Experience:",
            desc: "Patient expectations are evolving. Today’s patients demand convenience, personalized care, and a seamless experience. Healthcare providers must adapt to these demands by implementing technology that improves patient access, communication, and overall satisfaction.",
        },
    ];
        
    const objectives = [
        {
            title: "Telemedicine & Virtual Care:",
            desc: "Telemedicine is rapidly gaining popularity as it provides patients with greater flexibility and accessibility to healthcare services. Virtual care reduces the strain on physical healthcare facilities and has shown to improve patient outcomes, particularly in rural or underserved communities.",
        },
        {
            title: "AI-Driven Diagnostics & Decision Support:",
            desc: "AI and machine learning are transforming diagnostics by enabling faster, more accurate detection of diseases. AI-powered decision support systems help healthcare providers make data-driven treatment decisions, minimizing human error and improving patient care.",
        },
        {
            title: "Wearable Health Devices & Remote Monitoring:",
            desc: "Wearable health devices are becoming an essential tool in modern healthcare. Devices that monitor vital signs in real-time allow healthcare providers to manage patient care proactively, improving health outcomes and reducing the need for emergency interventions.",
        },
        {
            title: "Big Data & Predictive Analytics:",
            desc: "The use of big data and predictive analytics is changing how healthcare organizations make decisions. By analyzing vast amounts of patient and operational data, organizations can predict trends, detect health issues earlier, and optimize treatment protocols to improve patient outcomes.",
        },
        {
            title: "Personalized Medicine & Genomics:",
            desc: "Advances in genomics are enabling healthcare providers to deliver more personalized treatment plans tailored to individual genetic profiles. This results in more effective treatments and fewer adverse side effects, leading to better patient outcomes.",
        },
        {
            title: "Blockchain for Healthcare Data Management:",
            desc: "Blockchain technology offers a secure, transparent way to manage and share healthcare data. By utilizing blockchain, healthcare organizations can maintain data integrity and comply with regulatory standards while ensuring that patient data is securely shared across institutions.",
        },
    ];

  return(
    <>
        <title>Healthcare app development company USA I Reddensoft USA </title>
        <meta name="title" content="Wellness App Development Services USA | ReddenSoft USA" />
        <meta name="description" content="Boost your wellness business with expert app development services in USA. We create innovative, user-friendly solutions tailored to health & wellness needs." />

        <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-black 2xl:leading-[60px]">Transforming Healthcare with Innovative Technology Solutions</div>
                <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Revolutionizing Healthcare through <span className="text-[#FFDD1A] font-bold"> Advanced Technology </span></div>
            </div>
            <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} alt="Hero banner" priority width="auto" height="auto"/>
            <Starfield
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor="black"
            id="12"
            />
        </div>
        <div className="py-16 lg:py-24 overflow-hidden">
            <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
            <div className="flex flex-wrap -mx-5">
                <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                    <h2 className="lg:max-w-[650px] text-4xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Industry <span className="text-secondary"> Overview</span> </h2>
                    <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">The healthcare industry is rapidly evolving with the digital transformation fueled by advanced technologies</h3>
                    <h4 className="text-base font-semibold pt-4">Key Applications in Technology:</h4>
                    <ul className="lg:max-w-[650px] py-4 pl-5">
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Telemedicine & Virtual Health Services
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Electronic Health Records (EHR)
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200">Artificial Intelligence (AI) in Diagnostics & Treatment
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Internet of Things (IoT) for Patient Monitoring
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Big Data & Healthcare Analytics </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cloud Computing for Healthcare
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Healthcare Robotics
                        </li>
                        <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cybersecurity for Healthcare Systems</li>
                    </ul>
                </div>
                <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                    <div className="relative z-1">
                        <Image className="rounded-2xl w-full h-auto" src={healthcaresolution} alt="Healthcare solution icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Reddensoft's</span> Solutions for Healthcare</h2>
                        <p className="text-sm xl:text-base  font-light py-7" data-aos="fade-right" data-aos-delay="200">At Reddensoft USA, we provide innovative technology solutions designed to address the unique challenges of healthcare organizations. Our solutions enable seamless integration of cutting-edge technologies to improve patient care, increase operational efficiency, and ensure data security and compliance.</p>
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
                        <h2 className="max-w-lg text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">Industry <span className="text-black">Opportunities</span></h2>
                        <p className="lg:max-w-sm text-sm xl:text-base pt-4">Healthcare technology offers immense opportunities for organizations to enhance patient care, streamline operations, and innovate in the delivery of healthcare services.</p>
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
                    Enhance healthcare with Reddensoft's technology solutions. Innovate, streamline, and improve patient care today!
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