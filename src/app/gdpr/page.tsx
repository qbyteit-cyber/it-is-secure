"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, BadgeCheck, Scale, Database } from "lucide-react";

export default function GDPRPolicy() {
    return (
        <main className="min-h-screen bg-blueprint py-24 px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm uppercase tracking-widest">Back to Dashboard</span>
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <BadgeCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tighter">
                            GDPR <span className="text-primary">Policy</span>
                        </h1>
                    </div>
                </div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-[2rem] p-8 md:p-12 border border-foreground/10 shadow-2xl space-y-12"
                >
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Scale className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">1. Transparency Declaration</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            In accordance with Articles 13 and 14 of the GDPR, Information Security Consulting SRL (itis-secure) provides this transparency declaration. We operate under the principle of Data Minimization (Art. 5(1)(c)), ensuring only mission-critical data is processed.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Database className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">2. Contact Form Processing Protocols</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            Submissions through our portal are processed under the following parameters:
                        </p>
                        <div className="bg-foreground/[0.02] p-6 rounded-xl border border-foreground/5 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-[10px] font-mono text-primary uppercase mb-1">Legal Basis</h4>
                                    <p className="text-sm text-foreground/60">Art. 6(1)(b) - Pre-contractual steps</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-mono text-primary uppercase mb-1">Retention</h4>
                                    <p className="text-sm text-foreground/60">Audit duration + statutory requirement</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <ShieldAlert className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">3. Technical Protections (Art. 32)</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            Our Digital Fortress ensures high-integrity protection for your data profile:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "Mandatory TLS 1.3 Encryption",
                                "HSTS Protocol Enforcement",
                                "Audited Non-Repudiation Logs",
                                "Exclusive EEA-Based Processing"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-foreground/60 font-mono items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Footer / Signature */}
                    <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-end gap-6 text-foreground/40 font-mono text-[10px]">
                        <div className="space-y-1">
                            <p>LAST AUDIT DATE: 04 FEBRUARY 2026</p>
                            <p>TISAX® PILLAR: DATA PROTECTION (AL3)</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-primary mb-2 underline underline-offset-4">SENIOR LEAD AUDITOR | COMPLIANCE HUB</p>
                            <p>ID: GDPR-SPEC-7A48</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
