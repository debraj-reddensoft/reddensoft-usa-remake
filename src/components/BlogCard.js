import Image from "next/image";
import calendar from "@/assets/images/calendar.svg";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogCard({ data: { ...blog }, alignment }) {
  const [alignState, setAlignState] = useState(alignment);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Ensures code only runs on the client
    setHydrated(true);

    if (alignment == null) {
      const isRTL = document?.dir === "rtl";
      setAlignState(isRTL);
    }
  }, [alignment]);

  if (!hydrated || !blog) {
    return (
      <div className="flex justify-center items-center w-full h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-[#EA0056]"></div>
      </div>
    );
  }

  return (
    <Link
      aria-label="Learn more"
      href={alignState ? `/blog/he/${blog.link}` : `/blog/${blog.link}`}
      className="block relative overflow-hidden bg-white pb-2 rounded-2xl h-full shadow-med"
      dir={alignState ? "rtl" : "ltr"}
    >
      <Image
        className="w-full"
        src={blog.thumb}
        alt={blog.title}
        width="auto"
        height="auto"
      />
      <div
        className={`px-5 py-5 xl:px-7 xl:py-6 ${alignState ? "text-right" : "text-left"
          }`}
      >
        <div className={`flex items-center pb-3.5 flex-row`}>
          <Image
            className="w-3 h-3 2xl:w-4 2xl:h-4"
            src={calendar}
            alt="Calendar icon"
            width="auto"
            height="auto"
          />
          <span
            className={`text-sm xl:text-base font-normal ${alignState ? "pr-2.5" : "pl-2.5"
              }`}
          >
            {blog.date}
          </span>
        </div>
        <h3 className="text-base xl:text-lg font-semibold pb-4">
          {blog.title}
        </h3>
        <div
          className="text-sm xl:text-base font-normal mb-2 line-clamp-4"
          dangerouslySetInnerHTML={{ __html: blog.desc }}
        ></div>
      </div>
      <div
        className={`absolute -bottom-10 transform block w-20 h-20 bg-secondary ${alignState
          ? "-left-10 transform -rotate-45"
          : "-right-10 transform rotate-45"
          }`}
      >
        <svg
          width="15"
          height="13"
          viewBox="0 0 15 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-8 transform ${alignState ? "right-1.5 -rotate-[135deg]" : "left-1.5 -rotate-45"
            }`}
        >
          <path
            d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </Link>
  );
}
