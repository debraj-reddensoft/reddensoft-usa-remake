"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import webdevelopment from "@/assets/images/web-development.webp";
import idea from "@/assets/images/idea.svg";
import transformation from "@/assets/images/transformation.svg";
import startups from "@/assets/images/startups.svg";
import tools from "@/assets/images/tools.svg";
import SolutionCard from "@/components/SolutionCard";
import Starfield from "@/components/StarField";
import Blog from "@/components/Blog";
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";

export default function Saas() {
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
      title: "From Idea to Solutions",
      desc: "Transforming your initial concepts into actionable and effective solutions that drive results. Our process focuses on seamless integration from brainstorming to implementation.",
      img: idea,
      link: "#",
    },
    {
      id: 2,
      title: "Digital Transformation",
      desc: "Helping your business evolve through modern technology and smart, strategic solutions. We guide you through adopting digital tools that streamline your processes and enhance your performance.",
      img: transformation,
      link: "#",
    },
    {
      id: 3,
      title: "Solutions for Startups",
      desc: "We specialize in helping startups scale and refine their digital presence. Our targeted strategies support you from the early stages of growth through to industry leadership.",
      img: startups,
      link: "#",
    },
    {
      id: 4,
      title: "Improve Your Tools",
      desc: "Upgrade your business tools to optimize efficiency and productivity. We provide solutions that are robust, reliable, and built to meet your specific needs.",
      img: tools,
      link: "#",
    }
  ]

    return(
        <>
            <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                   
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">SAAS</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Lorem ipsum dolor sit amet, <span className="text-[#FFDD1A] font-bold">consectetur adipiscing </span>elit User Experiences.</div>
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
           
            <div className="py-20 lg:py-28 overflow-hidden">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
                    <div className="flex flex-wrap -mx-5">
                        <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                            <h2 className="lg:max-w-[650px] text-xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">We Work Across all Areas of <span className="text-secondary"> Financial Services</span> and Capital Markets</h2>
                            <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique, velit sed commodo facilisis, diam velit scelerisque ligula, nec lacinia neque ex in metus. Phasellus id pellentesque leo. </h3>
                            <ul className="lg:max-w-[650px] py-5 pl-5">
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Pellentesque habitant morbi : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique, velit sed commodo facilisis</li>
                                <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Pellentesque habitant morbi : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique, velit sed commodo facilisis</li>
                            </ul>
                        </div>
                        <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col justify-center px-5">
                            <div className="z-1">
                                <Image className="rounded-2xl w-full h-auto" src={webdevelopment} alt="Web development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                            </div>
                            <div className="absolute -bottom-10 -right-12 xl:-bottom-14 xl:-right-24 bg-secondary h-[280px] w-[140px] md:h-[380px] md:w-[190px] xl:h-[550px] xl:w-[275px] rounded-r-full z-0" data-aos="zoom-in" data-aos-delay="400"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 border-b border-[#dadada]">
                     <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                       <BrandsSlider />
                     </div>
             </div>

             <div className="bg_element flip2 py-20 2xl:py-32">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative flex flex-wrap z-1 px-5 2xl:px-0">
                <h2 className="text-2xl xl:text-4xl 2xl:text-6xl text-white tracking-wide font-black uppercase" data-aos="fade-right" data-aos-delay="100">Insight</h2> 
                   <Blog />
                </div>
                <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
                id="10"
                />
             </div>

             <div className="banner_bg py-16 xl:py-24">
                           <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative  z-1 px-5 2xl:px-0">
                            <h3 className="text-white text-[25px] md:text-[40px] md:leading-[50px] leading-[33px] font-bold max-w-full md:max-w-[900px] mx-auto text-center">
                              AI's Potential in Banking and Payments: Download DataArt and Arkwright's Joint Report
                            </h3>
                            <div className="flex justify-center mt-10">
                              <GlobalButton title="Read More"/>
                            </div>
                           </div>
                           <Starfield
                           starCount={1000}
                           starColor={[255, 255, 255]}
                           speedFactor={0.05}
                           backgroundColor="black"
                           id="10"
                           />
             </div>

              <div className="bg_element pt-20 2xl:pt-24 pb-10 2xl:pb-12">
                    <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                      <h2 className="text-5xl xl:text-6xl 2xl:text-[80px] leading-tight font-black text-center" data-aos="zoom-in-up">OUR SERVICES</h2>
                      <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-center pt-3.5" data-aos="zoom-in" data-aos-delay="200">We're a team of Originative About <span className="text-secondary">Unique Ideas</span>.</h3>
                      <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto">
                        <ul className="flex flex-wrap my-16 2xl:my-24 -mx-4 px-5 lg:px-0">
                          { solutions.map((solution, s) => (
                              <li className="w-full sm:w-1/2 lg:w-1/4 p-3 lg:p-4" key={solution.id} data-aos="flip-up" data-aos-delay={100 + (s * 100)}>
                                <SolutionCard data={solution} />
                              </li>
                          ))}
                        </ul>
                        
                      </div>
                    </div>
                </div>

              <div className="bg_element pt-6 pb-28 2xl:py-28 border-b border-[#dadada]">
                    <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                        <Testimonials />
                    </div>
              </div>
        </>
    )
}