import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const title = "Mrityunjay Sahoo | AI Engineer | GenAI, RAG & Agentic AI";
const description = "Portfolio of Mrityunjay Sahoo, an AI Engineer building enterprise-grade Generative AI, RAG, and Agentic AI systems across BFSI, legal, and industrial domains.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrityunjaysahoo.ai"),
  title,
  description,
  keywords: [
    "AI Engineer",
    "GenAI Engineer",
    "Generative AI",
    "RAG",
    "Agentic AI",
    "LangGraph",
    "Semantic Kernel",
    "FastAPI",
    "pgvector",
    "Azure AI",
    "Amazon Bedrock",
    "Applied AI Engineer",
    "AI Portfolio",
  ],
  authors: [{ name: "Mrityunjay Sahoo" }],
  creator: "Mrityunjay Sahoo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mrityunjaysahoo.ai",
    title,
    description,
    siteName: "Mrityunjay Sahoo Portfolio",
    images: [{ url: "/images/og-placeholder.svg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-placeholder.svg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

