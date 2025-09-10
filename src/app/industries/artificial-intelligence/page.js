"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import artificialintelligence from "@/assets/images/artificial-intelligence.webp";
import Starfield from "@/components/StarField";
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import privacysecurity from "@/assets/images/privacy-security.webp"
import biasethical from "@/assets/images/bias-ethical.webp"
import implementationcost from "@/assets/images/implementation-cost.webp"
import integrationlegacysystems from "@/assets/images/integration-legacy-systems.webp"
import skillgaps from "@/assets/images/skill-gaps.webp"
import aiexpertise from "@/assets/images/ai-expertise.svg"
import coreinnovation from "@/assets/images/core-innovation.svg"
import endtoendai from "@/assets/images/end-to-end-ai.svg"
import globalexpertise from "@/assets/images/global-expertise.svg"
import scalablesecure from "@/assets/images/scalable-secure.svg"
import tailoredai from "@/assets/images/tailored-ai.svg"
import { useEffect } from "react";
import AOS from "aos";

export default function ArtificialIntelligence() {
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
          title: "Deep Expertise in AI Technologies",
          desc: "With years of experience in AI, Reddensoft USA is a trusted partner for businesses seeking to harness the power of AI. Our team of experts is committed to delivering cutting-edge solutions that drive innovation and deliver measurable results.",
          icon: aiexpertise,
      },
      {
          title: "Comprehensive End-to-End AI Services",
          desc: "From initial consulting and strategy development to full-scale AI implementation and support, we provide a comprehensive range of services to ensure your AI projects are successful and sustainable.",
          icon: endtoendai,
      },
      {
          title: "Tailored AI Solutions for Every Business",
          desc: "At Reddensoft USA, we understand that every business has unique needs. Our custom AI solutions are designed to address specific business challenges and deliver maximum value, ensuring a high return on investment.",
          icon: tailoredai,
      },
      {
          title: "Innovation-Driven Approach",
          desc: "We’re committed to staying at the forefront of AI innovation. Our solutions are designed to evolve with technological advancements, ensuring your business stays competitive in a rapidly changing digital landscape.",
          icon: coreinnovation,
      },
      {
          title: "Scalable and Secure AI Systems",
          desc: "Our AI solutions are designed to scale with your business and meet the highest standards of data security and compliance. Whether you’re a startup or a large enterprise, our systems are built to grow with you.",
          icon: scalablesecure,
      },
      {
          title: "Global Expertise with Local Presence",
          desc: "With offices in the USA and a global client base, we offer both local expertise and the capability to deliver solutions at scale, regardless of where your business operates.",
          icon: globalexpertise,
      },
    ];

    const solutions = [
      {
        title: "AI-Powered Data Analytics",
        desc: "Harness the power of advanced machine learning models to analyze vast amounts of data and uncover valuable insights that can guide business decisions. Our data analytics solutions empower organizations to make smarter, more informed choices, whether it’s optimizing operations or enhancing customer relationships.",
      },
      {
        title: "Natural Language Processing (NLP) Solutions",
        desc: "Transform your business interactions with NLP technology. From chatbots and virtual assistants to sentiment analysis and customer support, we help businesses integrate NLP solutions that enable machines to understand and respond to human language in a meaningful way.",
      },
      {
        title: "AI-Driven Automation & Robotics",
        desc: "Automate routine tasks and optimize business processes using AI-powered robotics and intelligent automation solutions. From robotic process automation (RPA) to fully autonomous systems, we help businesses boost productivity and reduce human error by integrating smart automation technologies.",
      },
      {
        title: "Predictive Maintenance for IoT",
        desc: "Minimize downtime and improve operational efficiency with AI-driven predictive maintenance solutions. By analyzing data from IoT-enabled devices, we help industries such as manufacturing and logistics forecast equipment failures and prevent costly disruptions.",
      },
      {
        title: "AI-Enhanced Cybersecurity",
        desc: "Stay ahead of evolving cyber threats with AI-powered cybersecurity solutions. Our intelligent security systems use machine learning to identify emerging threats in real-time, enabling businesses to proactively safeguard sensitive data and systems against breaches.",
      },
      {
        title: "Custom AI Solutions for Enterprise Needs",
        desc: "We specialize in creating tailored AI solutions designed to meet the specific demands of your business. Whether it’s personalized recommendations in e-commerce or advanced fraud detection in financial services, we develop AI systems that deliver value and optimize performance for your organization.",
      },
    ]

    const services = [
      {
        thumb: privacysecurity,
        title: "Data Privacy and Security:",
        desc: "As AI adoption grows, the volume of sensitive data processed by businesses increases. Ensuring robust data privacy protections and compliance with regulations such as GDPR is essential to mitigate risks and maintain customer trust.",
      },
      {
        thumb: integrationlegacysystems,
        title: "Integration with Legacy Systems:",
        desc: "Many organizations still rely on older IT systems that are difficult to integrate with new AI technologies. Bridging the gap between traditional infrastructure and AI solutions can be a complex process, limiting the full potential of AI.",
      },
      {
        thumb: skillgaps,
        title: "Shortage of AI Talent:",
        desc: "There is a global shortage of skilled AI professionals, making it difficult for many businesses to effectively deploy and manage AI solutions. This skills gap can hinder progress, especially for smaller enterprises looking to leverage AI technologies.",
      },
      {
        thumb: biasethical,
        title: "Addressing Bias & Ethical Issues:",
        desc: "AI systems can inherit biases from the data they’re trained on, which may lead to unfair outcomes, especially in high-risk industries like finance, healthcare, and hiring. Ensuring AI ethics and transparency is crucial to mitigating these challenges and maintaining fairness.",
      },
      {
        thumb: implementationcost,
        title: "High Implementation Costs:",
        desc: "Despite the clear benefits of AI, the initial investment in AI technology can be a barrier, particularly for smaller businesses with limited budgets. Companies must carefully consider the long-term ROI to justify the upfront costs of AI implementation.",
      },
    ];

    const objectives = [
      {
        title: "Personalization at Scale:",
        desc: "AI enables businesses to deliver personalized experiences that meet the unique needs of each customer. In industries like retail, finance, and entertainment, AI-driven personalization enhances customer satisfaction and loyalty, increasing revenue.",
      },
      {
        title: "Predictive Analytics for Smarter Decisions:",
        desc: "AI and big data analytics empower businesses to predict future trends, customer behavior, and potential disruptions in the supply chain. By leveraging AI, organizations can make proactive decisions that improve efficiency and reduce risk.",
      },
      {
        title: "Automation for Increased Efficiency:",
        desc: "Automating repetitive tasks using AI frees up valuable human resources, allowing employees to focus on higher-value work. This leads to improved operational efficiency and a more productive workforce, enhancing overall business performance.",
      },
      {
        title: "AI in Healthcare Innovation:",
        desc: "AI is playing a transformative role in healthcare, enabling smarter diagnostics, personalized treatment plans, and faster drug discovery. These innovations have the potential to drastically improve patient outcomes and reduce healthcare costs.",
      },
      {
        title: "Cybersecurity Powered by AI:",
        desc: "With the growing frequency of cyber threats, AI's ability to monitor and analyze vast amounts of data in real-time is invaluable. AI-powered cybersecurity solutions enable businesses to detect potential breaches and respond to threats faster, strengthening their security posture.",
      },
    ]


    return(
        <>
          <title>AI development industry in USA I Reddensoft USA  </title>
          <meta name="title" content="AI Development Services in USA | ReddenSoft USA " />
          <meta name="description" content="Leverage cutting-edge AI development services in USA with Reddensoft. We create innovative, scalable AI solutions to drive business growth and efficiency." />

          <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
              <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                  <div className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-black 2xl:leading-[60px]">Empowering Business Growth with AI Solutions</div>
                  <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Unlock the Future with <span className="text-[#FFDD1A] font-bold">Artificial Intelligence </span>.</div>
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
                    <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">Artificial Intelligence is reshaping industries by making business processes smarter, more efficient, and data-driven. From AI-driven automation and machine learning to predictive analytics and natural language processing, AI is revolutionizing how businesses operate.</h3>
                    <h4 className="text-base font-semibold pt-4">Key Applications in AI:</h4>
                    <ul className="lg:max-w-[650px] py-4 pl-5">
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Machine Learning (ML)</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Natural Language Processing (NLP)</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Predictive Analytics</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Autonomous Systems (e.g., Robotics, Drones)</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">AI-powered Cloud Solutions</li>
                    </ul>
                </div>
                <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                    <div className="relative z-1">
                        <Image className="rounded-2xl w-full h-auto" src={artificialintelligence} alt="Artificial intelligence icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase" data-aos="fade-right" data-aos-delay="100"><span className="text-secondary">Reddensoft's</span> AI Solutions</h2>
                        <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">At Reddensoft USA, we offer a comprehensive suite of AI-driven solutions designed to meet the unique needs of businesses in diverse industries. Our services are focused on using AI to enhance data analysis, automate processes, and create smarter, more efficient workflows.</p>
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
                        <p className="lg:max-w-sm text-sm xl:text-base pt-4">AI offers businesses the ability to innovate, streamline operations, and create personalized customer experiences, driving significant growth and competitive advantage.</p>
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