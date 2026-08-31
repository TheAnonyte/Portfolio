import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anonyte.in"),
  title: {
    default: "ANONYTE — Ankit Kumar | Developer & Automation Engineer",
    template: "%s | ANONYTE",
  },
  description:
    "Portfolio of Ankit Kumar (ANONYTE) — Freelance Developer & Automation Engineer specializing in web development, Telegram automation, AI pipelines, and cybersecurity tools.",
  keywords: [
    "Ankit Kumar",
    "ANONYTE",
    "TheAnonyte",
    "Developer",
    "Automation Engineer",
    "Freelance Developer",
    "Telegram Bot",
    "Python Developer",
    "Web Developer",
    "Cybersecurity",
    "LPU",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Kumar", url: "https://anonyte.in" }],
  creator: "Ankit Kumar",
  publisher: "ANONYTE",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anonyte.in",
    title: "ANONYTE — Ankit Kumar | Developer & Automation Engineer",
    description:
      "Portfolio of Ankit Kumar (ANONYTE) — Freelance Developer & Automation Engineer specializing in web development, automation systems, AI, and cybersecurity.",
    siteName: "ANONYTE",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANONYTE — Ankit Kumar | Developer & Automation Engineer",
    description: "Building digital systems that actually work.",
    creator: "@TheAnonyte",
    site: "@TheAnonyte",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://anonyte.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ankit Kumar",
              alternateName: "ANONYTE",
              url: "https://anonyte.in",
              email: "meankitkumar53@gmail.com",
              sameAs: [
                "https://github.com/TheAnonyte",
                "https://linkedin.com/in/theanonyte",
              ],
              jobTitle: "Freelance Developer & Automation Engineer",
              description:
                "Computer Science undergraduate building automation systems, AI pipelines, web tools, and cybersecurity solutions.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Lovely Professional University",
              },
            }),
          }}
        />
      </head>
      <body style={{ background: "#050508" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
