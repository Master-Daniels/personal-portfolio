"use client";

import { useRef } from "react";
import Link from "next/link";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectCardProps = (typeof projectsData)[number];
export default function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
    const projectRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={projectRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="mb-3 sm:mb-8 last:mb-0 group"
        >
            <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white ">
                <Link href={link} target="_blank" rel="no-opener no-referrer">
                    <div className="pt-4 pb-7 px-5 group-even:sm:pl-0 group-even:md:pl-0 sm:pr-2 sm:pt-10 sm:max-w-[55%] md:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem] outline-red-300 outline-8">
                        <h3 className="text-2xl font-semibold dark:text-white/70 group-hover:dark:text-white/90">
                            {title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 group-hover:dark:text-white/90 ">
                            {description}
                        </p>
                        <ul className="flex flex-wrap mt-8 gap-1">
                            {tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] px-4 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 group-hover:dark:text-white/90"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image
                        src={imageUrl}
                        alt={title}
                        quality={95}
                        priority
                        className="absolute hidden sm:block top-8 -right-40 w-[28.5rem] !h-full rounded-t-lg shadow-2xl 
                
                group-even:right-[initial] 
                group-even:-left-44 

                group-hover:scale-105 
                
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2 

                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2 

                transition duration-700"
                    />
                </Link>
            </section>
        </motion.div>
    );
}
