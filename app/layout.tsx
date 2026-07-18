import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avantikachapegadikar.dev"),
  title: "Avantika Chapegadikar | Software Engineer",
  description:
    "Software Engineer specializing in backend systems, cloud data platforms, and AI-powered applications. Experience with Python, Java, GCP, AWS, and distributed systems.",
  keywords: [
    "Avantika Chapegadikar",
    "Software Engineer",
    "Backend Engineer",
    "Data Engineer",
    "AI/ML Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Avantika Chapegadikar" }],
  openGraph: {
    title: "Avantika Chapegadikar | Software Engineer",
    description:
      "Software Engineer specializing in backend systems, cloud data platforms, and AI-powered applications.",
    url: "https://avantikachapegadikar.dev",
    siteName: "Avantika Chapegadikar",
    images: [{ url: "/avantika.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avantika Chapegadikar | Software Engineer",
    description:
      "Software Engineer specializing in backend systems, cloud data platforms, and AI-powered applications.",
    images: ["/avantika.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
