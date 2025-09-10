"use client"
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import client1 from "@/assets/images/client-1.webp"
import client2 from "@/assets/images/client-2.webp"
import client3 from "@/assets/images/client-3.webp"
import client4 from "@/assets/images/client-4.webp"
import client5 from "@/assets/images/client-5.webp"
import client6 from "@/assets/images/client-6.webp"
import client7 from "@/assets/images/client-7.webp"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Starfield from "@/components/StarField";

export default function QuoteForm() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const testimonials = [
        {
            id: 1,
            rating: 5,
            review: "I strongly recommend Artyum, he's a great Framer Designer/Developer who has helped my startup tremendously.  In face - Artyum's recent contributions to redesign our website and product landing pages exceeded our performance KPIs.",
            client: {
                name: "Jeremy Toeman",
                position: "CEO and Founder",
                company: "Aug X Labs",
                img: client1,
            }
        },
        {
            id: 2,
            rating: 5,
            review: "Partnering with Artyum was a great decision for us. Artyum is knowledgeable, dedicated and hands-on in helping startups with end to end design to code projects. I would highly recommend working with him",
            client: {
                name: "Tzachi Davidovich",
                position: "Cofounder",
                company: "FlyCode",
                img: client2,
            }
        },
        {
            id: 3,
            rating: 5,
            review: "Working with Artyum was great - he was quick to deliver high quality work and iterate with us to reach a strong final product. I recommend him for Framer design and implementation.",
            client: {
                name: "David Feldman",
                position: "CEO",
                company: "Greenboard",
                img: client3,
            }
        },
        {
            id: 4,
            rating: 5,
            review: "I'm thrilled to recommend Artyum for any web design project! Artyum's technical knowledge is top-notch. He integrated his design vision with the functionalities of Framer, ensuring a smooth and optimal user experience for our website.",
            client: {
                name: "David Feldman",
                position: "CEO",
                company: "Greenboard",
                img: client4,
            }
        },
        {
            id: 5,
            rating: 5,
            review: "Artyum has been tremendous to work with. Excellent design and development skills and incredibly fast. He is a total gem.",
            client: {
                name: "Stefanie Segar",
                position: "Head of Marketing",
                company: "Unstructured",
                img: client5,
            }
        },
        {
            id: 6,
            rating: 5,
            review: "Artyum is a very talented designer who implements solutions with great attention to detail. Expect very creative solutions from him and a highly professional but also pleasant collaboration.",
            client: {
                name: "Markus Kuhnt",
                position: "Founder",
                company: "Starfish GmbH & Co. KG",
                img: client6,
            }
        },
        {
            id: 7,
            rating: 5,
            review: "Artyum did a fantastic job designing and building a landing page in Framer for a recruitment software business. He communicated quickly and effectively, was very patient and understanding through a few rounds of amends, and showed real care in ensuring the finished product hit the mark. Would highly recommend!",
            client: {
                name: "Steven Kent",
                position: "Founder",
                company: "Starfish GmbH & Co. KG",
                img: client7,
            }
        },
    ]
    return (
        <div className="fixed flex w-screen h-screen left-0 top-0 bg-slate-200 z-10">
            <div className="max-w-[1200px] w-full m-auto bg-white flex rounded-xl">
                <div className="banner_bg w-[400px] bg-primary p-10 rounded-l-xl flex flex-col justify-between items-start">
                    <Image className="h-8 xl:h-10 w-auto" src={logo} alt="Reddensoft logo" width="auto" height="auto"/>
                    <div className="max-w-[300px] my-10">
                        <h1 className="text-xl xl:text-2xl 2xl:text-3xl leading-tight font-bold text-white flex flex-col"><span>Let's Setup</span> Your Operating Agreement</h1>
                        <p className="text-xs xl:text-sm text-white mt-6">All-in-one solution for your business in the state. Form a new company from scratch or onboard your existing US company.</p>
                    </div>
                    <div className="w-full">
                        <div className="embla testimonial -mx-2" ref={emblaRef}>
                            <div className="embla__container">
                                { testimonials.map((testimonial, t) => (
                                    <div className="embla__slide px-2" key={t}>
                                        <div className="bg-white/[.1] p-4 xl:p-5 2xl:p-6 rounded-2xl">
                                            <div className="flex items-center mb-4">
                                                {[...Array(5)].map((_, index) => {
                                                    return(
                                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                            <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                        </svg>
                                                    )
                                                })}
                                            </div>
                                            <h3 className="text-xs font-normal text-white font-light mb-5 line-clamp-4">{testimonial.review}</h3>
                                            <div className="flex items-center">
                                                <Image className="rounded-full w-10 h-10 xl:w-10 xl:h-10" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                                <div className="pl-3.5">
                                                    <h4 className="text-base text-white leading-7">{testimonial.client.name}</h4>
                                                    <p className="text-xs text-white font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Starfield
                        starCount={1000}
                        starColor={[255, 255, 255]}
                        speedFactor={0.05}
                        backgroundColor="black"
                        id="4"
                    />
                </div>
                <div className="flex-grow p-10 pb-14">
                    <h2 className="text-lg xl:text-xl 2xl:text-2xl leading-tight font-bold mb-6">Let's get started</h2>
                    <div className="relative w-full h-full flex flex-col lg:items-end lg:ml-auto">
                        <form className="w-full relative z-1">
                            <div className="flex flex-wrap items-center -mx-3.5">
                                <div className="py-2.5 px-3.5 w-1/2" data-aos="fade-left" data-aos-delay="100">
                                    <input type="text" placeholder="First Name*" className="bg-slate-100 rounded w-full h-12 2xl:h-14 px-7 placeholder:text-black"/>
                                </div>
                                <div className="py-2.5 px-3.5 w-1/2" data-aos="fade-left" data-aos-delay="200">
                                    <input type="text" placeholder="Last Name*" className="bg-slate-100 rounded w-full h-12 2xl:h-14 px-7 placeholder:text-black"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-3.5">
                                <div className="py-2.5 px-3.5 w-full" data-aos="fade-left" data-aos-delay="300">
                                    <input type="text" placeholder="Email Address*" className="bg-slate-100 rounded w-full h-12 2xl:h-14 px-7 placeholder:text-black"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-3.5">
                                <div className="py-2.5 px-3.5 w-full" data-aos="fade-left" data-aos-delay="400">
                                    <textarea placeholder="Message" className="h-32 2xl:h-36 w-full bg-slate-100 rounded px-7 py-4 placeholder:text-black resize-none"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-3.5">
                                <div className="py-2.5 px-3.5 w-full" data-aos="fade-left" data-aos-delay="500">
                                    <input type="file" className="bg-slate-100 rounded w-full p-7 placeholder:text-black"/>
                                </div>
                            </div>
                            <button type="button" className="flex items-center bg-secondary h-[52px] 2xl:h-[60px] text-base 2xl:text-[19px] leading-6 pl-10 pr-3.5 rounded-[30px] mt-7" data-aos="fade-up" data-aos-delay="600">
                                <span className={`text-base 2xl:text-[19px] leading-6 font-bold text-white uppercase pr-4`}>Send Message</span>
                                <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full flex items-center justify-center rounded-full bg-white">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#001A32"/>
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
