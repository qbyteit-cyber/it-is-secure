"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, ArrowRight, Activity, Zap, Gavel, Scale } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function NIS2Page() {
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
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">EU Legislative Mandate</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            NIS2 <br />
                            <span className="text-primary italic">Enforcement</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            The most aggressive cybersecurity directive in EU history. NIS2 expands accountability to management and mandates high-integrity supply chain security.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <Gavel className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">Oct 2024 Deadline</span>
                            </div>
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <Scale className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">Up to 2% Global Turnover Fines</span>
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
                                    Strategic <span className="text-primary">Compliance Pillars.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    NIS2 isn't just a technical checklist—it's a corporate governance mandate. Our framework covers all 10 essential security measures.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Management Liability", desc: "Direct board-level accountability for security failures and implementation oversight." },
                                        { title: "Supply Chain Integrity", desc: "Mandatory security assessments of your entire technical and service provider ecosystem." },
                                        { title: "Incident Reporting", desc: "Strict 24h 'early warning' and 72h 'incident notification' cycles." }
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
                                <div className="p-12 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/20">
                                    <Activity className="w-12 h-12 text-white/50 mb-8 animate-pulse" />
                                    <h3 className="text-3xl font-display font-black mb-6 tracking-tight">Rapid Response Readiness</h3>
                                    <p className="text-sm text-white/70 leading-relaxed mb-8 font-medium">
                                        Does your IR team have the technical capacity to report an essential incident within the NIS2 24-hour window?
                                    </p>
                                    <Link href="/about" className="text-xs font-black text-white flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest bg-white/10 w-fit px-6 py-3 rounded-lg border border-white/20">
                                        Audit Your IR Capacity <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Risk Analysis", icon: Shield },
                                        { title: "BCP / DR", icon: Zap },
                                        { title: "Cyber Hygiene", icon: Lock },
                                        { title: "Encryption", icon: CheckCircle2 }
                                    ].map((item, i) => (
                                        <div key={i} className="p-8 border border-foreground/10 rounded-2xl bg-surface group hover:border-primary/40 transition-all">
                                            <item.icon className="w-8 h-8 text-primary mb-6" />
                                            <h4 className="text-lg font-display font-black tracking-tight">{item.title}</h4>
                                        </div>
                                    ))}
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
