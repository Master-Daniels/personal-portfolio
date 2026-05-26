import "react";
import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/contexts/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import BackToTop from "@/components/back-to-top";
import ThemeProvider from "@/contexts/site-theme";

declare module "react" {
    interface CSSProperties {
        [key: `--${string}`]: string | number;
    }
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Master Daniels | Software Developer",
    description: "Software developer with a plethora of experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-slate-200 dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative pt-24 sm:pt-28`}
            >
                <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
                <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
                <ThemeProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <ThemeSwitch />
                        <BackToTop />
                        <Toaster position="top-right" reverseOrder={false} />
                    </ActiveSectionContextProvider>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
