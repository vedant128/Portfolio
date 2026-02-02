"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function StarBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: "#000000" },

                particles: {
                    number: {
                        value: 160,
                        density: { enable: true, area: 900 },
                    },

                    color: {
                        value: ["#ffffff", "#60a5fa", "#a78bfa", "#f472b6"], // white, blue, purple, pink
                    },

                    shape: {
                        type: ["circle", "star"],
                    },

                    opacity: {
                        value: { min: 0.3, max: 1 },
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.3,
                        },
                    },

                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 1,
                        },
                    },

                    move: {
                        enable: true,
                        speed: { min: 0.1, max: 0.6 },
                        direction: "none",
                        outModes: "out",
                    },
                },

                /* ☄️ COMETS */
                emitters: [
                    {
                        direction: "top-right",
                        rate: {
                            delay: 6,
                            quantity: 1,
                        },
                        life: {
                            duration: 1,
                            count: 1,
                        },
                        particles: {
                            shape: { type: "line" },
                            size: { value: 2 },
                            color: { value: "#93c5fd" },
                            opacity: { value: 1 },
                            move: {
                                speed: 10,
                                outModes: "destroy",
                            },
                        },
                    },
                ],

                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 120,
                            duration: 0.4,
                        },
                    },
                },

                detectRetina: true,
            }}
        />
    );
}
