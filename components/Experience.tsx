"use client";
import { motion } from "motion/react";

const experienceData = [
    {
        title: "Machine Learning",
        company: "NinjaBytes Technologies",
        type: "Internship",
        period: "2024 - Present",
        description: "Working on machine learning models and AI-powered solutions. Implementing deep learning algorithms and data analysis pipelines.",
        skills: ["Python", "TensorFlow", "ML/AI", "Data Analysis"],
        icon: "🤖",
    },
    {
        title: "Graphic Designer",
        company: "Google Developer Group, SCOE",
        type: "Volunteer",
        period: "2023 - 2024",
        description: "Designed marketing materials, event banners, and social media graphics for tech community events and workshops.",
        skills: ["Figma", "Adobe Suite", "UI/UX", "Branding"],
        icon: "🎨",
    },
    {
        title: "Android Developer",
        company: "Infeanet Digital Solution And Web Media",
        type: "Internship",
        period: "2022 - 2023",
        description: "Developed mobile applications using Android SDK. Built user interfaces and integrated APIs for various client projects.",
        skills: ["Java", "Kotlin", "Android SDK", "REST APIs"],
        icon: "📱",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-4xl font-bold mb-4"
                >
                    Experience
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-12"
                >
                    My professional journey and work experience
                </motion.p>

                {/* Experience Cards */}
                <div className="space-y-6">
                    {experienceData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="rounded-xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-6 shadow-lg hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{item.icon}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <span className="px-2 py-0.5 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-blue-400 font-medium mb-1">
                                        {item.company}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-3">
                                        {item.period}
                                    </p>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
