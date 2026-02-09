"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2, ArrowRight, Eye, UserCheck, ShieldAlert, Activity } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function GDPRPage() {
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
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">Global Privacy Benchmark</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            GDPR <br />
                            <span className="text-primary italic">Sovereignty</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            The gold standard for data protection. We implement technical and organizational measures that transform GDPR from a legal burden into a strategic trust asset.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <ShieldAlert className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">DPIA READINESS</span>
                            </div>
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <UserCheck className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">DPO ADVISORY SERVICES</span>
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
                                    Technical <span className="text-primary">Data Integrity.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    GDPR compliance requires deep technical implementation. From pseudonymization to encryption, we secure your data pipelines at the architectural level.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Accountability Framework", desc: "Demonstrable compliance through formal records of processing activities (ROPA) and governance." },
                                        { title: "Subject Rights Management", desc: "Scalable technical workflows for handling Right to Erasure, Portability, and Access requests." },
                                        { title: "Privacy by Design", desc: "Integrating data protection impact assessments (DPIA) into the earliest stages of product engineering." }
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
                                    <Eye className="w-12 h-12 text-primary mb-8" />
                                    <h4 className="text-2xl font-display font-black mb-4 tracking-tight">Data Observability</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                                        You cannot protect what you cannot see. Our technical audits mapping your data flow across cross-border technical stacks.
                                    </p>
                                    <Link href="/about" className="text-xs font-black text-primary flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                                        Map Your Pipeline <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="p-12 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/20">
                                    <Activity className="w-12 h-12 text-white/50 mb-6 animate-pulse" />
                                    <h3 className="text-3xl font-display font-black mb-4 tracking-tight">Breach Readiness</h3>
                                    <p className="text-sm text-white/70 leading-relaxed mb-8 font-medium">
                                        The 72-hour reporting window is non-negotiable. Is your technical alerting infrastructure NIS2 and GDPR compliant?
                                    </p>
                                    <div className="px-4 py-2 bg-white/10 rounded border border-white/20 text-[10px] font-black uppercase w-fit">72h SLA Verification</div>
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
