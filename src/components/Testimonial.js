"use client"
import Image from "next/image"
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
import GlobalButton from "@/components/GlobButton"
import { useEffect } from "react";
import AOS from "aos";

export default function Testimonials({alignment}) {
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
            id: 5,
            rating: 5,
            review: alignment ? "<p>עבדתי עם 2 שירותי מפתחי Fullstack שמספקים בעבר, Reddensoft היא ללא ספק הטובה ביותר. הם ממוקדי תוצאות להפליא, והם תמיד מוכנים לעשות את המייל הנוסף כדי לעזור לי להשיג את המטרות שלי. אני בהחלט ממליץ עליהם לכל מי שמחפש חבילות שירות לפיתוח fullstack.</p>" : "<p>I've worked with 2 fullstack developer services provide in the past, <strong>Reddensoft</strong> is by <strong>far the best</strong>. They're incredibly results-oriented, and they're always willing to go the extra mile to <strong>help me</strong> achieve my goals. I would definitely <strong>recommend</strong> them to anyone looking for <strong>fullstack development</strong> service packages.</p>",
            client: {
                name: "Michel Ambrosio",
                position: alignment ? "מְיַסֵד" : "Founder",
                company: "Quirkel",
                img: client5,
            }
        },
        {
            id: 10,
            rating: 5,
            review: alignment ? "<p>אנחנו עובדים עם מעצבי ומפתחי אתרים של Redensoft בשנתיים האחרונות על שירותי פיתוח הפרויקטים שלנו. הם עזרו לנו להגביר את הנוכחות החברתית שלנו, אתר עם נוכחות מותג איכותית מאוד. יצירת הלידים שלנו גדלה ב-200%. אנחנו ממש מרוצים מהתוצאות, ובהחלט נמליץ עליהן לעסקים אחרים.</p>" : "<p>We've been <strong>working with reddensoft</strong> web designers & developers for the <strong>past 2 years</strong> on our project development services. They've helped us to <strong>increase our social presence</strong>, website with very high quality <strong>brand presence</strong>. Our lead generation has <strong>increased by 200%</strong>. We're <strong>really happy</strong> with the results, and we would definitely <strong>recommend</strong> them to other businesses.</p>",
            client: {
                name: "Kimberly",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client10,
            }
        },
        {
            id: 11,
            rating: 5,
            review: alignment ? "<p>בתחילה ביקשתי ממשה לבנות טופס אינטראקטיבי עבור הלקוחות שלי, מתוך מחשבה שזה יהיה צעד קטן קדימה בשיפור השירותים שאני מציע. עם זאת, התוצאה עלתה בהרבה על הציפיות שלי: בסופו של דבר פיתחנו פלטפורמה שלמה לשירות לקוחות וניהול הזמנות. משה הדגים איך אנחנו יכולים לאחד 10 שלבים לתהליך אחד יעיל, וזה היה פשוט מדהים. מעבר לכישוריו המקצועיים המדהימים, משה שינה לחלוטין את תהליכי העבודה שלי והביא שיפורים מהותיים בכל היבט של הפרויקטים עליהם עבד. השירות שלו הוא לא פחות מיוצא דופן: מהיר, מדויק, והכי חשוב, תמיד זמין ואדיב להפליא. אני ממליץ בחום על משה לכל מי שמחפש מומחה UX/UI עם ראייה רחבה, מקצועיות בלתי מעורערת וגישה ממוקדת לקוח ששמה בראש סדר העדיפויות את הצלחת הלקוח. הוא פשוט נכס לכל פרויקט!</p>" : "<p>I initially asked Moshe to build an <strong>interactive</strong> form for my clients, thinking it would be a small step forward in <strong>enhancing the services</strong> I offer. However, the <strong>outcome</strong> far <strong>exceeded</strong> my <strong>expectations</strong>: we ended up developing an entire self-service customer service and order management platform. Moshe demonstrated how we could consolidate 10 steps into one <strong>streamlined</strong> process, and it was simply amazing. Beyond his <strong>incredible professional skills</strong>, Moshe completely transformed my <strong>workflows</strong> and brought substantial improvements to every aspect of the projects he worked on. His service is nothing short of exceptional: fast, precise, and, most importantly, always available and incredibly courteous.I <strong>wholeheartedly recommend</strong> Moshe to anyone seeking a UX/UI expert with a broad vision, unwavering professionalism, and a client-centric approach that <strong>prioritizes customer success</strong>. He is simply an asset to any project!</p>",
            client: {
                name: alignment ? "גל כהן" : "Gal Cohen",
                position: alignment ? 'סמנכ"ל שיווק' : "CMO",
                company: "RPC",
                img: client11,
            }
        },
        {
            id: 7,
            rating: 5,
            review: alignment ? "<p>לאחרונה שכרתי את מפתחי Fullstack של Reddensoft כדי להוסיף כמה פריטים לפורטפוליו המקוון שלי והם עשו את העבודה במהירות כרגיל. תודה על העבודה הקשה Reddensoft.</p>" : "<p>I recently <strong>hired Reddensoft</strong>'s fullstack developers to add a few items to my online portfolio and they got the <strong>job done quickly as usual</strong>. Thanks for the <strong>hard work</strong> Reddensoft.</p>",
            client: {
                name: "James Vang",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client7,
            }
        },
        {
            id: 4,
            rating: 5,
            review: alignment ? "<p>התרשמתי מאוד מרמת השירות שקיבלתי מ- Reddensoft. הם תמיד היו קשובים לצרכים שלי, והם תמיד היו מוכנים לעשות את הקילומטר הנוסף. בהחלט אמליץ עליהם לכל מי שמחפש את שירותי הפיתוח המצטיינים והיצירתיים שלהם. אתם מדהימים.</p>" : "<p>I was really <strong>impressed</strong> with the level of service that I received from <strong>Reddensoft</strong>. They were always responsive to my needs, and they were always willing to go the <strong>extra mile</strong>. I would definitely <strong>recommend</strong> them to anyone looking for their outstanding, <strong>creative development services</strong>. You guys are <strong>amazing</strong>.</p>",
            client: {
                name: "David Miller",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client4,
            }
        },
        {
            id: 3,
            rating: 5,
            review: alignment ? "<p>הם שותפים נהדרים לעסק שלנו. הם תמיד מעודכנים במגמות הפיתוח האחרונות, והם תמיד מוכנים לעשות את הקילומטר הנוסף כדי לעזור לנו להשיג את המטרות שלנו. אנו בטוחים שאנו בידיים טובות איתם בכל שירותי פיתוח. הלקוחות שלנו סופר מרוצים. יש לנו תוכנית מותאמת אישית ושכרנו כמה מעצבי אתרים ומפתחים עבור הסוכנות שלנו.</p>" : "<p>They are a great partner for <strong>our business</strong>. They're always up-to-date on the latest <strong>development trends</strong>, and they're always willing to go the <strong>extra mile</strong> to help us achieve our goals. We're confident that we're in <strong>good hands</strong> with them for any development services. Our clients are <strong>super happy</strong>. We are having a customized plan and hired few web designers & developers for our agency.</p>",
            client: {
                name: "Bently Ritter",
                position: alignment ? 'נשיא ומנכ"ל' : "President & CEO",
                company: "BeneFit Personal Training",
                img: client3,
            }
        },
        {
            id: 1,
            rating: 5,
            review: alignment ? "<p>הצוותים של Reddensoft נמצאים ברשימה הקצרה שלי של חבר'ה \"שאלים\" לעבודות הקשורות לפיתוח. הם מהירים ויעילים והתקשורת היא מהשורה הראשונה. אני לקוח חוזר ושמח להיות כזה.</p>" : "<p>Reddensoft's teams are on my short list of \"go-to\" guys for development related work. They are fast and efficient and communication is top-notch. I'm a repeat customer and happy to be so.</p>",
            client: {
                name: "PG Favors",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client1,
            }
        },
        {
            id: 2,
            rating: 5,
            review: alignment ? "<p>אני ממליץ בחום על העבודה של Reddensoft. בפרויקט שלי הם קיבלו את הבריף מייד והשילוב של הקלט היצירתי שלהם, העין לפרטים וההערכה המעמיקה של תהליכי הייצור גרם לכך שנוכל לסמוך לחלוטין על ביצוע!</p>" : "<p>I would thoroughly recommend Reddensoft's work. On my project they got the brief straight away and the combination their creative input, eye for detail, and in-depth appreciation of production processes meant that we could totally trust to deliver!<p>",
            client: {
                name: "Mike Boggus",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client2,
            }
        },        
        {
            id: 6,
            rating: 5,
            review: alignment ? "<p>פשוט חשבתי לקפוץ ולומר כמה אני שמח עם הפרויקט החדש שלי שיצרתי מהחבר'ה האלה! קל מאוד לעבוד איתם והם גם מאוד סבלניים. אני ממליץ בחום להשתמש בחבר'ה האלה לפיתוח Fullstack ואשתמש בהם עבור כל הפרויקטים העתידיים שלי!</p>" : "<p>I just thought I'd drop by and say how happy I am with my new project that I had created from these guys! They are very easy to work with and are also extremely patient. I would highly recommend using these guys for fullstack development and will use them for all my future projects!</p>",
            client: {
                name: "Jayson L",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client6,
            }
        },
        {
            id: 8,
            rating: 5,
            review: alignment ? "<p>השתמשתי בשירותים של Reddensoft עבור פרויקטים רבים. Reddensoft תמיד הייתה זמינה לענות על שאלות, לתת עדכוני סטטוס, הצעות מחיר וכו'. כחברה הם הוגנים, כנים ומגיעים בזמן.</p>" : "<p>I have used Reddensoft's services for many projects. Reddensoft has always been available to answer questions, give status updates, quotes etc. As a company they are fair, honest and on-time.</p>",
            client: {
                name: "Ryan",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client8,
            }
        },
        {
            id: 9,
            rating: 5,
            review: alignment ? "<p>שכרתי מפתחי Fullstack מ- Reddensoft לפתח עבורי מערכת אתרים והם הלכו מעל ומעבר למה שביקשו מהם. הם תמיד היו מגיבים מאוד באימייל/סקייפ והיה תענוג לעבוד איתם. אני אעבוד איתם יותר.</p>" : "<p>I hired fullstack developers from Reddensoft to develop a website system for me and they went ABOVE & BEYOND what was asked of them. They always were very responsive on email/Skype and it was a pleasure to work with. I will be doing more work with them.</p>",
            client: {
                name: "A Dukes",
                position: alignment ? "יַזָם" : "Entrepreneur",
                company: "",
                img: client9,
            }
        },
    ]

    return (
        <div className="max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto px-5 lg:px-0">
            <h2 className="text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-black text-center uppercase" data-aos="zoom-in-up">{alignment ? "מה הלקוחות שלנו אומרים" : "What Our Clients Say"}</h2>
            <div className="flex flex-wrap items-cemter mt-6 xl:mt-12 mb-6 -mx-4 xl:-mx-5">
                <ul className="w-auto sm:w-1/2 lg:w-1/3 flex flex-wrap lg:flex-col justify-center">
                    {
                        testimonials.slice(0, 2).map((testimonial, t) => (
                            <li className="w-full p-4 xl:p-5" key={testimonial.id} data-aos="fade-up" data-aos-delay={100 + (t * 100)}>
                                <div className="bg-white px-6 xl:px-7 2xl:px-8 py-10 rounded-2xl border border-[#DADADA]">
                                    <div className={`flex items-center mb-5 ${alignment ? 'justify-end' : 'justify-start'}`}>
                                        {[...Array(5)].map((_, index) => {
                                            return(
                                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                    <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                </svg>
                                            )
                                        })}
                                    </div>
                                    <h3 className={`text-sm xl:text-base 2xl:text-lg font-normal pb-5 xl:pb-7 2xl:pb-9 ${alignment ? 'text-right' : 'text-left'}`} dangerouslySetInnerHTML={{ __html: testimonial.review }}></h3>
                                    <div className={`flex items-center ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <Image className="rounded-full w-10 h-10 2xl:w-12 2xl:h-12 2xl:w-14 2xl:h-14" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                        <div className={alignment ? 'pr-3.5 text-right' : 'pl-3.5 text-left'}>
                                            <h4 className="text-base xl:text-xl 2xl:text-[22px] leading-8 font-semibold">{testimonial.client.name}</h4>
                                            {
                                                testimonial.client.company ?
                                                <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                :
                                                <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul className="order-1 lg:order-none w-auto lg:w-1/3 flex flex-wrap lg:flex-col justify-center">
                    {
                        testimonials.slice(2, 4).map((testimonial, t) => (
                            <li className="w-full sm:w-1/2 lg:w-full p-4 xl:p-5" key={testimonial.id} data-aos="fade-up" data-aos-delay={100 + (t * 100)}>
                                <div className="bg-white px-6 py-8 xl:px-7 xl:py-8 2xl:px-8 2xl:py-10 rounded-2xl border border-[#DADADA]">
                                    <div className={`flex items-center mb-5 ${alignment ? 'justify-end' : 'justify-start'}`}>
                                        {[...Array(5)].map((_, index) => {
                                            return(
                                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                    <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                </svg>
                                            )
                                        })}
                                    </div>
                                    <h3 className={`text-sm xl:text-base 2xl:text-lg font-normal pb-5 xl:pb-7 2xl:pb-9 ${alignment ? 'text-right' : 'text-left'}`} dangerouslySetInnerHTML={{ __html: testimonial.review }}></h3>
                                    <div className={`flex items-center ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <Image className="rounded-full w-10 h-10 2xl:w-12 2xl:h-12 2xl:w-14 2xl:h-14" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                        <div className={alignment ? 'pr-3.5 text-right' : 'pl-3.5 text-left'}>
                                            <h4 className="text-base xl:text-xl 2xl:text-[22px] leading-8 font-semibold">{testimonial.client.name}</h4>
                                            {
                                                testimonial.client.company ?
                                                <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                :
                                                <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul className="w-auto sm:w-1/2 lg:w-1/3 flex flex-wrap lg:flex-col justify-center">
                    {
                        testimonials.slice(4, 6).map((testimonial, t) => (
                            <li className="w-full p-4 xl:p-5" key={testimonial.id} data-aos="fade-up" data-aos-delay={100 + (t * 100)}>
                                <div className="bg-white px-6 py-8 xl:px-7 xl:py-8 2xl:px-8 2xl:py-10 rounded-2xl border border-[#DADADA]">
                                    <div className={`flex items-center mb-5 ${alignment ? 'justify-end' : 'justify-start'}`}>
                                        {[...Array(5)].map((_, index) => {
                                            
                                            return(
                                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
                                                    <path d="M5.90578 5.81042C5.90578 5.81042 2.7076 6.16465 0.574125 6.40148C0.38183 6.42476 0.2118 6.55329 0.148039 6.74862C0.0842779 6.94395 0.148039 7.14738 0.28973 7.27592C1.87465 8.72218 4.25608 10.888 4.25608 10.888C4.25406 10.888 3.60228 14.0387 3.1691 16.1407C3.13267 16.331 3.20149 16.5324 3.36747 16.6529C3.53244 16.7733 3.74498 16.7753 3.91197 16.6812C5.77825 15.6205 8.57362 14.0255 8.57362 14.0255C8.57362 14.0255 11.37 15.6205 13.2333 16.6822C13.4033 16.7753 13.6158 16.7733 13.7808 16.6529C13.9468 16.5324 14.0156 16.331 13.9781 16.1418C13.545 14.0387 12.8942 10.888 12.8942 10.888C12.8942 10.888 15.2756 8.72218 16.8606 7.27895C17.0022 7.14637 17.065 6.94294 17.0022 6.74862C16.9395 6.5543 16.7695 6.42577 16.5772 6.4035C14.4437 6.16465 11.2445 5.81042 11.2445 5.81042C11.2445 5.81042 9.91868 2.87741 9.03513 0.922064C8.95214 0.746974 8.77807 0.624512 8.57362 0.624512C8.36918 0.624512 8.19409 0.747986 8.11515 0.922064C7.23059 2.87741 5.90578 5.81042 5.90578 5.81042Z" fill="#DD0004"/>
                                                </svg>
                                            )
                                        })}
                                    </div>
                                    <h3 className={`text-sm xl:text-base 2xl:text-lg font-normal pb-5 xl:pb-7 2xl:pb-9 ${alignment ? 'text-right' : 'text-left'}`} dangerouslySetInnerHTML={{ __html: testimonial.review }}></h3>
                                    <div className={`flex items-center ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <Image className="rounded-full w-10 h-10 2xl:w-12 2xl:h-12 2xl:w-14 2xl:h-14" src={testimonial.client.img} alt={testimonial.client.name} width="auto" height="auto"/>
                                        <div className={alignment ? 'pr-3.5 text-right' : 'pl-3.5 text-left'}>
                                            <h4 className="text-base xl:text-xl 2xl:text-[22px] leading-8 font-semibold">{testimonial.client.name}</h4>
                                            {
                                                testimonial.client.company ?
                                                <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position} at <span className="font-bold">{testimonial.client.company}</span></p>
                                                :
                                                <p className="text-xs xl:text-sm 2xl:text-base font-normal">{testimonial.client.position}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex justify-center mt-12 xl:mt-16" data-aos="fade-down" data-aos-delay="100">
                { alignment ? <GlobalButton title="צפה בכל ההמלצות" link="/testimonial/he" alignment/> : <GlobalButton title="View All Testimonials" link="/testimonial"/> }
            </div>
        </div>
    )
}