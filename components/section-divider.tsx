"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <motion.div
            className="bg-gradient-to-b from-slate-500 my-24 h-16 w-2 rounded-full hidden sm:block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.85,
            }}
        ></motion.div>
    );
};

export default SectionDivider;
