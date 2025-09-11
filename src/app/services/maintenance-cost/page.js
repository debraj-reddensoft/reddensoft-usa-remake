"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import webdevelopment from "@/assets/images/web-development.webp";
import idea from "@/assets/images/idea.svg";
import transformation from "@/assets/images/transformation.svg";
import startups from "@/assets/images/startups.svg";
import tools from "@/assets/images/tools.svg";
import rightarrow from "@/assets/images/right-arrow.png"
import SolutionCard from "@/components/SolutionCard";
import Starfield from "@/components/StarField";
import BrandsSlider from "@/components/BrandsSlider";
import Testimonials from "@/components/Testimonial";
import GlobalButton from "@/components/GlobButton";
import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

export default function MaintenanceCost() {
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

  const features = [
    'Daily backups and restores',
    'Shared hosting',
    'Plugins / theme / core updates',
    'Design & dev - $100/hour',
    'Plugin related bug fixing',
    'Contact 3rd party services',
    'Security monitoring',
    'Standard support scope',
    'Uptime monitoring and fix',
    'CDN - Cloudflare®',
    'Database cleanup',
    'Broken links monitoring',
    'Premium plugins license renewal*',
    'Maintenance and analytics app (soon)'
  ]

  const solutions = [
    {
      id: 1,
      title: "From Idea to Solutions",
      desc: "Transforming your initial concepts into actionable and effective solutions that drive results. Our process focuses on seamless integration from brainstorming to implementation.",
      img: idea,
      link: "/contact-form",
    },
    {
      id: 2,
      title: "Digital Transformation",
      desc: "Helping your business evolve through modern technology and smart, strategic solutions. We guide you through adopting digital tools that streamline your processes and enhance your performance.",
      img: transformation,
      link: "/contact-form",
    },
    {
      id: 3,
      title: "Solutions for Startups",
      desc: "We specialize in helping startups scale and refine their digital presence. Our targeted strategies support you from the early stages of growth through to industry leadership.",
      img: startups,
      link: "/contact-form",
    },
    {
      id: 4,
      title: "Improve Your Tools",
      desc: "Upgrade your business tools to optimize efficiency and productivity. We provide solutions that are robust, reliable, and built to meet your specific needs.",
      img: tools,
      link: "/contact-form",
    }
  ]

  const accordions = [
    {
      title: "How often should my website be maintained?",
      content: "For optimal performance, we recommend monthly maintenance checks, including security updates, backups, and content optimization.",
    },
    {
      title: "Will maintenance affect my website’s live performance?",
      content: "No, we perform updates during off-peak hours or in staging environments to ensure no disruptions to your live site.",
    },
    {
      title: "Can I request content changes as part of the maintenance package?",
      content: "Yes, most of our packages include limited content updates, such as adding blog posts, updating images, or editing text.",
    },
    {
      title: "What kind of user testing do you conduct?",
      content: "We conduct a range of user tests, from remote usability studies to in-person focus groups, to gather valuable feedback for refining our designs.",
    },
    {
      title: "Do you offer emergency support for critical issues?",
      content: "Absolutely. We offer emergency troubleshooting and support for urgent issues, depending on your maintenance plan.",
    },
    {
      title: "Can you maintain a website built by another developer?",
      content: "Yes. We perform an initial assessment and then offer maintenance services for websites developed by third parties, provided they meet certain technical standards.",
    },
  ];

  return(
    <>
      <title>Website maintenance services USA I Budget-friendly solutions </title>
      <meta name="title" content="Website Maintenance Cost & Services | Affordable Plans" />
      <meta name="description" content="Looking for reliable website maintenance services? Check out our website maintenance cost details for secure and hassle-free site management." />

      <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
          <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
              <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Website Maintenance Cost</div>
              <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Connect Us for a Secure and Smoothly Running Website .</div>
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
                <h2 className="lg:max-w-[650px] text-xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">What is <span className="text-secondary">Website Maintenance </span>and why is it important?</h2>
                <h3 className="lg:max-w-[650px] text-sm xl:text-base font-normal pt-3.5" data-aos="fade-right" data-aos-delay="200">Website maintenance refers to the ongoing process of updating, optimizing, and securing your website to ensure peak performance, safety, and reliability. It's essential for keeping your site current with technological changes and delivering a seamless user experience.</h3>
                <ul className="lg:max-w-[650px] py-5 pl-5">
                    <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Maintain Website Security: </span>Regular updates to core systems, plugins, and SSL certificates help guard against cyber threats like hacking, malware, and data breaches.</li>
                    <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Enhance Site Performance: </span>Routine performance checks, such as image optimization and link repair, contribute to faster load times and a better overall browsing experience.</li>
                    <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Improve SEO Performance: </span>Consistently updated content and fine-tuned technical elements support stronger search engine rankings and improved online visibility.</li>
                    <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Stay Ahead of Technology: </span>Regular maintenance ensures your site remains compatible with modern devices, browser updates, and the latest design standards.</li>
                    <li className="list-disc text-sm xl:text-base leading-6 font-normal py-2" data-aos="fade-right" data-aos-delay="200"><span className="text-secondary font-bold">Resolve Technical Issues: </span>Scheduled checkups help detect and fix bugs or broken features, preventing user frustrations and maintaining functionality.</li>
                </ul>
            </div>
            <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col justify-center px-5">
                <div className="relative z-1">
                    <Image className="rounded-2xl w-full h-auto" src={webdevelopment} alt="Web development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-5 mt-28">
            <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col justify-center px-5">
                <div className="relative z-1">
                    <Image className="rounded-2xl w-full h-auto" src={webdevelopment} alt="Web development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                </div>
            </div>
            <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5 xl:pl-10 xl:pr-5">
                <h2 className="lg:max-w-[650px] text-xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Basic Website <span className="text-secondary">Maintenance Cost </span></h2>
                <h3 className="lg:max-w-[650px] text-base lg:text-lg xl:text-xl font-normal pt-3.5">Your website’s performance shouldn't be compromised. Choose from flexible packages that keep your online presence secure, optimized, and user-friendly.</h3>
                <ul className="lg:max-w-[650px] py-5 flex flex-wrap">
                  {
                    features.map((feature, f) => (
                      <li className="relative w-full sm:w-1/2 text-sm xl:text-base leading-6 font-normal py-2 pl-7" key={f} data-aos="fade-right" data-aos-delay={100 + (f * 50)}>
                        <svg width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-auto absolute left-0 top-3.5">
                          <path fillRule="evenodd" clipRule="evenodd" d="M49.0823 0.670159C49.3505 0.904928 49.5693 1.19066 49.726 1.51075C49.8828 1.83084 49.9743 2.1789 49.9953 2.53468C50.0163 2.89047 49.9664 3.24688 49.8485 3.5832C49.7305 3.91951 49.5468 4.22902 49.3082 4.49373L21.0374 35.8701C20.7976 36.1358 20.5072 36.351 20.1832 36.503C19.8591 36.655 19.508 36.7408 19.1504 36.7553C18.7927 36.7699 18.4358 36.7128 18.1005 36.5876C17.7652 36.4624 17.4583 36.2715 17.1977 36.0261L0.838654 20.6269C0.347877 20.1583 0.0507262 19.5227 0.00591929 18.8456C-0.0388877 18.1685 0.171909 17.4993 0.596656 16.9701C0.825922 16.6832 1.1111 16.4459 1.43488 16.2726C1.75866 16.0992 2.11429 15.9935 2.48017 15.9618C2.84605 15.9302 3.21455 15.9732 3.5633 16.0882C3.91206 16.2033 4.23379 16.3881 4.50896 16.6313L17.2004 28.0482C17.7303 28.5252 18.428 28.7721 19.14 28.7348C19.8519 28.6975 20.5199 28.379 20.9971 27.8492L45.3125 0.887957C45.7859 0.363191 46.4467 0.0458535 47.1522 0.00459133C47.8577 -0.0366708 48.5511 0.201459 49.0823 0.667469V0.670159Z" fill="#dc2626"/>
                        </svg>
                        <span>{feature}</span>
                      </li>
                  ))}
                </ul>
            </div>
          </div>


          <div className="flex flex-wrap -mx-5 mt-24">
            <div className="order-1 lg:order-none w-full lg:w-2/4 h-full flex flex-col justify-center px-5">
                <h2 className="lg:max-w-[650px] text-xl xl:text-5xl 2xl:text-[50px] font-black" data-aos="fade-right" data-aos-delay="100">Website Maintenance <span className="text-secondary">Pricing </span></h2>
                <h3 className="lg:max-w-[650px] text-base lg:text-lg xl:text-xl font-normal pt-3.5" data-aos="fade-right" data-aos-delay="300">Explore our pricing options tailored for different website types. Promotional websites enjoy flexible hosting capacity, while e-commerce and business websites receive expanded support and private storage options.</h3>
                <table className="border-collapse border border-slate-400 text-left mt-8">
                  <thead className="bg-slate-100 text-base font-normal">
                    <tr>
                      <th className="border border-slate-300 px-4 py-3"></th>
                      <th className="border border-slate-300 px-4 py-3">Image Website</th>
                      <th className="border border-slate-300 px-4 py-3">Sales Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-4 text-xl font-normal">Shared Storage</td>
                      <td className="border border-slate-300 px-4 py-4 text-3xl font-normal">$<span className="text-secondary font-bold">399</span> <span className="text-sm">/Month</span></td>
                      <td className="border border-slate-300 px-4 py-4 text-3xl font-normal">$<span className="text-secondary font-bold">599</span> <span className="text-sm">/Month</span></td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-4 text-xl font-normal">Private Storage</td>
                      <td className="border border-slate-300 px-4 py-4 text-3xl font-normal">$<span className="text-secondary font-bold">799</span> <span className="text-sm">/Month</span></td>
                      <td className="border border-slate-300 px-4 py-4 text-3xl font-normal">$<span className="text-secondary font-bold">999</span> <span className="text-sm">/Month</span></td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="relative w-full lg:w-2/4 mb-8 lg:mb-0 h-full flex flex-col justify-center px-5">
                <div className="relative z-1">
                    <Image className="rounded-2xl w-full h-auto" src={webdevelopment} alt="Web development icon" width="auto" height="auto" data-aos="fade-down" data-aos-delay="200"/>
                </div>
            </div>
          </div>
        </div>
        <div className="bg_element pt-24">
          <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 2xl:px-0">
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl leading-tight font-black text-center" data-aos="zoom-in-up">OUR BUNDLES</h2>
            <h3 className="max-w-3xl mx-auto text-lg xl:text-xl 2xl:text-2xl font-normal text-center pt-3.5" data-aos="zoom-in">Maximize value with our bundled website maintenance services. Our bundles include essential maintenance along with bonus services at a discounted website maintenance cost.</h3>
            <ul className="flex flex-wrap justify-center -mx-4 mt-10">
              <li className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="relative bg-white shadow-med px-8 lg:px-5 2xl:px-7 py-8 xl:py-10 rounded-lg overflow-hidden">
                  <div className="relative z-1">
                    <h3 className="text-2xl xl:text-4xl font-bold">Mission critical</h3>
                    <ul className="py-5">
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        Basic maitenance - $109
                      </li>
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        Extended support - $60
                      </li>
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        Private Cloud Server - $90
                      </li>
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        2 Daily Backups - $20
                      </li>
                    </ul>
                    <div className="text-3xl xl:text-4xl font-normal text-secondary">$<span className="font-bold">259</span><span className="text-base">/Month</span></div>
                  </div>
                  <div className="absolute top-[200px] left-0 bg-[#DD0004]/10 h-[400px] w-[200px] rounded-r-full z-0"></div>
                </div>
              </li>
              <li className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="relative bg-white shadow-med px-8 lg:px-5 2xl:px-7 py-8 xl:py-10 rounded-lg overflow-hidden">
                  <div className="relative z-1">
                    <h3 className="text-2xl xl:text-4xl font-bold">E-commerce 360</h3>
                    <ul className="py-5">
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        Basic maitenance - $109
                      </li>
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        Extended support - $60
                      </li>
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        Private Cloud Server - $90
                      </li>
                      <li className="flex items-center text-base xl:text-xl font-medium py-1.5">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 xl:w-4 xl:h-4 mr-2.5">
                          <path d="M66.4996 31.4999H38.5001V3.49977C38.5001 1.56827 36.9318 0 34.9997 0C33.0682 0 31.4999 1.56827 31.4999 3.49977V31.4999H3.49977C1.56827 31.4999 0 33.0682 0 34.9997C0 36.9318 1.56827 38.5001 3.49977 38.5001H31.4999V66.4996C31.4999 68.4317 33.0682 70 34.9997 70C36.9318 70 38.5001 68.4317 38.5001 66.4996V38.5001H66.4996C68.4317 38.5001 70 36.9318 70 34.9997C70 33.0682 68.4317 31.4999 66.4996 31.4999Z" fill="#DD0004"/>
                        </svg>
                        E-commerce support - $60
                      </li>
                    </ul>
                    <div className="text-3xl xl:text-4xl font-normal text-secondary">$<span className="font-bold">319</span><span className="text-base">/Month</span></div>
                  </div>
                  <div className="absolute top-[200px] left-0 bg-[#DD0004]/10 h-[400px] w-[200px] rounded-r-full z-0"></div>
                </div>
              </li>
              <li className="w-full sm:w-1/2 lg:w-1/3 p-4 ">
                <div className="relative bg-[#DD0004] px-8 lg:px-5 2xl:px-7 py-8 xl:py-10 h-full rounded-lg overflow-hidden">
                  <div className="relative z-1">
                      <h3 className="text-2xl xl:text-4xl text-white font-bold">Need A Custom Bundle?</h3>
                      <p className="max-w-sm lg:max-w-none text-base xl:text-lg leading-tight text-white font-light pt-3">We can create a custom package that is tailored specifically to your requirements, ensuring you get the most value for your website maintenance cost.</p>
                      <div className="flex justify-start">
                        <Link href="/contact-form" className="flex items-center bg-white h-11 2xl:h-12 text-sm 2xl:text-base pl-6 pr-2.5 rounded-3xl mt-6">
                            <span className={`text-base font-bold uppercase pr-4`}>Talk Now</span>
                            <span className="w-5 h-5 2xl:w-6 2xl:h-6 rounded-full flex items-center justify-center rounded-full bg-secondary">
                                <svg width="12" height="10" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff"/>
                                </svg>
                            </span>
                        </Link>
                      </div>
                  </div>
                  <div className="absolute top-[200px] left-0 bg-[#B80004] h-[400px] w-[200px] rounded-r-full z-0"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="pb-8 lg:pb-10 border-b border-[#dadada]">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
          <BrandsSlider />
        </div>
      </div>
      <div className="banner_bg py-16 xl:py-24">
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto relative z-1 px-5 2xl:px-0">
          <h3 className="text-white text-[25px] md:text-[40px] md:leading-[50px] leading-[33px] font-bold max-w-full md:max-w-[900px] mx-auto text-center">How Our Onboarding Process Works</h3>
          <p className="max-w-4xl mx-auto text-lg xl:text-xl 2xl:text-2xl font-light text-white text-center pt-5" data-aos="fade-right" data-aos-delay="200">We start with a discovery call to understand your needs. From there, we define the project scope, timeline, deliverables, and payment plan. Once we agree on everything, our team gets to work—delivering reliable maintenance from day one.</p>
          <div className="flex justify-center mt-10">
            <GlobalButton title="Let's Talk" link="/contact-form"/>
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
      <div className="bg_element pt-20 2xl:pt-24 pb-10 2xl:pb-16 overflow-hidden">
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
          <h2 className="text-5xl xl:text-6xl 2xl:text-[80px] leading-tight font-black text-center" data-aos="zoom-in-up">OUR SERVICES</h2>
          <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-center pt-3.5" data-aos="zoom-in">At Reddensoft USA, we’re a passionate team that brings creative thinking and technical excellence together to deliver top-tier website maintenance and digital solutions.</h3>
          <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto">
            <ul className="flex flex-wrap my-16 2xl:my-20 -mx-4 px-5 lg:px-0">
              { solutions.map((solution, s) => (
                  <li className="w-full sm:w-1/2 lg:w-1/4 p-3 p-5 lg:p-4" key={solution.id} data-aos="flip-up" data-aos-delay={100 + (s * 50)}>
                    <SolutionCard data={solution} />
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg_element pb-28 2xl:pb-28 border-b border-[#dadada]">
        <div className="max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
            <Testimonials />
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1420px] mx-auto px-5 lg:px-0">
            <div className='w-full md:pb-[60px] md:md-[60px]'>
                <div className="max-w-[700px] mx-auto mb-10 xl:mb-14">
                <h2 className="text-3xl sm:text-4xl xl:text-5xl sm:leading-tight xl:leading-snug font-black text-center" data-aos="zoom-in-up" data-aos-delay="200">Frequently Asked <span className="text-secondary">Questions</span></h2>
                </div>
                <div className="max-w-[900px] mx-auto w-full">
                    {accordions.map((accordion, a) => (
                        <div className={`py-7 ${accordions.length !== (a + 1) ? 'border-b border-slate-200' : ''}`} key={a} data-aos="fade-right" data-aos-delay={200 + (a * 100)}>
                            <button onClick={() => onTitleClick(a)} className={`flex items-center w-full justify-between rounded-[10px] ${activeIndex === a ? 'rounded-bl-none rounded-br-none  ' : ''} relative `}>
                                <span className="text-xl lg:text-2xl font-light text-left">{accordion.title}</span>
                                <Image src={rightarrow} alt="Right arrow icon" className={`h-4 w-auto ml-8 transform transition-all ease-in-out duration-300 flex-shrink-0 ${activeIndex === a ? '-rotate-90' : 'rotate-90'}`} width="auto" height="auto"/>
                            </button>                                    
                            <div className={`text-base lg:text-lg text-slate-900 font-light overflow-hidden transition-all ease-in-out duration-300 pr-8 ${activeIndex === a ? 'pt-5 max-h-96' : 'pt-0 max-h-0'}`}>{accordion.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}