"use client"

import Image from "next/image";
import brand1 from "@/assets/images/brand-1.webp"
import brand2 from "@/assets/images/brand-2.webp"
import brand3 from "@/assets/images/brand-3.webp"
import brand4 from "@/assets/images/brand-4.webp"
import brand5 from "@/assets/images/brand-5.webp"
import brand6 from "@/assets/images/brand-6.webp"
import brand7 from "@/assets/images/brand-7.webp"
import brand8 from "@/assets/images/brand-8.webp"
import brand9 from "@/assets/images/brand-9.webp"
import brand10 from "@/assets/images/brand-10.webp"
import brand11 from "@/assets/images/brand-11.webp"
import brand12 from "@/assets/images/brand-12.webp"
import brand13 from "@/assets/images/brand-13.webp"
import brand14 from "@/assets/images/brand-14.webp"
import brand15 from "@/assets/images/brand-15.webp"
import brand16 from "@/assets/images/brand-16.webp"
import React, { useCallback  } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function EmblaCarousel({alignment}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
   
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const brands = [brand1, brand9, brand2, brand12, brand3, brand14, brand15, brand4, brand6, brand7, brand16, brand11, brand13, brand10, brand8]
   
  return (
    <>
        <h3 className="text-xl 2xl:text-2xl font-semibold pb-12 text-center" >
        {alignment
          ? "נאמנים על ידי חברות מובילות"
          : (
            "Trusted By Leading Companies"
          )}
        </h3>
        <div className="relative px-10">
            <div className="embla brand" ref={emblaRef}>
                <div className="embla__container">
                    { brands.map((brand, b) => (
                        <div className="embla__slide" key={b}><Image className="opacity-70 h-8 sm:h-6 lg:h-8 w-auto" src={brand} alt={`brand-${b + 1}`} width="auto" height="auto"/></div>
                    ))}
                </div>
            </div>
            <button className="embla__prev absolute left-5 top-1/2 transform -translate-y-1/2" onClick={scrollPrev} aria-label="Go to previous slide">
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1.48078L7.48594 0L0 7.3125L7.48594 14.625L9 13.1442L3.03281 7.3125L9 1.48078Z" fill="#000000"/>
                </svg>
            </button>
            <button className="embla__next absolute right-5 top-1/2 transform -translate-y-1/2" onClick={scrollNext} aria-label="Go to next slide">
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.48078L1.51406 0L9 7.3125L1.51406 14.625L0 13.1442L5.96719 7.3125L0 1.48078Z" fill="#000000"/>
                </svg>
            </button>
        </div>
    </>
  )
}
