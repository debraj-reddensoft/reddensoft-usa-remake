"use client"
import Image from "next/image";
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
import GlobalButton from "@/components/GlobButton";
import { useEffect } from "react";
import AOS from "aos";
import BlogCard from "@/components/BlogCard";

export default function Blog({alignment}) {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          once: true,
          offset: 0,
          easing: "ease-out-cubic",
        });
    }, []);

    const blogs = [
        {
            id: 1,
            title: alignment ? "שפר את מעורבות המשתמשים עם עיצוב אתר רספונסיבי - הסבר מהיר" : "Boost User Engagement with Responsive Website Design - A Quick Explanation",
            desc: alignment ? "אתר רספונסיבי ידוע ביצירת לידים והמרה טובה יותר מכיוון שהוא יוצר מעורבות משתמשים טובה יותר. בדוק כאן את ההסבר מאחורי זה." : "A responsive website is known for generating leads and better conversion as it creates better user engagement. Check here the explanation behind it.",
            date: alignment ? "12 בדצמבר 2024" : "Dec 12, 2024",
            thumb: blog1,
            link: "boost-user-engagement-with-responsive-website-design",
        },
        {
            id: 2,
            title: alignment ? "מגמות שיווק דיגיטלי לשנת 2025: תובנות מפתח ותחזיות עתידיות" : "2025 Digital Marketing Trends: Key Insights and Future Predictions",
            desc: alignment ? "האם אתה מוכן לעוד שנת שיווק דיגיטל טרנספורמטיבי? בשנה זו, AI, טכנולוגיה מתפתחת והתאמה אישית עומדים לתפוס את מרכז הבמה ולמשווקים צריכה להיות הבנה ברורה לגבי המגמות הקרובות והאסטרטגיות הניתנות לפעולה." : "Are you ready for another transformative digital marketing year? In this year, AI, evolving technology and personalization is going to take the center stage and the marketers should have a clear understanding on the upcoming trends and actionable strategies.",
            date: alignment ? "20 בדצמבר 2024" : "Dec 20, 2024",
            thumb: blog2,
            link: "2025-digital-marketing-trends-key-insights-and-future-predictions",
        },
        {
            id: 3,
            title: alignment ? "מדוע קידום אתרים הוא אסטרטגיה ארוכת טווח - הסבר" : "Why SEO is a Long-Term Strategy - An Explanation",
            desc: alignment ? "תוכנית המתארת ​​כיצד תעלה את דירוג מנוע החיפוש של האתר שלך לאורך זמן, ידועה כאסטרטגיית SEO ארוכת טווח. מכיוון שקידום אתרים לוקח יותר זמן, חשוב שתהיה לך תוכנית ארוכת טווח. תוצאות משמעותיות עשויות שלא להיראות במשך חודשים או אפילו שנים." : "A plan that describes how you will raise your website's search engine rating over time is known as a long-term SEO strategy. Because SEO takes longer, it's critical to have a long-term plan. Significant results may not be seen for months or even years.",
            date: alignment ? "6 בינואר 2025" : "Jan 6, 2025",
            thumb: blog3,
            link: "why-seo-is-a-long-term-strategy-an-explanation",
        },
        {
            id: 4,
            title: alignment ? "העצמת עסקים קטנים עם AI: פתרונות חסכוניים לתוצאות גדולות" : "Empowering Small Businesses with AI: Cost-Effective Solutions for Big Results",
            desc: alignment ? "עבור חברות קטנות, מה המשמעות של בינה מלאכותית? מכיוון שבינה מלאכותית היא טכנולוגיה המתפתחת במהירות המחייבת מחקר ושינוי מתמידים, זה סביר שעדיין אין תשובה סופית. גם בעוד שרבים מאיתנו עדיין לומדים כיצד לשלב בינה מלאכותית בעסק, אנו יכולים להתחיל להשתמש בכלים הזמינים כיום כדי לתמוך בעסקים שלנו בדרכים משמעותיות ומינוריות כאחד." : "For small firms, what does artificial intelligence mean? Since AI is a quickly developing technology that necessitates constant research and modification, it's reasonable to not have a definitive answer just yet. Even while many of us are still learning how to integrate AI in business, we can begin using the tools that are currently available to support our businesses in both significant and minor ways.",
            date: alignment ? "14 בינואר 2025" : "Jan 14, 2025",
            thumb: blog4,
            link: "empowering-small-businesses-with-ai",
        },
        {
            id: 5,
            title: alignment ? "פיתוח מסחר אלקטרוני בישראל: כיצד לבנות חנות מקוונת ניתנת להרחבה" : "E-Commerce Development in Israel: How to Build a Scalable Online Store",
            desc: alignment ? "גלה כיצד לבנות חנות מסחר אלקטרוני ניתנת להרחבה בישראל עם תובנות מומחים על פיתוח, אסטרטגיה וצמיחה. שפר את העסק המקוון שלך היום!" : "Discover how to build a scalable e-commerce store in Israel with expert insights on development, strategy, and growth. Boost your online business today!",
            date: alignment ? "27 בפברואר 2025" : "Feb 27, 2025",
            thumb: blog5,
            link: "ecommerce-development-in-israel",
        },
        {
            id: 6,
            title: alignment ? "כיצד סטארטאפים בישראל יכולים להפיק תועלת מפיתוח CRM מותאם אישית" : "How Startups in Israel Can Benefit from Custom CRM Development",
            desc: alignment ? "למד כיצד פיתוח CRM מותאם אישית מעצים סטארטאפים ישראלים עם אוטומציה, תובנות מונעות נתונים וניהול לקוחות טוב יותר להצלחה עסקית." : "Learn how custom CRM development empowers Israeli startups with automation, data-driven insights, and better customer management for business success.",
            date: alignment ? "3 במרץ 2025" : "Mar 3, 2025",
            thumb: blog6,
            link: "how-startups-can-benefit-from-custom-crm-development",
        },
        {
            id: 7,
            title: alignment ? "שיטות עבודה מומלצות לאבטחת סייבר 2025: פיתוח אתרים ואפליקציות" : "Cybersecurity Best Practices 2025: Web & App Development",
            desc: alignment ? `אבטחת סייבר היא הדרך להגן על הנתונים שלך מפני התקפות סייבר. אתה זקוק לשירותי אבטחת סייבר מחברה נחשבת כדי להגן על הנתונים שלך מפני גניבה, אובדן או הפרה.` : `Cybersecurity is the way to protect your data from cyberattacks. You need cybersecurity services from a reputed firm to safeguard your data from theft, loss or breach.`,
            date: alignment ? "12 במרץ 2025" : "Mar 12, 2025",
            thumb: blog7,
            link: "cybersecurity-best-practices-for-web-app-development-2025",
        },
        {
            id: 8,
            title: alignment ? "כיצד AI ולמידת מכונה משנים פתרונות עסקיים מודרניים" : "How AI and Machine Learning Are Transforming Modern Business Solutions",
            desc: alignment ? `שירותי AI/ML ידועים כמשנים פתרונות עסקיים בכל ההיבטים בשנים האחרונות. ראה איך זה יהיה ב-2025 ואילך.` : `AI/ML services are known to transform business solutions in all aspects for the last few years. See how it will be in 2025 and forward.`,
            date: alignment ? "26 במרץ 2025" : "Mar 26, 2025",
            thumb: blog8,
            link: "how-ai-ml-transforming-modern-business-solutions",
        },
        {
            id: 9,
            title: alignment ? "עיצוב ממשק משתמש/UX: מפתח להצלחה עסקית בשנת 2025" : "UI/UX Design: Key to Business Success in 2025",
            desc: alignment ? "גלה כיצד עיצוב ממשק משתמש/UX מניע הצלחה עסקית בשנת 2025 על ידי שיפור חווית המשתמש, הגברת המעורבות והגדלת ההמרות." : "Discover how UI/UX design drives business success in 2025 by enhancing user experience, boosting engagement, and increasing conversions.",
            date: alignment ? "22 באפריל, 2025" : "Apr 22, 2025",
            thumb: blog9,
            link: "why-ui-ux-is-the-key-to-business-success-2025",
        },
        {
            id: 10,
            title: alignment ? 'פיתוח SaaS בשנת 2025: מגמות, טכנולוגיות ושיטות עבודה מומלצות' : 'SaaS Development in 2025: Trends, Technologies, and Best Practices',
            desc: alignment ? `<p>מודל התוכנה כשירות (SaaS) היה אחד הכוחות המשנים ביותר בעולם הטכנולוגיה בעשור האחרון. ככל שאנו מתקרבים לשנת 2025, פיתוח SaaS ממשיך להתפתח במהירות, מונע על ידי התקדמות בטכנולוגיה, צרכים עסקיים משתנים והביקוש הגובר לגמישות ומדרגיות. מסטארטאפים ועד חברות Fortune 500, עסקים ברחבי העולם מאמצים פתרונות SaaS כדי לייעל את התפעול, לשפר את היעילות ולהתרחב ללא מאמץ.</p><br/><p>במאמר זה, נחקור את המגמות, הטכנולוגיות והשיטות המומלצות העדכניות ביותר שמעצבות את פיתוח SaaS בשנת 2025. בין אם אתה ספק SaaS או עסק המעוניין להשקיע בשירותי פיתוח SaaS, הבנת השינויים הללו תעזור לך להישאר קדימה בנוף תחרותי יותר ויותר.</p>` : `<p>The Software as a Service (SaaS) model has been one of the most transformative forces in the tech world over the past decade. As we approach 2025, SaaS development continues to evolve rapidly, driven by advancements in technology, changing business needs, and the increasing demand for flexibility and scalability. From startups to Fortune 500 companies, businesses worldwide are embracing SaaS solutions to streamline operations, improve efficiency, and scale effortlessly.</p><br/><p>In this article, we’ll explore the latest trends, technologies, and best practices shaping SaaS development in 2025. Whether you're a SaaS provider or a business looking to invest in SaaS development services, understanding these shifts will help you stay ahead in an increasingly competitive landscape.</p>`,
            date: alignment ? '29 באפריל, 2025' : 'Apr 29, 2025',
            thumb: blog10,
            link: 'saas-development-2025',
        },
        {
            id: 11,
            title: alignment ? 'תוספים מובילים של וורדפרס לאבטחה וביצועים מיטביים של האתר שלך' : 'Top WordPress Plugins for Optimum Security and Performance of Your Website',
            desc: alignment ? `<p>וורדפרס היא אחת ממערכות ניהול התוכן הפופולריות ביותר של ימינו. החברה לפיתוח וורדפרס בישראל משתמשת בו באופן חוזר על מנת ליצור ולתחזק אתרים עבור לקוחותיהם.</p>` : `<p>WordPress is one of the most popular content management systems of current days. The WordPress Development Company in Israel uses it recurrently to create and maintain websites for their clients.</p>`,
            date: alignment ? '29 במאי 2025' : 'May 29, 2025',
            thumb: blog11,
            link: "top-wordPress-plugins-for-optimum-security-and-performance-of-your-website",
        },
        {
            id: 12,
            title: alignment ? 'כיצד עיצוב UX טוב מגביר המרות ושימור משתמשים' : 'How Good UX Design Boosts Conversions and User Retention',
            desc: alignment ? `<p>עיצוב חוויית משתמש (UX) ממלא תפקיד קריטי בהצלחתו של כל מוצר דיגיטלי. עיצוב UX טוב להמרה אינו מתמקד רק באסתטיקה, אלא ביצירת חוויה חלקה ואינטואיטיבית שמניעה פעולות משתמש, מגבירה מעורבות ובסופו של דבר מגבירה את שימור הלקוחות. עבור עסקים המעוניינים לייעל את הפלטפורמות שלהם לתוצאות טובות יותר, יישום אסטרטגיות UX יעילות הוא חיוני.</p>` : `<p>User experience (UX) design plays a critical role in the success of any digital product. Good UX design for conversion doesn’t just focus on aesthetics but rather on crafting a seamless, intuitive experience that drives user actions, increases engagement, and ultimately boosts retention. For businesses looking to optimize their platforms for better results, implementing effective UX strategies is essential.</p>`,
            date: alignment ? '11 ביוני, 2025' : 'June 11, 2025',
            thumb: blog12,
            link: "how-good-ux-design-boosts-conversions-and-user-retention",
        },
        {
            id: 13,
            title: alignment ? 'כיצד פתרונות הפינטק של Reddensoft עוזרים לעסקים להתרחב ולחדש' : 'How Reddensoft’s FinTech Solutions Help Businesses Scale and Innovate ',
            desc: alignment ? `<p>בכלכלה הדיגיטלית המהירה של ימינו, טכנולוגיה פיננסית (FinTech) צצה כגורם מפתח לצמיחה עסקית וטרנספורמציה. חברות בתעשיות שונות פונות יותר ויותר לשותפי FinTech מיוחדים כדי לשחרר יעילות חדשה, לשפר את חוויות הלקוח ולהישאר צעד אחד קדימה בתחרות. Reddensoft, חברת תוכנה גלובלית בעלת נוכחות חזקה בישראל ומחוצה לה, מובילה את השינוי הזה על ידי הצעת חידושים פורצי דרך בתחום <a class="text-secondary" target="_blank" href="https://reddensoft.co.il/industries/fintech">בתחום ה-FinTech</a> המסייעים לעסקים להתרחב ולחדש כמו שלא היה מעולם.` : `<p>In today’s fast-paced digital economy, financial technology (FinTech) has emerged as a critical driver of business growth and transformation. Companies across industries are increasingly turning to specialized FinTech partners to unlock new efficiencies, improve customer experiences, and stay ahead of the competition. Reddensoft, a global software company with a strong presence in Israel and beyond, is leading this change by offering cutting-edge FinTech innovations that help businesses scale and innovate like never before. </p>`,
            date: alignment ? "18 ביוני, 2025" : "June 18, 2025",
            thumb: blog13,
            link: "how-reddensoft-fintech-solutions-help-businesses-scale-and-innovate",
        },
        {
            id: 14,
            title: alignment ? 'שימוש ב-Hugging Face לפריסת תוכניות LLM מותאמות אישית ביישומי בינה מלאכותית רב-לשוניים' : 'Using Hugging Face to Deploy Custom LLMs in Multilingual AI Applications',
            desc: alignment ? `<p>Hugging Face מספקת פלטפורמה חזקה לפריסת מודלים גדולים של שפה (LLM) מותאמים אישית, כולל כאלה המותאמים למודלים של בינה מלאכותית בעברית וברב-לשוניות. ניתן למנף את נקודות הקצה של Inference שלהם לפריסת ייצור, Spaces ליישומים אינטראקטיביים, או לשלב את הכלים שלהם בתשתית הענן שלכם.` : `<p>Hugging Face provides a robust platform for deploying custom Language Large Models (LLMs), including those tailored for Hebrew and multilingual AI models. You can leverage their Inference Endpoints for production deployments, Spaces for interactive applications, or integrate their tools into your own cloud infrastructure </p>`,
            date: alignment ? "17 ביולי, 2025" : "July 17, 2025",
            thumb: blog14,
            link: "hugging-face-multilingual-llm-deployment",
        },
        {
            id: 15,
            title: alignment ? 'מודעות גוגל לעומת מודעות פייסבוק: איזו מהן כדאי להשתמש בהן לעסק שלך?' : 'Google Ads vs. Facebook Ads: Which One Should You Use for Your Business?',
            desc: alignment ? `<p>קונספט יכול להפוך לעסק קטן באמצעות צמיחה אורגנית ומפה לאוזן, אך קידום ממומן הוא לעתים קרובות חיוני להצלחה עסקית ארוכת טווח. החדשות הטובות הן שישנם ערוצי פרסום רבים באינטרנט הזמינים לעסקי מסחר אלקטרוני. עם זאת, כנראה שתצטרכו לבחור בין שתי פלטפורמות הפרסום המובילות: גוגל אדס לעומת פייסבוק אדס. - איזו מהן עדיפה על יעדי החברה שלכם?` : `<p>A concept can become a small business by organic growth and word-of-mouth, but paid promotion is frequently essential for long-term business success. The good news is that there are plenty of internet advertising channels available to e-commerce businesses. Having said that, you will probably have to choose between the two leading advertising platforms: Google Ads vs. Facebook Ads. - Which is better for your company's objectives?  </p>`,
            date: alignment ? "19 באוגוסט, 2025" : "Aug 19, 2025",
            thumb: blog15,
            link: "google-ads-vs-facebook-ads",
        }
    ];

    return (
        <div className={`max-w-[700px] lg:max-w-[990px] xl:max-w-full mx-auto relative flex flex-wrap z-1 px-5 lg:px-0 ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-full lg:w-2/5 h-full">
                <div className={`mb-8 lg:mb-0 lg:max-w-xs 2xl:max-w-md flex flex-col items-start py-5 ${alignment ? 'text-right items-end ml-auto' : 'text-left items-start mr-auto'}`}>
                    <h2 className="text-5xl xl:text-6xl 2xl:text-[80px] leading-none font-black uppercase pb-5" data-aos="fade-right" dir={alignment ? 'rtl' : 'ltr'}>{alignment ? "מאמרי בלוג אחרונים" : "Recent Blog Articles"}</h2>
                    <h4 className="max-w-md text-base xl:text-xl font-semibold pb-4" data-aos="fade-right" data-aos-delay="100" dir={alignment ? 'rtl' : 'ltr'}>{alignment ? "חקור את התובנות והאסטרטגיות העדכניות ביותר שלנו להעצמת העסק שלך." : "Insights to Fuel Your Digital Growth."}</h4>
                    <p className="max-w-md text-sm xl:text-base font-normal pb-10" data-aos="fade-right" data-aos-delay="100" dir={alignment ? 'rtl' : 'ltr'}>{alignment ? "הישאר מעודכן עם ייעוץ מומחה על צמיחה דיגיטלית, פתרונות חדשניים ומגמות טכנולוגיות מתקדמות." : "Stay ahead with expert perspectives on digital innovation, business technology, and emerging trends. Explore how our software development services in the US can empower your strategy and deliver real results."}</p>
                    <div data-aos="fade-right" data-aos-delay="100">
                        {
                            alignment ? <GlobalButton title="הצג את כל הבלוגים" link="/blog/he" alignment/> : <GlobalButton title="View All Blogs" link="/blog"/>
                        }
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/5 h-full flex flex-col justify-center">
                <ul className="flex flex-wrap justify-end -mx-4 xl:-mx-5">
                    { blogs.reverse().slice(0, 2).map((blog, b) => (
                        <li className="w-full sm:w-1/2 p-4 xl:p-5" key={blog.id} data-aos="fade-up" data-aos-delay={200 + (b * 50)}>
                            {
                                alignment ? <BlogCard data={blog} alignment/> : <BlogCard data={blog}/>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}