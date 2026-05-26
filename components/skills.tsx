"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import {
	FaCode,
	FaDatabase,
	FaDocker,
	FaEthereum,
	FaReact,
	FaServer,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/contexts/active-section";
import SectionHeader from "./section-header";

const skillCategories = [
	{
		title: "Frontend",
		icon: FaReact,
		color: "from-blue-500 to-purple-500",
		skills: [
			"React.js",
			"Next.js",
			"Svelte",
			"TypeScript",
			"Tailwind CSS",
			"CSS-in-JS",
			"ShadcnUI",
			"React Query",
			"Jest",
			"React Testing Library",
		],
	},
	{
		title: "Backend",
		icon: FaServer,
		color: "from-green-500 to-teal-500",
		skills: [
			"Golang",
			"Gin",
			"Echo",
			"Node.js",
			"Express",
			"Hono",
			"Python",
			"FastAPI",
			"Django",
			"PHP",
			"Laravel",
			"Java",
			"Spring Boot",
			"REST API",
			"GraphQL",
		],
	},
	{
		title: "Databases",
		icon: FaDatabase,
		color: "from-orange-500 to-red-500",
		skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
	},
	{
		title: "Blockchain",
		icon: FaEthereum,
		color: "from-indigo-500 to-purple-600",
		skills: [
			"Solidity",
			"Ethers.js",
			"Wagmi",
			"Cryptography",
			"Smart Contracts",
		],
	},
	{
		title: "DevOps & Tools",
		icon: FaDocker,
		color: "from-cyan-500 to-blue-500",
		skills: [
			"Docker",
			"GitHub Actions",
			"CI/CD",
			"Linux",
			"Nginx",
			"AWS",
			"Git",
			"Jira",
			"Notion",
			"Postman",
		],
	},
	{
		title: "Core CS",
		icon: FaCode,
		color: "from-pink-500 to-rose-500",
		skills: [
			"Data Structures",
			"Algorithms",
			"System Design",
			"Concurrent Programming",
			"Clean Architecture",
		],
	},
];

const cardVariant = {
	initial: {
		opacity: 0,
		y: 50,
		scale: 0.9,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: 0. * index,
			duration: 1.0,
			type: "spring",
		},
	}),
};

const skillVariant = {
	initial: {
		opacity: 0,
		x: -50,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
		},
	},
};

export default function Skills() {
	const [ref, inView] = useInView();
	const { setActiveSection } = useActiveSection();

	useEffect(() => {
		if (inView) {
			setActiveSection("Skills");
		}
	}, [inView, setActiveSection]);

	return (
		<section
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-[5rem]"
			id="skills"
		>
			<SectionHeader>My Skills</SectionHeader>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
				{skillCategories.map((category, categoryIndex) => (
					<motion.div
						key={category.title}
						variants={cardVariant}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={categoryIndex}
						className="relative group"
					>
						<div
							className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`}
						></div>
						<div className="relative bg-white dark:bg-white/10 h-full rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
							<div className="flex items-center gap-3 mb-4">
								<div
									className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}
								>
									<category.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold text-gray-800 dark:text-white">
									{category.title}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill, skillIndex) => (
									<motion.span
										key={skill}
										variants={skillVariant}
										initial="initial"
										whileInView="animate"
										viewport={{ once: true }}
										custom={skillIndex}
										className="px-3 py-1 text-sm bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r hover:from-white/50 hover:to-white/30 dark:hover:from-white/10 dark:hover:to-white/5 transition-colors duration-300"
									>
										{skill}
									</motion.span>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
