"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
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
    Shield,
    Globe,
    Search,
    RefreshCcw,
    Scale,
    Network,
    FileSpreadsheet,
    Binary,
    Link as LinkIcon,
    Factory,
    Car,
    Cpu,
    Server,
    LineChart,
    Settings
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { TerminalPulse } from "@/components/ui/TerminalPulse";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const STAGES = [
    {
        id: "PLAN",
        title: "Requirement Analysis",
        stage: "Stage 01",
        desc: "Supporting procurement with deep technical risk assessments.",
        items: [
            "OEM Security Mandate Scoping",
            "Business Impact Analysis (BIA)",
            "Third-Party Risk Profiling",
            "Initial Policy Alignment"
        ],
        icon: Search
    },
    {
        id: "DO",
        title: "Technical Hardening",
        stage: "Stage 02",
        desc: "Operationalizing security controls within vendor infrastructure.",
        items: [
            "Network Micro-segmentation",
            "Transport Layer Encryption",
            "Risk ID Card Mitigation",
            "IAM Protocol Implementation"
        ],
        icon: Zap
    },
    {
        id: "CHECK",
        title: "Evidence & Audit",
        stage: "Stage 03",
        desc: "Centralizing digital content for worldwide auditor verification.",
        items: [
            "Evidence Repository Creation",
            "Control Effectiveness Testing",
            "Pre-Audit Verification Labs",
            "Gap Remediation Sprints"
        ],
        icon: FileSpreadsheet
    },
    {
        id: "ACT",
        title: "Continuous Monitoring",
        stage: "Stage 04",
        desc: "Ensuring long-term compliance throughout the contract lifecycle.",
        items: [
            "Ongoing Vendor Scan Cycles",
            "Automated CAPA Triggering",
            "Quarterly Management Reviews",
            "Annual Technical Re-validation"
        ],
        icon: Activity
    }
];

const PROTECTION_LEVELS = {
    normal: {
        title: "Normal Protection",
        needs: "Standard confidential data",
        controls: [
            "Basic Network Security",
            "Standard Password Policies",
            "Annual Review Cycles",
            "Public Cloud with Standard IAM"
        ]
    },
    high: {
        title: "High Protection",
        needs: "Sensitive intellectual property",
        controls: [
            "Strict Network Segmentation",
            "Multi-Factor Authentication (MFA)",
            "Quarterly Evidence Collection",
            "Private Cloud/Hybrid Isolation"
        ]
    },
    very_high: {
        title: "Very High Protection",
        needs: "Prototypes & critical OEM assets",
        controls: [
            "Physical/Air-Gapped Isolation",
            "Hardware-based E2EE",
            "Real-time ISMS Monitoring",
            "On-site Audit Readiness 24/7"
        ]
    }
};

export default function TPISRPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [activeLevel, setActiveLevel] = useState<'normal' | 'high' | 'very_high'>('high');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* Blueprint Background */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                                    <LinkIcon className="w-4 h-4 text-blue-500" />
                                    <span className="text-[10px] font-mono font-black text-blue-500 uppercase tracking-[0.3em]">
                                        Supply Chain Resilience Framework
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                                    TPISR: Hardening <br />
                                    <span className="text-primary italic">Automotive Nodes.</span>
                                </h1>

                                <p className="text-xl text-foreground/60 leading-relaxed font-mono max-w-xl mb-12">
                                    We bridge the gap between OEM security mandates and vendor operational reality. We implement the technical controls and evidence repositories required for the strictest <span className="text-foreground font-bold">AL3 certifications</span>.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="px-8 py-4 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                                    >
                                        VENDOR SCOPING SESSION
                                    </button>
                                </div>
                            </motion.div>

                            <div className="relative hidden lg:block h-[400px]">
                                {/* Animated Blueprint Link */}
                                <svg width="100%" height="100%" viewBox="0 0 500 400" className="overflow-visible">
                                    <defs>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Partner Node */}
                                    <motion.g
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="cursor-default"
                                    >
                                        <rect x="50" y="250" width="120" height="80" rx="10" className="fill-background stroke-primary stroke-2" />
                                        <text x="110" y="295" textAnchor="middle" className="fill-foreground font-mono text-[10px] font-black">PARTNER</text>
                                        <text x="110" y="315" textAnchor="middle" className="fill-primary font-mono text-[8px]">VENDOR_SITE</text>
                                    </motion.g>

                                    {/* OEM Node */}
                                    <motion.g
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <rect x="330" y="50" width="120" height="80" rx="10" className="fill-primary stroke-primary/30 stroke-2" />
                                        <text x="390" y="95" textAnchor="middle" className="fill-white font-mono text-[10px] font-black">OEM HUB</text>
                                        <text x="390" y="115" textAnchor="middle" className="fill-white/70 font-mono text-[8px]">CENTRAL_RECEPTOR</text>
                                    </motion.g>

                                    {/* Connecting Line */}
                                    <motion.path
                                        d="M 170 290 Q 250 250 330 90"
                                        fill="none"
                                        stroke="currentColor"
                                        className="text-primary/30 stroke-[2px] stroke-dashed"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />

                                    <motion.path
                                        d="M 170 290 Q 250 250 330 90"
                                        fill="none"
                                        stroke="currentColor"
                                        className="text-primary stroke-[3px]"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    />

                                    {/* Data Packets */}
                                    <motion.circle r="4" className="fill-primary">
                                        <animateMotion path="M 170 290 Q 250 250 330 90" dur="2s" repeatCount="indefinite" />
                                    </motion.circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TPISR Framework Stage (Scroll Path) */}
                <section ref={containerRef} className="py-32 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-32">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block underline decoration-primary decoration-4 underline-offset-8">Holistic Approach</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
                                The TPISR Implementation Life
                            </h2>
                        </div>

                        <div className="relative">
                            {/* SVG Connection Path */}
                            <div className="absolute left-[2.5rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2 hidden md:block" />
                            <svg className="absolute left-1/2 top-0 bottom-0 w-full -translate-x-1/2 hidden md:block pointer-events-none" style={{ height: '100%' }}>
                                <motion.path
                                    d="M 50% 0 L 50% 100%"
                                    fill="none"
                                    stroke="var(--primary)"
                                    strokeWidth="2"
                                    style={{ pathLength }}
                                />
                            </svg>

                            <div className="space-y-32 relative">
                                {STAGES.map((stage, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="flex-1 text-center md:text-left">
                                            <div className={`inline-flex items-center gap-4 mb-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center group-hover:bg-primary transition-all">
                                                    <stage.icon className="w-8 h-8 text-primary" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-mono font-black text-primary uppercase tracking-widest">{stage.stage}</span>
                                                    <h3 className="text-3xl font-display font-black uppercase">{stage.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-lg text-foreground/60 font-mono mb-8 italic">{stage.desc}</p>
                                            <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                {stage.items.map((item, idx) => (
                                                    <li key={idx} className="px-4 py-2 bg-foreground/5 rounded-xl text-xs font-mono font-bold text-foreground/40 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/20">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="w-full max-w-sm aspect-square bg-blueprint opacity-[0.15] rounded-3xl" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Protection Need Selector (Dynamic Tool) */}
                <section className="py-32 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground">Protection Need Selector</h2>
                            <p className="text-foreground/50 font-mono text-sm max-w-xl mx-auto mt-4 tracking-tight">Dynamically adjust the TPISR technical controls required for your specific asset classification.</p>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                {Object.keys(PROTECTION_LEVELS).map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setActiveLevel(level as any)}
                                        className={`p-8 rounded-3xl border-2 transition-all duration-500 text-left group ${activeLevel === level
                                                ? "bg-primary text-white border-primary shadow-2xl scale-105"
                                                : "bg-background border-foreground/10 hover:border-primary/40 text-foreground"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[10px] font-mono font-black uppercase tracking-widest opacity-60">Level</span>
                                            <div className={`w-2 h-2 rounded-full ${activeLevel === level ? "bg-white" : "bg-primary"} animate-pulse`} />
                                        </div>
                                        <h3 className="text-2xl font-black font-display uppercase leading-none mb-4">
                                            {PROTECTION_LEVELS[level as keyof typeof PROTECTION_LEVELS].title.split(' ')[0]}
                                        </h3>
                                        <p className={`text-[10px] font-mono italic ${activeLevel === level ? "text-white/70" : "text-foreground/40"}`}>
                                            {PROTECTION_LEVELS[level as keyof typeof PROTECTION_LEVELS].needs}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            <div className="lg:col-span-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeLevel}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-foreground/[0.03] border border-foreground/10 h-full rounded-[2.5rem] p-12 overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 p-8">
                                            <ShieldCheck className="w-16 h-16 text-primary/10" />
                                        </div>

                                        <h4 className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em] mb-10 pb-4 border-b border-primary/20 inline-block">Mandatory Controls (AL3)</h4>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            {PROTECTION_LEVELS[activeLevel].controls.map((control, i) => (
                                                <div key={i} className="flex gap-4 group">
                                                    <div className="w-10 h-10 rounded-xl bg-background border border-foreground/10 flex items-center justify-center shrink-0 group-hover:border-primary transition-all">
                                                        <Settings className="w-5 h-5 text-primary group-hover:rotate-90 transition-transform" />
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-bold text-foreground leading-tight tracking-tight block mb-1">{control}</span>
                                                        <span className="text-[10px] font-mono text-foreground/40 uppercase">ENX Requirement R{i + 20}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 p-6 bg-primary/5 border border-dashed border-primary/20 rounded-2xl flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <BarChart3 className="w-6 h-6 text-primary" />
                                                <div>
                                                    <div className="text-xs font-black uppercase text-foreground">Maturity Target</div>
                                                    <div className="text-[10px] font-mono text-primary font-bold">VDA-ISA LEVEL 3 (ESTABLISHED)</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-primary font-display">26+</div>
                                                <div className="text-[8px] font-mono font-bold text-foreground/30 uppercase">AL3 BENCHMARKS</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboard & Role Management */}
                <section className="py-32 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                            <div className="bg-background border border-foreground/10 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-primary/30 transition-all">
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                            <LineChart className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-black rounded uppercase tracking-widest">LIVE_DASHBOARD</div>
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-foreground mb-6">TPISR Dashboard Hub</h3>
                                    <p className="text-lg text-foreground/60 font-mono leading-relaxed mb-8">
                                        A mockup of the <span className="text-foreground font-bold">ISMS Framework Dashboard</span> used for real-time document control and reporting on secure cloud infrastructure.
                                    </p>
                                </div>
                                <div className="p-4 bg-foreground/5 rounded-2xl relative overflow-hidden">
                                    <div className="flex gap-2 mb-4">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="flex-1 h-1 bg-primary/20 rounded-full" />
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-foreground/10 rounded-lg w-3/4" />
                                        <div className="h-4 bg-foreground/10 rounded-lg w-1/2" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary p-12 rounded-[3rem] relative overflow-hidden text-white flex flex-col justify-between group">
                                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                    <Server className="w-40 h-40 -rotate-12" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono font-black text-white/60 uppercase tracking-[0.4em] mb-4">Governance Model</div>
                                    <h3 className="text-3xl font-display font-black mb-6">Delegated <br /> Ownership.</h3>
                                    <p className="text-lg text-white/70 font-mono leading-relaxed mb-8">
                                        We don't just advise—we manage. The ISC Group takes on the technical upkeep of your security controls, acting as your delegated security arm for OEM audits.
                                    </p>
                                </div>
                                <div className="space-y-4 font-mono">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                        <span className="text-xs font-bold uppercase tracking-tighter">Full Technical Outsourcing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                        <span className="text-xs font-bold uppercase tracking-tighter">Audit Presence Guarantee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto rounded-[4rem] p-1.5 bg-gradient-to-br from-primary to-primary-dark">
                        <div className="bg-background rounded-[3.9rem] p-12 md:p-24 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/[0.03]" />
                            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-7xl font-display font-black text-foreground mb-8 tracking-tighter leading-none">
                                    Secure Your <br />
                                    <span className="text-primary italic">Supply Chain Tier.</span>
                                </h2>
                                <p className="text-xl text-foreground/60 mb-12 font-mono max-w-2xl mx-auto leading-relaxed italic">
                                    Don't let rigid OEM mandates block your production. Lead with a hardened TPISR framework that turns security into a sales advantage.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                                    >
                                        REQUEST VENDOR SCOPING
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <button className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-black rounded-xl hover:bg-foreground/5 transition-all text-sm uppercase tracking-tighter">
                                        TPISR READINESS GUIDE
                                    </button>
                                </div>
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
