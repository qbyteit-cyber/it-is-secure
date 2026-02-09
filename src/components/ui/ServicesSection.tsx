"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Database, FileKey, Lock, Shield, ArrowRight, Zap, Globe, Cpu } from "lucide-react";
import { useState } from "react";

const tabs = [
    {
        id: "supply-chain",
        name: "Supply Chain",
        title: "Software Supply Chain Security",
        description: "Protect your critical environment from file-borne threats on any media type and enforce compliance all the way through to the endpoint.",
        icon: Database,
    },
    {
        id: "file-security",
        name: "File Security",
        title: "Advanced File Type Protection",
        description: "Deep CDR and Multiscanning technologies to ensure every file entering your network is 100% sanitized and safe.",
        icon: FileKey,
    },
    {
        id: "diodes",
        name: "Diodes & Gateways",
        title: "Cross-Domain Data Security",
        description: "Hardware-based unidirectional data transfer for ultra-secure networks and critical infrastructure protection.",
        icon: ShieldCheck,
    },
    {
        id: "access",
        name: "Access Control",
        title: "Zero Trust Network Access",
        description: "Continuous identity verification and device posture assessment for secure access to critical applications.",
        icon: Lock,
    },
    {
        id: "email",
        name: "Email Security",
        title: "Mission-Critical Email Defense",
        description: "Advanced threat prevention for email communications in high-security and air-gapped environments.",
        icon: Globe,
    }
];

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-32 px-8 bg-surface/30 border-y border-foreground/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-12 tracking-tighter">
                        Cybersecurity for <span className="text-primary italic">Critical</span> Environments
                    </h2>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-background border border-foreground/5 rounded-2xl w-fit mx-auto shadow-xl overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                                    ${activeTab === tab.id
                                        ? 'bg-primary text-white shadow-[0_5px_15px_rgba(0,86,210,0.3)]'
                                        : 'text-foreground/40 hover:text-foreground/60'
                                    }
                                `}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {tabs.map((tab) => tab.id === activeTab && (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left bg-background p-12 lg:p-20 rounded-[3.5rem] border border-foreground/5 shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative Background for Card */}
                            <div className="absolute inset-0 bg-opswat-grid opacity-[0.03] pointer-events-none" />

                            <div className="relative aspect-video bg-surface rounded-2xl overflow-hidden border border-foreground/5 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <tab.icon className="w-24 h-24 text-primary/10 group-hover:text-primary/20 group-hover:scale-110 transition-all duration-500" />
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 italic">Security Status</p>
                                    <p className="text-sm font-bold">Node Integrity Verified: 100%</p>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">ITIS Secure Core Protection</span>
                                    <h3 className="text-3xl md:text-5xl font-display font-black mb-8 tracking-tighter leading-[0.9]">
                                        {tab.title}
                                    </h3>
                                    <p className="text-lg text-foreground/60 mb-12 font-medium leading-relaxed max-w-xl">
                                        {tab.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="px-8 py-4 bg-opswat-gradient text-white font-black rounded-lg text-xs uppercase tracking-widest hover:shadow-lg transition-all flex items-center gap-3 w-fit">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </button>
                                        <button className="px-8 py-4 border border-foreground/10 text-foreground font-black rounded-lg text-xs uppercase tracking-widest hover:bg-foreground/5 transition-all w-fit">
                                            View Documentation
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
