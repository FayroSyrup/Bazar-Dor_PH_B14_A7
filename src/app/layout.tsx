import type { Metadata } from "next";
import { Suspense } from "react";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর | BazarDor",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="bn" data-theme="light">
      <body className={`${hind.className} flex min-h-screen flex-col bg-base-200`}>
        <Providers>
          <Suspense fallback={<div className="h-24 border-b border-base-300 bg-base-100" />}>
            <Navbar />
          </Suspense>
          <Ticker />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
            <Suspense fallback={<div className="skeleton h-64 w-full" />}>{children}</Suspense>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;