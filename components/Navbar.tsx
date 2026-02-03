"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const item = {
    hidden: { y: -10, opacity: 0 },
    show: { y: 0, opacity: 1 },
}



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 z-50 w-full border-b bg-black/70 backdrop-blur"
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">

                    {/* Logo */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg sm:text-xl font-bold"
                    >
                        Vedant Satish Gunjal
                    </motion.h1>

                    {/* Desktop Nav Links */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="hidden lg:flex items-center gap-6 text-sm font-medium"
                    >
                        {navItems.map((nav) => (
                            <motion.a
                                key={nav.name}
                                href={nav.href}
                                variants={item}
                                whileHover={{ y: -2 }}
                                className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {nav.name}
                            </motion.a>
                        ))}

                        {/* Social Icons */}
                        <motion.div
                            variants={item}
                            className="ml-4 flex items-center gap-4 border-l pl-4"
                        >
                            <motion.a className="text-blue-500 inline-block hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md transition-colors duration-300"
                                whileHover={{ y: -3, scale: 1.1 }}
                                href="https://x.com/Code_Craftr"
                                target="_blank"
                            >
                                <Twitter size={18} />
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="text-blue-500 inline-block hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md transition-colors duration-300"
                                href="https://github.com/vedant128"
                                target="_blank"
                            >
                                <Github size={18} />
                            </motion.a>

                            <motion.a className="text-blue-500 inline-block hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md transition-colors duration-300"
                                whileHover={{ y: -3, scale: 1.1 }}
                                href="www.linkedin.com/in/vedant-satish-gunjal-998590257"
                                target="_blank"
                            >
                                <Linkedin size={18} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-20 lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {/* Mobile Nav Links */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col items-center gap-6"
                            >
                                {navItems.map((nav, index) => (
                                    <motion.a
                                        key={nav.name}
                                        href={nav.href}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={closeMenu}
                                        className="text-2xl font-semibold hover:text-blue-400 transition-colors"
                                    >
                                        {nav.name}
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Mobile Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-6 mt-8 pt-8 border-t border-white/20"
                            >
                                <motion.a
                                    className="text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-full transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://twitter.com"
                                    target="_blank"
                                >
                                    <Twitter size={24} />
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-full transition-colors duration-300"
                                    href="https://github.com"
                                    target="_blank"
                                >
                                    <Github size={24} />
                                </motion.a>

                                <motion.a
                                    className="text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-full transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://linkedin.com"
                                    target="_blank"
                                >
                                    <Linkedin size={24} />
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
