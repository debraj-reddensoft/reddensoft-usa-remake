"use client"
import Image from "next/image";
import arrow from "@/assets/images/arrow.svg"
import { useEffect, useState } from "react";
import AOS from "aos";
import axios from 'axios';
import { useFormik } from 'formik';
import validator from 'validator';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function ContactForm({alignment}) {
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

        if (!values.fname || !_.trim(values.fname)) {
            errors.fname = alignment ? 'נדרש שם מלא' : 'Full name is required';
        } else if (values.fname.length > 50) {
            errors.fname = alignment ? 'חייב להיות 15 תווים או פחות' : 'Must be 15 characters or less';
        } else if (values.fname.match("[<>]")) {
            errors.fname = alignment ? 'אנא ספק שם חוקי' : 'Please provide a valid name';
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

        if (!values.terms) {
            errors.terms = alignment ? 'אנא בדוק את התנאים וההגבלות' : 'Please check the terms and conditions';
        }


        return errors;
    };


    const formik = useFormik({
        initialValues: {
            fname: "",
            email: "",
            message: "",
            phone: "",
            terms: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log('values', values);

            setBtnLoader(true);
            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reddensoft-israel-contact-form`, values, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(function (response) {
                    resetForm({
                        fname: "",
                        email: "",
                        message: "",
                        phone: "",
                        terms: "",

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
        <div className={`max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto relative flex flex-wrap z-1 px-5 lg:px-0`} dir={alignment ? 'rtl' : 'ltr'}>
            <div className="relative w-full lg:w-1/2 h-full z-1 mb-8 lg:mb-0">
                <div className={`max-w-lg flex flex-col items-start pb-5`}>
                    <h2 className="text-6xl xl:text-8xl 2xl:text-[110px] text-white leading-none font-black uppercase flex flex-col" data-aos="fade-right">
                        {
                            alignment ? <><span className="text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-black uppercase">יש</span>פרויקטים בראש? </> : <><span className="text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-black uppercase">Have any</span>projects on mind?</>
                        }
                    </h2>
                    <h3 className={`max-w-md text-2xl leading-[32px] xl:text-3xl xl:leading-[40px] 2xl:text-[38px] text-white 2xl:leading-[56px] font-black mt-11 ${alignment ? 'ml-auto' : 'mr-auto'}`} data-aos="fade-right" data-aos-delay="100">
                        { 
                            alignment ? <><span className="bg-[#0C112F] px-2 rounded">אל תהסס</span> לפנות אלינו עם השאלות שלך</> : <><span className="bg-[#0C112F] px-2 rounded">Feel free</span> to contact us with your queries</>
                        }
                    </h3>
                </div>
                <div className={`arrow_bounce absolute top-3/4 lg:top-1/4 transform -scale-y-100 lg:scale-100 ${alignment ? 'left-0 sm:left-24 lg:-left-20 -scale-x-100' : 'right-0 sm:right-24 lg:-right-20 scale-x-0'}`} data-aos="fade-right" data-aos-delay="200">
                    <Image className={`w-28 h-auto lg:w-40 transform ${alignment ? '-scale-x-100' : 'scale-x-0'}`} src={arrow} alt="arrow icon" width="auto" height="auto" />
                </div>
            </div>
            <div className={`relative w-full lg:w-2/5 h-full flex flex-col lg:items-end ${alignment ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                <form className="max-w-[550px] w-full relative z-1" onSubmit={formik.handleSubmit}>
                    <div className="py-2.5 2xl:py-3" data-aos="fade-left" data-aos-delay="100">
                        <input type="text" name="fname" placeholder={alignment ? "שם מלא*" : "Full Name*"} className={`light bg-white rounded h-12 2xl:h-14 w-full px-7 placeholder:text-black focus:outline-none ${alignment ? 'text-right' : 'text-left'}`} onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.fname)} onBlur={formik.handleBlur} />
                        {formik.touched.fname && formik.errors.fname ? <div className={`text-sm bg-black text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 shadow-md ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.fname}</div> : null}
                    </div>

                    <div className="py-2.5 2xl:py-3" data-aos="fade-left" data-aos-delay="200">
                        <input onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.email)} onBlur={formik.handleBlur} size="40" type="text" placeholder={alignment ? "כתובת אימייל*" : "Email Address*"} name="email" className={`light bg-white rounded h-12 2xl:h-14 w-full px-7 placeholder:text-black focus:outline-none ${alignment ? 'text-right' : 'text-left'}`} />
                        {formik.touched.email && formik.errors.email ? <div className={`text-sm bg-black text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 shadow-md ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.email}</div> : null}
                    </div>

                    <div className="py-2.5 2xl:py-3" data-aos="fade-left" data-aos-delay="300">
                        <input type="text" name="phone" onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.phone)} onBlur={formik.handleBlur} placeholder={alignment ? "טֵלֵפוֹן*" : "Phone*"} className={`light bg-white rounded h-12 2xl:h-14 w-full px-7 placeholder:text-black focus:outline-none ${alignment ? 'text-right' : 'text-left'}`} />
                        {formik.touched.phone && formik.errors.phone ? <div className={`text-sm bg-black text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 shadow-md ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.phone}</div> : null}

                    </div>
                    
                    <div className="py-2.5 2xl:py-3" data-aos="fade-left" data-aos-delay="400">
                        <textarea name="message" onChange={formik.handleChange}
                            value={removeExtraSpace(formik.values.message)} onBlur={formik.handleBlur} placeholder={alignment ? "הוֹדָעָה" : "Message"} className={`h-32 2xl: h-36 bg-white rounded w-full px-7 py-4 placeholder:text-black resize-none focus:outline-none ${alignment ? 'text-right' : 'text-left'}`}></textarea>
                    </div>
                    
                    <div className={`py-1.5 2xl:py-2`} data-aos="fade-up" data-aos-delay="500" dir={alignment ?'rtl' : 'ltr'}>
                        <label htmlFor="" className="flex items-start">
                            <input type="checkbox" id="terms" onChange={(e) => { formik.setFieldValue('terms', e.target.checked ? "Yes" : "") }}
                                onBlur={formik.handleBlur} name="terms" value="Yes" className="flex-shrink-0 bg-white rounded-lg h-5 w-5 2xl:h-6 2xl:w-6 accent-[#0C112F]" />
                                {
                                    alignment
                                    ? 
                                    <p className={`text-sm xl:text-base xl:leading-5 2xl:text-lg 2xl:leading-6 text-white pr-3.5`}>אני מסכים לעיבוד בקשה עם הנתונים האישיים שלי בהתאם <Link href="/privacy-policy/he" className="underline">למדיניות הפרטיות</Link></p>
                                    :
                                    <p className={`text-sm xl:text-base xl:leading-5 2xl:text-lg 2xl:leading-6 text-white pl-3.5`}>I consent to the processing of a request with my personal data in accordance with <Link href="/privacy-policy" className="underline">Privacy Policy</Link></p>
                                }
                        </label>
                    </div>
                    {formik.touched.terms && formik.errors.terms ?
                        <div className={`text-sm bg-black text-[#ff393c] px-4 py-1.5 rounded mt-2 max-w-72 shadow-md ${alignment ? 'ml-auto text-right' : 'mr-auto text-left'}`}>{formik.errors.terms}</div>
                        : null
                    }

                    <div className={`flex flex-col items-start`}>
                        <button type="submit" disabled={btnLoader} className={`flex items-center bg-white h-[52px] 2xl:h-[60px] text-base 2xl:text-[19px] leading-6 rounded-[30px] mt-7 ${alignment ? 'pr-7 2xl:pr-10 pl-3.5' : 'pl-7 2xl:pl-10 pr-3.5'}`} data-aos="fade-up" data-aos-delay="600">
                            <span className={`text-base 2xl:text-[19px] leading-6 font-bold uppercase ${alignment ? 'pl-4' : 'pr-4'}`}>{alignment ? "שלח הודעה" : "Send Message"}</span>
                            {btnLoader ? (
                                <span className='btn-ring-animation rings-animation'></span>
                            ) : (
                                <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full flex items-center justify-center rounded-full bg-secondary">
                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform ${alignment ? 'rotate-180' : 'rotate-0'}`}>
                                        <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#ffffff" />
                                    </svg>
                                </span>
                            )}
                        </button>

                        {isThankYou && (
                            <div className="text-sm bg-green-500 text-white px-4 py-1.5 rounded mt-2 ml-5 w-72 shadow-md">
                                {alignment ? "תודה שיצרת קשר!" : "Thank you for getting in touch!"}
                            </div>
                        )}

                        {isError && (
                            <div className="text-sm bg-secondary text-white px-4 py-1.5 rounded mt-2 ml-5 w-72 shadow-md">
                                {isError}
                            </div>
                        )}
                    </div>
                </form>
                <div className={`absolute -top-12 2xl:-top-24 bg-[#B80004] h-[600px] w-[300px] 2xl:h-[730px] 2xl:w-[365px] z-0 ${alignment ? 'rounded-l-full -right-8 2xl:-right-10' : 'rounded-r-full -left-8 2xl:-left-10'}`} data-aos="zoom-in" data-aos-delay="200"></div>
            </div>
        </div>
    )
}