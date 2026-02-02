"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Full Stack", "React", "Mobile", "AI/ML", "Basics"];

const projectsData = [
    {
        title: "Farmer-Cab",
        description: "Uber-like platform for farmers with integrated second-hand marketplace for agricultural equipment and produce.",
        category: "Mobile",
        tech: ["React Native", "Node.js", "MongoDB", "Express"],
        status: "In Progress",
        icon: "🚜",
        github: "#",
        live: "#",
    },
    {
        title: "The Plant Palette",
        description: "Full-featured e-commerce platform for buying and selling plants with cart, checkout, and order management.",
        category: "Full Stack",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        status: "Completed",
        icon: "🌿",
        github: "#",
        live: "#",
    },
    {
        title: "Nutra AI",
        description: "Community platform for doctors with AI-powered chatbot for health consultations and medical discussions.",
        category: "AI/ML",
        tech: ["React", "Node.js", "MongoDB", "AI Chatbot"],
        status: "Completed",
        icon: "🏥",
        github: "#",
        live: "#",
    },
    {
        title: "Python Chatbot",
        description: "Intelligent conversational chatbot built with Python for automated customer support and queries.",
        category: "AI/ML",
        tech: ["Python", "NLP", "Machine Learning"],
        status: "Completed",
        icon: "🤖",
        github: "#",
        live: "#",
    },
    {
        title: "Weather App",
        description: "Real-time weather application with location-based forecasts and beautiful UI animations.",
        category: "React",
        tech: ["React", "Weather API", "CSS"],
        status: "Completed",
        icon: "🌤️",
        github: "#",
        live: "#",
    },
    {
        title: "Password Generator",
        description: "Secure password generator with customizable options for length, symbols, and complexity.",
        category: "React",
        tech: ["React", "JavaScript", "CSS"],
        status: "Completed",
        icon: "🔐",
        github: "#",
        live: "#",
    },
    {
        title: "Currency Converter",
        description: "Real-time currency conversion tool with support for multiple currencies and exchange rates.",
        category: "Basics",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "Completed",
        icon: "💱",
        github: "#",
        live: "#",
    },
    {
        title: "Tic Tac Toe",
        description: "Classic tic-tac-toe game with clean UI, score tracking, and responsive design.",
        category: "Basics",
        tech: ["HTML", "CSS", "JavaScript"],
        status: "Completed",
        icon: "⭕",
        github: "#",
        live: "#",
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
                        <span>🚀</span> MY WORK
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
                        A collection of projects showcasing my skills in web development,
                        mobile apps, and AI/ML
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 shadow-lg group"
                        >
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-4xl">{project.icon}</span>
                                <span className={`px-2 py-1 text-xs rounded-full ${project.status === "Completed"
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-yellow-500/20 text-yellow-400"
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4 border-t border-white/10">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <span>📂</span> Code
                                </a>
                                <a
                                    href={project.live}
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <span>🔗</span> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
