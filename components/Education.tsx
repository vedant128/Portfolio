"use client";
import { motion } from "framer-motion";

const educationData = [
    {
        degree: "B.E. in Information Technology",
        percentage: "Current CGPA: 8.73%",
        institution: "SCOE (Sinhgad College of Engineering)",
        period: "Present",
        description: "Currently pursuing Bachelor's in Information Technology with focus on software development and modern technologies.",
        icon: "🎓",
    },
    {
        degree: "Diploma in Computer Engineering",
        percentage: "Percentage: 90.17%",
        institution: "AISSMS Polytechnic",
        period: "Completed",
        description: "Completed diploma with strong foundation in computer engineering fundamentals, programming, and software development.",
        icon: "💻",
    },
    {
        degree: "SSC (10th Standard)",
        percentage: "Percentage: 85.80%",
        institution: "SAKEMS School",
        period: "Completed",
        description: "Completed secondary education with SSC board, building strong academic foundation.",
        icon: "📚",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-4xl font-bold mb-4"
                >
                    Education
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-12"
                >
                    My academic journey and qualifications
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

                    {educationData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-lg z-10">
                                {item.icon}
                            </div>

                            {/* Content Card */}
                            <div
                                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                    }`}
                            >
                                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-6 shadow-lg hover:border-cyan-500/30 transition-all duration-300">
                                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 mb-3">
                                        {item.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {item.degree}
                                    </h3>
                                    <p className="text-blue-400 font-medium mb-3">
                                        {item.percentage}
                                    </p>
                                    <p className="text-blue-400 font-medium mb-3">
                                        {item.institution}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
