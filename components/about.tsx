"use client";

import { useActiveSection } from "@/contexts/active-section";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
	FaAward,
	FaAws,
	FaDatabase,
	FaDocker,
	FaEthereum,
	FaNodeJs,
	FaReact,
	FaRocket,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./section-header";

const techStack = [
	{ icon: FaReact, name: "React/Next.js", color: "text-blue-500" },
	{ icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
	{ icon: SiPython, name: "Python", color: "text-[#3776AB]" },
	{ icon: FaDocker, name: "Docker", color: "text-blue-400" },
	{ icon: FaAws, name: "AWS", color: "text-orange-500" },
	{ icon: FaDatabase, name: "Databases", color: "text-purple-500" },
	{ icon: FaEthereum, name: "Web3", color: "text-indigo-500" },
	{ icon: FaGolang, name: "Golang", color: "text-cyan-500" },
];

const achievements = [
	{ icon: FaAward, text: "Zuri/HNG Finalist 2019 & 2020" },
	{ icon: FaAward, text: "Andela x Google Hackathon 2023 Winner" },
	{ icon: FaRocket, text: "400K+ Wallets Supported" },
];

export default function About() {
	const [ref, inView] = useInView({
		threshold: 0.75,
	});
	const { setActiveSection } = useActiveSection();

	useEffect(() => {
		if (inView) {
			setActiveSection("About");
		}
	}, [inView, setActiveSection]);

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] mx-auto text-center sm:mb-0 leading-8 scroll-mt-28"
			initial={{
				opacity: 0,
				scale: 0,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				delay: 0.85,
			}}
			id="about"
		>
			<SectionHeader>About Me</SectionHeader>

			<div className="space-y-6">
				<motion.p
					className="mb-3 text-sm sm:text-base"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
				>
					Im a results-driven Software Engineer with 5+ years of hands-on
					experience building high-performance, scalable systems in FinTech,
					Web3, and EdTech. I hold a B.Sc. in Computer Science from Federal
					University Lokoja with a Second Class Upper division (CGPA 4.25/5.0).
				</motion.p>

				<motion.p
					className="mb-3 text-sm sm:text-base"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0 }}
				>
					My expertise spans the full development stack, with strong foundations
					in React/Next.js frontend and Golang microservices. I specialize in
					designing concurrent backend architectures, optimizing complex data
					flows, and implementing secure, production-grade applications that
					serve hundreds of thousands of users.
				</motion.p>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.1 }}
				>
					{techStack.map((tech, index) => (
						<motion.div
							key={tech.name}
							className="bg-white dark:bg-white/10 p-4 rounded-xl shadow-md hover:scale-105 transition-transform"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2 + index * 0.1 }}
						>
							<tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color}`} />
							<p className="text-xs font-medium">{tech.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					className="mb-3 text-sm sm:text-base"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.3 }}
				>
					I have successfully led projects including multi-chain wallet
					dashboards supporting 400K+ wallets, developed AI-driven analytics
					pipelines for customer insights, and built institutional-grade digital
					asset infrastructure.
				</motion.p>

				<motion.div
					className="flex flex-wrap justify-center gap-4 my-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.4 }}
				>
					{achievements.map((achievement, index) => (
						<motion.div
							key={index}
							className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-md"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1.5 + index * 0.1 }}
						>
							<achievement.icon className="w-5 h-5" />
							<span className="text-sm font-medium">{achievement.text}</span>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					className="mb-3 text-sm sm:text-base"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.6 }}
				>
					Passionate about clean code and algorithmic efficiency, Im constantly
					expanding my expertise and currently exploring Rust for systems
					programming. Im excited to bring my technical skills and
					problem-solving abilities to build innovative solutions.
				</motion.p>
			</div>
		</motion.section>
	);
}
