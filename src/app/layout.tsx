import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://moefinancial.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Moe | Finance Broker Melbourne — Moe Financial",
    template: "%s | Moe Financial",
  },
  description:
    "Mohammed Elsayyed (Moe) is Melbourne's most trusted finance broker. Car finance, business loans, equipment finance, personal loans, and credit-impaired lending — 500+ clients helped across Australia.",
  keywords: [
    "finance broker Melbourne",
    "car finance Melbourne",
    "business loans Melbourne",
    "equipment finance Australia",
    "personal loans Melbourne",
    "commercial lending Melbourne",
    "self-employed finance broker",
    "bad credit finance Melbourne",
    "Moe Financial",
    "Mohammed Elsayyed finance broker",
    "Moe finance broker",
  ],
  authors: [{ name: "Mohammed Elsayyed", url: SITE_URL }],
  creator: "Moe Financial",
  publisher: "Moe Financial",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Moe Financial",
    title: "Moe | Finance Broker Melbourne — Moe Financial",
    description:
      "500+ Australians helped. 65+ lender partners. Car finance, business loans, equipment finance and credit-impaired lending — Melbourne's most trusted finance broker.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Moe Financial — Melbourne Finance Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe | Finance Broker Melbourne — Moe Financial",
    description:
      "500+ clients helped. 65+ lenders. Car finance, business loans, equipment finance and more across Australia.",
    images: [`${SITE_URL}/og-image.png`],
  },
  
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Moe Financial",
  alternateName: ["Moe Finance", "Moe Financial Melbourne"],
  description:
    "Melbourne-based finance broker Mohammed Elsayyed (Moe) helps Australians access automotive finance, business loans, equipment finance, personal loans, commercial lending, and credit-impaired lending solutions through 65+ lender partners.",
  url: SITE_URL,
  founder: { "@type": "Person", name: "Mohammed Elsayyed", alternateName: "Moe", jobTitle: "Finance Broker" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: { "@type": "Country", name: "Australia" },
  serviceType: [
    "Automotive Finance",
    "Business Loans",
    "Equipment Finance",
    "Personal Loans",
    "Commercial Lending",
    "Credit-Impaired Lending",
    "Self-Employed Finance",
    "Mortgage Referrals",
    "Line of Credit",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1 },
  knowsLanguage: ["en", "ar"],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080d18] text-white overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-orange-500 focus:text-white focus:font-semibold focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
