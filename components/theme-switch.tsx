"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/contexts/site-theme";

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			type="button"
			onClick={(() => toggleTheme)()}
			className="fixed z-[100] bottom-5 right-5 bg-gradient-to-r from-rose-600 to-purple-600 w-10 h-10 rounded-xl bg-opacity-80 backdrop-blur-[0.5rem] drop-shadow-lg flex items-center justify-center dark:drop-shadow-lg hover:scale-110 active:scale-105 transition-all"
		>
			{theme === "dark" && <BsSun className="h-5 w-5 text-white" />}
			{theme === "light" && (
				<BsMoon className="h-5 w-5 text-white animate-text-glow" />
			)}
		</button>
	);
}
