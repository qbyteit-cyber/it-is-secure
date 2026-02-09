"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, ArrowRight, Car, HardDrive, Search, Activity } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function TPISRPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none bg-blueprint" />

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="pt-60 pb-32 px-8 border-b border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-md mb-8"
                        >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">North American Automotive Standard</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            TPISR <br />
                            <span className="text-primary italic">IP Integrity</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            Third-Party Information Security Requirements (TPISR) by AIAG. The critical security benchmark for North American OEMs to protect industrial intellectual property.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <Car className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">AIAG STANDARDS READY</span>
                            </div>
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <HardDrive className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">CAD/CAM DATA PROTECTION</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Pillars Grid */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-tight text-foreground">
                                    Strategic <span className="text-primary">IP Safeguards.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    TPISR focuses on the absolute protection of competitive OEM data. We implement technical controls that ensure zero leakage in the high-tier supply chain.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Logical Hardening", desc: "Principal of Least Privilege (PoLP) and MFA across all sensitive OEM engineering endpoints." },
                                        { title: "Vulnerability Intel", desc: "Proactive threat intelligence and prioritized scanning for industrial control systems." },
                                        { title: "Physical Perimeter", desc: "Rigorous laboratory and prototype center security to prevent visual or digital data theft." }
                                    ].map((pillar, i) => (
                                        <div key={i} className="flex gap-6 p-8 bg-background border border-foreground/5 rounded-xl hover:border-primary/40 transition-all group">
                                            <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-display font-black mb-2">{pillar.title}</h4>
                                                <p className="text-sm text-foreground/60 leading-relaxed font-sans">{pillar.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="p-12 border border-foreground/10 rounded-[2.5rem] bg-surface">
                                    <Activity className="w-12 h-12 text-primary mb-8" />
                                    <h4 className="text-2xl font-display font-black mb-4 tracking-tight">Audit Confidence</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                                        Position your organization as a secure technical leader in the global automotive supply chain.
                                    </p>
                                    <Link href="/about" className="text-xs font-black text-primary flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                                        Exploration Session <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="p-12 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/20">
                                    <h3 className="text-3xl font-display font-black mb-6 tracking-tight">Global Synergy</h3>
                                    <p className="text-sm text-white/70 leading-relaxed mb-8 font-medium">
                                        Leverage your TPISR investment to achieve up to 70% readiness for European TISAX® requirements.
                                    </p>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 bg-white/10 rounded border border-white/20 text-[10px] font-black uppercase">TISAX® Ready</div>
                                        <div className="px-3 py-1 bg-white/10 rounded border border-white/20 text-[10px] font-black uppercase">ISO-Aligned</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
