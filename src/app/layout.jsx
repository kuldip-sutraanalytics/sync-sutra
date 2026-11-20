import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Toaster from "@/components/layout/Toaster";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sync Sutra – WooCommerce Analytics & Multi-Store Dashboard",
    template: "%s | Sync Sutra",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    // WooCommerce Analytics
    "WooCommerce analytics",
    "WooCommerce reporting",
    "WooCommerce dashboard",
    "WooCommerce sales analytics",
    "WooCommerce sales reports",
    "WooCommerce profit analytics",
    "WooCommerce store analytics",
    "WooCommerce business intelligence",
    "WooCommerce performance tracking",

    // Multi-Store Management
    "WooCommerce multi-store management",
    "WooCommerce multi-store dashboard",
    "multi-store analytics",
    "multi-store reporting",
    "multiple WooCommerce stores",
    "centralized WooCommerce dashboard",
    "WooCommerce store management",

    // E-commerce Analytics
    "ecommerce analytics",
    "ecommerce reporting software",
    "ecommerce dashboard",
    "ecommerce business analytics",
    "online store analytics",
    "ecommerce sales tracking",
    "ecommerce profit tracking",
    "ecommerce reporting automation",

    // Inventory Management
    "WooCommerce inventory management",
    "WooCommerce stock management",
    "WooCommerce inventory alerts",
    "WooCommerce low stock alerts",
    "WooCommerce stock monitoring",
    "WooCommerce inventory tracking",

    // Google Sheets Integration
    "WooCommerce Google Sheets integration",
    "Google Sheets WooCommerce",
    "WooCommerce data export",
    "WooCommerce automated reports",
    "WooCommerce to Google Sheets",
    "WooCommerce spreadsheet integration",
    "automated WooCommerce reporting",

    // Automation
    "WooCommerce automation",
    "WooCommerce reporting automation",
    "automated ecommerce reporting",
    "WooCommerce data synchronization",
    "WooCommerce store data sync",
    "ecommerce reporting automation software",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: "Sync Sutra – WooCommerce Analytics & Multi-Store Dashboard",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sync Sutra – WooCommerce Analytics",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport = {
  themeColor: "#7955e6",
  width: "device-width",
  initialScale: 1,
};

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      email: SITE.email,
      parentOrganization: {
        "@type": "Organization",
        name: SITE.company,
        url: SITE.companyUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#org` },
    },
    {
      "@type": "SoftwareApplication",
      name: SITE.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: SITE.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free plan available; 7-day free trial on Growth plan",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&display=swap"
        />
        <JsonLd data={orgLd} />
      </head>
      <body className="bg-[#f3f0fd] text-[#120d26] antialiased">
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Toaster />
        {SITE.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
            >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.gaId}');`}</Script>
          </>
        )}
        {SITE.clarityId && (
          <Script
            id="clarity"
            strategy="afterInteractive"
          >{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${SITE.clarityId}");`}</Script>
        )}
      </body>
    </html>
  );
}
