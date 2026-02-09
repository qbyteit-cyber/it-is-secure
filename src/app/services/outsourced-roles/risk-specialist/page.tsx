"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, ArrowRight, Target, Activity, Scale, ShieldAlert } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function RiskSpecialistPage() {
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
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">Analytical Risk Management Role</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            Risk <br />
                            <span className="text-primary italic">Specialist</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            Neutralizing threats through empirical analysis. Our outsourced specialists map your risk landscape with technical precision, ensuring zero blind spots in your defense strategy.
                        </p>
                    </div>
                </section>

                {/* Role Overview */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-tight text-foreground">
                                    Quantified <span className="text-primary">Intel.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    A Risk Specialist doesn't just guess—they measure. We utilize ISO 27005 and VDA ISA methodologies to build high-trust risk treatment plans.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Asset Impact Analysis", desc: "Deep-dive mapping of critical technical assets and the financial/legal impact of their compromise." },
                                        { title: "Risk Treatment Plans", desc: "Prioritized remediation strategies that focus on the 'Critical Few' vulnerabilities first." },
                                        { title: "BIA & Continuity", desc: "Business Impact Analysis to define RTO/RPO requirements for mission-critical recovery." }
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
                                    <Target className="w-12 h-12 text-primary mb-8" />
                                    <h4 className="text-2xl font-display font-black mb-4 tracking-tight">Risk Visibility</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                                        You cannot mitigate what you haven't mapped. Gain a crystalline view of your technical and organizational risk register.
                                    </p>
                                    <Link href="/about" className="text-xs font-black text-primary flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                                        Map Your Risk <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Threat Intel", icon: ShieldAlert },
                                        { title: "Impact Scoring", icon: Activity },
                                        { title: "Legal Risk", icon: Scale },
                                        { title: "Treatment", icon: Shield }
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
