import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";


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
          <Navbar />
          <Ticker />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;