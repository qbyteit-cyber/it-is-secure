"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import {
    ClipboardCheck,
    GraduationCap,
    Settings2,
    LifeBuoy,
    CheckCircle2,
    Shield,
    Users,
    Zap,
    TrendingUp,
    ShieldAlert
} from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

const steps = [
    { title: "Strategy Design", desc: "Optimal security roadmap tailored for you." },
    { title: "Standard Implementation", desc: "Deployment of key cyber standards." },
    { title: "Compliance Assurance", desc: "ISO 27001, NIS 2, DORA, TISAX readiness." },
    { title: "Threat Hardening", desc: "Minimizing risks through active protection." },
    { title: "Training & Support", desc: "Empowering your team for the long-term." }
];

const helpCards = [
    {
        number: "01",
        title: "Implementation of Frameworks and Standards",
        icon: Settings2,
        points: [
            "Analysis of current processes, technologies, and systems.",
            "Design of security measures aligned with standard requirements.",
            "Preparation of documentation, internal guidelines, and risk analysis."
        ]
    },
    {
        number: "02",
        title: "Audits and Status Analysis",
        icon: ClipboardCheck,
        points: [
            "Organizational assessment against selected legislative requirements.",
            "Identification of non-compliance and proposal of corrective measures.",
            "Pre-certification audits to prepare for official TISAX/ISO certs."
        ]
    },
    {
        number: "03",
        title: "Training and Education",
        icon: GraduationCap,
        points: [
            "Training for employees and management on cybersecurity basics.",
            "Specialized expert training (ISMS Manager, Auditor, Risk Specialist).",
            "Security awareness programs and cultural transformation."
        ]
    },
    {
        number: "04",
        title: "Support and Long-Term Development",
        icon: LifeBuoy,
        points: [
            "Post-implementation support and regular security consultations.",
            "Monitoring changes in legislation and standard updates.",
            "Regular testing and iterative improvement of security processes."
        ]
    }
];

const frameworks = [
    { name: "ISO 27001", desc: "Implementation of ISMS, preparation for certification, and ongoing compliance." },
    { name: "NIS2", desc: "Measures for regulated entities, including incident management and reporting." },
    { name: "DORA", desc: "ICT risk management frameworks and operational resilience for the financial sector." },
    { name: "TISAX", desc: "Building ISMS to enhance automotive supply chain security and cert readiness." },
    { name: "GDPR", desc: "Ensuring compliance with personal data protection and residency requirements." },
    { name: "OTHERS", desc: "Support for HIPAA, CSA STAR, CMMC 2.0, PCI DSS, NIST CSF, and SOC 2." }
];

const benefits = [
    { icon: CheckCircle2, text: "Compliance with legislative requirements and international standards." },
    { icon: Zap, text: "Strengthened resilience against evolving cyber threats." },
    { icon: ShieldAlert, text: "Minimization of cyber incident risks and potential impact." },
    { icon: Shield, text: "Protection of brand reputation and increased customer trust." },
    { icon: TrendingUp, text: "Competitive advantage through proven security and certification." }
];

export default function ImplementationSupport() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="px-8 pt-60 pb-32">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1"
                        >
                            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                                <span className="text-sm font-mono text-primary uppercase tracking-[0.3em]">
                                    Service Delivery
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-tight">
                                Implementation <br />
                                <span className="text-primary italic">and Support.</span>
                            </h1>
                            <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                                Effective deployment of cybersecurity frameworks. We bridge the gap between compliance requirements and operational reality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex-1 w-full"
                        >
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden glass-card border-none relative">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                                    alt="Expert Team"
                                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <div className="flex -space-x-4 mb-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-surface flex items-center justify-center text-xs font-bold text-primary">
                                                EX
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm font-bold text-white uppercase tracking-widest">ITIS Secure Leadership</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-24 px-8 border-y border-foreground/5 bg-foreground/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 -translate-y-1/2 hidden lg:block" />
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative z-10 text-center lg:text-left"
                                    >
                                        <div className="w-4 h-4 rounded-full bg-primary mx-auto lg:mx-0 mb-8 border-4 border-background ring-4 ring-primary/20 scale-125 lg:scale-100" />
                                        <h4 className="font-display font-black text-sm mb-2 uppercase tracking-wider">{step.title}</h4>
                                        <p className="text-xs text-foreground/50 leading-relaxed">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* How we help grid */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-24 text-center lg:text-left">
                            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6">How do we help you?</h2>
                            <p className="text-foreground/50 max-w-2xl">Bridging the gap between complex regulations and your business processes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {helpCards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className={`p-16 rounded-[3rem] glass-card border-none bg-foreground/[0.02] relative overflow-hidden group ${i % 3 === 0 ? "md:aspect-square" : ""}`}
                                >
                                    <span className="absolute top-10 right-16 text-8xl font-display font-black text-primary/10 group-hover:text-primary transition-colors duration-500">{card.number}</span>
                                    <card.icon className="w-12 h-12 text-primary mb-12" />
                                    <h3 className="text-3xl font-display font-black mb-8 leading-tight">{card.title}</h3>
                                    <ul className="space-y-4">
                                        {card.points.map((p, pi) => (
                                            <li key={pi} className="flex items-start gap-4 text-sm text-foreground/60 leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Focus Areas Section */}
                <section className="py-32 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-display font-black mb-16 text-center">Areas we focus on:</h2>
                        <div className="space-y-4">
                            {frameworks.map((f, i) => (
                                <motion.div
                                    key={i}
                                    className="p-8 glass-card border-none hover:bg-primary/5 transition-all flex flex-col md:flex-row items-center justify-between gap-8 group"
                                >
                                    <span className="text-4xl font-display font-black tracking-tight group-hover:text-primary transition-colors">{f.name}</span>
                                    <p className="text-foreground/50 text-sm max-w-xl text-center md:text-right">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="glass-card p-16 rounded-[4rem] border-none bg-primary/5 relative overflow-hidden">
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                            <h2 className="text-4xl font-display font-black mb-16 text-center">Benefits for your organization:</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                                {benefits.map((b, i) => (
                                    <div key={i} className="text-center group">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <b.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <p className="text-xs font-medium text-foreground/60 leading-relaxed px-4">{b.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-8 pb-48">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-6xl font-display font-black mb-12">Ready to transform your security posture?</h2>
                        <button
                            onClick={() => setCalculatorOpen(true)}
                            className="px-12 py-6 bg-primary text-white font-black rounded-3xl text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30"
                        >
                            SCHEDULE A CONSULTATION
                        </button>
                    </div>
                </section>

                <Footer />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
