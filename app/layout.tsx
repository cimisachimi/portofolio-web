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
  title: "Muhammad Faturahman | Full Stack Web Developer",
  description: "Portofolio profesional Muhammad Faturahman. Berpengalaman membangun aplikasi web modern dengan arsitektur decoupled menggunakan Next.js, React, Laravel, dan Ubuntu VPS.",
  keywords: [
    "Muhammad Faturahman",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "Laravel",
    "Yogyakarta",
    "Portofolio"
  ],
  authors: [{ name: "Muhammad Faturahman" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}