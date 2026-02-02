"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Send, Mail, User, MessageSquare } from "lucide-react";

// Dynamic import for faster page load - WorldMap loads only when needed
const WorldMap = dynamic(
    () => import("@/components/ui/world-map").then((mod) => mod.WorldMap),
    {
        ssr: false,
        loading: () => (
            <div className="w-full aspect-[2/1] bg-black/50 rounded-lg animate-pulse flex items-center justify-center">
                <span className="text-gray-500">Loading map...</span>
            </div>
        ),
    }
);

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const mailtoLink = `mailto:vedantgunjal2005@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.open(mailtoLink, "_blank");
        setIsSubmitting(false);
    };

    // Example dots showing connections to your location (India)
    const mapDots = [
        {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: 19.076, lng: 72.8777 },    // Mumbai
        },
        {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 19.076, lng: 72.8777 },    // Mumbai
        },
        {
            start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            end: { lat: 19.076, lng: 72.8777 },     // Mumbai
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? I'd love to hear from you!
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - World Map */}
                    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm p-4">
                        <WorldMap dots={mapDots} lineColor="#8b5cf6" />
                        <p className="text-center text-gray-500 text-sm mt-4">

                        </p>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div className="relative">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Email"
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Your Message"
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                <Send className="w-5 h-5" />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {/* Alternative Contact */}
                            <p className="text-center text-gray-500 text-sm">
                                Or email me directly at{" "}
                                <a
                                    href="mailto:vedantgunjal2005@gmail.com"
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    vedantgunjal2005@gmail.com
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
