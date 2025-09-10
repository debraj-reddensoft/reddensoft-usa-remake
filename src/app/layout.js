import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";


export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <meta name="google-site-verification" content="KDvR7VIfl6XcU3Q6ZXUHFDURBLgY6dkDM4EVSTySQjU" />
          {/* Google Tag Manager */}
          <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSLDVFV4');
          `}
          </Script>
          
          {/* End Google Tag Manager */}

          {/* JSON-LD Structured Data */}
          <Script id="json-ld-website-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "ReddenSoft Israel",
              "url": "https://reddensoft.co.il/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://reddensoft.co.il/contact-form{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            })}
          </Script>
          {/* End JSON-LD Structured Data */}            

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:wght@300;400;700;900&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet" />
        </head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSLDVFV4" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}

          {/* Google tag (gtag.js) */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2PBL50E58J"></Script>
          <Script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2PBL50E58J');
            `}
          </Script>

          <div className="">
            <Header/>
            <div>
              {children}
            </div>
            <Footer/>
          </div>
        </body>
      </html>
  );
}
