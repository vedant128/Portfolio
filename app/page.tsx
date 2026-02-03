"use client"
import dynamic from "next/dynamic"

// Critical components - load immediately with loading fallback
const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div className="h-16 bg-black/70 backdrop-blur animate-pulse" />,
})

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>,
})

// Below-the-fold components - lazy load
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="py-20 min-h-screen animate-pulse bg-neutral-900/20" />,
})

const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <div className="py-20 min-h-screen animate-pulse bg-neutral-900/20" />,
})

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="py-20 min-h-screen animate-pulse bg-neutral-900/20" />,
})

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="py-20 min-h-screen animate-pulse bg-neutral-900/20" />,
})

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="py-20 min-h-screen animate-pulse bg-neutral-900/20" />,
})

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="py-20 min-h-screen animate-pulse bg-neutral-900/20" />,
})

// Heavy component - disable SSR (requires browser APIs)
const StarBackground = dynamic(() => import("@/components/StarBackground"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <StarBackground />
    </>
  )
}
