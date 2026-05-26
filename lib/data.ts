import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import bitpowr from "@/public/static/images/bitpowrsite.png";
import nestcoin from "@/public/static/images/nestcoin.png";
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
			"Led frontend development for a multi-chain wallet dashboard supporting 400K+ wallets across 5+ blockchains. Delivered critical security features including AML/KYT compliance modules, contributing to 2M+ secure transactions.",
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
	{
		title: "Nestcoin - Blockchain dApps",
		description:
			"Integrated smart contracts with frontend dApps, ensuring smooth user experience and functionality. Developed and maintained backend endpoints for smart contract interactions with robust architecture supporting high transaction volumes.",
		tags: ["React", "Solidity", "Ethers.js", "Wagmi", "Node.js", "GraphQL"],
		imageUrl: nestcoin,
		link: "https://www.onboard.xyz/",
	},
	{
		title: "Zine Wallet",
		description:
			"I worked as a frontend developer. It is a start-up fintech company that provides aims to simplify digital payments and bring crypto currency to the less knowledgeable users.",
		tags: ["React", "Vite", "Tailwind", "ReactQuery", "React-router"],
		imageUrl: zinewallet,
		link: "https://admin.zinewallet.com/",
	},
	{
		title: "Unihive Africa - CBT Platform",
		description:
			"Built a computer-based testing platform for 3+ African universities serving 25K+ students. Optimized complex result-calculation queries, reducing report generation from 12 seconds to <2 seconds. Implemented role-based access control and real-time proctoring.",
		tags: ["React", "PHP", "MySQL", "TypeScript", "Tailwind CSS"],
		imageUrl: unihive,
		link: "https://unihiveafrica.com/",
	},
	{
		title: "SupportScope - Crisp Integration",
		description:
			"Designed and implemented integrations with customer support platforms (including Crisp) to ingest and normalize high-volume real-time conversation streams. Built multi-tenant backend infrastructure with AI-driven analytics pipelines for customer insights.",
		tags: [
			"Golang",
			"React",
			"Next.js",
			"TypeScript",
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
