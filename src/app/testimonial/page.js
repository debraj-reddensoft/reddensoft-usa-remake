"use client"
import Image from "next/image"
import bannerBG from "@/assets/images/banner-bg.webp"
import client1 from "@/assets/images/client-1.webp"
import client2 from "@/assets/images/client-2.webp"
import client3 from "@/assets/images/client-3.webp"
import client4 from "@/assets/images/client-4.webp"
import client5 from "@/assets/images/client-5.webp"
import client6 from "@/assets/images/client-6.webp"
import client7 from "@/assets/images/client-7.webp"
import client8 from "@/assets/images/client-8.webp"
import client9 from "@/assets/images/client-9.webp"
import client10 from "@/assets/images/client-10.webp"
import client11 from "@/assets/images/client-11.webp"
import Starfield from "@/components/StarField";
import { useEffect } from "react";
import AOS from "aos";

export default function Testimonials() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const testimonials = [
        {
            id: 2,
            rating: 5,
            review: "I would thoroughly recommend Reddensoft's work. On my project they got the brief straight away and the combination their creative input, eye for detail, and in-depth appreciation of production processes meant that we could totally trust to deliver!",
            client: {
                name: "Mike Boggus",
                position: "Entrepreneur",
                company: "",
                img: client2,
            }
        },
        {
            id: 5,
            rating: 5,
            review: "I've worked with 2 fullstack developer services provide in the past, Reddensoft is by far the best. They're incredibly results-oriented, and they're always willing to go the extra mile to help me achieve my goals. I would definitely recommend them to anyone looking for fullstack development service packages.",
            client: {
                name: "Michel Ambrosio",
                position: "Founder",
                company: "Quirkel",
                img: client5,
            }
        },
        {
            id: 10,
            rating: 5,
            review: "We've been working with reddensoft web designers & developers for the past 2 years on our project development services. They've helped us to increase our social presence, website with very high quality brand presence. Our lead generation has increased by 200%. We're really happy with the results, and we would definitely recommend them to other businesses.",
            client: {
                name: "Kimberly",
                position: "Entrepreneur",
                company: "",
                img: client10,
            }
        },
        {
            id: 1,
            rating: 5,
            review: "Reddensoft's teams are on my short list of \"go-to\" guys for development related work. They are fast and efficient and communication is top-notch. I'm a repeat customer and happy to be so.",
            client: {
                name: "PG Favors",
                position: "Entrepreneur",
                company: "",
                img: client1,
            }
        },
        {
            id: 11,
            rating: 5,
            review: "I initially asked Moshe to build an interactive form for my clients, thinking it would be a small step forward in enhancing the services I offer. However, the outcome far exceeded my expectations: we ended up developing an entire self-service customer service and order management platform. Moshe demonstrated how we could consolidate 10 steps into one streamlined process, and it was simply amazing. Beyond his incredible professional skills, Moshe completely transformed my workflows and brought substantial improvements to every aspect of the projects he worked on. His service is nothing short of exceptional: fast, precise, and, most importantly, always available and incredibly courteous.I wholeheartedly recommend Moshe to anyone seeking a UX/UI expert with a broad vision, unwavering professionalism, and a client-centric approach that prioritizes customer success. He is simply an asset to any project!",
            client: {
                name: "Gal Cohen",
                position: "CMO",
                company: "RPC",
                img: client11,
            }
        },
        {
            id: 7,
            rating: 5,
            review: "I recently hired Reddensoft's fullstack developers to add a few items to my online portfolio and they got the job done quickly as usual. Thanks for the hard work Reddensoft.",
            client: {
                name: "James Vang",
                position: "Entrepreneur",
                company: "",
                img: client7,
            }
        },
        {
            id: 6,
            rating: 5,
            review: "I just thought I'd drop by and say how happy I am with my new project that I had created from these guys! They are very easy to work with and are also extremely patient. I would highly recommend using these guys for fullstack development and will use them for all my future projects!",
            client: {
                name: "Jayson L",
                position: "Entrepreneur",
                company: "",
                img: client6,
            }
        },
        {
            id: 9,
            rating: 5,
            review: "I hired fullstack developers from Reddensoft to develop a website system for me and they went ABOVE & BEYOND what was asked of them. They always were very responsive on email/Skype and it was a pleasure to work with. I will be doing more work with them.",
            client: {
                name: "A Dukes",
                position: "Entrepreneur",
                company: "",
                img: client9,
            }
        },
        {
            id: 4,
            rating: 5,
            review: "I was really impressed with the level of service that I received from Reddensoft. They were always responsive to my needs, and they were always willing to go the extra mile. I would definitely recommend them to anyone looking for their outstanding, creative development services. You guys are amazing.",
            client: {
                name: "David Miller",
                position: "Entrepreneur",
                company: "",
                img: client4,
            }
        },
        {
            id: 3,
            rating: 5,
            review: "They are a great partner for our business. They're always up-to-date on the latest development trends, and they're always willing to go the extra mile to help us achieve our goals. We're confident that we're in good hands with them for any development services. Our clients are super happy. We are having a customized plan and hired few web designers & developers for our agency.",
            client: {
                name: "Bently Ritter",
                position: "President & CEO",
                company: "BeneFit Personal Training",
                img: client3,
            }
        },
        {
            id: 8,
            rating: 5,
            review: "I have used Reddensoft's services for many projects. Reddensoft has always been available to answer questions, give status updates, quotes etc. As a company they are fair, honest and on-time.",
            client: {
                name: "Ryan",
                position: "Entrepreneur",
                company: "",
                img: client8,
            }
        }
    ]

    return (
        <>
            <div className="banner_bg h-[250px] md:h-[300px] xl:h-[400px] flex flex-col items-center justify-center pb-16 px-5 lg:px-0">
                <div className="max-w-[600px] xl:max-w-[780px] w-full mx-auto py-8">
                    <div className="w-full text-white relative z-2 text-center">
                        <div className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-black 2xl:leading-[55px]">Testimonial</div>
                    </div>
                </div>
                <Image className="absolute left-0 top-0 h-full w-full object-cover z-1" src={bannerBG} priority alt="Hero banner" width="auto" height="auto"/>
                <Starfield
                    starCount={1000}
                    starColor={[255, 255, 255]}
                    speedFactor={0.05}
                    backgroundColor="black"
                    id="6"
                />
            </div>
            <div className="bg_element mb-20 -mt-24 lg:-mt-36 relative z-9">
                <div className="relative max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1300px] w-full mx-auto px-3 sm:px-8">
                    <div className="flex flex-wrap items-cemter sm:-mx-4 xl:-mx-5">
                        <ul className="w-auto sm:w-1/2 lg:w-1/3 lg:mt-20 flex flex-wrap lg:flex-col justify-start">
                            {
                                testimonials.slice(0, 4).map((testimonial, t) => (
                                    <li className="w-full p-4 xl:p-5" key={testimonial.id} data-aos="fade-up" data-aos-delay={100 + (t * 100)}>
                                        <div className="relative bg-white px-6 xl:px-7 2xl:px-8 py-10 rounded-2xl shadow-med">
                                            <div className={`flex items-center mb-5 justify-start`}>
                                                {[...Array(5)].map((_, index) => {
                                                    return(
                                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                            <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                        </svg>
                                                    )
                                                })}
                                            </div>
                                            <h3 className={`text-sm xl:text-base 2xl:text-lg font-normal text-left`}>{testimonial.review}</h3>
                                            <span className="tail"></span>
                                        </div>
                                        <div className={`flex items-center flex-row pt-7 pb-3`}>
                                            <Image className="rounded-full w-10 h-10 2xl:w-12 2xl:h-12 2xl:w-14 2xl:h-14" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                            <div className="pl-3.5 text-left">
                                                <h4 className="text-base xl:text-xl 2xl:text-[22px] leading-8 font-semibold">{testimonial.client.name}</h4>
                                                {
                                                    testimonial.client.company ? 
                                                    <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                    :
                                                    <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position}</p>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="order-3 lg:order-none w-auto lg:w-1/3 flex flex-wrap lg:flex-col justify-start">
                            {
                                testimonials.slice(4, 7).map((testimonial, t) => (
                                    <li className="w-full sm:w-1/2 lg:w-full p-4 xl:p-5" key={testimonial.id} data-aos="fade-up" data-aos-delay={100 + (t * 100)}>
                                        <div className="relative bg-white px-6 py-8 xl:px-7 xl:py-8 2xl:px-8 2xl:py-10 rounded-2xl shadow-med">
                                            <div className={`flex items-center mb-5 justify-start`}>
                                                {[...Array(5)].map((_, index) => {
                                                    return(
                                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                            <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                        </svg>
                                                    )
                                                })}
                                            </div>
                                            <h3 className={`text-sm xl:text-base 2xl:text-lg font-normal text-left`}>{testimonial.review}</h3>
                                            <span className="tail"></span>
                                        </div>
                                        <div className={`flex items-center flex-row pt-7 pb-3`}>
                                            <Image className="rounded-full w-10 h-10 2xl:w-12 2xl:h-12 2xl:w-14 2xl:h-14" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                            <div className="pl-3.5 text-left">
                                                <h4 className="text-base xl:text-xl 2xl:text-[22px] leading-8 font-semibold">{testimonial.client.name}</h4>
                                                {
                                                    testimonial.client.company ?
                                                    <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                    :
                                                    <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position}</p>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="w-auto sm:w-1/2 lg:w-1/3 lg:mt-20 flex flex-wrap lg:flex-col justify-start">
                            {
                                testimonials.slice(7, 11).map((testimonial, t) => (
                                    <li className="w-full p-4 xl:p-5" key={testimonial.id} data-aos="fade-up" data-aos-delay={100 + (t * 100)}>
                                        <div className="relative bg-white px-6 py-8 xl:px-7 xl:py-8 2xl:px-8 2xl:py-10 rounded-2xl shadow-med">
                                            <div className={`flex items-center mb-5 justify-start`}>
                                                {[...Array(5)].map((_, index) => {
                                                    
                                                    return(
                                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                            <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                        </svg>
                                                    )
                                                })}
                                            </div>
                                            <h3 className={`text-sm xl:text-base 2xl:text-lg font-normal text-left`}>{testimonial.review}</h3>
                                            <span className="tail"></span>
                                        </div>
                                        <div className={`flex items-center flex-row pt-7 pb-3`}>
                                            <Image className="rounded-full w-10 h-10 2xl:w-12 2xl:h-12 2xl:w-14 2xl:h-14" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                            <div className="pl-3.5 text-left">
                                                <h4 className="text-base xl:text-xl 2xl:text-[22px] leading-8 font-semibold">{testimonial.client.name}</h4>
                                                {
                                                    testimonial.client.company ?
                                                    <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                    :
                                                    <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position}</p>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}