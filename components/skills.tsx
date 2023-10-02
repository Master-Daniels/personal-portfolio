"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeader from "./section-header";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/contexts/active-section";

const fadeInVariant = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const [ref, inView] = useInView();
    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        if (inView) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection]);

    return (
        <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" id="skills">
            <SectionHeader>My Skills</SectionHeader>
            <ul className="flex flex-wrap justify-center gap-3 text-base sm:text-lg text-gray-800 mt-10">
                {skillsData.map((skill, index) => {
                    return (
                        <motion.li
                            variants={fadeInVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            className="bg-white dark:bg-white/10 dark:text-white/80 border border-black/10 py-2 px-5 rounded-xl"
                            key={index}
                        >
                            {skill}
                        </motion.li>
                    );
                })}
            </ul>
        </section>
    );
}
