"use client";
import { SectionName, useActiveSection } from "@/contexts/active-section";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
export function HeaderBackground() {
    return (
        <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg shadow-slate-900/[0.3] filter backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 1, x: "-50%", opacity: 1 }}
        />
    );
}

interface HeaderListProps {
    link: {
        name: SectionName;
        hash: string;
    };
}
export function HeaderList({ link: { name, hash } }: HeaderListProps) {
    const { activeSection, setActiveSection } = useActiveSection();
    return (
        <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
        >
            <Link
                onClick={() => setActiveSection(name)}
                className={clsx(
                    "w-full grid place-items-center py-3 px-4 hover:text-gray-950 hover:underline transition duration-700 dark:text-gray-500",
                    {
                        "text-gray-950 dark:text-black dark:hover:text-black dark:focus:text-black":
                            name === activeSection,
                    }
                )}
                href={hash}
            >
                {name}
                {name === activeSection && (
                    <motion.span
                        layoutId="activeSection"
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 30,
                        }}
                        className="bg-gray-300 rounded-full absolute inset-0 -z-10"
                    ></motion.span>
                )}
            </Link>
        </motion.li>
    );
}
