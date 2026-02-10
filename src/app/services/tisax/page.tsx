"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    ShieldCheck,
    Lock,
    Users,
    Activity,
    ChevronRight,
    CheckCircle2,
    Database,
    Zap,
    BarChart3,
    ArrowRight,
    AlertTriangle,
    FileText,
    Monitor,
    Shield,
    Globe,
    Search,
    Car
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";
import { RadarChart } from "@/components/ui/RadarChart";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const MATURITY_LEVELS = [
    {
        level: 0,
        label: "Incomplete",
        desc: "Process not existing or fails to achieve its purpose.",
        requirements: "Baseline mapping of existing informal workflows.",
        status: "muted"
    },
    {
        level: 1,
        label: "Performed",
        desc: "Process achieves its primary purpose but lacks consistency.",
        requirements: "Basic documentation of core security activities.",
        status: "muted"
    },
    {
        level: 2,
        label: "Managed",
        desc: "Process is planned, monitored, and adjusted.",
        requirements: "Evidence of responsibilities and regular monitoring.",
        status: "muted"
    },
    {
        level: 3,
        label: "Established",
        desc: "Standard processes integrated into the overall system.",
        requirements: "TISAX® Target: Full VDA-ISA alignment and organizational integration.",
        status: "active"
    },
    {
        level: 4,
        label: "Predictable",
        desc: "Process operates within defined limits to achieve outcomes.",
        requirements: "Advanced metrics and quantitative performance management.",
        status: "excellence"
    },
    {
        level: 5,
        label: "Optimizing",
        desc: "Continuously improved to meet current and future goals.",
        requirements: "AI-driven threat hunting and continuous control automation.",
        status: "excellence"
    }
];

const ASSESSMENT_LEVELS = [
    {
        level: "AL 1",
        label: "Self-Assessment",
        protection: "Standard Needs",
        method: "Internal Plausibility",
        result: "No TISAX® Label",
        focus: "For internal baseline only; not recognized for OEM exchange."
    },
    {
        level: "AL 2",
        label: "Document Review",
        protection: "High Needs",
        method: "Remote + Evidence Check",
        result: "TISAX® Label (High)",
        focus: "Standard for suppliers with high protection requirements."
    },
    {
        level: "AL 3",
        label: "Deep Dive Audit",
        protection: "Very High Needs",
        method: "On-site Verification",
        result: "TISAX® Label (Very High)",
        focus: "Mandatory for Prototype Protection and sensitive PII."
    }
];

const ROADMAP = [
    { step: "01", title: "Registration & Scoping", desc: "Definition of Participant & Scope IDs via ENX Portal." },
    { step: "02", title: "Self-Assessment (VDA ISA)", desc: "Comprehensive baseline readiness check against ISA catalog." },
    { step: "03", title: "Gap Analysis & Remediation", desc: "Technical implementation to close non-conformities." },
    { step: "04", title: "Evidence Library Building", desc: "Centralizing digital content for global audit use." },
    { step: "05", title: "Internal Audit", desc: "Pre-audit verification by our certified TISAX® experts." },
    { step: "06", title: "Accredited Audit Support", desc: "On-site guidance during independent assessor review." },
    { step: "07", title: "Label Publication", desc: "Validation and result sharing on the ENX Exchange." }
];

const AUDIT_SAMPLE_DATA = [
    { label: "Asset Management", value: 3.2, fullValue: 3.0 },
    { label: "IS Policies", value: 4.1, fullValue: 3.0 },
    { label: "Human Resources", value: 2.8, fullValue: 3.0 },
    { label: "Physical Security", value: 3.5, fullValue: 3.0 },
    { label: "Access Control", value: 3.9, fullValue: 3.0 },
    { label: "Cryptography", value: 4.5, fullValue: 3.0 },
    { label: "Operations", value: 3.1, fullValue: 3.0 },
    { label: "Incident Mgmt", value: 2.6, fullValue: 3.0 },
];

export default function TISAXPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [activeMaturity, setActiveMaturity] = useState(3);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* Technical Background */}
            <div className="fixed inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-8 font-mono"
                                >
                                    <Car className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                        VDA Excellence: TISAX® Framework
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.95]">
                                    <TerminalPulse text="TISAX® Implementation:" delay={500} /><br />
                                    <span className="text-primary italic">Trusted Automotive Security.</span>
                                </h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="text-xl text-foreground/70 max-w-2xl font-mono leading-relaxed"
                                >
                                    Specialized in <span className="text-foreground font-bold">AL3 certifications</span> for high and very high protection needs. We bridge the gap between VDA requirements and operational reality.
                                </motion.p>
                            </div>

                            <div className="lg:col-span-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2 }}
                                    className="bg-primary border border-white/20 p-8 rounded-2xl font-mono text-white relative overflow-hidden group shadow-2xl"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <ShieldCheck className="w-16 h-16" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] uppercase tracking-widest font-black mb-1 opacity-70">Track Record</div>
                                        <div className="text-4xl font-black mb-2">26+</div>
                                        <div className="text-sm font-bold border-b border-white/20 pb-4 mb-4">Successful AL3 Implementations</div>
                                        <div className="text-[10px] opacity-60 leading-tight">
                                            Trusted by global automotive leaders across Germany, USA, India, and Romania.
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VDA Maturity Dashboard */}
                <section className="py-32 px-8 bg-foreground/5 border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Governance Model</div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6">6-Level Maturity Dashboard</h2>
                            <p className="text-foreground/50 font-mono text-sm max-w-2xl mx-auto">Based on the VDA Information Security Assessment (ISA) maturity levels. Excellence starts at Level 3.</p>
                        </div>

                        <div className="grid lg:grid-cols-6 gap-2 mb-12">
                            {MATURITY_LEVELS.map((m) => (
                                <button
                                    key={m.level}
                                    onClick={() => setActiveMaturity(m.level)}
                                    className={`relative p-6 rounded-xl border transition-all duration-300 group ${activeMaturity === m.level
                                            ? "bg-primary border-primary shadow-xl -translate-y-2"
                                            : "bg-background border-foreground/10 hover:border-primary/50 opacity-60"
                                        }`}
                                >
                                    <div className={`text-2xl font-black mb-2 font-display ${activeMaturity === m.level ? 'text-white' : 'text-primary'}`}>
                                        L{m.level}
                                    </div>
                                    <div className={`text-[10px] font-mono font-black uppercase tracking-widest ${activeMaturity === m.level ? 'text-white/80' : 'text-foreground/40'}`}>
                                        {m.label}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeMaturity}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-background border border-foreground/10 rounded-2xl p-8 md:p-12 shadow-inner group"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <BarChart3 className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-display font-black text-foreground">Level {activeMaturity}: {MATURITY_LEVELS[activeMaturity].label}</h3>
                                                <p className="text-xs font-mono text-primary font-bold">VDA-ISA Status: {MATURITY_LEVELS[activeMaturity].status.toUpperCase()}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg text-foreground/70 mb-8 font-mono leading-relaxed">
                                            {MATURITY_LEVELS[activeMaturity].desc}
                                        </p>
                                        <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                                            <div className="text-[10px] font-mono font-black uppercase text-primary mb-2">Requirement</div>
                                            <p className="text-sm text-foreground/80 font-mono italic">"{MATURITY_LEVELS[activeMaturity].requirements}"</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative w-64 h-64 border-4 border-foreground/5 rounded-full flex items-center justify-center">
                                            <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinity]" />
                                            <div className="text-center">
                                                <div className="text-5xl font-black text-primary font-display">{activeMaturity}</div>
                                                <div className="text-[10px] font-mono font-bold text-foreground/30 uppercase tracking-[0.2em] mt-2 underline decoration-primary decoration-2 underline-offset-4">ISC Benchmark</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Scoping Comparison Table */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Strategic Scoping</div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground">Dimensions of Scoping (AL1–AL3)</h2>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-foreground/10 shadow-2xl">
                            <table className="w-full text-left border-collapse bg-foreground/[0.02]">
                                <thead>
                                    <tr className="bg-foreground/5 border-b border-foreground/10">
                                        <th className="px-8 py-6 font-mono text-[10px] uppercase font-bold text-foreground/40">Assessment Level</th>
                                        <th className="px-8 py-6 font-mono text-[10px] uppercase font-bold text-foreground/40">Target Needs</th>
                                        <th className="px-8 py-6 font-mono text-[10px] uppercase font-bold text-foreground/40">Audit Methodology</th>
                                        <th className="px-8 py-6 font-mono text-[10px] uppercase font-bold text-foreground/40">ENX Outcome</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ASSESSMENT_LEVELS.map((row, i) => (
                                        <tr key={i} className={`border-b border-foreground/5 hover:bg-foreground/[0.03] transition-colors group ${row.level === 'AL 3' ? 'bg-primary/5' : ''}`}>
                                            <td className="px-8 py-8">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black ${row.level === 'AL 3' ? 'bg-primary text-white' : 'bg-foreground/10 text-foreground'}`}>
                                                        {row.level}
                                                    </div>
                                                    <span className="font-bold text-foreground">{row.label}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${row.protection === 'Very High Needs' ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'}`}>
                                                    {row.protection}
                                                </span>
                                            </td>
                                            <td className="px-8 py-8 text-foreground/60 font-mono text-sm">{row.method}</td>
                                            <td className="px-8 py-8">
                                                <div className="flex flex-col gap-2">
                                                    <span className="font-black text-foreground text-sm">{row.result}</span>
                                                    <p className="text-[10px] text-foreground/40 max-w-[200px] leading-tight italic">{row.focus}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* VDA Catalog Specialization */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">Core Competency</div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8">VDA ISA Catalog Specialization</h2>
                                <p className="text-xl text-foreground/50 font-mono mb-12">
                                    We go beyond basic auditing. Our technical depth covers the entire VDA ISA scope, specifically tailored for the high-pressure automotive supply chain.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { icon: Shield, title: "Information Security", desc: "Handling PII and technical data with High and Very High protection needs (Confidentiality focus)." },
                                        { icon: Car, title: "Prototype Protection", desc: "Physical security for test vehicles, concealed components, and specialized OEM test areas." },
                                        { icon: Lock, title: "Data Protection", desc: "Dedicated automotive-specific GDPR implementation for shared R&D environments." }
                                    ].map((p, i) => (
                                        <div key={i} className="flex gap-6 group p-4 rounded-2xl hover:bg-foreground/5 transition-all">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <p.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                                                <p className="text-sm text-foreground/50 font-mono leading-relaxed">{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-foreground/5 p-12 rounded-[3rem] border border-foreground/10 flex flex-col items-center">
                                <h4 className="text-[10px] font-mono font-black uppercase text-foreground/30 tracking-[0.5em] mb-12">Reporting Standard (Radar)</h4>
                                <RadarChart data={AUDIT_SAMPLE_DATA} />
                                <div className="mt-12 text-center max-w-xs">
                                    <p className="text-[10px] font-mono text-primary font-black uppercase mb-2">Automotive Shorthand</p>
                                    <p className="text-xs text-foreground/40 font-mono italic">Spider diagrams like this are the industry standard for VDA ISA assessments. It's the language of automotive security managers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation Roadmap */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <div className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4">The ISC Way</div>
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground">6–12 Month Successful Timeline</h2>
                        </div>

                        <div className="relative">
                            {/* Connector Line */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground/5 -translate-y-1/2 hidden lg:block" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative">
                                {ROADMAP.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative group h-full"
                                    >
                                        <div className="flex flex-col items-center h-full">
                                            <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center font-display font-black text-primary mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-all">
                                                {item.step}
                                            </div>
                                            <div className="bg-foreground/5 p-6 rounded-2xl border border-foreground/10 group-hover:border-primary/30 transition-all flex flex-col h-[180px]">
                                                <h4 className="text-sm font-black text-foreground mb-3 leading-tight uppercase tracking-tighter">{item.title}</h4>
                                                <p className="text-[10px] text-foreground/50 font-mono leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
                        {/* Decorative Patterns */}
                        <div className="absolute inset-0 bg-blueprint opacity-10" />
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">
                                Secure Your <br />
                                <span className="text-secondary italic">TISAX® AL3 Label.</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-12 font-mono max-w-2xl mx-auto italic">
                                Don't treat TISAX as a burden. Treat it as a competitive differentiator in the global automotive supply chain.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href="/#contact"
                                    className="px-10 py-5 bg-white text-primary font-black rounded-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3"
                                >
                                    SCHEDULE SCOPING SESSION
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-xl hover:bg-white/5 transition-all"
                                >
                                    READINESS SCANNER
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer onOpenCalculator={() => setCalculatorOpen(true)} />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
