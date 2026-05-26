"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
	{
		icon: FaGithub,
		href: "https://github.com/Master-Daniels",
		label: "GitHub",
		color: "hover:text-gray-900 dark:hover:text-white",
	},
	{
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/master-daniels-5b0984210/",
		label: "LinkedIn",
		color: "hover:text-blue-600",
	},
	{
		icon: FaXTwitter,
		href: "https://twitter.com/Master_Daniels",
		label: "Twitter",
		color: "hover:text-gray-900 dark:hover:text-white",
	},
	{
		icon: FaEnvelope,
		href: "mailto:adebayooluwasegun011@gmail.com",
		label: "Email",
		color: "hover:text-red-500",
	},
];

const techStack = [
	{ name: "React", color: "text-blue-500" },
	{ name: "Next.js", color: "text-gray-900 dark:text-white" },
	{ name: "TypeScript", color: "text-blue-600" },
	{ name: "Tailwind CSS", color: "text-cyan-500" },
	{ name: "Framer Motion", color: "text-purple-500" },
];

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-gradient-to-r from-rose-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			<motion.div
				className="absolute inset-0 opacity-20"
				animate={{
					backgroundPosition: ["0% 0%", "100% 100%"],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "reverse",
				}}
				style={{
					backgroundImage: `linear-gradient(45deg, #f43f5e 25%, transparent 25%, transparent 75%, #f43f5e 75%, #f43f5e), linear-gradient(45deg, #f43f5e 25%, transparent 25%, transparent 75%, #f43f5e 75%, #f43f5e)`,
					backgroundSize: "20px 20px",
					backgroundPosition: "0 0, 10px 10px",
				}}
			/>

			<div className="relative px-4 py-10 max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
						Lets Connect
					</h3>

					<div className="flex justify-center gap-6 mb-8">
						{socialLinks.map((link, index) => (
							<motion.a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`text-gray-700 dark:text-gray-300 transition-colors duration-300 ${link.color}`}
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.2, rotate: 5 }}
							>
								<link.icon className="w-6 h-6" />
							</motion.a>
						))}
					</div>

					<div className="flex flex-wrap justify-center gap-3 mb-8">
						{techStack.map((tech, index) => (
							<motion.span
								key={tech.name}
								className={`px-3 py-1 text-sm font-medium bg-white/50 dark:bg-white/10 rounded-full ${tech.color}`}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.1 }}
							>
								{tech.name}
							</motion.span>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5 }}
						className="space-y-2"
					>
						<p className="text-gray-700 dark:text-gray-300">
							Built with{" "}
							<FaHeart className="inline text-red-500 animate-pulse" /> by
							Adebayo Daniel O.
						</p>
						<small className="block text-xs text-gray-600 dark:text-gray-400">
							&copy; {new Date().getFullYear()}. All rights reserved.
						</small>
					</motion.div>
				</motion.div>
			</div>
		</footer>
	);
}
