import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bitpowr from "@/public/static/images/bitpowrsite.png";
import spotifyNext from "@/public/static/images/spotifynext.png";
import discordclone from "@/public/static/images/discordclone.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    // {
    //     name: "Experience",
    //     hash: "#experience",
    // },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        // icon: <LuGraduationCap />,
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Bitpowr",
        description:
            "I worked as a full-stack developer on this website. A fintech company that provides digital assets custody and blockchain infrastructure at scale.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: bitpowr,
        link: "https://bitpowr.com/",
    },
    {
        title: "spotifyNext",
        description: "A spotify clone I built using modern technologies like Nextjs(react), supabase, etc.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "supabase"],
        imageUrl: spotifyNext,
        link: "https://spotify-next-peach.vercel.app/",
    },
    {
        title: "discordClone",
        description: "A discord clone with basic messaging functionalities",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma", "liveKit"],
        imageUrl: discordclone,
        link: "https://discord-clone-production-ebe0.up.railway.app/",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
