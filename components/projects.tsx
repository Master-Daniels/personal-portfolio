"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSection } from "@/contexts/active-section";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";
import SectionHeader from "./section-header";

export default function Projects() {
	const [ref, inView] = useInView({
		threshold: 0.2,
	});
	const { setActiveSection } = useActiveSection();

	useEffect(() => {
		if (inView) {
			setActiveSection("Projects");
		}
	}, [inView, setActiveSection]);

	return (
		<div id="projects" className="scroll-mt-28 mb-28 sm:mb-20" ref={ref}>
			<SectionHeader>My Projects</SectionHeader>
			<div className="space-y-16">
				{projectsData.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}
