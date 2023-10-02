"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/contexts/active-section";
import { sendEmail } from "@/actions";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
    const [ref, inView] = useInView();
    const { setActiveSection } = useActiveSection();

    React.useEffect(() => {
        if (inView) {
            setActiveSection("Contact");
        }
    }, [inView, setActiveSection]);

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-[10rem]"
            initial={{
                y: 100,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
        >
            <SectionHeader>Contact Me</SectionHeader>
            <p>
                Send a message to me directly on{" "}
                <a className="underline dark:text-yellow-500" href="mailto:adebayooluwasegun011@gmail.com">
                    my email
                </a>{" "}
                or through this form.
            </p>
            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                }}
                className="mt-10 gap-y-3 flex flex-col"
            >
                <input
                    type="email"
                    name="email"
                    required
                    aria-required={true}
                    maxLength={500}
                    autoComplete="false"
                    className="h-14 rounded-lg border-black-custom px-4 outline-none focus:outline-yellow-600 dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-30 transition-all dark:text-white"
                    placeholder="Email"
                />
                <textarea
                    name="message"
                    required
                    aria-required={true}
                    maxLength={5000}
                    className="h-52 my-3 rounded-lg border-black-custom p-4 outline-none focus:outline-yellow-600 dark:bg-white dark:bg-opacity-10 dark:focus:bg-opacity-30 transition-all dark:text-white"
                    placeholder="Send me a message"
                />
                <SubmitButton />
            </form>
        </motion.section>
    );
}
