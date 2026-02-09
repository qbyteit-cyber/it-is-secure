"use client";

import { motion } from "framer-motion";
import { Shield, Car, CheckCircle, ArrowRight, Activity, Lock, Search, GraduationCap } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { useState } from "react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const assessmentLevels = [
    { level: "AL1", name: "Self-Assessment", scope: "Low Protection", desc: "Internal review only. No TISAX® label issued.", suitability: "Internal Use" },
    { level: "AL2", name: "Plausibility Check", scope: "High Protection", desc: "Detailed review of 6-10 controls + evidence check.", suitability: "Normal OEM Data" },
    { level: "AL3", name: "On-site Inspection", scope: "Very High Protection", desc: "Full verification of all controls via deep-dive check.", suitability: "Prototype Handling" },
];

export default function TISAXPage() {
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
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">Automotive Compliance Foundation</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-4xl">
                            TISAX® <br />
                            <span className="text-primary italic">High Integrity</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            The Trusted Information Security Assessment Exchange (TISAX®) is the mandatory security passport for the automotive supply chain. We guide you through the VDA ISA requirements with technical precision.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <Search className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">VDA ISA 6.0 READY</span>
                            </div>
                            <div className="flex items-center gap-4 py-4 px-8 bg-surface border border-foreground/10 rounded-xl">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span className="text-xs font-black uppercase tracking-widest">AL3 ASSESSMENT DEPTH</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scopes Grid */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-tight text-foreground">
                                    Assessment <span className="text-primary">Scopes.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    Selecting the correct scope and assessment level is the most critical step in your TISAX® roadmap. Our lead auditors ensure optimized scoping for cost-efficiency.
                                </p>
                                <div className="space-y-4">
                                    {assessmentLevels.map((al, idx) => (
                                        <div key={idx} className="p-8 bg-background border border-foreground/5 rounded-xl flex items-start gap-8 group hover:border-primary/40 transition-all shadow-sm">
                                            <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center font-black text-primary font-display text-xl group-hover:bg-primary group-hover:text-white transition-all">{al.level}</div>
                                            <div>
                                                <h4 className="font-black text-lg text-foreground mb-1 font-display tracking-tight">{al.name}</h4>
                                                <p className="text-xs text-foreground/40 font-sans mb-3 uppercase tracking-wider font-bold">{al.scope}</p>
                                                <p className="text-[13px] text-foreground/60 leading-relaxed mb-4">{al.desc}</p>
                                                <span className="text-[10px] uppercase font-black text-primary tracking-[0.1em] px-2 py-1 bg-primary/5 rounded border border-primary/10">Suitable: {al.suitability}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-12">
                                <div className="bg-primary p-12 rounded-[2.5rem] text-white shadow-2xl shadow-primary/20">
                                    <h3 className="text-3xl font-display font-black mb-8 tracking-tight">Maturity Targets</h3>
                                    <div className="space-y-6">
                                        {[
                                            { phase: "Gap Analysis", time: "1-2 Months", val: "85%" },
                                            { phase: "ISMS Hardening", time: "3-5 Months", val: "95%" },
                                            { phase: "ENX Labeling", time: "1 Month", val: "100%" },
                                        ].map((bench, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/5">
                                                <div>
                                                    <h4 className="font-black text-sm uppercase tracking-widest">{bench.phase}</h4>
                                                    <p className="text-[10px] text-white/60 font-medium">{bench.time}</p>
                                                </div>
                                                <div className="text-2xl font-black font-display">{bench.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
                                        <p className="text-xs text-white/50 font-medium leading-relaxed italic italic">
                                            "Maturity level 3 (Established) is the mandatory baseline for all VDA ISA control questions."
                                        </p>
                                    </div>
                                </div>
                                <div className="p-12 border border-foreground/10 rounded-[2.5rem] bg-surface">
                                    <GraduationCap className="w-12 h-12 text-primary mb-8" />
                                    <h4 className="text-2xl font-display font-black mb-4 tracking-tight">TISAX® Training</h4>
                                    <p className="text-sm text-foreground/50 leading-relaxed mb-8">
                                        Empower your internal security team with certified training on the VDA ISA catalog and ENX requirements.
                                    </p>
                                    <Link href="/about" className="text-xs font-black text-primary flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                                        View Curriculums <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Requirements Catalog */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">Control <span className="text-primary italic">Domains.</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: "Information Security", icon: Shield, desc: "Extended ISO 27001 requirements tailored for automotive data lifecycles." },
                                { title: "Prototype Protection", icon: Car, desc: "Physical and logical security for R&D camouflage and secret components." },
                                { title: "3rd Party Connection", icon: Activity, desc: "Managing the complexity of remote technical access across tiered partners." },
                                { title: "Data Privacy", icon: Lock, desc: "GDPR compliance within the specific context of supply chain operations." }
                            ].map((req, i) => (
                                <div key={i} className="p-10 bg-surface border border-foreground/5 rounded-xl group hover:border-primary/40 transition-all hover:bg-background">
                                    <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                        <req.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-display font-black mb-4 tracking-tight">{req.title}</h3>
                                    <p className="text-sm text-foreground/50 leading-relaxed">{req.desc}</p>
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
