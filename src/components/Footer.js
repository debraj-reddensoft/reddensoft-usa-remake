"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import email from "@/assets/images/email.png"
import envelope from "@/assets/images/envelope.png"
import send from "@/assets/images/send.png"
import facebook from "@/assets/images/facebook.png"
import instagram from "@/assets/images/instagram.png"
import linkedin from "@/assets/images/linkedin.png"
import dribble from "@/assets/images/dribble.png"
import behance from "@/assets/images/behance.png"
import youtube from "@/assets/images/youtube.png"
import Link from "next/link";
import Starfield from "@/components/StarField";
import axios from 'axios';
import { usePathname } from "next/navigation";
import { useFormik } from 'formik';
import validator from 'validator';
import { Formik } from 'formik';

export default function Footer() {
    const pathname = usePathname();
    const [btnLoader, setBtnLoader] = useState(false);
    const [isThankYou, setIsThankYou] = useState(false);
    const [isError, setIsError] = useState(false);
    const currentYear = new Date().getFullYear();

    function myGreeting() {
        setIsThankYou(false);
        setIsError(false);
    }

    return (
        <>
            <div className="banner_bg py-16 sm:py-20 2xl:py-28" dir={pathname.includes('/he') ? 'ltr' : 'ltr'}>
                <div className="max-w-[1420px] w-full mx-auto">
                    <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto relative flex flex-wrap justify-between items-start z-1 px-5 lg:px-0 xl:px-5 2xl:px-0">
                        <div className="w-full lg:w-1/2 lg:max-w-[250px] xl:max-w-[350px] flex flex-col items-start mb-3 lg:mb-0">
                            <Link href={pathname.includes('/he')? "/he" : "/"}>
                                <Image className="h-12 xl:h-14 2xl:h-16 w-auto" src={logo} alt="Reddensoft logo" width="auto" height="auto" />
                            </Link>
                            <p className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white py-6 xl:py-8">{pathname.includes('/he') ? "We are your digital success partner. Be in touch with us to simplify your digital transformative journey through smart and innovative tech solutions." : "We are your digital success partner. Be in touch with us to simplify your digital transformative journey through smart and innovative tech solutions."}</p>
                            <ul>
                                <li className="py-2">
                                    <a href="mailto:info@reddensoft.com" className="flex items-center">
                                        <Image className="w-4 h-auto xl:w-5" src={email} alt="Email icon" width="auto" height="auto" />
                                        <span className="text-sm xl:text-base 2xl:text-lg text-white font-normal px-2.5 transition-all duration-300 hover:text-[#ff393c]">info@reddensoft.com</span>
                                    </a>
                                </li> 
                            </ul>
                        </div>
                        <div className="w-2/3 lg:max-w-[150px] xl:max-w-[200px] grow">
                            <h4 className="text-lg xl:text-xl 2xl:text-[26px] leading-8 font-semibold text-white pt-5 pb-1 lg:py-5">{pathname.includes('/he') ? "השירותים שלנו" : "Our Services"}</h4>
                            <ul className="m-0 lg:mt-4 flex flex-col -mx-2.5">
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/services/ui-ux-design/he" : "/services/ui-ux-design"}>{pathname.includes('/he') ? "UI & UX Design" : "UI & UX Design"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/services/mobile-app-development/he" : "/services/mobile-app-development"}>{pathname.includes('/he') ? "Mobile App" : "Mobile App"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/services/digital-marketing/he" : "/services/digital-marketing"}>{pathname.includes('/he') ? "Digital Marketing" : "Digital Marketing"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/services/website-development/he" : "/services/website-development"}>{pathname.includes('/he') ? "Website Development" : "Website Development"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/services/graphic-design/he" : "/services/graphic-design"}>{pathname.includes('/he') ? "Graphic Design" : "Graphic Design"}</Link></li>
                            </ul>
                        </div>
                        <div className="w-1/3 lg:max-w-[150px] xl:max-w-[200px] grow">
                            <h4 className="text-lg xl:text-xl 2xl:text-[26px] leading-8 font-semibold text-white pt-5 pb-1 lg:py-5">{pathname.includes('/he') ? "אֶמְצָעִי" : "Resources"}</h4>
                            <ul className="m-0 lg:mt-4 flex flex-col -mx-2.5">
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/blog/he" : "/blog"}>{pathname.includes('/he') ? "Blog" : "Blog"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/about/he" : "/about"}>{pathname.includes('/he') ? "About" : "About"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/portfolio/he" : "/portfolio"}>{pathname.includes('/he') ? "Portfolio" : "Portfolio"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/contact-form/he" : "/contact-form"}>{pathname.includes('/he') ? "Hire Us" : "Hire Us"}</Link></li>
                                <li className="text-sm xl:text-base 2xl:text-lg leading-6 font-normal text-white p-2.5 hover:text-[#ff393c] transition duration-300"><Link href={pathname.includes('/he') ? "/privacy-policy/he" : "/privacy-policy"}>{pathname.includes('/he') ? "Privacy Policy" : "Privacy Policy"}</Link></li>
                            </ul>
                        </div>
                        <div className="max-w-[280px] w-full lg:w-1/2 lg:max-w-[320px] xl:w-auto">
                            <h4 className="text-lg xl:text-xl 2xl:text-[26px] leading-8 font-semibold text-white pt-5 pb-1 lg:py-5">{pathname.includes('/he') ? "Subscribe to our Newsletter" : "Subscribe to our Newsletter"}</h4>
                            <div className="relative bg-primary border border-white-trans rounded mt-3 lg:mt-7">
                                <Formik
                                    initialValues={{ email: '' }}
                                    validate={(values) => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = pathname.includes('/he') ? 'Email is required' : 'Email is required';
                                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                            errors.email = pathname.includes('/he') ? 'Invalid email address' : 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setBtnLoader(true);
                                        axios
                                            .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/storefreetrial`, values)
                                            .then(() => {
                                                setIsThankYou(true);
                                                setTimeout(() => setIsThankYou(false), 10000);
                                            })
                                            .catch((error) => {
                                                setIsError(error.response?.data?.message || 'An error occurred.');
                                            })
                                            .finally(() => {
                                                setBtnLoader(false);
                                                resetForm();
                                                setSubmitting(false);
                                            });
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                    }) => (
                                        <form onSubmit={handleSubmit} id="subscription_form" className="relative">
                                            {/* Input Field */}
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder={pathname.includes('/he') ? "Enter your email" : "Enter your email"}
                                                    className="dark bg-transparent rounded h-12 w-full px-14 text-base text-white focus:outline-none"
                                                />
                                                <Image
                                                    className={`absolute top-4 w-5 h-auto ${pathname.includes('/he') ? 'left-5' : 'left-5'}`}
                                                    src={envelope}
                                                    alt="Email icon"
                                                    width="auto"
                                                    height="auto"
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={btnLoader}
                                                className={`absolute top-0 bg-secondary h-12 w-12 flex items-center justify-center ${pathname.includes('/he') ? 'right-0 rounded-r' : 'right-0 rounded-r'}`}
                                            >
                                                {btnLoader ? (
                                                    <span className="btn-ring-animation"></span>
                                                ) : (
                                                    <Image src={send} alt="Send icon" width="auto" height="auto" className={`transform w-5 h-5 ${pathname.includes('/he') ? '' : ''}`}/>
                                                )}
                                            </button>

                                            {/* Error Message */}
                                            {errors.email && touched.email && (
                                                <div className={`absolute top-full text-red-500 mt-2 text-sm ${pathname.includes('/he') ? 'right-0' : 'left-0'}`}>{errors.email}</div>
                                            )}
                                        </form>
                                    )}
                                </Formik>

                                {/* Thank You Message */}
                                {isThankYou && (
                                    <div className={`absolute top-full text-sm text-green-500 font-medium mt-2 ${pathname.includes('/he') ? 'right-0' : 'left-0'}`} dir={pathname.includes('/he') ? 'rtl' : 'ltr'}>
                                       { pathname.includes('/he') ? 'תודה שנרשמת לניוזלטר שלנו.' : 'Thank you for subscribing to our newsletter.'}
                                    </div>
                                )}

                                {/* Error Message */}
                                {isError && (
                                    <div className="absolute left-0 top-full text-red-500 mt-2 text-sm">{isError}</div>
                                )}




                            </div>
                            <ul className="flex items-center mt-10 lg:mt-12 -mx-3">
                                <li className="p-3">
                                    <a href="https://www.facebook.com/" target="_blank" className="flex items-center">
                                        <Image className="w-5 h-auto transition-all duration-300 invert brightness-0 hover:invert-0 hover:brightness-100" src={facebook} alt="facebook icon" width="auto" height="auto" />
                                    </a>
                                </li>
                                <li className="p-3">
                                    <a href="https://www.instagram.com/" target="_blank" className="flex items-center">
                                        <Image className="w-5 h-auto transition-all duration-300 invert brightness-0 hover:invert-0 hover:brightness-100" src={instagram} alt="instagram icon" width="auto" height="auto" />
                                    </a>
                                </li>
                                <li className="p-3">
                                    <a href="https://www.linkedin.com/" target="_blank" className="flex items-center">
                                        <Image className="w-5 h-auto transition-all duration-300 invert brightness-0 hover:invert-0 hover:brightness-100" src={linkedin} alt="linkedin icon" width="auto" height="auto" />
                                    </a>
                                </li>
                                <li className="p-3">
                                    <a href="https://dribbble.com/" target="_blank" className="flex items-center">
                                        <Image className="w-5 h-auto transition-all duration-300 invert brightness-0 hover:invert-0 hover:brightness-100" src={dribble} alt="dribble icon" width="auto" height="auto" />
                                    </a>
                                </li>
                                <li className="p-3">
                                    <a href="https://www.behance.net/" target="_blank" className="flex items-center">
                                        <Image className="w-6 h-auto transition-all duration-300 invert brightness-0 hover:invert-0 hover:brightness-100" src={behance} alt="behance icon" width="auto" height="auto" />
                                    </a>
                                </li>
                                <li className="p-3">
                                    <a href="https://www.youtube.com/" target="_blank" className="flex items-center">
                                        <Image className="w-5 h-auto transition-all duration-300 invert grayscale contrast-200 hover:invert-0 hover:grayscale-0" src={youtube} alt="youtube icon" width="auto" height="auto" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Starfield
                    starCount={1000}
                    starColor={[255, 255, 255]}
                    speedFactor={0.05}
                    backgroundColor="black"
                    id="3"
                />
            </div>
            <div className="bg-primary flex items-center justify-center h-[70px] border-t border-white-trans" dir={pathname.includes('/he') ? 'rtl' : 'ltr'}>
                <div className="max-w-[1420px] w-full mx-auto">
                    <div className="text-xs md:text-base text-white font-light text-center">{pathname.includes('/he') ? `ReddenSoft USA Copyright ${currentYear}. All rights reserved ©` : `© ReddenSoft USA Copyright ${currentYear}. All rights reserved.`}</div>
                </div>
            </div>
        </>
    )
}