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
    EyeOff,
    Users,
    Stethoscope,
    GraduationCap,
    Cpu,
    Fingerprint,
    Key
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
        title: "Data Discovery & Mapping",
        pillar: "Phase 1",
        desc: "Defining the ISMS scope and boundaries for PII (Personally Identifiable Information).",
        items: [
            "Data Processing Activity Inventory",
            "Initial GAP Analysis (Legal vs Tech)",
            "Data Flow Visualization",
            "PII Classification & Labeling"
        ],
        icon: Search
    },
    {
        id: "DO",
        title: "Technical Control Implementation",
        pillar: "Phase 2",
        desc: "Implementation of security controls based on Privacy-by-Design principles.",
        items: [
            "End-to-End Encryption (E2EE)",
            "Data Anonymization & Pseudonymization",
            "Identity & Access Management (IAM)",
            "Secure API Transport Layer"
        ],
        icon: Lock
    },
    {
        id: "CHECK",
        title: "Compliance Monitoring",
        pillar: "Phase 3",
        desc: "Utilizing ISMS reporting dashboards for real-time document and event auditing.",
        items: [
            "Continuous Data Access Monitoring",
            "Real-time Security Event Logging",
            "DPA Compliance Verification",
            "Internal Privacy Audits"
        ],
        icon: Activity
    },
    {
        id: "ACT",
        title: "Privacy Improvement",
        pillar: "Phase 4",
        desc: "Developing CAPA procedures to ensure long-term adherence to evolving regulations.",
        items: [
            "Corrective & Preventive Actions (CAPA)",
            "Privacy Impact Assessment (PIA) Updates",
            "Staff Training & Awareness",
            "Regulatory Alignment (e.g. ECJ Rulings)"
        ],
        icon: RefreshCcw
    }
];

const TOMS = [
    { category: "Confidentiality", controls: ["Access Control Systems", "Hard-drive Encryption", "Two-Factor Authentication (2FA)"] },
    { category: "Integrity", controls: ["Digital Signature Protocols", "Data Change Logging", "Checksum Verification"] },
    { category: "Availability", controls: ["Cloud-based Redundancy", "Backup Continuity Plans", "DDoS Mitigation"] },
    { category: "Isolation", controls: ["Separated Environments (Dev/Prod)", "Tenant Isolation", "Virtual Network Segments"] }
];

const DEFINITIONS: Record<string, string> = {
    "Encryption": "The process of converting information or data into a code, especially to prevent unauthorized access.",
    "Anonymization": "Irreversibly stripping identifiers from data so the individual is no longer identifiable.",
    "Pseudonymization": "Processing PII such that it can no longer be attributed to a specific person without additional information.",
    "TOMs": "Technical and Organizational Measures required by GDPR Art. 32 to ensure a level of security appropriate to the risk.",
    "PII": "Personally Identifiable Information: Any data that can be used to identify a specific individual.",
};

function DefinitionHover({ text }: { text: string }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <span
            className="relative cursor-help text-primary font-bold decoration-primary/30 decoration-dashed underline underline-offset-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-foreground text-background text-[10px] font-mono leading-relaxed rounded-xl shadow-2xl z-50 pointer-events-none"
                    >
                        <span className="block text-primary font-black uppercase mb-1 tracking-widest">Definition</span>
                        {DEFINITIONS[text] || "Technical term under GDPR framework."}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-foreground" />
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
}

export default function GDPRPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pillar1X = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const pillar2X = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const pillar3Y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* Technical Background */}
            <div className="fixed inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="relative pt-60 pb-32 px-8 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                    <Fingerprint className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.3em]">
                                        Privacy-by-Design Architecture
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.9]">
                                    GDPR: Engineering <br />
                                    <span className="text-primary italic">Privacy.</span>
                                </h1>

                                <p className="text-xl text-foreground/60 leading-relaxed font-mono max-w-xl mb-12">
                                    We bridge the gap between legal requirements and technical reality. We don't just draft policies; we implement the <DefinitionHover text="TOMs" /> required to protect your partners' Confidentiality and Integrity.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => setCalculatorOpen(true)}
                                        className="px-8 py-4 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                                    >
                                        BOOK PRIVACY GAP ANALYSIS
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="glass-card p-12 rounded-[3.5rem] border-primary/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-blueprint opacity-5" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-12">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse">
                                                <Binary className="w-8 h-8 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-display font-black tracking-tight uppercase">Data Flow Node</h4>
                                                <p className="text-[10px] font-mono text-primary font-bold">ESTABLISHING ENCRYPTED TUNNELS</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            {[
                                                { label: "Request Anonymization", code: "0x892" },
                                                { label: "Tokenization Sequence", code: "ACTIVE" },
                                                { label: "Cross-Border Mapping", code: "ENFORCED" }
                                            ].map((node, i) => (
                                                <div key={i} className="flex justify-between items-center bg-foreground/5 p-4 rounded-xl border border-foreground/5 font-mono">
                                                    <span className="text-xs text-foreground/60">{node.label}</span>
                                                    <span className="text-[10px] font-black text-primary">{node.code}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Privacy Engineering Lifecycle */}
                <section className="py-32 px-8 bg-foreground/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Regulatory Methodology</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
                                The Privacy Engineering Lifecycle
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {PILLARS.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group bg-background border border-foreground/10 p-10 rounded-[2.5rem] hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col"
                                >
                                    <div className="mb-8 flex justify-between items-start">
                                        <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <pillar.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-mono font-black text-primary/40">{pillar.id}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-2 block">{pillar.pillar}</span>
                                        <h3 className="text-xl font-bold mb-4 leading-tight">{pillar.title}</h3>
                                        <p className="text-sm text-foreground/50 font-mono mb-8 leading-relaxed italic">{pillar.desc}</p>
                                        <ul className="space-y-3">
                                            {pillar.items.map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-xs font-mono text-foreground/70">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 opacity-40" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Advanced Technical Features (TOMs Grid) */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8">
                                    Technical & Organizational <br />
                                    <span className="text-primary italic">Measures (TOMs).</span>
                                </h2>
                                <p className="text-lg text-foreground/60 font-mono leading-relaxed mb-8">
                                    Our <DefinitionHover text="Encryption" /> and <DefinitionHover text="Anonymization" /> protocols aren't generic. We implement a specific grid of controls based on your Statement of Applicability.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {TOMS.map((category, i) => (
                                        <div key={i} className="p-6 bg-foreground/[0.03] border border-foreground/5 rounded-2xl">
                                            <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4">{category.category}</h4>
                                            <ul className="space-y-2">
                                                {category.controls.map((control, idx) => (
                                                    <li key={idx} className="text-[10px] font-mono text-foreground/50">— {control}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="bg-primary/5 p-12 rounded-[3.5rem] border border-primary/20 group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Network className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-black uppercase tracking-tight">TPISR for Privacy</h3>
                                    </div>
                                    <p className="text-sm text-foreground/60 font-mono leading-relaxed italic">
                                        Expertise in managing vendor DPAs and conducting technical Risk Assessments for global supply chains.
                                    </p>
                                </div>
                                <div className="bg-foreground/5 p-12 rounded-[3.5rem] border border-foreground/10 group">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                                            <FileSpreadsheet className="w-6 h-6 text-foreground" />
                                        </div>
                                        <h3 className="text-xl font-black uppercase tracking-tight">Audit Readiness</h3>
                                    </div>
                                    <p className="text-sm text-foreground/60 font-mono leading-relaxed italic">
                                        Control of evidence and records methodology. We prove compliance to regulators with verifiable technical artifacts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Expertise (Life Science & Academy) */}
                <section className="py-32 px-8 bg-surface/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-background border border-foreground/10 p-12 rounded-[3rem] relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <Stethoscope className="w-40 h-40 rotate-12" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em] mb-4">Domain Authority</div>
                                    <h3 className="text-3xl font-display font-black text-foreground mb-6">Life Science <br /> Specialization.</h3>
                                    <p className="text-lg text-foreground/50 font-mono leading-relaxed mb-8">
                                        Deep experience in Information Security for the pharmaceutical and healthcare sectors, where <DefinitionHover text="PII" /> protection is most critical.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-primary/10 rounded-lg text-xs font-mono font-bold text-primary">Biotech Compliance</div>
                                    <div className="px-4 py-2 bg-primary/10 rounded-lg text-xs font-mono font-bold text-primary">Healthcare ISMS</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-primary p-12 rounded-[3rem] relative overflow-hidden text-white flex flex-col justify-between group"
                            >
                                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                    <GraduationCap className="w-40 h-40 -rotate-12" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono font-black text-white/60 uppercase tracking-[0.4em] mb-4">Human Layer</div>
                                    <h3 className="text-3xl font-display font-black mb-6">The ISC Academy.</h3>
                                    <p className="text-lg text-white/70 font-mono leading-relaxed mb-8">
                                        We provide continuous training to your employees to reduce privacy risks stemming from human error—the #1 source of data breaches.
                                    </p>
                                </div>
                                <a href="/ academy" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:gap-4 transition-all">
                                    EXPLORE TRAINING PROGRAMS
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Overlapping Pillars Parallax */}
                <section ref={containerRef} className="py-60 px-8 hidden lg:block">
                    <div className="max-w-7xl mx-auto text-center mb-32">
                        <h2 className="text-5xl font-display font-black text-foreground tracking-tighter mb-4">The Convergence Framework</h2>
                        <p className="text-foreground/40 font-mono italic">See how our compliance pillars subtly align in a holistic data sovereignty approach.</p>
                    </div>

                    <div className="relative h-[400px] flex items-center justify-center">
                        <motion.div
                            style={{ x: pillar1X }}
                            className="absolute z-30 p-10 bg-background border-2 border-primary rounded-3xl shadow-2xl w-[300px]"
                        >
                            <div className="text-3xl font-black text-primary mb-2">GDPR</div>
                            <p className="text-[10px] font-mono text-foreground/50">Privacy Engineering Node</p>
                        </motion.div>
                        <motion.div
                            style={{ x: pillar2X }}
                            className="absolute z-20 p-10 bg-background border-2 border-foreground/10 rounded-3xl shadow-xl w-[300px] translate-y-12"
                        >
                            <div className="text-3xl font-black text-foreground/30 mb-2">ISO 27001</div>
                            <p className="text-[10px] font-mono text-foreground/50 text-right">Governing Context</p>
                        </motion.div>
                        <motion.div
                            style={{ y: pillar3Y }}
                            className="absolute z-10 p-10 bg-background border-2 border-foreground/5 rounded-3xl shadow-lg w-[300px] -translate-y-12"
                        >
                            <div className="text-3xl font-black text-foreground/10 mb-2">TISAX</div>
                            <p className="text-[10px] font-mono text-foreground/50">Automotive Excellence</p>
                        </motion.div>
                    </div>
                </section>

                {/* Final CTA Implementation */}
                <section className="py-32 px-8">
                    <div className="max-w-5xl mx-auto bg-foreground text-background rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-7xl font-display font-black mb-8 tracking-tighter leading-none">
                                Real Privacy <br />
                                <span className="text-primary italic">Requires Engineering.</span>
                            </h2>
                            <p className="text-xl text-background/60 mb-12 font-mono max-w-2xl mx-auto leading-relaxed">
                                Don't let your privacy framework be a paper tiger. Implement verifiable, technical controls that build customer trust.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    onClick={() => setCalculatorOpen(true)}
                                    className="px-10 py-5 bg-primary text-white font-black rounded-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3"
                                >
                                    BOOK PRIVACY GAP ANALYSIS
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="px-10 py-5 bg-background border-2 border-primary text-white font-black rounded-xl hover:bg-primary/10 transition-all text-sm uppercase">
                                    DOWNLOAD TOMs TEMPLATE
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
