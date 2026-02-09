"use client";

import { motion } from "framer-motion";
import { TerminalPulse } from "./TerminalPulse";
import { CompliancePulse } from "./CompliancePulse";
import { TechnicalCounter } from "./TechnicalCounter";
import LogoMarquee from "./LogoMarquee";
import { Shield, Lock, Activity, Cpu, ChevronRight, ArrowRight, Zap, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface MissionCriticalLandingProps {
    onOpenCalculator?: () => void;
}

export default function MissionCriticalLanding({ onOpenCalculator }: MissionCriticalLandingProps) {
    return (
        <div className="relative min-h-screen bg-background overflow-hidden">
            {/* Background Pattern - OPSWAT Diagonal Grid */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-opswat-grid opacity-20 z-0" />

            {/* Hero Section */}
            <section className="relative pt-60 pb-32 px-8 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        <div className="flex-1 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-md mb-8"
                            >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">
                                    Advanced Cybersecurity Threat Prevention
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.85] max-w-2xl">
                                Protecting the <br />
                                World's <span className="text-primary italic">Critical</span> <br />
                                Infrastructure
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-foreground/70 max-w-xl mb-12 font-sans leading-relaxed"
                            >
                                The ITIS Secure cybersecurity platform gives public and private sector organizations the critical advantage in protecting their most complex environments.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button
                                    onClick={onOpenCalculator}
                                    className="px-10 py-5 bg-opswat-gradient text-white font-black rounded-lg hover:shadow-[0_10px_30px_rgba(0,86,210,0.3)] transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest"
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        </div>

                        {/* Overlapping Feature Cards */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative mt-12 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="p-8 opswat-glass rounded-[2rem] flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-black mb-2 tracking-tight">Comprehensive IT/OT/Cloud Platform</h3>
                                </div>
                                <Link href="/services" className="text-[10px] font-black text-primary inline-flex items-center gap-2 uppercase tracking-widest mt-8 group-hover:gap-3 transition-all">
                                    Explore the Platform <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="p-8 bg-foreground text-background rounded-[2rem] flex flex-col justify-between group overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-20">
                                    <Zap className="w-24 h-24" />
                                </div>
                                <div>
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-display font-black mb-2 tracking-tight">Purpose-Built Technologies</h3>
                                </div>
                                <Link href="/services" className="text-[10px] font-black text-white inline-flex items-center gap-2 uppercase tracking-widest mt-8 group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Banner Section */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-foreground text-background rounded-[2.5rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
                        {/* Decorative Background Mesh */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-blueprint scale-150 rotate-12" />

                        <div className="flex-1 relative z-10">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">Threat Detection</span>
                            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tighter leading-none">
                                Predictive <br />
                                <span className="italic">Auth</span> AI
                            </h2>
                            <p className="text-lg text-background/60 max-w-md mb-12 font-medium">
                                Built for Prediction, Engineered for Speed. Detect and prevent malicious behavior before execution with our next-generation static AI audit engine.
                            </p>
                            <button className="px-10 py-5 bg-primary text-white font-black rounded-lg text-xs uppercase tracking-widest">
                                Learn More
                            </button>
                        </div>

                        <div className="flex-1 relative aspect-square w-full max-w-md lg:max-w-none">
                            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                            {/* Representative AI Visualization */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-spin-slow flex items-center justify-center">
                                    <div className="w-48 h-48 border border-primary/50 rounded-full animate-reverse-spin flex items-center justify-center">
                                        <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cybersecurity for Critical Environments */}
            <section className="py-32 px-8 bg-surface/30">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-16 tracking-tighter">
                        Cybersecurity for <span className="text-primary italic">Critical</span> Environments
                    </h2>

                    {/* Tab Navigation Placeholder (Simplified for Redesign) */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 bg-background border border-foreground/5 rounded-2xl w-fit mx-auto shadow-xl">
                        {["Supply Chain", "File Security", "Diodes & Gateways", "Access Control"].map((tab, i) => (
                            <button key={i} className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'text-foreground/40 hover:text-foreground/60'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left bg-background p-12 rounded-[3.5rem] border border-foreground/5 shadow-2xl">
                        <div className="relative aspect-video bg-surface rounded-2xl overflow-hidden border border-foreground/5 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Shield className="w-24 h-24 text-primary/10 group-hover:scale-110 transition-transform" />
                            </div>
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block">ITIS Secure Protection</span>
                            <h3 className="text-3xl md:text-4xl font-display font-black mb-6 tracking-tight leading-tight">
                                Protect Your Critical Environment From Supply-Chain Threats Across Every Vector
                            </h3>
                            <button className="px-8 py-4 border-2 border-primary/20 text-primary font-black rounded-lg text-xs uppercase tracking-widest hover:bg-primary/5 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Grid Section */}
            <section className="py-40 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">The <span className="text-primary italic">ITIS Secure</span> Platform</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="md:col-span-1 p-10 bg-surface border border-foreground/5 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-primary/40 transition-all">
                            <span className="text-5xl font-display font-black text-primary mb-4">2.4k+</span>
                            <span className="text-xs font-black uppercase tracking-widest text-foreground/50">Global Customers</span>
                        </div>
                        <div className="md:col-span-2 p-12 bg-primary text-white rounded-[2.5rem] flex flex-col justify-center items-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-opswat-grid opacity-10" />
                            <h3 className="text-4xl font-display font-black mb-4 relative z-10 leading-none">From Compliance to <br /> Resilience</h3>
                            <p className="text-sm font-medium opacity-80 relative z-10">And Everything In Between</p>
                        </div>
                        <div className="md:col-span-1 p-10 bg-surface border border-foreground/5 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-primary/40 transition-all">
                            <Globe className="w-12 h-12 text-primary mb-6" />
                            <span className="text-4xl font-display font-black mb-2">100+</span>
                            <span className="text-xs font-black uppercase tracking-widest text-foreground/50">Tech Partners</span>
                        </div>

                        {/* Row 2 */}
                        <div className="md:col-span-1 lg:col-span-1 p-10 bg-foreground text-background rounded-[2.5rem] flex flex-col justify-center items-center text-center group">
                            <span className="text-4xl font-display font-black mb-2 uppercase">100+</span>
                            <span className="text-xs font-black uppercase tracking-widest opacity-50">Audit Members</span>
                        </div>
                        <div className="md:col-span-1 lg:col-span-1 p-10 bg-surface border border-foreground/5 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-primary/40 transition-all">
                            <span className="text-xl font-display font-black mb-2">High-Integrity Nodes</span>
                            <span className="text-xs font-black uppercase tracking-widest text-foreground/50">21 Domains Covered</span>
                        </div>
                        <div className="md:col-span-2 p-10 bg-[#0D1117] text-white rounded-[2.5rem] flex items-center gap-8 group">
                            <div className="flex-1">
                                <span className="text-4xl font-display font-black mb-2 block tracking-tighter">268k+</span>
                                <span className="text-xs font-black uppercase tracking-widest opacity-50">Certified Professionals</span>
                            </div>
                            <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center">
                                <Users className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-20 bg-surface/50 border-y border-foreground/5 relative z-10 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-10 text-[10px] font-sans font-black text-foreground/40 uppercase tracking-[0.4em]">
                        Trusted by industry-leading providers worldwide
                    </div>
                    <LogoMarquee />
                </div>
            </section>
        </div>
    );
}

function Users({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

function Globe({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
