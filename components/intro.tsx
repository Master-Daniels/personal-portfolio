"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Me from "@/public/static/images/me.jpg";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSection } from "@/contexts/active-section";

export default function Intro() {
    const [ref, inView] = useInView();
    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        if (inView) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection]);

    return (
        <section ref={ref} className="max-w-[50rem] mx-auto text-center mb-20 scroll-mt-[100rem]" id="home">
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
                            alt="Master Daniels Portrait"
                            quality="95"
                            priority
                            className="h-24 w-24 md:h-[18rem] md:w-[18rem] rounded-full border-[0.35rem] border-white shadow-xl"
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
                className="mt-4 mb-16 px-4 font-medium !leading-[1.5] sm:text-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                }}
            >
                Hi, my name is
                <span className="font-semibold text-rose-500 dark:text-black/80"> Master Daniels.</span> I am a
                <span className="font-semibold text-rose-500 dark:text-black/80"> Frontend Developer </span>
                who specialises in building and designing web applications using modern technologies.
                {/* <Link
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline inline-flex items-center gap-x-1"
                >
                    Reactjs
                    <FaExternalLinkAlt className="w-4 h-4 mt-1" />
                </Link>{" "}
                and{" "}
                <Link
                    href="https://nextjs.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888888] underline inline-flex items-center dark:text-[inherit] gap-x-1"
                >
                    Nextjs
                    <FaExternalLinkAlt className="w-4 h-4 mt-1" />
                </Link> */}
            </motion.h1>
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
                    className="bg-gray-900 text-white py-3 px-7 flex items-center gap-x-2 rounded-full group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-[transform] duration-1000 shadow-lg"
                >
                    <span>contact me here</span>
                    <BsArrowRight className="text-xl mt-1 group-hover:translate-x-2 transition-[transform] duration-1000" />
                </Link>
                <a
                    href="/static/documents/Resume New.pdf"
                    download="Master Daniels Resume"
                    className="bg-white dark:bg-white/20 py-3 px-7 flex items-center gap-x-2 rounded-full group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-[transform] duration-1000 drop-shadow-md"
                >
                    <span> Download CV</span>
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
