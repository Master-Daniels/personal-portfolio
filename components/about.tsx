"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionName, useActiveSection } from "@/contexts/active-section";

import SectionHeader from "./section-header";

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.75,
    });
    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        if (inView) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection]);

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] mx-auto text-center sm:mb-0 leading-8 scroll-mt-28"
            initial={{
                opacity: 0,
                scale: 0,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                delay: 0.85,
            }}
            id="about"
        >
            <SectionHeader>About Me</SectionHeader>
            <p className="mb-3">
                Following a passion for computers. I enrolled and studied{" "}
                <span className="capitalize font-extrabold">computer science </span>to earn my Bachelors Degree. During
                my study I was introduced to the world of programming and I decided to delve into web development, which
                lead me to enroll in a coding bootcamp where I learned{" "}
                <span className="capitalize font-extrabold">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My
                core stack is <span className="font-medium">React(Next.js), Node.js, and Database(SQL and NoSQL)</span>.
                I am also familiar with TypeScript and have worked on real world projects where typescript is used. I am
                always looking to learn new technologies. I am currently looking for a{" "}
                <span className="capitalize font-extrabold">full-time position</span> as a software developer.
            </p>
        </motion.section>
    );
}
