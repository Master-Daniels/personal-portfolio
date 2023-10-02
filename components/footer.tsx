import React from "react";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-900 dark:text-white/80 text-sm w-[min(100%,40rem)] mx-auto">
            <small className="mb-2 block text-xs">
                &copy;{" "}
                {new Date(Date.now()).toDateString()}. All rights reserved.
            </small>
            <p>
                <span className="font-semibold">About this website: </span> Built with Reactjs & Nextjs (App Router &
                Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, hosted on Vercel
            </p>
        </footer>
    );
}
