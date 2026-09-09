import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import bitpowr from "@/public/static/images/bitpowrsite.png";
import unihive from "@/public/static/images/unihive.png";
import zinewallet from "@/public/static/images/zinewallet.png";

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
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
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
		title: "Bitpowr - Digital Assets Infrastructure",
		description:
			"Engineered lightweight frontend interfaces for a data-intensive financial dashboard, backed by robust server-side architecture supporting 400K+ accounts. Implemented critical security features including AML/KYT compliance modules, facilitating 2M+ secure transactions.",
		tags: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"PostgreSQL",
			"GraphQL",
		],
		imageUrl: bitpowr,
		link: "https://bitpowr.com/",
	},
	// {
	// 	title: "Nestcoin - Blockchain dApps",
	// 	description:
	// 		"Integrated smart contracts with frontend dApps, ensuring smooth user experience and functionality. Developed and maintained backend endpoints for smart contract interactions with robust architecture supporting high transaction volumes.",
	// 	tags: ["React", "Solidity", "Ethers.js", "Wagmi", "Node.js", "GraphQL"],
	// 	imageUrl: nestcoin,
	// 	link: "https://www.onboard.xyz/",
	// },
	{
		title: "Zine Wallet",
		description:
			"Developed seamless cross-platform applications using Flutter for mobile and web, advancing a fintech startup's mission to simplify digital payments and make financial tools highly accessible to everyday users.",
		tags: [
			"Flutter",
			"Dart",
			"React",
			"React Native",
			"TypeScript",
			"Tailwind CSS",
			"Vite",
		],
		imageUrl: zinewallet,
		link: "https://admin.zinewallet.com/",
	},
	{
		title: "UniHive Africa - CBT Platform",
		description:
			"Built a computer-based testing platform for 3+ African universities serving 25K+ students. Optimized complex database queries, reducing report generation time from 12s to <2s. Engineered role-based access control and real-time proctoring features.",
		tags: ["React", "TypeScript", "PHP", "MySQL", "Tailwind CSS"],
		imageUrl: unihive,
		link: "https://unihiveafrica.com/",
	},
	{
		title: "SupportScope - Crisp Integration",
		description:
			"Designed integrations with customer support platforms like Crisp to ingest and normalize high-volume, real-time chat streams. Architected multi-tenant backend infrastructure and AI-driven analytics pipelines for actionable customer insights.",
		tags: [
			"Next.js",
			"React",
			"TypeScript",
			"Golang",
			"PostgreSQL",
			"Redis",
			"Docker",
		],
		imageUrl: "",
		link: "https://github.com/pauloladimeji/supportscope-ui",
	},
] as const;

// export const skillsData = [
// 	// Frontend
// 	"React.js",
// 	"Next.js",
// 	"Svelte",
// 	"TypeScript",
// 	"Tailwind CSS",
// 	"CSS-in-JS",
// 	"ShadcnUI",
// 	"React Query",
// 	"Jest",
// 	"React Testing Library",

// 	// Backend
// 	"Golang",
// 	"Gin",
// 	"Echo",
// 	"Node.js",
// 	"Express",
// 	"Hono",
// 	"Python",
// 	"FastAPI",
// 	"Django",
// 	"PHP",
// 	"REST API",
// 	"GraphQL",

// 	// Databases
// 	"PostgreSQL",
// 	"MySQL",
// 	"MongoDB",
// 	"Redis",

// 	// Blockchain
// 	"Solidity",
// 	"Ethers.js",
// 	"Wagmi",
// 	"Cryptography",
// 	"Smart Contracts",

// 	// DevOps & Tools
// 	"Docker",
// 	"GitHub Actions",
// 	"CI/CD",
// 	"Linux",
// 	"Nginx",
// 	"AWS",
// 	"Git",
// 	"Jira",
// 	"Notion",
// 	"Postman",
// 	"Open Telemetry",

// 	// Core CS
// 	"Data Structures",
// 	"Algorithms",
// 	"System Design",
// 	"Concurrent Programming",
// 	"Clean Architecture",
// ] as const;
