"use client";

import { useActiveSection } from "@/contexts/active-section";
import Me from "@/public/static/images/me.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaAward, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

export default function Intro() {
	const [ref, inView] = useInView();
	const { setActiveSection } = useActiveSection();

	useEffect(() => {
		if (inView) {
			setActiveSection("Home");
		}
	}, [inView, setActiveSection]);

	return (
		<section
			ref={ref}
			className="max-w-[50rem] mx-auto text-center mb-20 scroll-mt-[100rem]"
			id="home"
		>
			<div className="flex justify-center items-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							src={Me}
							alt="Adebayo Daniel O. Portrait"
							quality="95"
							priority
							className="h-[14rem] w-[14rem] rounded-full border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					<motion.span
						initial={{
							opacity: 0,
							scale: 0,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
						className="absolute text-4xl bottom-0 right-0 select-none inline-block hover:animate-pulse"
					>
						👋
					</motion.span>
				</div>
			</div>
			<motion.h1
				className="mt-4 mb-8 px-4 font-medium !leading-[1.5] sm:text-xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.5,
				}}
			>
				Hi, my name is
				<span className="font-semibold text-rose-600"> Adebayo Daniel</span>, a{" "}
				<span className="font-semibold text-rose-600">Software Engineer</span>{" "}
				with 4+ years of experience building high-performance systems in{" "}
				<span className="font-semibold text-rose-600">FinTech</span>,{" "}
				<span className="font-semibold text-rose-600">Web3</span>, and{" "}
				<span className="font-semibold text-rose-600">EdTech</span>.
			</motion.h1>

			<motion.div
				className="flex flex-wrap justify-center gap-4 mb-8 px-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
			>
				<div className="flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full shadow-md">
					<FaAward className="text-rose-600" />
					<span className="text-sm font-medium">
						Zuri/HNG Finalist 2019 & 2020
					</span>
				</div>
				<div className="flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full shadow-md">
					<FaAward className="text-rose-600" />
					<span className="text-sm font-medium">
						Andela x Google Hackathon 2023 Winner
					</span>
				</div>
			</motion.div>

			<motion.div
				className="flex flex-col sm:flex-row items-center gap-5 justify-center text-sm sm:text-base"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.8,
				}}
			>
				<Link
					href="#contact"
					className="bg-gray-900 text-white py-3 px-7 flex items-center gap-x-2 rounded-full group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-[transform] duration-500 shadow-lg"
				>
					<span>Contact Me</span>
					<BsArrowRight className="text-xl mt-1 group-hover:translate-x-2 transition-[transform] duration-500" />
				</Link>
				<a
					href="/static/documents/Master-Daniels-Resume.pdf"
					download="Adebayo-Daniel-Resume"
					className="bg-white dark:bg-white/20 py-3 px-7 flex items-center gap-x-2 rounded-full group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-[transform] duration-1000 drop-shadow-md"
				>
					<span>Download CV</span>
					<HiDownload className="text-xl mt-1 group-hover:translate-y-1 transition-[transform] duration-1000" />
				</a>
				<div className="flex items-center gap-5 justify-center">
					<a
						href="https://www.linkedin.com/in/master-daniels-5b0984210/"
						target="_blank"
						rel="noreferrer noopener"
						className="bg-white dark:bg-white/20 p-[.9rem] text-gray-700 flex items-center gap-x-2 rounded-full group outline-none hover:scale-110 focus:scale-110 drop-shadow-md transition duration-1000 dark:text-white/90"
					>
						<BsLinkedin className="w-5 h-5" />
					</a>
					<a
						href="https://github.com/Master-Daniels"
						target="_blank"
						rel="noreferrer noopener"
						className="bg-white dark:bg-white/20 p-3 text-gray-700 flex items-center gap-x-2 rounded-full group outline-none hover:scale-110 focus:scale-110 drop-shadow-md transition duration-1000 dark:text-white/90"
					>
						<FaGithubSquare className="text-base h-6 w-6" />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
