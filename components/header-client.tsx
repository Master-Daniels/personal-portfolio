"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export function HeaderBackground() {
    return (
        <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg shadow-slate-900/[0.3] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 1, x: "-50%", opacity: 1 }}
        />
    );
}

export function HeaderList({ link: { name, hash } }: { link: { name: string; hash: string } }) {
    return (
        <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
        >
            <Link
                className="w-full grid place-items-center p-3 hover:text-gray-950 hover:underline transition duration-700"
                href={hash}
            >
                {name}
            </Link>
        </motion.li>
    );
}
