import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
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
    default: "Moe Financial — Finance Broker Melbourne | Home Loans, Car Finance & Business Lending",
    template: "%s | Moe Financial",
  },
  description:
    "Moe Financial is a Melbourne-based finance broker helping Australians secure home loans, refinancing, first home buyer loans, vehicle finance, and business lending. Compare 65+ lenders. Fast approvals.",
  keywords: [
    "finance broker Melbourne",
    "home loans Melbourne",
    "mortgage broker Melbourne",
    "first home buyer loan Melbourne",
    "refinancing Melbourne",
    "car finance Melbourne",
    "vehicle finance Melbourne",
    "business loans Melbourne",
    "equipment finance Australia",
    "Moe Financial",
    "Mohammed Elsayyed finance broker",
    "finance broker Australia",
    "compare home loans Melbourne",
  ],
  authors: [{ name: "Mohammed Elsayyed", url: SITE_URL }],
  creator: "Moe Financial",
  publisher: "Moe Financial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Moe Financial",
    title: "Moe Financial — Finance Broker Melbourne",
    description:
      "Home loans, refinancing, first home buyers, vehicle finance and business lending. Melbourne based, Australia-wide. 500+ clients helped across 65+ lenders.",
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
    title: "Moe Financial — Finance Broker Melbourne",
    description:
      "Home loans, refinancing, vehicle finance and business lending. 500+ clients helped across 65+ lenders.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Moe Financial",
  alternateName: ["Moe Finance", "Moe Financial Melbourne"],
  description:
    "Melbourne-based finance broker Mohammed Elsayyed (Moe) helps Australians access home loans, refinancing, first home buyer loans, vehicle finance, and business lending through 65+ lender partners.",
  url: SITE_URL,
  telephone: "+61481293396",
  email: "contact@moefinancial.com.au",
  founder: {
    "@type": "Person",
    name: "Mohammed Elsayyed",
    alternateName: "Moe",
    jobTitle: "Finance Broker",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: { "@type": "Country", name: "Australia" },
  serviceType: [
    "Home Loans",
    "Refinancing",
    "First Home Buyer Loans",
    "Vehicle Finance",
    "Business Loans",
    "Equipment Finance",
    "Personal Loans",
    "Credit-Impaired Lending",
  ],
  priceRange: "Free consultation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-600 focus:text-white focus:font-semibold focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
