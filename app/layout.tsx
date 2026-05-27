'use client';

import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/contexts/active-section";
import ThemeProvider from "@/contexts/site-theme";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

declare module "react" {
	interface CSSProperties {
		[key: `--${string}`]: string | number;
	}
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<html lang="en" className="!scroll-smooth">
			<head>
				<title>Master Daniels | Software Developer</title>
				<meta name="description" content="Software developer with a huge wealth of experience." />
			</head>
			<body
				className={`${inter.className} bg-slate-200 dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative pt-24 sm:pt-28`}
				suppressHydrationWarning
			>
				{isLoading ? (
					<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white">
						<div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

						<div className="relative flex flex-col items-center gap-4">
							<div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/80 border-t-transparent" />
							<h2 className="text-lg font-medium tracking-widest animate-pulse text-indigo-200">
								INITIALIZING EXPERIENCE...
							</h2>
						</div>
					</div>)
					:
					(<>
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
					</>
					)}
			</body>
		</html>
	);
}
