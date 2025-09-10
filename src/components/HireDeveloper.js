"use client"
import Image from "next/image";
import arrow from "@/assets/images/arrow.svg"
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import axios from 'axios';
import { useFormik } from 'formik';
import validator from 'validator';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function ContactForm({alignment}) {
    const [isDisplayCategory, setIsDisplayCategory] = useState(false);
    const [categoryName, setCategoryName] = useState('ChatGPT Consultation');
    const categories = ['ChatGPT Consultation', 'ChatGPT Integration', 'Custom Chatbot Development', 'Upgrade and Ongoing Maintenance'];
    const dropdown = useRef();

    const handleCategoryDropdown = (e) => {
        setIsDisplayCategory(!isDisplayCategory);
    }

    const handleCategorySelection = (type) => {
        setCategoryName(type);
        formik.setFieldValue("select_chatgpt", type);
        
        setIsDisplayCategory(false);
    }

    useEffect(() => {
        let handlerClickOutside = (e) => {            
            if(!dropdown.current.contains(e.target)){
                setIsDisplayCategory(false);
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

    const router  = useRouter();

    const [btnLoader, setBtnLoader] = useState(false);
    const [isThankYou, setIsThankYou] = useState(false);
    const [isError, setIsError] = useState(false);
    var _ = require('lodash');


    const removeExtraSpace = (s) => {
        var rSpase = s.replace(/\s{2,}/g, ' ');
        return _.trimStart(rSpase);
    };


    const validate = values => {
        const errors = {};

        if (!values.name || !_.trim(values.name)) {
            errors.name = alignment ? 'נדרש שם מלא' : 'Full name is required';
        } else if (values.name.length > 50) {
            errors.name = alignment ? 'חייב להיות 15 תווים או פחות' : 'Must be 15 characters or less';
        } else if (values.name.match("[<>]")) {
            errors.name = alignment ? 'אנא ספק שם חוקי' : 'Please provide a valid name';
        }


        if (!values.email) {
            errors.email = alignment ? 'יש צורך באימייל' : 'Email is required';
        } else if (!validator.isEmail(values.email)) {
            errors.email = alignment ? 'כתובת אימייל לא חוקית' : 'Invalid email address';
        }

        if (!values.phone) {
            errors.phone = alignment ? 'נדרש טלפון' : 'Phone is required';
        } else if (!/^\+?[0-9\s\-()]*$/.test(values.phone)) {
            errors.phone = alignment ? 'מספר טלפון לא חוקי' : 'Invalid phone number';
        } else {
            const phoneDigits = values.phone.replace(/[^\d]/g, '');
            if (phoneDigits.length < 10 || phoneDigits.length > 15) {
                errors.phone = alignment ? 'מספר הטלפון חייב להיות בין 10 ל-15 ספרות' : 'Phone number must be between 10 and 15 digits';
            }
        }


        return errors;
    };


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
            phone: "",
            select_chatgpt: "ChatGPT Consultation",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log('values', values);

            setBtnLoader(true);
            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reddensoft-israel-hire-developer`, values, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    resetForm({
                        name: "",
                        email: "",
                        message: "",
                        phone: "",
                        select_chatgpt: "ChatGPT Consultation",

                    });


                    router.push(alignment ? '/thank-you/he' :'/thank-you')
                    setIsThankYou(true);
                })
                .catch(function (error) {
                    setIsError(error?.message ? error.message : "Network Error")
                })
                .finally(() => {
                    setBtnLoader(false)
                    setTimeout(myGreeting, 10000);
                });


        },
    });


    const myGreeting = () => {
        setIsThankYou(false);
        setIsError(false);
    };



    return (
        <div className={`max-w-[700px] lg:max-w-[990px] xl:max-w-full w-full mx-auto relative flex flex-wrap z-1`} dir={alignment ? 'rtl' : 'ltr'}>
            <div className="relative w-full lg:w-1/2 z-1 mb-8 lg:mb-0 text-white">
                <div className={`lg:max-w-xl flex flex-col items-start`}>
                    <h2 className="text-3xl xl:text-5xl 2xl:text-6xl leading-none font-black uppercase flex flex-wrap flex-row lg:flex-col" data-aos="fade-right">
                        {
                            alignment ? <><span className="text-secondary">לִשְׂכּוֹר</span>מפתחי ChatGPT?</> : <><span className="text-secondary pr-1.5">Hire </span>ChatGPT Developers?</>
                        }
                    </h2>
                    <h3 className={`text-base lg:text-lg xl:text-xl font-light mt-4 lg:mt-7 ${alignment ? 'ml-auto' : 'mr-auto'}`} data-aos="fade-right" data-aos-delay="100">
                        { 
                            alignment ? "שכור מפתחי ChatGPT שמשתמשים בהתקדמות מתקדמת של AI ו-NLP כדי לבנות פתרונות מותאמים לעסק שלך. הצוות שלנו מתמחה בפיתוח צ'אטבוטים, תרגום שפות ועוד כדי לעזור לך להשיג את יעדי הבינה המלאכותית שלך." : "Hire ChatGPT developers who utilize cutting-edge AI and NLP advancements to build tailored solutions for your business. Our team specializes in chatbot development, language translation, and more to help you achieve your AI goals."
                        }
                    </h3>
                    <ul className={`lg:max-w-[650px] py-5 ${alignment ? 'pr-5' : 'pl-5'}`}>
                        <li className="list-disc text-base xl:text-lg leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="100">{ alignment ? "פיתוח צ'טבוט" : "Chatbot Development" }</li>
                        <li className="list-disc text-base xl:text-lg leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="100">{ alignment ? "פתרונות תרגום לשפות" : "Language Translation Solutions" }</li>
                        <li className="list-disc text-base xl:text-lg leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="100">{ alignment ? "שילוב זיהוי דיבור" : "Speech Recognition Integration" }</li>
                        <li className="list-disc text-base xl:text-lg leading-6 font-normal py-1" data-aos="fade-right" data-aos-delay="100">{ alignment ? "יישומי AI מותאמים אישית" : "Custom AI Applications" }</li>
                    </ul>
                </div>
            </div>
            <div className={`relative w-full lg:w-1/2 flex flex-col bg-gray-200 rounded-xl lg:items-end overflow-hidden ${alignment ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <form className="w-full relative flex flex-wrap px-5 py-7 sm:px-8 sm:py-12 z-1" onSubmit={formik.handleSubmit}>
                    {   alignment
                        ? <h2 className="no_shadow text-3xl 2xl:text-4xl leading-none font-black px-2 pb-5">קבל ייעוץ <span className="text-secondary">חינם</span> של מומחה</h2>
                        : <h2 className="no_shadow text-3xl 2xl:text-4xl leading-none font-black px-2 pb-5">Get <span className="text-secondary">Free</span> Expert Consultation</h2>
                    }
                    <div className="w-full xl:w-1/2 p-2" data-aos="fade-left" data-aos-delay="100">
                        <input type="text" name="name" placeholder={alignment ? "שם מלא*" : "Full Name*"} className={`light bg-white rounded h-12 2xl:h-14 w-full px-7 placeholder:text-black focus:outline-none ${alignment ? 'text-right' : 'text-left'}`} onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.name)} onBlur={formik.handleBlur} />
                        {formik.touched.name && formik.errors.name ? <div className={`text-sm text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.name}</div> : null}
                    </div>

                    <div className="w-full xl:w-1/2 p-2" data-aos="fade-left" data-aos-delay="200">
                        <input onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.email)} onBlur={formik.handleBlur} size="40" type="text" placeholder={alignment ? "כתובת אימייל*" : "Email Address*"} name="email" className={`light bg-white rounded h-12 2xl:h-14 w-full px-7 placeholder:text-black focus:outline-none ${alignment ? 'text-right' : 'text-left'}`} />
                        {formik.touched.email && formik.errors.email ? <div className={`text-sm text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.email}</div> : null}
                    </div>

                    <div className="w-full xl:w-1/2 p-2" data-aos="fade-left" data-aos-delay="300">
                        <input type="text" name="phone" onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.phone)} onBlur={formik.handleBlur} placeholder={alignment ? "טֵלֵפוֹן*" : "Phone*"} className={`light bg-white rounded h-12 2xl:h-14 w-full px-7 placeholder:text-black focus:outline-none ${alignment ? 'text-right' : 'text-left'}`} />
                        {formik.touched.phone && formik.errors.phone ? <div className={`text-sm text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.phone}</div> : null}
                    </div>

                    <div className="w-full xl:w-1/2 p-2 no_shadow">
                        <div className="relative flex items-center cursor-pointer bg-white rounded z-1" ref={dropdown}>
                            <div className="relative flex items-center h-12 2xl:h-14 w-full pl-4 py-2.5 pr-9" onClick={() => handleCategoryDropdown()}>
                                <div className="grow text-base text-primary font-normal px-2.5">{categoryName}</div>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-300 ${isDisplayCategory ? 'rotate-180' : 'rotate-0'}`}>
                                    <path d="M9.88625 -4.86836e-08L11 1.1776L5.5 7L-2.89893e-07 1.1776L1.11375 -4.32142e-07L5.5 4.64115L9.88625 -4.86836e-08Z" fill="#666666"/>
                                </svg>
                            </div>
                            <div className={`absolute left-0 top-full w-full bg-white overflow-hidden rounded-lg mt-3 transition-all duration-300 ${isDisplayCategory ? 'max-h-screen shadow-lg' : 'max-h-0 shadow-none'}`}>
                                <ul className="py-2.5">
                                    {categories.map((category, c) => (
                                        <li className={`px-4 py-2 text-sm 2xl:text-base font-normal whitespace-nowrap ${category == categoryName ? 'text-secondary' : 'text-dark-gray'}`} key={c} onClick={() => handleCategorySelection(category)}>{category}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full p-2" data-aos="fade-left" data-aos-delay="400">
                        <textarea name="message" onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.message)} onBlur={formik.handleBlur} placeholder={alignment ? "הוֹדָעָה" : "Message"} className={`h-28 2xl:h-32 bg-white rounded w-full px-7 py-4 placeholder:text-black resize-none focus:outline-none ${alignment ? 'text-right' : 'text-left'}`}></textarea>
                    </div>

                    <div className={`flex flex-col items-start px-2`}>
                        <button type="submit" disabled={btnLoader} className={`flex items-center bg-secondary h-[52px] 2xl:h-[60px] text-base 2xl:text-[19px] leading-6 rounded-[30px] mt-4 sm:mt-7 ${alignment ? 'pr-7 2xl:pr-10 pl-3.5' : 'pl-7 2xl:pl-10 pr-3.5'}`} data-aos="fade-up" data-aos-delay="600">
                            <span className={`text-base 2xl:text-[19px] leading-6 font-bold uppercase text-white ${alignment ? 'pl-4' : 'pr-4'}`}>{alignment ? "שלח הודעה" : "Submit"}</span>
                            {btnLoader ? (
                                <span className='btn-ring-animation rings-animation'></span>
                            ) : (
                                <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full flex items-center justify-center rounded-full bg-white">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform ${alignment ? 'rotate-180' : 'rotate-0'}`}>
                                        <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#001A32" />
                                    </svg>
                                </span>
                            )}
                        </button>

                        {isThankYou && (
                            <div className="text-sm bg-green-500 px-4 py-1.5 rounded mt-2 ml-5 w-72 shadow-md">
                                {alignment ? "תודה שיצרת קשר!" : "Thank you for getting in touch!"}
                            </div>
                        )}

                        {isError && (
                            <div className="text-sm bg-secondary px-4 py-1.5 rounded mt-2 ml-5 w-72 shadow-md">
                                {isError}
                            </div>
                        )}
                    </div>
                </form>
                <div className={`absolute top-1/3 bg-secondary/[.10] h-[800px] w-[400px] z-0 ${alignment ? 'rounded-l-full right-0' : 'rounded-r-full left-0'}`} data-aos="zoom-in" data-aos-delay="200"></div>
            </div>
        </div>
    )
}