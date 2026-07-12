import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SchemaOrg, localBusinessSchema } from "@/components/SchemaOrg";
import { SITE } from "@/lib/site";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kitchen Wrap Sheffield | Transform Your Kitchen Without the Rebuild",
    template: "%s | Kitchen Wrap Sheffield",
  },
  description:
    "Vinyl kitchen wrapping in Sheffield. Transform your kitchen in 2–3 days at a fraction of replacement cost. Free no-obligation quotes. Call 07848 428975.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: "Kitchen Wrap Sheffield | Transform Your Kitchen Without the Rebuild",
    description:
      "Vinyl kitchen wrapping in Sheffield. Transform your kitchen in 2–3 days at a fraction of replacement cost. Free no-obligation quotes.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Kitchen Wrap Sheffield",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kitchen Wrap Sheffield | Transform Your Kitchen Without the Rebuild",
    description:
      "Vinyl kitchen wrapping in Sheffield. Transform your kitchen in 2–3 days at a fraction of replacement cost.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: {
    canonical: SITE.url,
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${outfit.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <SchemaOrg data={localBusinessSchema()} />
        {gtmId ? (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}

        {clarityId ? (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityId}");`}
          </Script>
        ) : null}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
