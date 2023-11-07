"use client";

import { useEffect, Fragment } from "react";

import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/contexts/active-section";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeader from "./section-header";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/contexts/site-theme";

export default function Experience() {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    const { theme } = useTheme();

    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        if (inView) {
            setActiveSection("Experience");
        }
    }, [inView, setActiveSection]);

    return (
        <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
            <div className="mb-10">
                <SectionHeader>My Experience</SectionHeader>
            </div>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <Fragment key={index}>
                        <VerticalTimelineElement
                            visible
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255 ,255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgab(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                outline: theme === "light" ? "none" : "none",
                                background: theme === "light" ? "white" : "rgba(0,0,0, 0.15)",
                                fontSize: theme === "light" ? "1.5rem" : "1.8rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 ">{item.description}</p>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
