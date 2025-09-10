"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import banClntOne from "@/assets/images/rd-1.png"
import banClntTwo from "@/assets/images/rd-2.jpg"
import banClntThree from "@/assets/images/rd-3.jpg"
import banwlops from "@/assets/images/r-dash-lop.png"
import development from "@/assets/images/development.png"
import aisolution from "@/assets/images/ai-solution.png"
import marketing from "@/assets/images/marketing.png"
import mobile from "@/assets/images/mobile.png"
import idea from "@/assets/images/idea.svg"
import transformation from "@/assets/images/transformation.svg"
import startups from "@/assets/images/startups.svg"
import tools from "@/assets/images/tools.svg"
import GlobalButton from "@/components/GlobButton";
import BrandsSlider from "@/components/BrandsSlider";
import SolutionCard from "@/components/SolutionCard";
import WhyWe from "@/components/WhyWe";
import Technology from "@/components/Technology";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonial";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Starfield from "@/components/StarField";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
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
      id: 1,
      title: "From Concept to Execution",
      desc: "We turn your ideas into effective, scalable software. Our streamlined software development services in the US cover every stage—from strategy and design to seamless integration and launch.",
      img: idea,
      link: "/contact-form",
    },
    {
      id: 2,
      title: "Digital Transformation Strategy",
      desc: "Let us help modernize your operations with future-ready technologies. We guide you through adopting the right tools and platforms to improve efficiency, performance, and growth.",
      img: transformation,
      link: "/contact-form",
    },
    {
      id: 3,
      title: "Startup Solutions that Scale",
      desc: "Whether you're at launch or scaling up, we tailor digital solutions to help your startup grow. Our strategic expertise accelerates your product-market fit and long-term success.",
      img: startups,
      link: "/contact-form",
    },
    {
      id: 4,
      title: "Optimize Your Technology Stack",
      desc: "Outdated tools hold you back. We upgrade and customize your systems to increase productivity and reliability with future-proof solutions designed around your needs.",
      img: tools,
      link: "/contact-form",
    }
  ]

  return (
    <>
      <title>Reddensoft USA: Innovative IT Experts and Solutions</title>
      <meta name="title" content="ReddenSoft USA: Expert IT Solutions & Services" />
      <meta name="description" content="Transform your business with ReddenSoft USA's IT and web development services. Our expert solutions drive growth and digital success for your company." />
      
      <div className="banner_bg h-auto 2xl:h-[680px] 2xl:py-0 py-10 flex flex-col items-center justify-center">
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto flex md:flex-nowrap flex-wrap items-center relative z-2">
          <div className="w-full md:w-6/12 relative h-full text-white text-right flex flex-col justify-center pr-10 sm:pr-16 2xl:pr-24">
            <div className="text-xl xl:text-[45px] 2xl:text-5xl font-semibold 2xl:leading-[70px]">Empower Your Business—</div>
            <div className="text-4xl xl:text-[68px] 2xl:text-7xl font-black leading-none">
              Transform Your
            </div>
            <div className="flex justify-end items-center">
              <div className="mr-4 arizonia_font text-2xl xl:text-3xl 2xl:text-6xl leading-tight">Vision</div>
              <div className="text-4xl xl:text-[68px] 2xl:text-7xl font-black leading-none">Today</div>
            </div>
            <p className="text-left text-sm xl:text-2xl 2xl:text-[30px] leading-6 xl:leading-10 2xl:leading-[46px] text-white font-light my-10 pl-8">With complete in-house technology and talent, our  <span className="text-[#FFDD1A] font-medium">software development company in the US </span> delivers cutting-edge solutions that push your business ahead. </p>
            <div className="no_shadow ml-auto">
              <GlobalButton title="Get Started Today" link="/contact-form"/>
            </div>
            <span className="divider"></span>
            
          </div>

          <div className="w-full md:w-6/12 md:mt-0 mt-8">
            <div className="2xl:max-w-[428px] md:max-w-[366px] md:mx-auto md:px-0 px-3">
              <h4 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-[1] xl:leading-[1] 2xl:leading-[1] text-[#E5E358]">
                <span className="text-white">Our</span> Industry-Leading Consultants    
              </h4>
              <div className="w-fit 2xl:ml-[250px] xl:ml-[200px] ml-[150px] md:relative md:-top-6">
                <Image className="size-14" src={banwlops} alt="client pic" priority width="auto" height="auto"/>
              </div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="2xl:size-28 size-24 border-white rounded-full border-4 shrink-0">
                    <Image className="size-full object-cover rounded-full" src={banClntOne} alt="client pic" priority width="auto" height="auto"/>
                  </div>
                  <div className="pl-5">
                    <h5 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold mb-2 2xl:mb-3 text-white">Emin Anderson</h5>
                    <p className="text-lg xl:text-xl text-white font-light">Project Manager, BDM, SEO Expert</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="2xl:size-28 size-24 border-white rounded-full border-4 shrink-0">
                    <Image className="size-full object-cover rounded-full" src={banClntTwo} alt="client pic" priority width="auto" height="auto"/>
                  </div>
                  <div className="pl-5">
                    <h5 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold mb-2 2xl:mb-3 text-white">Chris Callaway </h5>
                    <p className="text-lg xl:text-xl text-white font-light">Senior Consultant, Ai Application and Automation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="2xl:size-28 size-24 border-white rounded-full border-4 shrink-0">
                    <Image className="size-full object-cover rounded-full" src={banClntThree} alt="client pic" priority width="auto" height="auto"/>
                  </div>
                  <div className="pl-5">
                    <h5 className="text-lg xl:text-2xl 2xl:text-3xl font-semibold mb-2 2xl:mb-3 text-white">Michael Boggus</h5>
                    <p className="text-lg xl:text-xl text-white font-light">Business Analysist. Growth Expert  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-2/5 relative bg-primary h-[420px] w-[210px] xl:h-[480px] xl:w-[240px] 2xl:h-[660px] 2xl:w-[330px] hidden md:flex items-center rounded-r-full pl-4 xl:pl-6 2xl:pl-8">
            
            <div className="max-w-[150px] xl:max-w-[170px] 2xl:max-w-[240px] text-sm leading-6 xl:text-base xl:leading-6 2xl:text-[22px] 2xl:leading-[34px] text-white font-light">With complete in-house technology and talent, our  <span className="text-[#FFDD1A] font-medium">software development company in the US </span> delivers cutting-edge solutions that push your business ahead. </div>
            
            <ul className="absolute left-1/2 top-1/2 transform -translate-y-1/2 h-[300px] xl:h-[400px] 2xl:h-[530px] flex flex-col justify-between items-start w-max whitespace-nowrap">
              <li className="bg-primary rounded border border-dashed border-white-trans transform translate-x-[11%]">
                <Link href="/services/website-development" className="flex items-center pl-3.5 pr-5 py-1.5 xl:py-2">
                  <Image className="h-auto w-5 xl:w-4 2xl:w-7" src={development} alt="Web development services icon" width="auto" height="auto"/>
                  <span className="text-sm xl:text-base 2xl:text-xl text-white font-normal pl-2.5 2xl:pl-3.5">Web Development</span>
                </Link>
              </li>
              <li className="bg-primary rounded border border-dashed border-white-trans transform translate-x-[72%]">
                <Link href="/services/ai-design-research" className="flex items-center pl-3.5 pr-5 py-1.5 xl:py-2">
                  <Image className="h-auto w-5 xl:w-4 2xl:w-7" src={aisolution} alt="AI solutions and research icon" width="auto" height="auto"/>
                  <span className="text-sm xl:text-base 2xl:text-xl text-white font-normal pl-2.5 2xl:pl-3.5">AI Solution</span>
                </Link>
              </li>
              <li className="bg-primary rounded border border-dashed border-white-trans transform translate-x-[48%]">
                <Link href="/services/digital-marketing" className="flex items-center pl-3.5 pr-5 py-1.5 xl:py-2">
                  <Image className="h-auto w-5 xl:w-4 2xl:w-7" src={marketing} alt="Digital marketing solutions icon" width="auto" height="auto"/>
                  <span className="text-sm xl:text-base 2xl:text-xl text-white font-normal pl-2.5 2xl:pl-3.5">Digital Marketing</span>
                </Link>
              </li>
              <li className="bg-primary rounded border border-dashed border-white-trans">
                <Link href="/services/mobile-app-development" className="flex items-center pl-3.5 pr-5 py-1.5 xl:py-2">
                  <Image className="h-auto w-5 xl:w-4 2xl:w-7" src={mobile} alt="Mobile app development services icon" width="auto" height="auto"/>
                  <span className="text-sm xl:text-base 2xl:text-xl text-white font-normal pl-2.5 2xl:pl-3.5">Mobile App Development</span>
                </Link>
              </li>
            </ul>
          </div> */}

        </div>
        <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} alt="Hero banner" priority width="auto" height="auto"/>
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
          id="1"
        />
      </div>

      <div className="py-14 border-b border-[#dadada]">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
          <BrandsSlider />
        </div>
      </div>

      <div className="bg_element pt-16 2xl:pt-24 pb-12 2xl:pb-24">
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-[80px] leading-tight font-black text-center px-5" data-aos="zoom-in-up">OUR SOLUTIONS</h2>
          <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-center pt-2 2xl:pt-3.5 px-5" data-aos="zoom-in">
            Driven by Innovation, <span className="text-secondary">Designed for Impact</span>
          </h3>
          <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto overflow-hidden">
            <ul className="flex flex-wrap mb-12 mt-4 2xl:mb-20 2xl:mt-12 -mx-4 px-5 lg:px-0">
              { solutions.map((solution, s) => (
                  <li className="w-full sm:w-1/2 lg:w-1/4 p-3 p-5 lg:p-4" key={solution.id} data-aos="flip-up" data-aos-delay={100 + (s * 50)}>
                    <SolutionCard data={solution} />
                  </li>
              ))}
            </ul>
            <div className="flex justify-center" data-aos="zoom-in">
              <GlobalButton title="Schedule Free Consultation" link="/contact-form"/>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[70px] pb-24 2xl:pb-36 overflow-hidden">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <WhyWe/>
        </div>
      </div>

      <div className="banner_bg py-20 2xl:py-28">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <Technology />
        </div>
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
          id="2"
        />
      </div>

      <div className="bg_element flip py-20 2xl:py-28">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <CaseStudies/>
        </div>
      </div>

      <div className="bg_element pt-0 pb-28 2xl:py-28 border-b border-[#dadada]">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <Testimonials />
        </div>
      </div>

      <div className="bg_element flip2 py-20 2xl:py-24">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <Blog />
        </div>
      </div>

      <div className="bg-[#CD0307] pt-24 pb-20 2xl:pt-36 2xl:pb-28 overflow-hidden">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <ContactForm />
        </div>
      </div>

    </>
  );
}
