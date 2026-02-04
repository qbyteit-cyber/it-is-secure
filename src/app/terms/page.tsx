"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Scale, Lock, FileText, Gavel } from "lucide-react";

export default function TermsOfService() {
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
                            <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tighter">
                            Terms of <span className="text-primary">Service</span>
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
                            <Gavel className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">1. Technical Terms Acceptance</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            By accessing this portal, the visitor acknowledges and agrees to these Terms of Service. These terms are engineered to reflect the technical rigor and non-repudiation standards required by the German automotive industry.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Lock className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">2. Security Conduct (Non-Circumvention)</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            To maintain the &quot;Digital Fortress&quot; integrity, the following actions are strictly prohibited:
                        </p>
                        <div className="grid gap-4">
                            {[
                                "Bypassing security headers (CSP, HSTS) or protocol enforcement (TLS 1.3).",
                                "Unauthorized penetration probing without prior Auditor-to-Auditor authorization.",
                                "Interference with real-time compliance telemetry or counters."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/5 items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-sm font-mono text-foreground/60">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <FileText className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">3. Liability & Performance</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            itis-secure provides ISMS advisory. Final certification is at the sole discretion of the accredited audit provider. itis-secure shall not be held liable for indirect damages or breach resulting from client failure to maintain hardened technical environments.
                        </p>
                    </section>

                    {/* Footer / Signature */}
                    <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-end gap-6 text-foreground/40 font-mono text-[10px]">
                        <div className="space-y-1">
                            <p>LAST AUDIT DATE: 04 FEBRUARY 2026</p>
                            <p>REFERENCE: ISO 27001 / VDA ISA 6.0</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-primary mb-2 underline underline-offset-4">SENIOR LEAD AUDITOR | LEGAL TEAM</p>
                            <p>HASH: TOS-7A48-SECURE</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
