"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Database, Lock, FileKey, Shield, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: ShieldCheck,
        title: "TISAX® Assessment",
        desc: "Full preparation for the Trusted Information Security Assessment Exchange (VDA ISA). Essential for VW, BMW, and Mercedes suppliers.",
        category: "Automotive"
    },
    {
        icon: Database,
        title: "TPISR Audit",
        desc: "Compliance services for Third-Party Information Security Requirements (Auto-ISAC). Trusted by GM and Ford supply chains.",
        category: "Third-Party"
    },
    {
        icon: Lock,
        title: "ISO 27001:2022",
        desc: "The gold standard for Information Security Management Systems (ISMS). Build a resilient security framework.",
        category: "Standard"
    },
    {
        icon: FileKey,
        title: "GDPR Compliance",
        desc: "Ensure your data handling meets strict EU privacy regulations. Protect personal data and avoid heavy fines.",
        category: "Privacy"
    },
    {
        icon: Shield,
        title: "ISMS Implementation",
        desc: "Build and maintain a comprehensive Information Security Management System tailored to your organization's needs.",
        category: "Implementation"
    }
];

export default function ServicesPipeline() {
    return (
        <section className="py-32 px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.4em] mb-4 block">Proven Security Architectures</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-foreground tracking-tighter">
                        Solution <span className="text-primary italic">Ecosystem</span>
                    </h2>
                </div>

                <div className="relative py-20 overflow-visible">
                    {/* Main Pipe Line (Horizontal) - Positioned under titles */}
                    <div className="absolute top-[300px] left-0 w-full h-[1px] bg-foreground/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative"
                            >
                                {/* Category Indicator */}
                                <div className="mb-6 h-5">
                                    <span className="text-[10px] font-mono font-bold text-primary/50 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
                                        {service.category}
                                    </span>
                                </div>

                                {/* Visual Node */}
                                <div className="relative mb-12">
                                    <div className="w-16 h-16 rounded-xl bg-background border border-foreground/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,86,210,0.3)] transition-all duration-500">
                                        <service.icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-primary/0 rounded-full group-hover:border-primary/20 animate-ping pointer-events-none" />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-display font-black text-foreground group-hover:text-primary transition-colors leading-tight min-h-[3.5rem] flex items-end">
                                        {service.title}
                                    </h3>
                                    <p className="text-[13px] text-foreground/50 leading-relaxed font-sans">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 flex justify-center"
                >
                    <Link
                        href="/services"
                        className="group flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-sm uppercase tracking-widest"
                    >
                        Explore Security Stack
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
