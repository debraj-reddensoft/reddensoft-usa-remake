"use client"
import Image from "next/image";
import bannerBG from "@/assets/images/banner-bg.webp"
import calendar from "@/assets/images/calendar.svg"
import blog1 from "@/assets/images/blog-1.webp"
import blog2 from "@/assets/images/blog-2.webp"
import blog3 from "@/assets/images/blog-3.webp"
import blog4 from "@/assets/images/blog-4.webp"
import blog5 from "@/assets/images/blog-5.webp"
import blog6 from "@/assets/images/blog-6.webp"
import blog7 from "@/assets/images/blog-7.webp"
import blog8 from "@/assets/images/blog-8.webp"
import blog9 from "@/assets/images/why_ui_ux_is_v2.webp"
import blog10 from "@/assets/images/blog-10.webp"
import blog11 from "@/assets/images/blog-13.webp"
import blog12 from "@/assets/images/blog-14.webp"
import blog13 from "@/assets/images/blog-15.webp"
import blog14 from "@/assets/images/blog-16.jpeg"
import blog15 from "@/assets/images/blog-agust.jpg"
import empty from "@/assets/images/empty.svg"
import funnel from "@/assets/images/funnel.svg"
import arrowdown from "@/assets/images/arrow-down.png"
import rightarrow from "@/assets/images/right-arrow.png"
import leftarrow from "@/assets/images/left-arrow.png"
import Starfield from "@/components/StarField";
import BlogCard from "@/components/BlogCard";
import search from "@/assets/images/search.svg"
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AOS from "aos";
import GlobalButton from "@/components/GlobButton";

export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "Boost User Engagement with Responsive Website Design - A Quick Explanation",
            desc: "A responsive website is known for generating leads and better conversion as it creates better user engagement. Check here the explanation behind it.",
            date: "Dec 12, 2024",
            thumb: blog1,
            link: "boost-user-engagement-with-responsive-website-design"
        },
        {
            id: 2,
            title: "2025 Digital Marketing Trends: Key Insights and Future Predictions",
            desc: "Are you ready for another transformative digital marketing year? In this year, AI, evolving technology and personalization is going to take the center stage and the marketers should have a clear understanding on the upcoming trends and actionable strategies.",
            date: "Dec 20, 2024",
            thumb: blog2,
            link: "2025-digital-marketing-trends-key-insights-and-future-predictions"
        },
        {
            id: 3,
            title: "Why SEO is a Long-Term Strategy - An Explanation",
            desc: "A plan that describes how you will raise your website's search engine rating over time is known as a long-term SEO strategy. Because SEO takes longer, it's critical to have a long-term plan. Significant results may not be seen for months or even years.",
            date: "Jan 6, 2025",
            thumb: blog3,
            link: "why-seo-is-a-long-term-strategy-an-explanation",
        },
        {
            id: 4,
            title: "Empowering Small Businesses with AI: Cost-Effective Solutions for Big Results",
            desc: "For small firms, what does artificial intelligence mean? Since AI is a quickly developing technology that necessitates constant research and modification, it's reasonable to not have a definitive answer just yet. Even while many of us are still learning how to integrate AI in business, we can begin using the tools that are currently available to support our businesses in both significant and minor ways.",
            date: "Jan 14, 2025",
            thumb: blog4,
            link: "empowering-small-businesses-with-ai",
        },
        {
            id: 5,
            title: "E-Commerce Development in Israel: How to Build a Scalable Online Store",
            desc: "Discover how to build a scalable e-commerce store in Israel with expert insights on development, strategy, and growth. Boost your online business today!",
            date: "Feb 27, 2025",
            thumb: blog5,
            link: "ecommerce-development-in-israel",
        },
        {
            id: 6,
            title: "How Startups in Israel Can Benefit from Custom CRM Development",
            desc: "Learn how custom CRM development empowers Israeli startups with automation, data-driven insights, and better customer management for business success.",
            date: "Mar 3, 2025",
            thumb: blog6,
            link: "how-startups-can-benefit-from-custom-crm-development",
        },
        {
            id: 7,
            title: "Cybersecurity Best Practices 2025: Web & App Development",
            desc: "Cybersecurity is the way to protect your data from cyberattacks. You need cybersecurity services from a reputed firm to safeguard your data from theft, loss or breach.",
            date: "Mar 12, 2025",
            thumb: blog7,
            link: "cybersecurity-best-practices-for-web-app-development-2025",
        },
        {
            id: 8,
            title: "How AI and Machine Learning Are Transforming Modern Business Solutions",
            desc: "AI/ML services are known to transform business solutions in all aspects for the last few years. See how it will be in 2025 and forward.",
            date: "Mar 26, 2025",
            thumb: blog8,
            link: "how-ai-ml-transforming-modern-business-solutions",
        },
        {
            id: 9,
            title: "UI/UX Design: Key to Business Success in 2025",
            desc: "Discover how UI/UX design drives business success in 2025 by enhancing user experience, boosting engagement, and increasing conversions.",
            date: "Apr 22, 2025",
            thumb: blog9,
            link: "why-ui-ux-is-the-key-to-business-success-2025",
        },
        {
            id: 10,
            title: 'SaaS Development in 2025: Trends, Technologies, and Best Practices',
            desc: "Discover key SaaS development trends, emerging technologies, and best practices shaping the industry in 2025. Stay ahead with expert insights and tips.",
            date: "Apr 29, 2025",
            thumb: blog10,
            link: "saas-development-2025",
        },
        {
            id: 11,
            title: 'Top WordPress Plugins for Optimum Security and Performance of Your Website',
            desc: "WordPress is one of the most popular content management systems of current days. The WordPress Development Company in Israel uses it recurrently to create and maintain websites for their clients.",
            date: "May 29, 2025",
            thumb: blog11,
            link: "top-wordPress-plugins-for-optimum-security-and-performance-of-your-website",
        },
        {
            id: 12,
            title: 'How Good UX Design Boosts Conversions and User Retention',
            desc: "User experience (UX) design plays a critical role in the success of any digital product. Good UX design for conversion doesn’t just focus on aesthetics but rather on crafting a seamless, intuitive experience that drives user actions, increases engagement, and ultimately boosts retention. For businesses looking to optimize their platforms for better results, implementing effective UX strategies is essential.",
            date: "June 11, 2025",
            thumb: blog12,
            link: "how-good-ux-design-boosts-conversions-and-user-retention",
        },
        {
            id: 13,
            title: 'How Reddensoft’s FinTech Solutions Help Businesses Scale and Innovate',
            desc: "In today’s fast-paced digital economy, financial technology (FinTech) has emerged as a critical driver of business growth and transformation. Companies across industries are increasingly turning to specialized FinTech partners to unlock new efficiencies, improve customer experiences, and stay ahead of the competition. Reddensoft, a global software company with a strong presence in Israel and beyond, is leading this change by offering cutting-edge FinTech innovations that help businesses scale and innovate like never before.",
            date: "June 18, 2025",
            thumb: blog13,
            link: "how-reddensoft-fintech-solutions-help-businesses-scale-and-innovate",
        },
        {
            id: 14,
            title: 'Using Hugging Face to Deploy Custom LLMs in Multilingual AI Applications',
            desc: "Hugging Face provides a robust platform for deploying custom Language Large Models (LLMs), including those tailored for Hebrew and multilingual AI models. You can leverage their Inference Endpoints for production deployments, Spaces for interactive applications, or integrate their tools into your own cloud infrastructure.",
            date: "July 17, 2025",
            thumb: blog14,
            link: "hugging-face-multilingual-llm-deployment",
        },
        {
            id: 15,
            title: 'Google Ads vs. Facebook Ads: Which One Should You Use for Your Business?',
            desc: "A concept can become a small business by organic growth and word-of-mouth, but paid promotion is frequently essential for long-term business success. The good news is that there are plenty of internet advertising channels available to e-commerce businesses. Having said that, you will probably have to choose between the two leading advertising platforms: Google Ads vs. Facebook Ads. - Which is better for your company's objectives? ",
            date: "Aug 19, 2025",
            thumb: blog15,
            link: "google-ads-vs-facebook-ads",
        },
    ];

    const [isDisplayFilter, setIsDisplayFilter] = useState(false);
    const [filterName, setFilterName] = useState('Categories');
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([...blogs]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const dropdown = useRef();
    const filterBy = ['Categories', 'AI & Machine Learning', 'Blockchain', 'Cloud Computing'];

    const handleFilterDropdown = (e) => {
        setIsDisplayFilter(!isDisplayFilter);
    }

    const handleFilterSelection = (type) => {
        setFilterName(type);
        setIsDisplayFilter(false);
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const filtered = blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(query) ||
            blog.desc.toLowerCase().includes(query)
        );
        setFilteredBlogs(filtered);
    };

    useEffect(() => {
        let handlerClickOutside = (e) => {            
            if(!dropdown.current.contains(e.target)){
                setIsDisplayFilter(false);
            }
        }

        document.addEventListener("mousedown", handlerClickOutside);

        return () => {
            document.removeEventListener("mousedown", handlerClickOutside);
        };
    })

    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    return(
        <>
            <title>ReddenSoft Israel Blog: Insights on IT & Web Development</title>
            <meta name="title" content="ReddenSoft Israel Blog: Insights on IT & Web Development" />
            <meta name="description" content="Stay updated with ReddenSoft Israel's blog for expert insights on IT solutions, web development, and digital strategies to boost your business." />

            <div className="banner_bg h-[250px] md:h-[300px] xl:h-[450px] flex flex-col items-center justify-center px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto text-white text-center relative z-2">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black 2xl:leading-[60px]">Explore Our Recent</div>
                    <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black 2xl:leading-[80px]">BLOG ARTICLES</div>
                    <div className="max-w-[700px] xl:max-w-[800px] mx-auto text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:leading-9 text-white font-light mt-2 lg:mt-3">Stay updated with the latest trends, tips, and in-depth articles across a variety of topics. Dive into our curated <span className="text-[#FFDD1A] font-bold">blog posts designed to inspire, inform,</span> and <span className="text-secondary font-bold">empower you.</span></div>
                </div>
                <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} alt="Hero banner" priority width="auto" height="auto"/>
                <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black" id="5"/>
            </div>
            <div className="py-16 2xl:py-24 px-5 lg:px-0">
                <div className="relative max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1300px] w-full mx-auto px-3 sm:px-8">
                    <h2 className="text-3xl xl:text-5xl leading-tight font-bold mb-5 text-center">Featured Posts</h2>
                    <div className="embla feature_blog" ref={emblaRef}>
                        <div className="embla__container">
                            { blogs.reverse().map((blog, b) => (
                                <div className="embla__slide p-5" key={b}>
                                    <div className="relative flex flex-wrap sm:flex-nowrap bg-white rounded-lg overflow-hidden shadow-med">
                                        <div className="sm:max-w-1/2 w-full order-1 sm:order-none sm:h-full flex flex-col justify-center items-center">
                                            <div className="py-8 px-4 sm:p-6 xl:p-10">
                                                <div className="flex items-center pb-3.5">
                                                    <Image className="w-3 h-3 2xl:w-4 2xl:h-4" src={calendar} alt="Calendar icon" width="auto" height="auto"/>
                                                    <h4 className="text-sm xl:text-base font-normal pl-2.5">{blog.date}</h4>
                                                </div>
                                                <h3 className="text-lg xl:text-xl 2xl:text-2xl font-bold pb-4">{blog.title}</h3>
                                                <p className="text-sm xl:text-base xl:leading-5 2xl:text-lg 2xl:leading-6 font-normal line-clamp-4">{blog.desc}</p>
                                                <div className="flex mt-8">
                                                    <GlobalButton title="Read More" link={`/blog/${blog.link}`}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:max-w-1/2 min-h-28 w-full">
                                            <Image className="w-full h-full object-cover" src={blog.thumb} alt={blog.title} width="auto" height="auto"/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="embla__prev absolute left-0 sm:left-2 top-1/2 mt-6 transform -translate-y-1/2" onClick={scrollPrev}>
                        <Image className="h-[18px] w-auto" src={leftarrow} alt="Left arrow icon" width="auto" height="auto"/>
                    </button>
                    <button className="embla__next absolute right-0 sm:right-2 top-1/2 mt-6 transform -translate-y-1/2" onClick={scrollNext}>
                        <Image className="h-[18px] w-auto" src={rightarrow} alt="Right arrow icon" width="auto" height="auto"/>
                    </button>
                </div>
            </div>
            <div className="bg-[#CD0307] py-10 xl:py-12 px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                    <div className="flex flex-col items-center sm:flex-wrap sm:flex-row item-start justify-center">
                        <div className="relative w-80 flex items-center cursor-pointer bg-white rounded z-1 mb-5 sm:mb-0 mx-2" ref={dropdown}>
                            <div className="grow relative flex items-center pl-4 py-2.5 pr-9" onClick={() => handleFilterDropdown()}>
                                <Image className="opacity-70" src={funnel} alt="Filter icon" width={16} height={16}/>
                                <div className="grow text-base text-primary font-normal px-2.5">{filterName}</div>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-300 ${isDisplayFilter ? 'rotate-180' : 'rotate-0'}`}>
                                    <path d="M9.88625 -4.86836e-08L11 1.1776L5.5 7L-2.89893e-07 1.1776L1.11375 -4.32142e-07L5.5 4.64115L9.88625 -4.86836e-08Z" fill="#666666"/>
                                </svg>
                            </div>
                            <div className={`absolute left-0 top-full w-full bg-white overflow-hidden rounded-lg mt-3 transition-all duration-300 ${isDisplayFilter ? 'max-h-screen shadow-lg' : 'max-h-0 shadow-none'}`}>
                                <ul className="py-2.5">
                                    {filterBy.map((filter, f) => (
                                        <li className={`px-4 py-2 text-base font-normal whitespace-nowrap ${filter == filterName ? 'text-secondary' : 'text-dark-gray'}`} key={f} onClick={() => handleFilterSelection(filter)}>{filter}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="relative bg-white w-80 rounded pr-9 py-2.5 mx-2">
                            <input type="text" value={searchQuery} onChange={handleSearch} className="bg-transparent w-full text-base text-dark-gray font-normal px-4 placeholder:text-primary/60 focus:outline-none" placeholder="Search"/>
                            <Image className="absolute right-4 top-3 opacity-50" src={search} alt="Search icon" width={20} height={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_element py-16 2xl:py-24 px-5 lg:px-0">
                <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1420px] w-full mx-auto">
                    {
                        filteredBlogs.length !== 0 &&
                        <ul className="flex flex-wrap justify-start -mx-4 xl:-mx-5">
                            {filteredBlogs.reverse().map((blog, b) => (
                                <li className="w-full sm:w-1/2 lg:w-1/3 p-4 xl:p-5" key={b} data-aos="fade-up" data-aos-delay={200 + (b * 100)}>
                                    <BlogCard data={blog}/>
                                </li>
                            ))}
                        </ul>
                    }
                    {
                        filteredBlogs.length == 0 &&
                        <div className="bg-slate-100 flex flex-col justify-center items-center rounded-xl h-96">
                            <Image className="w-20 h-20" src={empty} alt="Empty icon" width="auto" height="auto"/>
                            <div className="text-xl font-nomral text-slate-600 mt-6">No result found</div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}