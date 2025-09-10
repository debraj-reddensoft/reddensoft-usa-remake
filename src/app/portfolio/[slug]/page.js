// 'use client'
import Image from "next/image";
import marvihim from "@/assets/images/marvihim.webp"
import trispire from "@/assets/images/trispire.webp"
import candidsync from "@/assets/images/candidsync.webp"
import dashboard from "@/assets/images/dashboard.webp"
import reflexiveai from "@/assets/images/reflexiveai.webp"
import origami from "@/assets/images/origami.webp"
import robocent from "@/assets/images/robocent.webp"
import chatbot from "@/assets/images/chatbot.webp"
import easypos from "@/assets/images/easypos.webp"
import trendhive from "@/assets/images/trendhive.webp"
import arrow from "@/assets/images/arrow.webp"
import ricoman from "@/assets/images/ricoman.webp"
import sasradar from "@/assets/images/sasradar.webp"
import signulu from "@/assets/images/signulu.webp"
import stannp from "@/assets/images/stannp.webp"
import ep from "@/assets/images/ep.webp"
import zohna from "@/assets/images/zohna.webp"
import awe365 from "@/assets/images/awe365.webp"
import bizminer from "@/assets/images/bizminer.webp"
import csigma from "@/assets/images/csigma.webp"
import ouicapital from "@/assets/images/ouicapital.webp"

export default async function PortfolioDetails({params}) {
    const { slug } = await params;

    let details = [
        {
            title: "marvihim",
            img: marvihim,
            metaTitle: "Marvihim - Portfolio | ReddenSoft Israel",
            metaDesc: "Discover Marvihim, a dynamic web solution by ReddenSoft Israel. Explore our portfolio for innovative, high-performance web and app development projects."
        },
        {
            title: "trispire",
            img: trispire,
            metaTitle: "TriSpire - Portfolio | ReddenSoft Israel",
            metaDesc: "Discover TriSpire, a cutting-edge project by ReddenSoft Israel. Explore our portfolio to see innovative web solutions designed for optimal performance."
        },
        {
            title: "candidsync",
            img: candidsync,
            metaTitle: "CANDID SYNC - Portfolio | ReddenSoft Israel",
            metaDesc: "Explore Candid Sync, a seamless AI-powered photo management solution by ReddenSoft Israel. Check out our portfolio for innovative web and app development projects."
        },
        {
            title: "dashboard",
            img: dashboard,
            metaTitle: "Dashboard - Portfolio | ReddenSoft Israel",
            metaDesc: "Transform data with our intuitive Dashboards. Visit ReddenSoft Israel’s portfolio for innovative web and app development solutions."
        },
        {
            title: "reflexiveai",
            img: reflexiveai,
            metaTitle: "Reflexiveai - Portfolio | ReddenSoft Israel",
            metaDesc: "ReflexiveAI by ReddenSoft Israel delivers advanced AI solutions. Check out our portfolio for top-tier web and app development projects."
        },
        // {
        //     title: "origami",
        //     img: origami
        // },
        {
            title: "robocent",
            img: robocent,
            metaTitle: "Robocent - Portfolio | ReddenSoft Israel",
            metaDesc: "Explore RoboCent, an advanced political robocall and texting platform by ReddenSoft Israel. Visit our portfolio to see cutting-edge web and app development solutions."
        },
        {
            title: "chatbot",
            img: chatbot,
            metaTitle: "Chatbot - Portfolio | ReddenSoft Israel",
            metaDesc: "ReddenSoft Israel presents intelligent Chatbot solutions for seamless automation. Visit our portfolio for top-tier web and app development."
        },
        {
            title: "easypos",
            img: easypos,
            metaTitle: "Easy POS - Portfolio | ReddenSoft Israel",
            metaDesc: "Streamline your business with Easy POS, a robust POS system by ReddenSoft Israel. Check out our portfolio for innovative digital solutions."
        },
        {
            title: "trendhive",
            img: trendhive,
            metaTitle: "TrendHive - Portfolio | ReddenSoft Israel",
            metaDesc: "Unlock digital success with TrendHive by ReddenSoft Israel. Browse our portfolio for innovative web and app development expertise."
        },
        // {
        //     title: "arrow",
        //     img: arrow
        // },
        {
            title: "ricoman",
            img: ricoman,
            metaTitle: "Ricoman - Portfolio | ReddenSoft Israel",
            metaDesc: "Elevate your business with Ricoman, a smart digital solution by ReddenSoft Israel. Check out our portfolio for high-performance development projects."
        },
        {
            title: "sasradar",
            img: sasradar,
            metaTitle: "SAS Radar - Portfolio | ReddenSoft Israel",
            metaDesc: "Discover SAS Radar, an advanced analytics solution by ReddenSoft Israel. Explore our portfolio for cutting-edge web and app development innovations."
        },
        {
            title: "signulu",
            img: signulu,
            metaTitle: "Signulu - Portfolio | ReddenSoft Israel",
            metaDesc: "Experience seamless digital transformation with Signulu. Visit ReddenSoft Israel’s portfolio for advanced web and app development projects."
        },
        {
            title: "stannp",
            img: stannp,
            metaTitle: "Stannp - Portfolio | ReddenSoft Israel",
            metaDesc: "Experience seamless mail automation with Stannp. Browse ReddenSoft Israel’s portfolio for high-quality web and app development."
        },
        {
            title: "ep",
            img: ep,
            metaTitle: "EPspecialist - Portfolio | ReddenSoft Israel",
            metaDesc: "Elevate your business with EPspecialist, a smart digital platform by ReddenSoft Israel. Check out our portfolio for high-performance development projects."
        },
        // {
        //     title: "zohna",
        //     img: zohna
        // },
        {
            title: "awe365",
            img: awe365,
            metaTitle: "AWE365 - Portfolio | ReddenSoft Israel",
            metaDesc: "Discover how AWE365 by ReddenSoft Israel drives digital innovation. Check our portfolio for top-tier technology solutions."
        },
        {
            title: "bizminer",
            img: bizminer,
            metaTitle: "BizMiner - Portfolio | ReddenSoft Israel",
            metaDesc: "BizMiner revolutionizes business analytics. Visit ReddenSoft Israel’s portfolio for high-performance web and app development expertise."
        },
        {
            title: "csigma",
            img: csigma,
            metaTitle: "CSigma - Portfolio | ReddenSoft Israel",
            metaDesc: "ReddenSoft Israel delivers CSigma, a high-performance digital tool. Browse our portfolio for expert web and app development services."
        },
        {
            title: "ouicapital",
            img: ouicapital,
            metaTitle: "OuiCapital - Portfolio | ReddenSoft Israel",
            metaDesc: "Unlock fintech innovation with OuiCapital by ReddenSoft Israel. Browse our portfolio for cutting-edge digital transformation solutions."
        },
    ];

    return(
        <>
            {details.map((details, d) => (
                <div className="" key={d}>
                    {
                        slug == details.title &&
                        <div>
                            <title>{details.metaTitle}</title>
                            <meta name="title" content={details.metaTitle} />
                            <meta name="description" content={details.metaDesc} />
                            <Image className="w-full h-auto" src={details.img} alt={details.title} width="auto" height="auto"/>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}

export async function generateStaticParams() {
    const portfolios = [
      { slug: 'marvihim' },
      { slug: 'trispire' },
      { slug: 'candidsync' },
      { slug: 'dashboard' },
      { slug: 'reflexiveai' },
    //   { slug: 'origami' },
      { slug: 'robocent' },
      { slug: 'chatbot' },
      { slug: 'easypos' },
      { slug: 'trendhive' },
    //   { slug: 'arrow' },
      { slug: 'ricoman' },
      { slug: 'sasradar' },
      { slug: 'signulu' },
      { slug: 'stannp' },
      { slug: 'ep' },
    //   { slug: 'zohna' },
      { slug: 'awe365' },
      { slug: 'bizminer' },
      { slug: 'csigma' },
      { slug: 'ouicapital' },
    ];
  
    return portfolios.map((portfolio) => ({ slug: portfolio.slug }));
}