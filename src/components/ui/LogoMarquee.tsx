"use client";

import React from "react";

const badges = [
    { src: "/tisax-badge-alt.png", alt: "TISAX Certified" },
    { src: "/iso-27001-badge.png", alt: "ISO 27001 Certified" },
    { src: "/gdpr-certified-badge.png", alt: "GDPR Certified" },
    { src: "/tisax-certified-badge.png", alt: "TISAX Specialized" },
    { src: "/tisax-badge-alt.png", alt: "TISAX Assessment" },
    { src: "/iso-27001-badge.png", alt: "ISO/IEC 27001" },
];

export default function LogoMarquee() {
    return (
        <div className="w-full opacity-60 hover:opacity-100 transition-opacity duration-700 pt-8 pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {badges.map((badge, i) => (
                        <div
                            key={i}
                            className="w-[120px] aspect-square flex justify-center align-center items-center rounded-xl bg-surface border border-foreground/10 hover:border-primary hover:bg-surface-hover hover:scale-105 transition-all duration-300"
                        >
                            <img src={badge.src} alt={badge.alt} className="w-[75%] h-auto object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
