"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { projectsData } from "@/lib/data";
import SectionHeader from "./section-header";
import ProjectCard from "./project-card";
import { useActiveSection } from "@/contexts/active-section";

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
            <div className="space-y-10">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
