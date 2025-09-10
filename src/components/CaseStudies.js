"use client";
import Image from "next/image";
import casestudy1 from "@/assets/images/case-study-1.webp";
import casestudy2 from "@/assets/images/case-study-2.webp";
import casestudy3 from "@/assets/images/case-study-3.webp";
import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.webp";
import icon5 from "@/assets/images/icon-5.webp";
import icon6 from "@/assets/images/icon-6.webp";
import GlobalButton from "@/components/GlobButton";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

export default function CaseStudies({ alignment }) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      once: true,
      offset: 0,
      easing: "ease-out-cubic",
    });
  }, []);

  const casestudies = [
    {
      id: 1,
      title: alignment ? "טריספיר" : "Trispire",
      subtitle: alignment ? "EHR מהדור הבא לשיטות בריאות התנהגותיות" : "Next-Generation EHR for Behavioral Health Professionals",
      desc: alignment
        ? "שירותי פיתוח התוכנה שלנו סיפקו את תוכנת EHR הטובה ביותר והופכת הכל לקל עבור איש מקצוע בתחום בריאות הנפש. זה נעשה בהתאמה אישית בהתאם לדרישות הלקוח כדי להקל על ההזמנה לחיוב."
        : "We built a powerful, customized EHR system to simplify everything from scheduling to billing. This tailored solution supports behavioral health clinics with user-focused, intuitive workflows.",
      link: "trispire",
      thumb: casestudy1,
    },
    {
      id: 2,
      title: alignment ? "רובוקנט" : "Robocent",
      subtitle: alignment ? "פלטפורמת שירות עצמי להודעות טלפון פוליטיות" : "Automated Political Messaging Platform",
      desc: alignment
        ? "רובוסנט הייתה זקוקה לפתרון ניתן להרחבה כדי לתמוך בשירותי האוטומציה המתרחבים שלהם הקשורים לשירות הודעות טלפון פוליטי. סוכנות פיתוח התוכנה שלנו סיפקה מערכת מקיפה עם תכונות מתקדמות ששיפרו את אספקת השירות ואת ניטור הביצועים שלה."
        : "Robocent partnered with our software development agency in the US for a scalable platform to power their political phone messaging services. The result? Enhanced automation, performance tracking, and improved campaign delivery.",
      link: "robocent",
      thumb: casestudy2,
    },
    {
      id: 3,
      title: alignment ? "קאדיד סינק" : "Candid Sync",
      subtitle: alignment ? "שירות הזמנת צלמים לפי דרישה" : "Photography Booking Platform on Demand",
      desc: alignment
        ? "Candid Sync הוא אתר האינטרנט הראשון להזמנת צילום לפי דרישה. אתה יכול להזמין צלמים באופן מיידי אם אתה משפיע על מדיה חברתית, דוגמן, מטייל או זקוק לזה עבור העסק שלך."
        : "We created the first-of-its-kind instant photography booking service. Whether you're a model, traveler, or business owner, Candid Sync makes it easy to find and book photographers in real time.",
      link: "candidsync",
      thumb: casestudy3,
    },
  ];

  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto relative z-1 px-5 lg:px-0">
      <div className={`flex flex-wrap items-center justify-center sm:justify-between mb-14 2xl:mb-20 ${alignment ? "flex-row-reverse" : "flex-row"}`}>
        <h2 className={`mb-10 sm:mb-0 sm:max-w-xs lg:max-w-sm 2xl:max-w-2xl text-5xl lg:text-6xl xl:text-7xl 2xl:text-[120px] leading-none font-black uppercase ${alignment ? "text-center sm:text-right" : "text-center sm:text-left"}`} data-aos="fade-right">
          {alignment ? "המקרי המחקר שלנו" : "CLIENT PROJECTS OVERVIEW"}
        </h2>
        <div data-aos="fade-left">
          {
            alignment ? <GlobalButton title="צפה בכל מקרי המחקר" link="/portfolio/he" alignment /> : <GlobalButton title="View All Case Studies" link="/portfolio"/>
          }
        </div>
      </div>
      {casestudies.map((casestudy) => (
        <div
          key={casestudy.id}
          className={`flex flex-wrap items-center bg-white border border-[#dadada] rounded-2xl p-5 lg:p-7 xl:p-9 2xl:p-11 mb-10 2xl:mb-14 ${alignment ? "flex-row-reverse" : "flex-row"}`}
        >
          <div className="order-1 lg:order-none w-full lg:w-1/2 lg:pr-4 2xl:px-2" dir={alignment ? 'rtl' : 'ltr'}>
            <div
              className={`max-w-[600px] flex flex-col justify-center lg:pr-4 2xl:px-2 ${
                alignment ? "ml-auto" : "mr-auto"
              }`}
            >
              <h2
                className={`flex items-center text-4xl xl:text-5xl 2xl:text-[60px] leading-tight font-black uppercase flex-row`}
              >
                <span data-aos="fade-right">
                  {casestudy.title}
                </span>
                <Link
                 aria-label="Learn more about our casestudy"
                  href={alignment ? `/portfolio/he/${casestudy.link}` : `/portfolio/${casestudy.link}`}
                  className={alignment ? "mr-auto" : "ml-auto"}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <svg
                    width="30"
                    height="26"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 xl:w-9 transform ${alignment ? "rotate-[-135deg]" : "-rotate-45"}`}
                  >
                    <path
                      d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z"
                      fill="#DD0004"
                    />
                  </svg>
                </Link>
              </h2>
              <h3
                className={`text-lg xl:text-xl 2xl:text-2xl font-semibold pt-4 xl:pt-6 2xl:pt-8 ${
                  alignment ? "text-right" : "text-left"
                }`}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {casestudy.subtitle}
              </h3>
              <p
                className={`text-sm xl:text-base 2xl:text-lg leading-6 font-normal py-4 2xl:py-6 ${
                  alignment ? "text-right" : "text-left"
                }`}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {casestudy.desc}
              </p>
              <ul
                className={`flex flex-wrap -mx-2.5 mb-4`}
              >
                {icons.map((icon, i) => (
                  <li
                    key={i}
                    className="p-1.5 xl:p-2.5"
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 50}
                  >
                    <Image
                      className="w-6 h-6 xl:w-10 xl:h-10"
                      src={icon}
                      alt={`icon-${i}`}
                      width="auto"
                      height="auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full mb-8 lg:mb-0 flex flex-col justify-center">
            <div className="flex justify-end" data-aos="fade-left">
              <Image
                className="rounded-2xl w-full"
                src={casestudy.thumb}
                alt={casestudy.title}
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
