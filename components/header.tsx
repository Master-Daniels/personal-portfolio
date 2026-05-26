"use client";

import { links } from "@/lib/data";

import { HeaderBackground, HeaderList } from "./header-components";

const Header = () => {
	return (
		<header className="z-[999] relative">
			<HeaderBackground />
			<nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 flex">
				<ul className="flex items-center sm:w-[22rem] sm:justify-center gap-y-1 text-sm font-medium text-gray-500 w-full sm:gap-5">
					{links.map((link) => (
						<HeaderList key={link.hash} link={link} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
