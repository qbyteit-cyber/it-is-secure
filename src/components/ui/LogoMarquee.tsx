"use client";

import { motion } from "framer-motion";

const badges = [
    { src: "/tisax-badge-alt.png", alt: "TISAX Certified" },
    { src: "/iso-27001-badge.png", alt: "ISO 27001 Certified" },
    { src: "/gdpr-certified-badge.png", alt: "GDPR Certified" },
    { src: "/tisax-certified-badge.png", alt: "TISAX Specialized" },
    { src: "/tisax-badge-alt.png", alt: "TISAX Assessment" },
    { src: "/iso-27001-badge.png", alt: "ISO/IEC 27001" },
];

export default function LogoMarquee() {
    // Duplicate the badges for a seamless loop
    const allBadges = [...badges, ...badges];

    return (
        <div className="w-full py-6 overflow-hidden relative group">
            {/* Masking Gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex gap-8 items-center"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {allBadges.map((badge, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[140px] h-[60px] flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    >
                        <img
                            src={badge.src}
                            alt={badge.alt}
                            className="h-full w-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
