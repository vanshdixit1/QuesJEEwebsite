import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ── Load Google Fonts ──
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ── SEO Metadata ──
export const metadata: Metadata = {
  title: "JEE Practice | Ace Your Exam",
  description:
    "Practice JEE Physics, Chemistry & Maths questions with instant feedback. Free mock tests to boost your preparation.",
};

// ── Root Layout (wraps every page) ──
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
