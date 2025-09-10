"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
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
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Starfield from "@/components/StarField";
import axios from 'axios';
import { useFormik } from 'formik';
import validator from 'validator';
import { useRouter } from 'next/navigation';

export default function QuoteForm() {
    const [btnLoader, setBtnLoader] = useState(false);
    const [isThankYou, setIsThankYou] = useState(false);
    const [isError, setIsError] = useState(false);
    var _ = require('lodash');

    const router  = useRouter();
    const removeExtraSpace = (s) => {
        var rSpase = s.replace(/\s{2,}/g, ' ');
        return _.trimStart(rSpase);
    };

    const validate = values => {
        const errors = {};

        if (!values.fname || !_.trim(values.fname)) {
            errors.fname = 'First name is required';
        } else if (values.fname.length > 50) {
            errors.fname = 'Must be 15 characters or less';
        } else if (values.fname.match("[<>]")) {
            errors.fname = 'Please provide a valid name';
        }

        if (!values.lname || !_.trim(values.lname)) {
            errors.lname = 'Last name is required';
        } else if (values.lname.length > 50) {
            errors.lname = 'Must be 15 characters or less';
        } else if (values.lname.match("[<>]")) {
            errors.lname = 'Please provide a valid name';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!validator.isEmail(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (values.contactFile) {
            const allowedTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(values.contactFile.type)) {
                errors.contactFile = 'Only .doc and .docx files are allowed';
            }
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            message: "",
            contactFile: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {

            setBtnLoader(true);
            axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reddensoft-israel-contact-form`, values, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function (response) {
                resetForm({
                    fname: "",
                    lname: "",
                    email: "",
                    message: "",
                    contactFile: "",

                });

                document.getElementById("uploader").value = null;
                router.push('/thank-you')
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

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const testimonials = [
        {
            id: 5,
            rating: 5,
            review: "<p>I've worked with 2 fullstack developer services provide in the past, <strong>Reddensoft</strong> is by <strong>far the best</strong>. They're incredibly results-oriented, and they're always willing to go the extra mile to <strong>help me</strong> achieve my goals. I would definitely <strong>recommend</strong> them to anyone looking for <strong>fullstack development</strong> service packages.</p>",
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
            review: "<p>We've been <strong>working with reddensoft</strong> web designers & developers for the <strong>past 2 years</strong> on our project development services. They've helped us to <strong>increase our social presence</strong>, website with very high quality <strong>brand presence</strong>. Our lead generation has <strong>increased by 200%</strong>. We're <strong>really happy</strong> with the results, and we would definitely <strong>recommend</strong> them to other businesses.</p>",
            client: {
                name: "Kimberly",
                position: "Entrepreneur",
                company: "",
                img: client10,
            }
        },
        {
            id: 11,
            rating: 5,
            review: "<p>I initially asked Moshe to build an <strong>interactive</strong> form for my clients, thinking it would be a small step forward in <strong>enhancing the services</strong> I offer. However, the <strong>outcome</strong> far <strong>exceeded</strong> my <strong>expectations</strong>: we ended up developing an entire self-service customer service and order management platform. Moshe demonstrated how we could consolidate 10 steps into one <strong>streamlined</strong> process, and it was simply amazing. Beyond his <strong>incredible professional skills</strong>, Moshe completely transformed my <strong>workflows</strong> and brought substantial improvements to every aspect of the projects he worked on. His service is nothing short of exceptional: fast, precise, and, most importantly, always available and incredibly courteous.I <strong>wholeheartedly recommend</strong> Moshe to anyone seeking a UX/UI expert with a broad vision, unwavering professionalism, and a client-centric approach that <strong>prioritizes customer success</strong>. He is simply an asset to any project!</p>",
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
            review: "<p>I recently <strong>hired Reddensoft</strong>'s fullstack developers to add a few items to my online portfolio and they got the <strong>job done quickly as usual</strong>. Thanks for the <strong>hard work</strong> Reddensoft.</p>",
            client: {
                name: "James Vang",
                position: "Entrepreneur",
                company: "",
                img: client7,
            }
        },
        {
            id: 4,
            rating: 5,
            review: "<p>I was really <strong>impressed</strong> with the level of service that I received from <strong>Reddensoft</strong>. They were always responsive to my needs, and they were always willing to go the <strong>extra mile</strong>. I would definitely <strong>recommend</strong> them to anyone looking for their outstanding, <strong>creative development services</strong>. You guys are <strong>amazing</strong>.</p>",
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
            review: "<p>They are a great partner for <strong>our business</strong>. They're always up-to-date on the latest <strong>development trends</strong>, and they're always willing to go the <strong>extra mile</strong> to help us achieve our goals. We're confident that we're in <strong>good hands</strong> with them for any development services. Our clients are <strong>super happy</strong>. We are having a customized plan and hired few web designers & developers for our agency.</p>",
            client: {
                name: "Bently Ritter",
                position: "President & CEO",
                company: "BeneFit Personal Training",
                img: client3,
            }
        },
        {
            id: 1,
            rating: 5,
            review: "<p>Reddensoft's teams are on my short list of \"go-to\" guys for development related work. They are fast and efficient and communication is top-notch. I'm a repeat customer and happy to be so.</p>",
            client: {
                name: "PG Favors",
                position: "Entrepreneur",
                company: "",
                img: client1,
            }
        },
        {
            id: 2,
            rating: 5,
            review: "<p>I would thoroughly recommend Reddensoft's work. On my project they got the brief straight away and the combination their creative input, eye for detail, and in-depth appreciation of production processes meant that we could totally trust to deliver!<p>",
            client: {
                name: "Mike Boggus",
                position: "Entrepreneur",
                company: "",
                img: client2,
            }
        },        
        {
            id: 6,
            rating: 5,
            review: "<p>I just thought I'd drop by and say how happy I am with my new project that I had created from these guys! They are very easy to work with and are also extremely patient. I would highly recommend using these guys for fullstack development and will use them for all my future projects!</p>",
            client: {
                name: "Jayson L",
                position: "Entrepreneur",
                company: "",
                img: client6,
            }
        },
        {
            id: 8,
            rating: 5,
            review: "<p>I have used Reddensoft's services for many projects. Reddensoft has always been available to answer questions, give status updates, quotes etc. As a company they are fair, honest and on-time.</p>",
            client: {
                name: "Ryan",
                position: "Entrepreneur",
                company: "",
                img: client8,
            }
        },
        {
            id: 9,
            rating: 5,
            review: "<p>I hired fullstack developers from Reddensoft to develop a website system for me and they went ABOVE & BEYOND what was asked of them. They always were very responsive on email/Skype and it was a pleasure to work with. I will be doing more work with them.</p>",
            client: {
                name: "A Dukes",
                position: "Entrepreneur",
                company: "",
                img: client9,
            }
        },
    ]

    const fileNameLimit = (name) => {
        const extension = name.split('.').pop();
        const baseName = name.slice(0, -(extension.length + 1));
        const limitedName = baseName.length > 15 ? baseName.slice(0, 15) + '...' : baseName;
        return `${limitedName}.${extension}`;
    }


    return (
        <>
            <title>Contact Us | ReddenSoft USA</title>
            <meta name="title" content="Contact Us | ReddenSoft USA" />
            <meta name="description" content="Get in touch with ReddenSoft USA for IT solutions and web development services. We’re ready to discuss how we can help your business grow" />

            <div className="pt-20 pb-28 px-5 bg-slate-200">
                <div className="max-w-[700px] lg:max-w-[1200px] w-full m-auto bg-white flex flex-wrap lg:flex-nowrap rounded-xl overflow-hidden">
                    <div className="banner_bg w-full lg:max-w-[400px] w-full bg-primary p-10 flex flex-col justify-between items-start">
                        <Image className="h-8 xl:h-10 w-auto" src={logo} alt="Reddensoft logo" width="auto" height="auto" />
                        <div className="mt-10 lg:my-10">
                            <h1 className="text-xl xl:text-2xl 2xl:text-3xl leading-tight font-bold text-white block sm:flex flex-row lg:flex-col uppercase"><span>Our</span> Clients Speak</h1>
                            <p className="text-sm xl:text-base text-white mt-6">See here what our happy clients speak about us and our services.</p>
                        </div>
                        <div className="w-full hidden lg:block">
                            <div className="embla testimonial -mx-2" ref={emblaRef}>
                                <div className="embla__container">
                                    {testimonials.map((testimonial, t) => (
                                        <div className="embla__slide px-2" key={t}>
                                            <div className="bg-white/[.1] p-4 xl:p-5 2xl:p-6 rounded-2xl">
                                                <div className="flex items-center mb-4">
                                                    {[...Array(5)].map((_, index) => {
                                                        return (
                                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                                <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#ff393c" />
                                                            </svg>
                                                        )
                                                    })}
                                                </div>
                                                <h3 className="text-xs font-normal text-white font-light mb-5 line-clamp-4" dangerouslySetInnerHTML={{ __html: testimonial.review }}></h3>
                                                <div className="flex items-center">
                                                    <Image className="rounded-full w-10 h-10 xl:w-10 xl:h-10" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto" />
                                                    <div className="pl-3.5">
                                                        <h4 className="text-sm lg:text-base text-white">{testimonial.client.name}</h4>
                                                        {
                                                            testimonial.client.company ?
                                                            <p className="text-xs text-white font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                            :
                                                            <p className="text-xs text-white font-normal">{testimonial.client.position}</p>
                                                        }
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
                    <div className="w-full lg:grow p-6 sm:p-10 pb-14">
                        <h2 className="text-lg xl:text-xl 2xl:text-2xl leading-tight font-bold my-3 lg:mb-6 lg:mt-0">Let's get started</h2>
                        <div className="relative w-full h-full flex flex-col lg:items-end lg:ml-auto">
                            <form className="w-full relative z-1" onSubmit={formik.handleSubmit}>
                                <div className="flex flex-wrap items-start -mx-3.5">
                                    <div className="py-2.5 px-3.5 w-full sm:w-1/2">

                                        <input type="text" placeholder="First Name*" name="fname" className="light bg-slate-100 rounded w-full h-12 2xl:h-14 px-7 placeholder:text-black focus:outline-none" onChange={formik.handleChange}
                                            value={removeExtraSpace(formik.values.fname)} onBlur={formik.handleBlur} />
                                        {formik.touched.fname && formik.errors.fname ? <div className="text-sm text-secondary font-medium mt-2 ml-7">{formik.errors.fname}</div> : null}
                                    </div>
                                    <div className="py-2.5 px-3.5 w-full sm:w-1/2">


                                        <input type="text" placeholder="Last Name*" name="lname" className="light bg-slate-100 rounded w-full h-12 2xl:h-14 px-7 placeholder:text-black focus:outline-none" onChange={formik.handleChange}
                                            value={removeExtraSpace(formik.values.lname)} onBlur={formik.handleBlur} />
                                        {formik.touched.lname && formik.errors.lname ? <div className="text-sm text-secondary font-medium mt-2 ml-7">{formik.errors.lname}</div> : null}
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -mx-3.5">
                                    <div className="py-2.5 px-3.5 w-full">

                                        <input onChange={formik.handleChange}
                                            value={removeExtraSpace(formik.values.email)} onBlur={formik.handleBlur} size="40" type="text" placeholder="Email Address*" name="email" className="light bg-slate-100 rounded w-full h-12 2xl:h-14 px-7 placeholder:text-black focus:outline-none" />
                                        {formik.touched.email && formik.errors.email ? <div className="text-sm text-secondary font-medium mt-2 ml-7">{formik.errors.email}</div> : null}
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -mx-3.5">
                                    <div className="py-2.5 px-3.5 w-full">
                                        <textarea name="message" onChange={formik.handleChange} value={removeExtraSpace(formik.values.message)} onBlur={formik.handleBlur} placeholder="Message" className="h-32 2xl:h-36 w-full bg-slate-100 rounded px-7 py-4 placeholder:text-black resize-none focus:outline-none"></textarea>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center -mx-3.5">
                                    <div className="py-2.5 px-3.5 w-full">
                                        <label htmlFor="uploader" className="flex bg-slate-100 rounded w-full p-7 cursor-pointer">
                                            <input type="file" className="hidden" id="uploader" onChange={(event) => {
                                                formik.setFieldValue("contactFile", event.currentTarget.files[0]);
                                            }} name='contactFile' accept=".doc, .docx"/>
                                            {
                                                formik.values.contactFile && formik.values.contactFile.name
                                                ?
                                                <div className="flex items-center">
                                                    <svg width="41" height="50" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto flex-shrink-0">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.7273 2.30814C22.7273 2.24834 22.7273 2.21846 22.7248 2.16425C22.6711 1.04205 21.6841 0.0556378 20.562 0.00254684C20.5077 -1.67927e-05 20.49 -9.9092e-06 20.4545 1.45444e-06H13.0879C11.2585 -2.35456e-05 9.74852 -4.41298e-05 8.51859 0.100456C7.24109 0.20482 6.06677 0.428842 4.96373 0.990865C3.25316 1.86243 1.86243 3.25316 0.990865 4.96373C0.428819 6.06677 0.204819 7.24109 0.100455 8.51859C-4.48972e-05 9.74855 -2.20437e-05 11.2585 6.83554e-07 13.0879V36.912C-2.20437e-05 38.7416 -4.48972e-05 40.2514 0.100455 41.4814C0.204819 42.7589 0.428819 43.9332 0.990865 45.0364C1.86243 46.7468 3.25316 48.1375 4.96373 49.0091C6.06677 49.5711 7.24109 49.7952 8.51859 49.8995C9.74857 50 11.2585 50 13.0879 50H27.8211C29.6507 50 31.1605 50 32.3905 49.8995C33.668 49.7952 34.8423 49.5711 35.9455 49.0091C37.6559 48.1375 39.0466 46.7468 39.9182 45.0364C40.4802 43.9332 40.7043 42.7589 40.8086 41.4814C40.9091 40.2514 40.9091 38.7416 40.9091 36.912V20.4544C40.9091 20.4191 40.9091 20.4015 40.9066 20.3473C40.8536 19.225 39.867 18.238 38.7448 18.1844C38.6905 18.1818 38.6607 18.1818 38.6011 18.1818H28.5639C27.9902 18.1819 27.4316 18.182 26.9586 18.1433C26.4391 18.1009 25.8259 18.0007 25.2091 17.6864C24.3539 17.2506 23.6584 16.5553 23.2227 15.7C22.9084 15.0831 22.8082 14.4701 22.7659 13.9505C22.727 13.4775 22.7273 12.9188 22.7273 12.3453V2.30814ZM36.1545 13.6363C36.8218 13.6364 37.1555 13.6364 37.4286 13.4688C37.8148 13.2322 38.0455 12.6746 37.9398 12.2344C37.8648 11.9227 37.6473 11.7053 37.212 11.2705L29.6386 3.69709C29.2039 3.26189 28.9864 3.0443 28.6748 2.96936C28.2345 2.86355 27.677 3.09432 27.4402 3.48032C27.2727 3.75366 27.2727 4.08732 27.2727 4.75464V11.8181C27.2727 12.4545 27.2727 12.7727 27.3966 13.0158C27.5055 13.2296 27.6793 13.4034 27.8932 13.5124C28.1364 13.6362 28.4545 13.6363 29.0909 13.6363L36.1545 13.6363ZM11.3636 18.1818C10.1085 18.1818 9.09091 19.1993 9.09091 20.4545C9.09091 21.7098 10.1085 22.7273 11.3636 22.7273H15.9091C17.1643 22.7273 18.1818 21.7098 18.1818 20.4545C18.1818 19.1993 17.1643 18.1818 15.9091 18.1818H11.3636ZM9.09091 29.5455C9.09091 28.2902 10.1085 27.2727 11.3636 27.2727H29.5455C30.8007 27.2727 31.8182 28.2902 31.8182 29.5455C31.8182 30.8007 30.8007 31.8182 29.5455 31.8182H11.3636C10.1085 31.8182 9.09091 30.8007 9.09091 29.5455ZM9.09091 38.6364C9.09091 37.3811 10.1085 36.3636 11.3636 36.3636H29.5455C30.8007 36.3636 31.8182 37.3811 31.8182 38.6364C31.8182 39.8916 30.8007 40.9091 29.5455 40.9091H11.3636C10.1085 40.9091 9.09091 39.8916 9.09091 38.6364Z" fill="#0c112f"/>
                                                    </svg>
                                                    <span className="text-base px-2.5 text-slate-800 font-medium">{fileNameLimit(formik.values.contactFile.name)}</span>
                                                </div>
                                                :
                                                <div className="flex items-center">
                                                    <svg width="692" height="691" viewBox="0 0 692 691" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto opacity-70 flex-shrink-0">
                                                        <path d="M647.65 690.7H44.35C20.36 690.7 0.75 671.08 0.75 647.09V463.67C0.75 454.15 8.5 446.4 18.02 446.4H79.3C88.82 446.4 96.57 454.15 96.57 463.67V594.86H595.41V463.67C595.41 454.15 603.16 446.4 612.68 446.4H673.97C683.49 446.4 691.24 454.15 691.24 463.67V647.09C691.26 671.08 671.64 690.7 647.65 690.7ZM393.92 491.42V171.95H461.48C466.72 171.95 471.2 169.14 473.49 164.4C475.78 159.68 475.17 154.42 471.9 150.31L356.42 5.19003C353.82 1.89003 350.2 0.150024 346 0.150024C341.8 0.150024 338.19 1.89003 335.58 5.19003L220.1 150.31C216.83 154.42 216.25 159.69 218.51 164.4C220.8 169.12 225.28 171.95 230.52 171.95H298.08V491.42C298.08 500.54 305.54 508 314.66 508H377.33C386.45 508 393.92 500.54 393.92 491.42Z" fill="#dd0004"/>
                                                    </svg>
                                                    <span className="text-base px-2.5 text-slate-600">Upload a .doc or .docx file for the project brief.</span>
                                                </div>
                                            }
                                        </label>
                                        {formik.touched.contactFile && formik.errors.contactFile ? <div className="text-sm text-secondary font-medium mt-2 ml-7">{formik.errors.contactFile}</div> : null}
                                    </div>
                                </div>
                                <button type="submit" disabled={btnLoader} className="flex items-center bg-secondary h-[52px] 2xl:h-[60px] text-base 2xl:text-[19px] leading-6 pl-10 pr-3.5 rounded-[30px] mt-7">
                                    <span className={`text-base 2xl:text-[19px] leading-6 font-bold text-white uppercase pr-4`}>Submit</span>

                                    {btnLoader ? (
                                        <span className='btn-ring-animation'></span>
                                    ) : (
                                        <span className="w-7 h-7 2xl:w-8 2xl:h-8 rounded-full flex items-center justify-center rounded-full bg-white">
                                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="#001A32" />
                                            </svg>
                                        </span>
                                    )}

                                </button>

                                {isThankYou && (
                                    <div className="text-sm text-green-500 font-medium mt-5">
                                        Thank you for getting in touch!
                                    </div>
                                )}
                                {isError && (
                                    <div className="text-sm text-secondary font-medium mt-5">
                                        {isError}
                                    </div>
                                )}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
