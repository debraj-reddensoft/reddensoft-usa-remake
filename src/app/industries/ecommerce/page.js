"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import ecommerce from "@/assets/images/ecommerce.webp";
import Starfield from "@/components/StarField";
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import marketsaturation from "@/assets/images/market-saturation.webp"
import paymentfraud from "@/assets/images/payment-fraud.webp"
import customerexperience from "@/assets/images/customer-experience.webp"
import customerretention from "@/assets/images/customer-retention.webp"
import mobileoptimization from "@/assets/images/mobile-optimization.webp"
import logisticsmanagement from "@/assets/images/logistics-management.webp"
import ecommercesolutions from "@/assets/images/ecommerce-solutions.svg"
import security from "@/assets/images/security.svg"
import industryexpertise from "@/assets/images/industry-expertise.svg"
import { useEffect } from "react";
import AOS from "aos";

export default function Ecommerce() {
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
        title: "Industry Expertise & Custom Solutions",
        desc: "Reddensoft brings years of experience in the e-commerce industry, delivering custom-built, scalable solutions that meet the unique needs of your business.",
        icon: industryexpertise,
      },
      {
        title: "End-to-End E-Commerce Solutions",
        desc: "From platform development and mobile optimization to digital marketing and data analytics, Reddensoft provides comprehensive e-commerce services to help you succeed online.",
        icon: ecommercesolutions,
      },
      {
        title: "Focus on Compliance and Security",
        desc: "We ensure that all our solutions adhere to the latest regulatory compliance and security standards. We ensure best security of data and privacy of our esteemed customers.",
        icon: security,
      },
    ];

    const solutions = [
      {
        title: "E-Commerce Platform Development",
        desc: "Reddensoft specializes in developing custom e-commerce platforms tailored to your specific business needs. Whether you're looking for a simple online store or a complex multi-vendor marketplace, we build scalable and secure solutions that enhance your digital retail experience.",
      },
      {
        title: "AI-Powered Personalization & Product Recommendations",
        desc: "Our AI-powered solutions deliver personalized shopping experiences by recommending products based on user preferences, browsing history, and behavior. By increasing relevance, we help businesses boost engagement, conversion rates, and customer loyalty.",
      },
      {
        title: "Mobile Commerce Optimization & App Development",
        desc: "We develop mobile-optimized websites and custom e-commerce mobile applications that offer seamless shopping experiences across devices. Our solutions ensure fast load times, intuitive interfaces, and mobile-friendly checkout processes to reduce cart abandonment.",
      },
      {
        title: "Payment Gateway Integration & Security Solutions",
        desc: "Reddensoft integrates secure payment gateways, including credit card, digital wallets, and cryptocurrency options. We ensure that your payment processes are safe, compliant with regulations, and provide customers with multiple, convenient payment methods.",
      },
      {
        title: "Omnichannel E-Commerce Strategy",
        desc: "We help businesses adopt an omnichannel approach, integrating both online and offline shopping experiences. Our solutions provide a unified customer journey across web, mobile, social, and in-store touchpoints, improving customer satisfaction and driving sales.",
      },
      {
        title: "Inventory & Supply Chain Management",
        desc: "Reddensoft offers integrated solutions for inventory management and supply chain optimization. Our tools help businesses track inventory in real-time, predict demand, and improve logistics to ensure timely and cost-effective order fulfillment.",
      },
      {
        title: "Customer Loyalty Programs",
        desc: "We help e-commerce businesses design and implement customer loyalty programs that encourage repeat purchases. By offering points, rewards, and exclusive offers, businesses can drive customer retention and enhance long-term profitability.",
      },
      {
        title: "Social Commerce Integration & Marketing",
        desc: "We integrate social commerce features into your e-commerce platform, allowing customers to shop directly through social media channels. Our digital marketing expertise also helps you leverage influencer marketing, paid ads, and organic content to drive traffic and sales.",
      },
    ]

    const services = [
      {
        thumb: customerexperience,
        title: "Customer Experience & Engagement",
        desc: "Customers today expect a personalized and seamless shopping experience. Meeting the diverse needs of online shoppers while maintaining user-friendly interfaces and fast load times presents a significant challenge for e-commerce businesses.",
      },
      {
        thumb: paymentfraud,
        title: "Security & Payment Fraud",
        desc: "With the increase in online shopping comes a rise in security risks, including payment fraud and data breaches. E-commerce businesses must ensure secure transactions and protect customer data to build trust and comply with privacy regulations.",
      },
      {
        thumb: marketsaturation,
        title: "High Competition & Market Saturation",
        desc: "The e-commerce market is increasingly competitive, with numerous businesses vying for the same customers. Creating a distinctive online presence and retaining customers through loyalty programs, personalized offers, and superior customer service is crucial.",
      },
      {
        thumb: logisticsmanagement,
        title: "Supply Chain & Logistics Management",
        desc: "E-commerce businesses face challenges with logistics, including inventory management, shipping delays, and meeting customer expectations for fast delivery. Efficient supply chain management is critical to avoid stockouts and ensure timely order fulfillment.",
      },
      {
        thumb: mobileoptimization,
        title: "Mobile Optimization & Conversion Rates",
        desc: "As mobile commerce (m-commerce) grows, e-commerce businesses need to ensure their platforms are optimized for mobile devices. High cart abandonment rates due to poor mobile experiences or slow checkout processes are a common issue.",
      },
      {
        thumb: customerretention,
        title: "Customer Retention & Churn",
        desc: "Acquiring new customers is only half the battle—keeping them engaged and loyal is equally important. Retaining customers through personalized experiences, loyalty programs, and excellent customer support is essential for long-term success.",
      },
    ];

    const objectives = [
      {
        title: "AI & Machine Learning for Personalization:",
        desc: "E-commerce businesses can leverage AI and machine learning to analyze customer behavior, personalize product recommendations, and offer targeted discounts. This not only improves customer satisfaction but also increases conversion rates and sales.",
      },
      {
        title: "Mobile Commerce (M-Commerce):",
        desc: "With an increasing number of consumers shopping via smartphones, there’s a huge opportunity for e-commerce businesses to optimize their websites and applications for mobile devices. Offering a seamless, user-friendly mobile shopping experience is key to tapping into this growing segment.",
      },
      {
        title: "Voice Commerce & Smart Devices:",
        desc: "The rise of voice assistants like Amazon Alexa, Google Assistant, and Siri is paving the way for voice-driven shopping experiences. E-commerce businesses can capitalize on voice commerce to offer hands-free purchasing and improve the shopping experience.",
      },
      {
        title: "Subscription-Based Models & Recurring Revenue:",
        desc: "Subscription services for products like beauty items, groceries, and entertainment are gaining popularity. This model ensures a steady, predictable revenue stream and can enhance customer loyalty by offering convenience and exclusive perks.",
      },
      {
        title: "Social Commerce & Influencer Marketing:",
        desc: "Social media platforms such as Instagram, Facebook, and TikTok are becoming significant e-commerce channels. Leveraging influencer marketing and integrating social shopping features allows businesses to reach broader audiences and engage with potential customers more effectively.",
      },
      {
        title: "Augmented Reality (AR) for Product Visualization:",
        desc: "AR allows customers to virtually try products, such as clothing, furniture, or makeup, in their environment before making a purchase. By incorporating AR into e-commerce platforms, businesses can provide more immersive and interactive shopping experiences.",
      },
      {
        title: "Data Analytics & Customer Insights:",
        desc: "E-commerce companies can leverage big data and analytics to gain insights into customer behavior, optimize inventory, and predict demand. This enables businesses to make data-driven decisions that enhance the customer experience and improve operational efficiency.",
      },
    ]


    return(
        <>
          <title>Ecommerce Development Services Israel | ReddenSoft Israel </title>
          <meta name="title" content="Ecommerce Development Services Israel | ReddenSoft Israel " />
          <meta name="description" content="Boost your online store with Reddensoft's ecommerce development services in Israel. We create customized, and user-friendly ecommerce solutions for growth." />

          <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
              <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                  <div className="max-w-5xl mx-auto text-xl md:text-2xl lg:text-4xl xl:text-5xl font-black 2xl:leading-[55px]">Revolutionizing E-Commerce with Innovative Digital Solutions</div>
                  <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Enhance your online retail experience, drive customer engagement, and boost sales with Reddensoft’s <span className="text-[#FFDD1A] font-bold">customized e-commerce </span>solutions.</div>
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
                    <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">The e-commerce industry is thriving, with consumers increasingly turning to online platforms for everything from groceries to high-end electronics. As the e-commerce landscape grows, retailers must leverage advanced digital technologies to create engaging, personalized experiences that meet the evolving demands of online shoppers. With the rise of mobile commerce, social commerce, and global e-commerce platforms, businesses must stay ahead of trends and continuously innovate to provide customers with seamless, secure, and personalized shopping experiences.</h3>
                    <h4 className="text-base font-semibold pt-4">Key Applications in E-Commerce:</h4>
                    <ul className="lg:max-w-[650px] py-4 pl-5">
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Personalized Customer Experience & AI Integration</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Mobile Commerce & App Development</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Omnichannel Shopping</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Payment Gateway & Security Solutions</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Logistics & Supply Chain Optimization</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Product Recommendation Engines</li>
                      {/* <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Inventory Management & Analytics</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Digital Marketing & SEO for E-Commerce</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Subscription-Based E-Commerce Models</li>
                      <li className="list-disc text-sm xl:text-base leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="200">Social Commerce & Influencer Integration</li> */}
                    </ul>
                </div>
                <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col self-center justify-center px-5">
                    <div className="relative z-1">
                        <Image className="rounded-2xl w-full h-auto" src={ecommerce} alt="Ecommerce development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
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
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase text-secondary" data-aos="fade-right" data-aos-delay="100">Reddensoft's <span className="text-black">Solutions for E-Commerce</span></h2>
                        <p className="text-sm xl:text-base font-light py-7" data-aos="fade-right" data-aos-delay="200">Reddensoft provides comprehensive e-commerce development solutions that enable businesses to build secure, scalable, and seamless online stores. Whether you're launching a new e-commerce platform or upgrading an existing one, our team delivers cutting-edge technology to ensure an exceptional shopping experience for your customers. From intuitive user interfaces to integrated payment systems, we design solutions that enhance both the front-end and back-end of your business.</p>
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
                        <p className="lg:max-w-sm text-sm xl:text-base pt-4">Our e-commerce solutions help businesses across industries like retail, fashion, electronics, and more to boost online sales, improve customer engagement, and scale operations efficiently. Let Reddensoft be your partner in driving e-commerce success.</p>
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
                <h2 className="text-4xl xl:text-6xl 2xl:text-[60px] 2xl:leading-[54px] font-black uppercase text-center mb-6 lg:mb-12" data-aos="fade-right" data-aos-delay="100">WHY CHOOSE <span className="text-secondary">US</span></h2>
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