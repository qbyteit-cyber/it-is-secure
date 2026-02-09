"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, ArrowRight, Activity, CheckCircle2, Search, Zap } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const isoPillars = [
    { title: "Governance", icon: Shield, desc: "Establishing a robust ISMS framework that aligns with business objectives and risk appetite." },
    { title: "Risk Management", icon: Activity, desc: "Continuous mapping and mitigation of technical and organizational security threats." },
    { title: "Asset Protection", icon: Lock, desc: "Implementing strict access controls and encryption standards for critical data assets." },
    { title: "Audit & Review", icon: FileCheck, desc: "Regular internal audits and management reviews to ensure persistent compliance." },
];

export default function ISO27001Page() {
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
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">Global Trust Standard</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-4xl">
                            ISO 27001 <br />
                            <span className="text-primary italic">Sovereignty</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            The gold standard for Information Security Management Systems (ISMS). We help you build a resilient, audit-proof framework that protects your global reputation.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <Zap className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">Rapid Implementation</span>
                            </div>
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">2022 Revision Ready</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits / Pillars */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-10 tracking-tighter leading-tight">
                                    Strategic <span className="text-primary italic">Resilience.</span>
                                </h2>
                                <div className="space-y-12">
                                    {[
                                        { title: "Competitive Edge", desc: "Gain unparalleled trust from enterprise clients who demand ISO-level security maturity." },
                                        { title: "Global Compliance", desc: "Meet the highest international standards for data protection and operational continuity." },
                                        { title: "Risk Mitigation", desc: "Systematically identify and neutralize vulnerabilities before they become liabilities." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-display font-black mb-2">{item.title}</h4>
                                                <p className="text-sm text-foreground/60 leading-relaxed font-sans">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {isoPillars.map((pillar, i) => (
                                    <div key={i} className="p-8 bg-surface border border-foreground/5 rounded-xl group hover:border-primary/40 transition-all shadow-sm">
                                        <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                            <pillar.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-display font-black mb-3 tracking-tight">{pillar.title}</h3>
                                        <p className="text-[13px] text-foreground/50 leading-relaxed">{pillar.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Roadmap */}
                <section className="py-32 px-8 bg-surface/30 border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">Implementation <span className="text-primary italic">Roadmap.</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { step: "01", title: "Context & Scope", desc: "Defining the organizational boundaries and legal requirements for your specific ISMS." },
                                { step: "02", title: "Gap Analysis", desc: "Technical and process-level audit to identify compliance deficiencies against ISO 27001." },
                                { step: "03", title: "Hardening & Audit", desc: "Executing a full internal audit and management review to ensure certification readiness." }
                            ].map((step, i) => (
                                <div key={i} className="relative p-10 bg-background border border-foreground/5 rounded-xl group hover:border-primary/50 transition-all overflow-hidden shadow-lg">
                                    <div className="text-6xl font-display font-black text-primary/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">{step.step}</div>
                                    <h4 className="text-2xl font-display font-black mb-4 relative z-10">{step.title}</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed relative z-10">{step.desc}</p>
                                </div>
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
