"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
    ShieldCheck,
    Lock,
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
    RefreshCcw,
    Scale,
    Network,
    FileSpreadsheet,
    Building2,
    Briefcase,
    ShieldAlert,
    Cpu,
    MessagesSquare,
    Layers,
    Table as TableIcon
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const PILLARS = [
    {
        id: "PLAN",
        title: "ICT Risk Management",
        pillar: "Pillar 1",
        desc: "Defining ISMS scope, boundaries, and security requirements analysis.",
        icon: Target,
        color: "from-blue-500/20 to-blue-600/5",
    },
    {
        id: "CHECK",
        title: "Incident Reporting",
        pillar: "Pillar 2",
        desc: "Establishing reporting dashboards for stakeholders and organizing management reviews.",
        icon: Activity,
        color: "from-amber-500/20 to-amber-600/5",
    },
    {
        id: "DO",
        title: "Resilience Testing",
        pillar: "Pillar 3",
        desc: "Conducting vulnerability scans and regular internal audits.",
        icon: Zap,
        color: "from-emerald-500/20 to-emerald-600/5",
    },
    {
        id: "TPISR",
        title: "Third-Party Risk",
        pillar: "Pillar 4",
        desc: "Managing vendor risk assessments and Business Impact Analysis (BIA).",
        icon: Network,
        color: "from-purple-500/20 to-purple-600/5",
    },
    {
        id: "ACT",
        title: "Information Sharing",
        pillar: "Pillar 5",
        desc: "Communicating improvements and actions to interested parties.",
        icon: MessagesSquare,
        color: "from-rose-500/20 to-rose-600/5",
    }
];

const ROLES = [
    { role: "Management Body", responsibility: "Maintains ultimate accountability for ICT risk management." },
    { role: "Information Security Manager (ISM)", responsibility: "Technical execution and ISMS maintenance." },
    { role: "DORA Steering Committee", responsibility: "Strategic oversight and budget allocation." },
    { role: "Compliance Officer", responsibility: "Legal alignment with EU 2022/2554 standards." },
    { role: "ICT Third-Party Manager", responsibility: "Oversight of vendor risk and TPISR adherence." }
];

const MATURITY_LEVELS = [
    { level: 0, label: "Incomplete", color: "bg-foreground/5" },
    { level: 1, label: "Initial", color: "bg-foreground/10" },
    { level: 2, label: "Managed", color: "bg-foreground/20" },
    { level: 3, label: "Established", color: "bg-primary shadow-[0_0_20px_rgba(8,97,242,0.4)]" },
    { level: 4, label: "Predictable", color: "bg-primary/60" },
    { level: 5, label: "Optimizing", color: "bg-primary/40" }
];

function Target(props: any) {
    return <Search {...props} />;
}

export default function DORAPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [activePillar, setActivePillar] = useState(0);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* Background */}
            <div className="fixed inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded mb-8 font-mono"
                                >
                                    <ShieldAlert className="w-4 h-4 text-amber-500" />
                                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">
                                        EU Regulation 2022/2554
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl md:text-7xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.95]">
                                    <TerminalPulse text="DORA:" delay={500} /><br />
                                    <span className="text-primary italic">Financial Resilience.</span>
                                </h1>

                                <p className="text-xl text-foreground/70 max-w-2xl font-mono leading-relaxed mb-10">
                                    Beyond static compliance. We implement the technical frameworks required to ensure your ICT systems withstand, respond to, and recover from all digital disruptions.
                                </p>

                                <div className="flex flex-wrap gap-8 items-center border-l-2 border-primary/20 pl-6">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-mono font-black text-primary uppercase tracking-widest">Post-Compliance</div>
                                        <div className="text-sm font-bold text-foreground">ISO 27001 Alignment</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-mono font-black text-primary uppercase tracking-widest">Market Entry</div>
                                        <div className="text-sm font-bold text-foreground">TISAX-Level Maturity</div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="glass-card p-1 items-center justify-center flex aspect-square bg-gradient-to-br from-primary/5 to-transparent rounded-full border-primary/20 shadow-2xl relative group"
                                >
                                    <div className="absolute inset-0 bg-blueprint opacity-10 rounded-full" />
                                    <div className="relative z-10 text-center">
                                        <div className="relative">
                                            <Cpu className="w-24 h-24 text-primary animate-pulse" />
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute -inset-8 border-2 border-dashed border-primary/20 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                                className="absolute -inset-16 border border-dashed border-primary/10 rounded-full"
                                            />
                                        </div>
                                        <div className="mt-12">
                                            <div className="text-3xl font-black text-foreground uppercase tracking-widest">RESILIENT</div>
                                            <div className="text-[10px] font-mono text-primary font-bold mt-2">DORA ARCHITECTURE</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 5 Pillars of DORA */}
                <section className="py-32 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block underline decoration-primary decoration-4 underline-offset-8">Core Pillars</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
                                The DORA Infrastructure Hub
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {PILLARS.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden flex flex-col ${activePillar === i
                                            ? "bg-primary text-white border-primary shadow-2xl shadow-primary/30 -translate-y-2"
                                            : "bg-background border-foreground/10 hover:border-primary/50 text-foreground"
                                        }`}
                                    onClick={() => setActivePillar(i)}
                                    role="button"
                                >
                                    <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${activePillar === i ? "bg-white/20" : "bg-primary/10"
                                        }`}>
                                        <pillar.icon className={`w-6 h-6 ${activePillar === i ? "text-white" : "text-primary"}`} />
                                    </div>
                                    <h3 className="text-sm font-black mb-1 uppercase tracking-tighter leading-tight shrink-0">{pillar.title}</h3>
                                    <div className={`text-[10px] font-mono font-bold uppercase mb-4 ${activePillar === i ? "text-white/60" : "text-primary/60"}`}>
                                        {pillar.id}
                                    </div>
                                    <p className={`text-xs font-mono italic leading-relaxed ${activePillar === i ? "text-white/80" : "text-foreground/40"}`}>
                                        {pillar.desc}
                                    </p>

                                    {activePillar === i && (
                                        <motion.div
                                            layoutId="pillar-accent"
                                            className="absolute bottom-4 right-4"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resilience Stress-Test Graphic */}
                <section className="py-32 px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8">Holistic Resilience <br /> <span className="text-primary italic">Stress-Testing.</span></h2>
                                <p className="text-lg text-foreground/60 font-mono leading-relaxed mb-10">
                                    Our approach demonstrates how our ecosystem protects the <span className="text-foreground font-bold">Confidentiality, Integrity, and Availability (CIA)</span> of financial data through simulated digital disruptions.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { label: "Vulnerability Infiltration", status: "Mitigated" },
                                        { label: "Third-Party Data Breach", status: "Neutralized" },
                                        { label: "System Recovery Speed", status: "Optimized" }
                                    ].map((test, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-foreground/5 rounded-xl border border-foreground/5 group overflow-hidden relative">
                                            <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                            <span className="text-sm font-mono font-bold relative z-10">{test.label}</span>
                                            <span className="text-[10px] font-black uppercase text-primary border border-primary/20 px-2 py-0.5 rounded relative z-10">{test.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                {/* Stylized Graphic UI */}
                                <div className="glass-card aspect-video rounded-[2.5rem] border-primary/20 overflow-hidden relative flex items-center justify-center p-12">
                                    <div className="absolute inset-0 bg-blueprint opacity-10" />

                                    {/* Simulated Attack Visual */}
                                    <div className="relative w-full h-full border border-foreground/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
                                        <div className="flex justify-between items-start">
                                            <div className="p-3 bg-primary/10 rounded-lg">
                                                <Layers className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] font-mono text-foreground/40 font-black">NODE_RELIANCE_STATUS</div>
                                                <div className="text-xs font-mono font-bold text-emerald-500">OPERATIONAL [99.9%]</div>
                                            </div>
                                        </div>

                                        <div className="relative flex-grow flex items-center justify-center">
                                            {/* Center Shield */}
                                            <div className="relative w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center border border-primary animate-pulse">
                                                <ShieldCheck className="w-10 h-10 text-primary" />
                                            </div>

                                            {/* Attacking elements */}
                                            <motion.div
                                                animate={{ x: [0, 40, 0], y: [0, -20, 0], opacity: [0, 1, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                                className="absolute top-1/2 left-0 w-2 h-2 bg-red-500 rounded-full blur-sm"
                                            />
                                            <motion.div
                                                animate={{ x: [0, -40, 0], y: [0, 20, 0], opacity: [0, 1, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                                className="absolute bottom-1/2 right-0 w-2 h-2 bg-red-500 rounded-full blur-sm"
                                            />
                                            <motion.div
                                                animate={{ y: [0, 60, 0], opacity: [0, 1, 0] }}
                                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                                className="absolute top-0 left-1/2 w-2 h-2 bg-red-500 rounded-full blur-sm"
                                            />
                                        </div>

                                        <div className="flex gap-2">
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                                    className="flex-1 h-1 bg-primary rounded-full"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Evidence & Roles Mapping */}
                <section className="py-32 px-8 bg-foreground/[0.02] border-y border-foreground/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <div>
                                <h3 className="text-3xl font-display font-black text-foreground mb-12 flex items-center gap-4">
                                    <TableIcon className="w-8 h-8 text-primary" />
                                    DORA Roles & Responsibilities
                                </h3>
                                <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl font-mono">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-foreground/5 font-bold text-[10px] uppercase tracking-widest text-foreground/40 border-b border-foreground/10">
                                            <tr>
                                                <th className="px-6 py-4">Organizational Role</th>
                                                <th className="px-6 py-4">Key Accountability</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ROLES.map((role, i) => (
                                                <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors group">
                                                    <td className="px-6 py-5 font-bold text-foreground text-sm">{role.role}</td>
                                                    <td className="px-6 py-5 text-sm text-foreground/50 italic leading-tight">{role.responsibility}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-display font-black text-foreground mb-12 flex items-center gap-4">
                                    <BarChart3 className="w-8 h-8 text-primary" />
                                    Benchmarking Maturity
                                </h3>
                                <p className="text-sm text-foreground/50 font-mono mb-10 leading-relaxed italic">
                                    Moving financial entities from "Incomplete" to "Established" (Level 3) as the default baseline for ICT audits.
                                </p>

                                <div className="space-y-4">
                                    {MATURITY_LEVELS.map((level, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-display font-black transition-all ${level.level === 3 ? "text-white" : "text-foreground/40 group-hover:text-primary"
                                                } ${level.color}`}>
                                                L{level.level}
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className={`text-xs font-mono font-bold uppercase tracking-widest ${level.level === 3 ? 'text-primary' : 'text-foreground/40'}`}>
                                                        {level.label}
                                                    </span>
                                                    {level.level === 3 && <span className="text-[10px] font-black text-primary animate-pulse">AUDIT TARGET</span>}
                                                </div>
                                                <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${(level.level + 1) * 16.6}%` }}
                                                        viewport={{ once: true }}
                                                        className={`h-full ${level.level >= 3 ? 'bg-primary' : 'bg-foreground/20'}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Implementation */}
                <section className="py-32 px-8">
                    <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center border-primary/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/[0.03]" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8 tracking-tighter">
                                Secure Your <br />
                                <span className="text-primary italic">DORA Roadmap.</span>
                            </h2>
                            <p className="text-xl text-foreground/50 font-mono mb-12 max-w-2xl mx-auto italic">
                                Our ISO 27001 and ITIL foundations provide the perfect technical base for your DORA ICT requirements. Reach out for a specialized gap analysis.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                                >
                                    REQUEST GAP ANALYSIS
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-10 py-5 bg-transparent border-2 border-primary/20 text-foreground font-black rounded-xl hover:bg-primary/5 transition-all text-sm uppercase tracking-tighter">
                                    DOWNLOAD TPISR FRAMEWORK
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
