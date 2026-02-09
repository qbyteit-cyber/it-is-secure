"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    ShieldCheck,
    Cpu,
    Zap,
    ShieldAlert,
    CheckCircle2,
    Briefcase,
    Globe,
    ArrowRight,
    Target,
    Activity
} from "lucide-react";
import Link from "next/link";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const OutsourcingSecurityRoles = () => {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    const comparisonData = [
        { feature: "Annual Cost", inHouse: "$150k - $250k+ (Salary + Benefits)", outsourced: "Fractional / Subscription based" },
        { feature: "Scalability", inHouse: "Static (Limited by headcount)", outsourced: "Elastic (Instant scale up/down)" },
        { feature: "Specialization", inHouse: "Generalist (Jack-of-all-trades)", outsourced: "Deep Domain Experts (vCISO, SOC, PT)" },
        { feature: "Tooling & Tech", inHouse: "Heavy CAPEX / Licensing costs", outsourced: "Included in service (OPEX)" },
        { feature: "Coverage", inHouse: "Business hours (Internal silos)", outsourced: "24/7/365 Global monitoring" }
    ];

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
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">Cyber Governance Strategy</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            Fractional <br />
                            <span className="text-primary italic">Authority</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            The guide to outsourcing specialized security roles. Leverage technical excellence without the burden of fixed personnel debt.
                        </p>
                    </div>
                </section>

                {/* Executive Summary */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black mb-10 tracking-tighter leading-tight text-foreground">
                                    Strategic <span className="text-primary italic">Resilience.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    Modern organizations are transitioning toward fractional models to bridge the cybersecurity talent gap while gaining access to specialized auditors and architects.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-6 bg-background border border-foreground/5 rounded-xl">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                        <div>
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground block">Efficiency</span>
                                            <p className="text-xs text-foreground/40 font-medium">Reduced management complexity.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 bg-background border border-foreground/5 rounded-xl">
                                        <Globe className="w-6 h-6 text-primary" />
                                        <div>
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground block">Global Scale</span>
                                            <p className="text-xs text-foreground/40 font-medium">24/7 technical monitoring.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-12 border border-foreground/10 rounded-[2.5rem] bg-surface relative overflow-hidden group">
                                <Activity className="w-12 h-12 text-primary/20 absolute -top-4 -right-4 animate-pulse" />
                                <h3 className="text-3xl font-display font-black mb-8 tracking-tight">The "Why"</h3>
                                <div className="space-y-8">
                                    {[
                                        { s: "Cost Optimization", d: "Transform CAPEX salaries into predictable OPEX subscriptions." },
                                        { s: "Elite Talent", d: "Instant access to auditors who have solved your specific challenges." },
                                        { s: "Constant Vigilance", d: "Detection and neutralization in minutes, not days." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="text-primary font-black font-display text-xl">0{i + 1}</div>
                                            <div>
                                                <h4 className="font-black text-foreground mb-1 font-display tracking-tight">{item.s}</h4>
                                                <p className="text-sm text-foreground/50">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Roles Grid */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-24">Core <span className="text-primary italic">Roles.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: "vCISO", icon: Briefcase, desc: "Executive-level leadership aligning security with business objectives and risk registers.", href: "/services/outsourced-roles/manager" },
                                { title: "SOC Analysts", icon: ShieldAlert, desc: "The frontline defense. Real-time traffic analysis and proactive threat hunting.", href: "/services/outsourced-roles/expert-manager" },
                                { title: "Pentest Specialists", icon: Target, desc: "Hacking your systems before criminals do. In-depth vulnerability simulations.", href: "/services/outsourced-roles/auditor" }
                            ].map((role, i) => (
                                <Link key={i} href={role.href} className="p-10 bg-surface border border-foreground/5 rounded-xl group hover:border-primary/40 transition-all hover:bg-background">
                                    <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                        <role.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-display font-black mb-4 tracking-tight">{role.title}</h3>
                                    <p className="text-sm text-foreground/50 leading-relaxed mb-6">{role.desc}</p>
                                    <span className="text-xs font-black text-primary flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest">
                                        View Authority <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Matrix */}
                <section className="py-32 px-8 bg-surface/30 border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter">Comparison <span className="text-primary italic">Matrix.</span></h2>
                        </div>
                        <div className="bg-background border border-foreground/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <table className="w-full text-left">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="p-10 text-xs font-black uppercase tracking-[0.2em]">Feature</th>
                                        <th className="p-10 text-xs font-black uppercase tracking-[0.2em] opacity-60">In-House</th>
                                        <th className="p-10 text-xs font-black uppercase tracking-[0.2em]">Outsourced</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-foreground/5">
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="group hover:bg-primary/5 transition-all">
                                            <td className="p-10 text-sm font-black text-foreground uppercase tracking-widest">{row.feature}</td>
                                            <td className="p-10 text-sm italic text-foreground/40">{row.inHouse}</td>
                                            <td className="p-10 text-sm font-bold text-primary">{row.outsourced}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
};

export default OutsourcingSecurityRoles;
