"use client";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled to prevent "window is not defined" error
const DynamicWorld = dynamic(() => import("./GlobeWorld"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
        </div>
    ),
});

type GlobeConfig = {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: {
        lat: number;
        lng: number;
    };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
};

export default function About() {
    const globeConfig: GlobeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
        { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
        { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[2] },
        { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[0] },
        { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[1] },
    ];

    return (
        <section id="about" className="py-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
                    About Me
                </h2>
                <p className="text-center text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                    I’m a passionate Information Technology student with a strong interest in full-stack development and emerging technologies. I enjoy building real-world applications using modern tools and continuously improving my problem-solving skills.
                </p>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { value: "10+", label: "Projects Built" },
                        { value: "3+", label: "Years Experience" },
                        { value: "10+", label: "Technologies" },
                        { value: "2+", label: "Leadership Roles" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-6 text-center shadow-lg"
                        >
                            <h3 className="text-4xl font-bold text-blue-500">
                                {item.value}
                            </h3>
                            <p className="mt-2 text-gray-300">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Currently Working On */}
                <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-br from-black to-neutral-900 p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">
                        Currently Working On
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                        {[
                            "Blockchain Social Media Platform",
                            "AI-Powered Admin Panel",
                            "Advanced Web3 Applications",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-[400px] md:h-[500px] w-full mt-8">
                <DynamicWorld data={sampleArcs} globeConfig={globeConfig} />
            </div>
        </section>
    );
}
