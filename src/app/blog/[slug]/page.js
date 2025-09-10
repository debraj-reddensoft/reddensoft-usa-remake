import BlogDetails from "@/components/BlogDetails";

export default async function BlogDetailsContent({params}) {
    const { slug } = await params;
    
    return(
        <>
            <BlogDetails slugname={slug } />
        </>
    )
}

export async function generateStaticParams() {
    // Fetch all possible slugs from your API or data source
    const blogs = [
      { slug: 'boost-user-engagement-with-responsive-website-design' },
      { slug: '2025-digital-marketing-trends-key-insights-and-future-predictions' },
      { slug: 'why-seo-is-a-long-term-strategy-an-explanation' },
      { slug: 'empowering-small-businesses-with-ai' },
      { slug: 'ecommerce-development-in-israel' },
      { slug: 'how-startups-can-benefit-from-custom-crm-development' },
      { slug: 'cybersecurity-best-practices-for-web-app-development-2025' },
      { slug: 'how-ai-ml-transforming-modern-business-solutions' },
      { slug: 'why-ui-ux-is-the-key-to-business-success-2025' },
      { slug: 'saas-development-2025' },
      { slug: 'top-wordPress-plugins-for-optimum-security-and-performance-of-your-website' },
      { slug: 'how-good-ux-design-boosts-conversions-and-user-retention' },
      { slug: 'how-reddensoft-fintech-solutions-help-businesses-scale-and-innovate' },
      { slug: 'hugging-face-multilingual-llm-deployment' },
      { slug: 'google-ads-vs-facebook-ads' },
      
    ];
  
    return blogs.map((blog) => ({ slug: blog.slug }));
}