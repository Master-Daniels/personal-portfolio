"use client";

import { useTheme } from "@/contexts/site-theme";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={(() => toggleTheme)()}
            className="fixed bottom-5 right-5 bg-black dark:bg-white w-10 h-10 rounded-md bg-opacity-80 backdrop-blur-[0.5rem] drop-shadow-lg flex items-center justify-center border dark:drop-shadow-lg border-white dark:border-white/60 hover:scale-110 active:scale-105 transition-all"
        >
            {theme === "dark" && <BsSun className="h-5 w-5 text-black" />}
            {theme === "light" && <BsMoon className="h-5 w-5 text-white animate-text-glow" />}
        </button>
    );
}
