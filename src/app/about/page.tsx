"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const team = [
    {
        name: "Iulian Bozdoghină",
        role: "Founder & GRC Strategist",
        image: "/team/iulian-bozdoghina.png",
        linkedin: "https://www.linkedin.com/in/iulian-bozdoghina-ba9ba0131/"
    },
    {
        name: "Ernest Aduwenye",
        role: "AI Governance & Risk Specialist",
        image: "/team/ernest-aduwenye.png",
        linkedin: "https://www.linkedin.com/in/ernest-aduwenye-%F0%9F%8C%BF-b29b121b6/"
    },
    {
        name: "Cristian Cerna",
        role: "Senior IAM Engineer",
        image: "/team/cristian-cerna.png",
        linkedin: "https://www.linkedin.com/in/cristian-cerna-9595a828/"
    }
];

export default function AboutPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none bg-blueprint" />

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section - OPSWAT High Density */}
                <section className="px-8 pt-60 pb-32 border-b border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-md mb-8"
                            >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">
                                    Trust & Integrity
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-10 leading-[0.9]">
                                Securing the complex <br />
                                <span className="text-primary">industrial supply chain.</span>
                            </h1>

                            <p className="text-xl text-foreground/70 leading-relaxed font-sans max-w-2xl mb-12">
                                ITIS Secure is dedicated to providing high-authority cybersecurity audits and compliance engineering for automotive, aerospace, and defense contractors. We turn technical complexity into audit-proof certainty.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats / Proof Section */}
                <section className="py-20 bg-surface/50 border-b border-foreground/5">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { label: "Security Experts", val: "15+" },
                                { label: "Automotive Audits", val: "250+" },
                                { label: "First-Time Pass Rate", val: "100%" },
                                { label: "Global Reach", val: "EU / US / ASIA" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-5xl font-display font-black text-primary mb-2 tracking-tighter">{stat.val}</div>
                                    <div className="text-[11px] font-sans font-black text-foreground/40 uppercase tracking-[0.2em]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Pillars */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-tight">
                                    Why global leaders trust <br /> ITIS Secure.
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Technical Authority", desc: "Our team consists of lead auditors and senior security researchers who understand process and bit-level security." },
                                        { title: "Zero Compromise", desc: "We provide high-integrity assessments that stand up to the most rigorous manufacturer-level scrutiny." },
                                        { title: "Sovereign Engineering", desc: "We help you build security systems that provide audit-readiness and technical independence." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-display font-black mb-2">{item.title}</h4>
                                                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-primary/10 to-transparent p-1 rounded-[3rem]">
                                    <div className="bg-surface p-12 rounded-[2.8rem] border border-white/10">
                                        <p className="text-3xl font-display font-black leading-tight italic text-foreground/80 mb-8">
                                            "Transforming complex regulatory mandates into high-integrity technical infrastructure."
                                        </p>
                                        <div className="flex items-center gap-4 pt-8 border-t border-foreground/5">
                                            <div className="w-12 h-12 bg-primary rounded-full" />
                                            <div>
                                                <div className="font-bold">Iulian Bozdoghină</div>
                                                <div className="text-[10px] uppercase font-black tracking-widest text-primary">Founder & CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section Redesign */}
                <section className="py-32 px-8 bg-surface/30 border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Title Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-primary p-12 rounded-[2.5rem] flex flex-col justify-between text-white shadow-2xl shadow-primary/20"
                            >
                                <div>
                                    <h2 className="text-6xl font-display font-black leading-tight mb-8">
                                        The <br /> Experts
                                    </h2>
                                </div>
                                <p className="text-white/70 text-sm font-sans leading-relaxed font-medium">
                                    Meet the engineering minds behind your security and compliance roadmap. Direct access. No gatekeepers.
                                </p>
                            </motion.div>

                            {/* Team Member Cards */}
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-background border border-foreground/5"
                                >
                                    {/* Image Background */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        style={{ backgroundImage: `url(${member.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/95 p-6 rounded-2xl flex items-center justify-between shadow-xl">
                                            <div className="pr-4">
                                                <h3 className="text-xl font-display font-black text-black mb-1 leading-tight">{member.name}</h3>
                                                <p className="text-[10px] text-primary font-black uppercase tracking-wider">
                                                    {member.role}
                                                </p>
                                            </div>
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center text-white shrink-0 hover:scale-110 transition-transform shadow-lg"
                                            >
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
