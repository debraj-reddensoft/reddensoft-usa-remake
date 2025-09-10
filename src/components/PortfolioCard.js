import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({data:{...portfolio}, alignment}) {
    return(
        <div className="group relative overflow-hidden bg-primary rounded-2xl h-full shadow-med">
            <Image className="relative w-full h-full object-contain z-1 transition-all duration-500 ease-in-out group-hover:translate-x-1/2" src={portfolio.thumb} alt={portfolio.title} width="auto" height="auto"/>
            <div className="w-1/2 h-full overflow-y-auto absolute left-0 top-0">
                <div className={`p-5 xl:p-6 text-white ${alignment ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold pb-3 xl:pb-4">{portfolio.title}</h3>
                    <p className="text-sm xl:text-base xl:leading-5 font-light pb-4">{portfolio.desc}</p>
                    {portfolio.technologies.length > 0 && 
                        <ul className={`flex flex-wrap mb-4 ${alignment ? 'justify-end' : 'jsutify-start'}`}>
                            {portfolio.technologies.map((technology, t) => (
                                <li key={t} className="px-3 py-1 text-xs bg-white/10 text-white m-0.5 rounded-xl">{technology}</li>
                            ))}
                        </ul>
                    }
                    <div className={`flex flex-col ${alignment ? 'items-end' : 'items-start'}`}>
                        <Link href={portfolio.figma} className={`flex items-center bg-secondary rounded-2xl text-xs xl:text-sm w-32 py-1 px-3 mb-2 ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 xl:w-6 xl:h-6 ${alignment ? 'ml-1.5' : 'mr-1.5'}`}>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                                    fill="#ffffff"
                                />
                            </svg>
                            Figma Link
                        </Link>
                        <Link href={portfolio.visit} className={`flex items-center bg-secondary rounded-2xl text-xs xl:text-sm w-32 py-1.5 px-3 mb-2 ${alignment ? 'flex-row-reverse' : 'flex-row'}`}>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 xl:w-5 xl:h-5 ${alignment ? 'ml-2' : 'mr-2'}`}>
                                <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" fill="#ffffff"/>
                                <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" fill="#ffffff"/>
                                <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" fill="#ffffff"/>
                            </svg>
                            Visit Site
                        </Link>
                    </div>
                </div>
            </div>
            <Link href={alignment ? `/portfolio/he/${portfolio.title.toLowerCase()}` : `/portfolio/${portfolio.title.toLowerCase()}`} className="absolute w-14 h-14 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out rounded-full bg-white flex items-center justify-center z-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="fill-secondary" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </Link>
        </div>
    )
}