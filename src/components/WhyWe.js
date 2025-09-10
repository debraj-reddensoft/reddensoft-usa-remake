"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import whywe from "@/assets/images/why-we.webp"
import member1 from "@/assets/images/member-1.webp"
import member2 from "@/assets/images/member-2.webp"
import member3 from "@/assets/images/member-3.webp"
import member4 from "@/assets/images/member-4.webp"
export default function WhyWe({alignment}) {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const members = [member1, member2, member3, member4];
    return (
        <div className={`max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto relative flex flex-wrap z-1 px-5 lg:px-0 ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`order-1 lg:order-none w-full lg:w-3/5 h-full flex flex-col justify-center ${alignment ? 'text-right' : 'text-left'}`}>
            <h2 className="text-5xl xl:text-[60px] 2xl:text-[80px] leading-tight font-black"  data-aos="fade-right">{alignment ? "למה אנחנו" : "WHY US"}</h2>
             <h3
                    className={`lg:max-w-[520px] text-lg xl:text-xl 2xl:text-2xl font-semibold pt-3.5 ${alignment ? 'ml-auto' : 'mr-auto'}`}
                    data-aos="fade-right"
                    data-aos-delay="100"
                    dir={alignment ? "rtl" : "ltr"} // Right-to-left for Hebrew
                    >
                    {alignment ? (
                        <>
                        חברי הצוות שלנו הם מומחים ב{" "}
                        <span className="text-secondary">פיתוח תוכנה באיכות גבוהה</span>.
                        </>
                    ) : (
                        <>
                       Building Future-Ready Software with{" "}
                        <span className="text-secondary">Proven Expertise</span>.
                        </>
                    )}
               </h3>
               <p
                    className={`lg:max-w-[520px] text-sm xl:text-base 2xl:text-lg leading-6 font-normal py-5 ${alignment ? 'ml-auto' : 'mr-auto'}`}
                    data-aos="fade-right"
                    data-aos-delay="100"
                    >
                    {alignment ? (
                        "אנו מחויבים לבנות פתרונות חדישים המותאמים למטרות העסקיות שלך. עם ניסיון רב בתעשייה, אנו יוצרים תוכנה ידידותית למשתמש וניתנת להרחבה להצלחה מתמשכת."
                    ) : (
                        "Our experts design and develop high-performance software tailored to your goals. As a trusted software development agency in the US, we deliver intuitive, scalable solutions that help your business thrive in a competitive digital world."
                    )}
               </p>
                <ul className={`flex flex-wrap pt-1 -mx-6 xl:-mx-8 ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                    <li className={`px-6 my-3 xl:my-6 xl:px-8 border-[d0d0d0] ${alignment ? 'border-l' : 'border-r'}`} data-aos="zoom-in-up">
                        <div className="text-4xl xl:text-5xl 2xl:text-[60px] leading-tight font-black text-secondary">120+</div>
                        <h4 className="text-base xl:text-lg 2xl:text-[22px] leading-8 font-semibold">
                          {alignment ? "מומחים" : "Experts"}
                        </h4>
                    </li>
                    <li className={`px-6 my-3 xl:my-6 xl:px-8 border-[d0d0d0] ${alignment ? 'border-l' : 'border-r'}`} data-aos="zoom-in-up" data-aos-delay="100">
                        <div className="text-4xl xl:text-5xl 2xl:text-[60px] leading-tight font-black text-secondary">16+</div>
                        <h4 className="text-base xl:text-lg 2xl:text-[22px] leading-8 font-semibold">
                         {alignment ? "שנות ניסיון" : "Years of Experience"}
                        </h4>
                    </li>
                    <li className="px-6 my-3 xl:my-6 xl:px-8" data-aos="zoom-in-up" data-aos-delay="200">
                        <div className="text-4xl xl:text-5xl 2xl:text-[60px] leading-tight font-black text-secondary">90+</div>
                        <h4 className="text-base xl:text-lg 2xl:text-[22px] leading-8 font-semibold">
                               {alignment ? "לקוחות מרוצים" : "Happy Clients"}
                        </h4>
                    </li>
                </ul>
            </div>
            <div className="relative w-full lg:w-2/5 mb-8 lg:mb-0 h-full flex flex-col justify-center">
                <div className="z-1">
                    <Image className="rounded-2xl w-full h-auto" src={whywe} alt="Why We" width="auto" height="auto" data-aos="fade-down" data-aos-delay="100"/>
                    <ul className={`flex -mt-7 2xl:-mt-9 ${alignment ? 'justify-start ml-10 xl:ml-15 2xl:ml-20' : 'justify-end mr-10 xl:mr-15 2xl:mr-20'}`}>
                        { members.map((member, m) => (
                            <li className={`relative rounded-full ${m > 0 ? '-ml-3.5' : ''}`} key={m}>
                                <div className="bg-white rounded-full p-1 xl:p-[5px] relative z-1 shadow-med-2" data-aos="fade-up" data-aos-delay={100 + (m * 50)}>
                                    <Image className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full" src={member} alt={`member-${m}`} width="auto" height="auto"/>
                                </div>
                                <span className="absolute content-[''] -left-1.5 -top-1.5 -right-1.5 h-[34px] 2xl:-left-2 2xl:-top-2 2xl:-right-2 2xl:h-11 bg-secondary rounded-t-[50px] z-0" data-aos="fade-up" data-aos-delay={100 + (m * 50)}></span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`absolute -bottom-10 xl:-bottom-24 bg-secondary h-[360px] w-[180px] xl:h-[550px] xl:w-[275px] z-0 ${alignment ? 'rounded-l-full -left-12 xl:-left-24' : 'rounded-r-full -right-12 xl:-right-24'}`} data-aos="zoom-in" data-aos-delay="200"></div>
            </div>
        </div>
    )
}