import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

/* ─── Replace GTM-XXXXXXX with your real GTM container ID ─── */
const GTM_ID = "GTM-XXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.latraccia.it"),
  title: {
    default: "La Traccia — Negozio Musicale & Swing Academy · Milano",
    template: "%s · La Traccia Milano",
  },
  description:
    "La Traccia: negozio musicale, liuteria artigianale e scuola di danza swing a Milano. Lindy Hop, Balboa, Swing. Repair, Restore e strumenti jazz selezionati.",
  keywords: [
    "negozio musicale Milano",
    "swing",
    "lindy hop",
    "balboa",
    "lezioni danza swing",
    "jazz Milano",
    "liuteria Milano",
    "riparazione strumenti",
    "restauro strumenti vintage",
    "scuola ballo swing Milano",
    "dj swing nights",
  ],
  authors: [{ name: "La Traccia", url: "https://www.latraccia.it" }],
  creator: "La Traccia",
  publisher: "La Traccia",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "La Traccia — Negozio Musicale & Swing Academy · Milano",
    description:
      "Negozio musicale, liuteria artigianale e scuola di danza swing a Milano. Lindy Hop, Balboa, Swing.",
    url: "https://www.latraccia.it",
    siteName: "La Traccia",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Traccia — Negozio Musicale & Swing Academy Milano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Traccia — Negozio Musicale & Swing Academy · Milano",
    description: "Negozio musicale, liuteria e scuola di danza swing a Milano.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.latraccia.it",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* ─── JSON-LD structured data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicStore",
      "@id": "https://www.latraccia.it/#store",
      name: "La Traccia",
      description:
        "Negozio musicale, liuteria artigianale e scuola di danza swing a Milano.",
      url: "https://www.latraccia.it",
      telephone: "+390212345678",
      email: "info@latraccia.it",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via della Musica, 14",
        addressLocality: "Milano",
        postalCode: "20121",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.4654219,
        longitude: 9.1859243,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "19:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/latraccia",
        "https://www.facebook.com/latraccia",
      ],
    },
    {
      "@type": "DanceSchool",
      "@id": "https://www.latraccia.it/#academy",
      name: "La Traccia Swing Academy",
      description:
        "Scuola di danza swing a Milano: Lindy Hop, Swing (East & West Coast), Balboa.",
      url: "https://www.latraccia.it/#academy",
      parentOrganization: { "@id": "https://www.latraccia.it/#store" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <head>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600;700&family=Dancing+Script:wght@600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager — noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* GTM script — loaded after interactive */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}

