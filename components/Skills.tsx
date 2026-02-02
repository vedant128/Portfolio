"use client";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: "</>",
        description: "Building responsive and interactive user interfaces",
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "React.js", level: 90, icon: "⚛️" },
            { name: "Next.js", level: 85, icon: "▲" },
            { name: "JavaScript", level: 88, icon: "🟨" },
            { name: "HTML5", level: 95, icon: "🟧" },
            { name: "CSS3", level: 92, icon: "🔵" },
            { name: "Tailwind CSS", level: 85, icon: "💨" },
        ],
    },
    {
        title: "Backend Development",
        icon: "🗄️",
        description: "Server-side development and database management",
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Node.js", level: 85, icon: "🟢" },
            { name: "Python", level: 80, icon: "🐍" },
            { name: "MongoDB", level: 82, icon: "🍃" },
            { name: "MySQL", level: 78, icon: "🐬" },
            { name: "Firebase", level: 88, icon: "🔥" },
            { name: "REST APIs", level: 85, icon: "🔗" },
        ],
    },
    {
        title: "Data Science & ML",
        icon: "🧠",
        description: "Machine learning and data analysis",
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Python", level: 80, icon: "🐍" },
            { name: "TensorFlow", level: 75, icon: "🔶" },
            { name: "Jupyter", level: 85, icon: "📓" },
            { name: "NumPy", level: 82, icon: "🔢" },
            { name: "Matplotlib", level: 78, icon: "📊" },
            { name: "R", level: 70, icon: "📈" },
        ],
    },
    {
        title: "Blockchain & Web3",
        icon: "⛓️",
        description: "Decentralized applications and smart contracts",
        color: "from-orange-500 to-yellow-500",
        skills: [
            { name: "Solidity", level: 75, icon: "📜" },
            { name: "Web3.js", level: 78, icon: "🌐" },
            { name: "Ethereum", level: 80, icon: "💎" },
            { name: "IPFS", level: 72, icon: "📦" },
            { name: "MetaMask", level: 85, icon: "🦊" },
            { name: "Smart Contracts", level: 75, icon: "📝" },
        ],
    },
    {
        title: "Development Tools",
        icon: "🔧",
        description: "Version control and deployment platforms",
        color: "from-red-500 to-rose-500",
        skills: [
            { name: "Git", level: 90, icon: "📚" },
            { name: "GitHub", level: 92, icon: "🐙" },
            { name: "VS Code", level: 95, icon: "💻" },
            { name: "Vercel", level: 85, icon: "▲" },
            { name: "Netlify", level: 80, icon: "🌍" },
        ],
    },
];

const stats = [
    { value: "25+", label: "Technologies" },
    { value: "5+", label: "Categories" },
    { value: "4+", label: "Years Learning" },
    { value: "15+", label: "Projects Built" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 min-h-screen">
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
                        <span>⚡</span> TECHNICAL EXPERTISE
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies mastered through hands-on
                        experience and continuous learning
                    </p>
                </motion.div>

                {/* Skills Grid - First Row (3 columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {skillCategories.slice(0, 3).map((category, idx) => (
                        <SkillCard key={idx} category={category} idx={idx} />
                    ))}
                </div>

                {/* Skills Grid - Second Row (2 columns centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    {skillCategories.slice(3, 5).map((category, idx) => (
                        <SkillCard key={idx + 3} category={category} idx={idx + 3} />
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 text-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
                            >
                                {stat.value}
                            </motion.span>
                            <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function SkillCard({ category, idx }: { category: typeof skillCategories[0]; idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 shadow-lg"
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">
                    {category.title}
                </h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
                {category.description}
            </p>

            {/* Skills List */}
            <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-3">
                        <span className="text-lg w-6">{skill.icon}</span>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-gray-300">
                                    {skill.name}
                                </span>
                                <span className={`text-sm bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-medium`}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
