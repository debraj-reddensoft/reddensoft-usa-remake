"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import cybersecuritysolution from "@/assets/images/cybersecurity-solution.webp";
import Starfield from "@/components/StarField";
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import advancedcybersecurity from "@/assets/images/advanced-cybersecurity.svg"
import comprehensivesecurity from "@/assets/images/comprehensive-security.svg"
import threatdetection from "@/assets/images/threat-detection.svg"
import dataprivacy from "@/assets/images/data-privacy.webp"
import cyberthreats from "@/assets/images/cyber-threats.webp"
import insiderthreats from "@/assets/images/insider-threats.webp"
import cybersecurityprofessionals from "@/assets/images/cybersecurity-professionals.webp"
import cloudinfrastructure from "@/assets/images/cloud-infrastructure.webp"
import supplychainrisks from "@/assets/images/supply-chain-risks.webp"
import { useEffect } from "react";
import AOS from "aos";

export default function CyberSecurity() {
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
        title: "Cutting-Edge Cybersecurity Expertise",
        desc: "We offer deep expertise in delivering next-gen cybersecurity solutions powered by artificial intelligence, machine learning, and real-time threat intelligence to protect your business from today’s most advanced cyber threats.",
        icon: threatdetection,
      },
      {
        title: "Comprehensive, End-to-End Security Solutions",
        desc: "From cloud and endpoint security to penetration testing and regulatory compliance, we provide a complete suite of cybersecurity services that address your business's unique challenges.",
        icon: comprehensivesecurity,
      },
      {
        title: "Tailored Solutions to Meet Your Needs",
        desc: "We understand that every organization is unique, and we offer customized cybersecurity strategies and solutions to ensure your business stays protected against evolving threats.",
        icon: advancedcybersecurity,
      },
      {
        title: "Focus on Compliance & Data Privacy",
        desc: "Our solutions prioritize compliance with global regulations such as GDPR, CCPA, HIPAA, and others. We ensure your organization not only remains secure but also meets legal and regulatory standards.",
        icon: advancedcybersecurity,
      },
      {
        title: "Scalable Security for Growing Businesses",
        desc: "As your business grows, so do your security needs. Our solutions are designed to scale with your organization, providing robust protection no matter how complex your digital infrastructure becomes.",
        icon: advancedcybersecurity,
      },
      {
        title: "Local Expertise, Global Reach",
        desc: "With our U.S. presence and global experience, Reddensoft USA delivers localized, effective cybersecurity solutions to businesses worldwide.",
        icon: advancedcybersecurity,
      },
    ];

    const solutions = [
      {
        title: "Advanced Threat Detection & Prevention",
        desc: "Using AI and machine learning, our threat detection solutions identify potential cyber threats in real time. We work proactively to safeguard your organization by recognizing vulnerabilities before they are exploited, preventing damage before it occurs.",
      },
      {
        title: "Managed Security Services (MSS)",
        desc: "Our MSS team provides 24/7 monitoring, immediate threat detection, and fast response strategies to protect your business continuously. We help mitigate security risks, address vulnerabilities, and ensure compliance with evolving industry regulations.",
      },
      {
        title: "Cloud Security & Data Protection",
        desc: "As businesses move more data and applications to the cloud, robust cloud security becomes essential. Reddensoft offers solutions that include data encryption, secure access management, and continuous monitoring to protect cloud infrastructures from advanced threats.",
      },
      {
        title: "Endpoint Security",
        desc: "We offer advanced endpoint security solutions that provide real-time protection for all devices within your organization—whether mobile phones, laptops, or IoT devices—against malware, ransomware, and phishing attacks. Our approach ensures all access points are secured.",
      },
      {
        title: "Identity & Access Management (IAM)",
        desc: "With Reddensoft’s IAM solutions, you can enforce strict user authentication measures and access controls. By implementing Multi-Factor Authentication (MFA), role-based access controls (RBAC), and Single Sign-On (SSO), we ensure only authorized users can access critical data and systems.",
      },
      {
        title: "SIEM (Security Incident & Event Management)",
        desc: "Our SIEM solutions aggregate and analyze data from across your network, enabling early detection of suspicious activity. The platform provides a centralized approach to security event management, ensuring compliance and swift response to potential incidents.",
      },
      {
        title: "Penetration Testing & Vulnerability Management",
        desc: "We conduct thorough penetration testing and vulnerability assessments to help you identify weaknesses in your network and systems. Our experts offer actionable recommendations to close gaps and strengthen your security defenses.",
      },
      {
        title: "Compliance & Regulatory Security",
        desc: "Reddensoft USA helps your organization meet various regulatory requirements, including GDPR, HIPAA, PCI-DSS, and CCPA. We streamline the compliance process to avoid costly fines and reputational damage while safeguarding customer and business data.",
      },
      {
        title: "Incident Response & Disaster Recovery",
        desc: "In the event of a cyberattack or data breach, our expert incident response team is on standby to help you recover. We assist in minimizing downtime, restoring critical business operations, and mitigating the long-term impact of cyber incidents.",
      },
      {
        title: "Cybersecurity Consulting & Strategy",
        desc: "We provide high-level cybersecurity consulting services, including Chief Information Security Officer (CISO) advisory, to help your organization create a robust security strategy, implement best practices, and stay ahead of emerging threats.",
      },
    ]

    const services = [
      {
        thumb: cyberthreats,
        title: "Escalating Threats & Advanced Cyberattacks",
        desc: "Cyber threats are continuously evolving, with cybercriminals using increasingly sophisticated tools and techniques. From targeted attacks to zero-day vulnerabilities and ransomware, organizations must stay ahead of these constantly changing risks to protect their systems and data.",
      },
      {
        thumb: dataprivacy,
        title: "Data Privacy & Regulatory Compliance",
        desc: "Strict data protection regulations such as GDPR, CCPA, and HIPAA demand that businesses handle sensitive information securely. Non-compliance can lead to substantial penalties, legal consequences, and damage to a company’s reputation.",
      },
      {
        thumb: insiderthreats,
        title: "Insider Threats & Human Error",
        desc: "Both malicious and inadvertent insider threats can have devastating consequences. Employees, contractors, and partners with access to sensitive information pose a unique risk, which requires specific strategies to detect and prevent.",
      },
      {
        thumb: cloudinfrastructure,
        title: "Securing Remote Work & Cloud Environments",
        desc: "The rapid transition to remote work and increased reliance on cloud services have expanded the potential attack surface. Organizations must ensure secure access to resources, protect sensitive data in the cloud, and manage the risks that come with remote employees and third-party services.",
      },
      {
        thumb: cybersecurityprofessionals,
        title: "Shortage of Skilled Cybersecurity Talent",
        desc: "The global cybersecurity skills gap continues to be a significant issue. Finding and retaining qualified cybersecurity professionals who can identify and combat new, complex threats is one of the biggest challenges businesses face today.",
      },
      {
        thumb: supplychainrisks,
        title: "Third-Party & Supply Chain Security",
        desc: "With an interconnected digital ecosystem, third-party vendors often serve as entry points for cyberattacks. Managing third-party risks is critical to protecting your business and avoiding the cascading impact of supply chain-related vulnerabilities.",
      },
    ];

    const objectives = [
      {
        title: "AI & Machine Learning for Cyber Defense:",
        desc: "AI and machine learning are driving breakthroughs in threat detection and response. By leveraging predictive analytics and automating security tasks, organizations can prevent attacks before they happen, improving the overall effectiveness and speed of cybersecurity operations.",
      },
      {
        title: "Zero Trust Architecture (ZTA):",
        desc: "The Zero Trust model, which assumes no entity, whether inside or outside the network, is inherently trustworthy, is becoming increasingly popular. By strictly verifying user identities and controlling access to critical resources, businesses can significantly reduce the likelihood of a breach.",
      },
      {
        title: "Cloud Security Innovations:",
        desc: "As more businesses migrate to the cloud, there’s a growing need for enhanced cloud security. Using encrypted data, secure access controls, and continuous cloud monitoring, companies can mitigate the risks of data breaches and unauthorized access in cloud environments.",
      },
      {
        title: "Cybersecurity Automation:",
        desc: "Automated tools allow organizations to streamline threat detection and incident response, significantly improving efficiency. Automation not only reduces the chance of human error but also accelerates response times, enabling rapid defense against emerging threats.",
      },
      {
        title: "Protecting IoT Devices:",
        desc: "The growing adoption of IoT devices brings new security challenges. As these devices become more interconnected, they offer new attack vectors that need to be secured. Companies are now focusing on enhancing IoT security to ensure the integrity of their connected infrastructure.",
      },
      {
        title: "MSS (Managed Security Services):",
        desc: "More businesses are outsourcing their security needs to Managed Security Service Providers (MSSPs) to ensure continuous protection. By relying on expert MSSPs, organizations can access 24/7 security monitoring, incident response, and threat intelligence without the overhead of building an in-house team.",
      },
    ]

    return(
        <>          
          <title>Cybersecurity service  agency in USA I Reddensoft USA  </title>
          <meta name="title" content="Cybersecurity Services in USA | ReddenSoft USA " />
          <meta name="description" content="Protect your business with Reddensoft’s cybersecurity services in USA. We provide robust, tailored solutions to safeguard your digital assets and ensure security." />

          <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
              <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                  <div className="max-w-5xl mx-auto text-xl md:text-2xl lg:text-4xl xl:text-5xl font-black 2xl:leading-[55px]">Protecting Your Digital Assets with Advanced Cybersecurity Solutions </div>
                  <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Stay Ahead of Evolving Cyber Threats with Reddensoft’s <span className="text-[#FFDD1A] font-bold"> Security Solutions  </span>.</div>
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
                    <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">As digital landscapes expand, cyber threats are becoming more complex and frequent. Cybersecurity has shifted from a luxury to a necessity for businesses across all industries and sizes. From ransomware and phishing to data breaches and insider threats, companies must continuously enhance their security posture to stay protected.</h3>
                    <h4 className="text-base font-semibold pt-4">Key Areas in Cybersecurity:</h4>
                    <ul className="lg:max-w-[650px] py-4 pl-5">
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Threat Intelligence & Prevention</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Managed Security Services (MSS)</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Data Encryption & Privacy Solutions</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Cloud Security & Protection</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Endpoint Protection & Monitoring</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Network Defense & Security</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Identity & Access Control Management</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Security Incident & Event Management (SIEM)</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Compliance & Regulatory Support</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Vulnerability Assessments & Pen Testing</li>
                    </ul>
                </div>
                <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                    <div className="relative z-1">
                        <Image className="rounded-2xl w-full h-auto" src={cybersecuritysolution} alt="Cybersecurity solution icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Reddensoft's</span> Cybersecurity Solutions</h2>
                        <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">At Reddensoft USA, we provide a range of cutting-edge cybersecurity solutions designed to ensure the protection, confidentiality, and integrity of your critical data and systems. Our advanced technologiesenable us to deliver security at every level, from threat prevention to regulatory compliance.</p>
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
                                    <p className="text-base xl:text-lg font-light" dangerouslySetInnerHTML={{__html: service.desc}}></p>
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
                        <p className="lg:max-w-sm text-sm xl:text-base pt-4">The cybersecurity space offers numerous opportunities for innovation and enhanced defense strategies:</p>
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
                Ready to leverage AI for your business? Let's talk about how Reddensoft can help you innovate and grow.
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
                <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">Reddensoft USA?</span></h2>
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