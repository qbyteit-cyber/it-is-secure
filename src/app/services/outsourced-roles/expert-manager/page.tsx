"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, ArrowRight, Zap, Target, Activity, Users } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function ExpertManagerPage() {
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
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">High-Impact Governance Role</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            Expert <br />
                            <span className="text-primary italic">Manager</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            A dual-force for your security organization. Merging executive leadership with deep technical auditing capacity to bridge the gap between policy and execution.
                        </p>
                    </div>
                </section>

                {/* Role Overview */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-tight text-foreground">
                                    Strategic <span className="text-primary">Synergy.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    The Expert Manager provides fractional leadership for complex security organizations, managing both the compliance roadmap and the technical IR teams.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Fractional vCISO+", desc: "More than a consultant—an integrated leader who takes ownership of the security budget and risk register." },
                                        { title: "Audit Orchestra", desc: "Synchronizing internal audits, third-party vetting, and formal certification cycles across the enterprise." },
                                        { title: "Crisis Management", desc: "Leading the incident response steering committee during high-severity technical disruptions." }
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
                                    <Users className="w-12 h-12 text-primary mb-8" />
                                    <h4 className="text-2xl font-display font-black mb-4 tracking-tight">Enterprise Governance</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                                        Outsource the management burden. Our expert managers ensure your security stack evolves with your business scaling.
                                    </p>
                                    <Link href="/about" className="text-xs font-black text-primary flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                                        Executive Strategy <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Risk Strategy", icon: Target },
                                        { title: "Incident Lead", icon: Zap },
                                        { title: "Team Management", icon: Activity },
                                        { title: "Board Reporting", icon: Shield }
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
