// import "./globals.css";

// export const metadata = {
//   title: "Basera Properties — Premium Real Estate & Dream Homes",
//   description:
//     "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents. 120K+ deals closed, 1500+ houses sold.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

import "./globals.css";

// --------------------
// 🔹 SEO + Meta Config
// --------------------
export const metadata = {
  // 👇 Title jo Google search aur browser tab me show hoga
  title: "Basera Properties — Premium Real Estate & Dream Homes",

  // 👇 Short description (Google snippet ke liye)
  description:
    "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents. 120K+ deals closed, 1500+ houses sold.",

  // 👇 Keywords (SEO ke liye)
  keywords: [
    "real estate",
    "luxury homes",
    "property listings",
    "dream homes",
    "premium properties",
    "real estate agent",
  ],

  // 👇 OpenGraph (FB, WhatsApp, LinkedIn share ke liye)
  openGraph: {
    title: "Basera Properties — Premium Real Estate & Dream Homes",
    description:
      "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents. 120K+ deals closed, 1500+ houses sold.",
    url: "https://your-domain.com", // 👉 apna actual domain daalna
    siteName: "Basera Properties",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // 👉 apna OG image URL daalna
        width: 1200,
        height: 630,
        alt: "Basera Properties",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 👇 Twitter (jab koi tumhari site X/Twitter pe share kare)
  twitter: {
    card: "summary_large_image",
    title: "Basera Properties — Premium Real Estate & Dream Homes",
    description:
      "Find your dream property with Basera Properties. Premium real estate listings, luxury homes, expert agents.",
    images: ["https://your-domain.com/og-image.jpg"], // 👉 apna OG image URL daalna
  },

  // 👇 Canonical URL (SEO duplicate issue avoid karne ke liye)
  metadataBase: new URL("https://your-domain.com"), // 👉 apna actual domain
  alternates: {
    canonical: "https://your-domain.com", // 👉 apna actual domain
  },
};

// --------------------
// 🔹 Root Layout
// --------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* --------------------
            🔹 JSON-LD Structured Data (Google ke liye)
            Isme apni business info update karna h
        -------------------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent", // 👉 Business type (yaha RealEstateAgent hai)
              name: "Basera Properties", // 👉 apne business ka naam
              url: "https://your-domain.com", // 👉 apna domain
              logo: "https://your-domain.com/logo.png", // 👉 apna logo ka link
              description:
                "Premium real estate agency specializing in luxury homes and exceptional properties. 120K+ deals closed, 1500+ houses sold.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US", // 👉 Apne country ka ISO code (e.g., IN for India, US for America)
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+1-800-555-1234", // 👉 apna phone number daalna
                email: "info@your-domain.com", // 👉 apna email daalna
                availableLanguage: "English",
              },
              areaServed: "United States", // 👉 apna service area (e.g., India, Global)
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9", // 👉 apni avg rating
                reviewCount: "1500", // 👉 total reviews
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
