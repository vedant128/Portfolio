"use client"

import { motion } from "motion/react"
import vedantImg from "@/components/src/vedant.png";
import { NoiseBackground } from "@/components/ui/noise-background";



export default function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center flex-col-reverse md:flex-row gap-8 md:gap-16 px-4 py-12 md:py-0">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left w-full md:w-auto max-w-md md:max-w-xl"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Hi, I'm  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Vedant Satish Gunjal</span>
                </h1>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-white-600">
                    • Full Stack Developer • Graphic Designer
                </p>

                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
                    <NoiseBackground
                        containerClassName="w-fit p-2 rounded-full"
                        gradientColors={[
                            "rgb(255, 100, 150)",
                            "rgb(100, 150, 255)",
                            "rgb(255, 200, 100)",
                        ]}
                    >
                        <a
                            href="https://drive.google.com/file/d/1TwMlbNCRImv7jh4xyLFgCtkgXWemnfYe/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                                Resume &rarr;
                            </button>
                        </a>
                    </NoiseBackground>
                </div>
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]">

                {/* Purple Glow */}
                <div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 blur-md opacity-70" />
                <div
                    className="absolute inset-0 rounded-full overflow-hidden bg-black border-[3px] border-blue-500 shadow-xl"></div>
                {/* Circle + Border */}
                <div
                    className="absolute inset-[6px] rounded-full overflow-hidden border-[5px] border-black-500">
                    <img
                        src={vedantImg.src}
                        alt="Vedant"
                        className="w-100 h-70 object-cover rounded-full"
                    />
                </div>
            </motion.div>

        </section>
    )
}
