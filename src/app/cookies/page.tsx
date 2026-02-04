"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldAlert, EyeOff, Activity } from "lucide-react";

export default function CookiePolicy() {
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
                            <Cookie className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tighter">
                            Cookie <span className="text-primary">Policy</span>
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
                            <EyeOff className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">1. Zero-Tracking Architecture</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            At itis-secure, we treat &quot;Convenience Tracking&quot; as a potential vulnerability. Our portal is architected to prioritize user privacy and data sovereignty over marketing analytics. We do not use advertising or third-party behavioral trackers.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <ShieldAlert className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">2. Strictly Necessary Cookies</h2>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-foreground/5 bg-foreground/[0.02]">
                            <table className="w-full text-left text-sm font-mono">
                                <thead className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Cookie Name</th>
                                        <th className="px-6 py-4">Purpose</th>
                                        <th className="px-6 py-4">Retention</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-foreground/5 text-foreground/60">
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-foreground">__secure_session</td>
                                        <td className="px-6 py-4">Session integrity & CSRF protection</td>
                                        <td className="px-6 py-4">Session</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold text-foreground">compliance_ack</td>
                                        <td className="px-6 py-4">Records standards acknowledgment</td>
                                        <td className="px-6 py-4">365 Days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-primary mb-2">
                            <Activity className="w-5 h-5" />
                            <h2 className="font-mono text-sm uppercase tracking-[0.3em] font-bold">3. Technical Logs (ISO 27001)</h2>
                        </div>
                        <p className="text-foreground/70 leading-relaxed font-mono text-sm">
                            In accordance with Control A.8.15 (Logging), servers record standard technical telemetry (IP address, user agent, timestamps) for a maximum of 30 days for security forensic purposes only.
                        </p>
                    </section>

                    {/* Footer / Signature */}
                    <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-end gap-6 text-foreground/40 font-mono text-[10px]">
                        <div className="space-y-1">
                            <p>LAST AUDIT DATE: 04 FEBRUARY 2026</p>
                            <p>COMPLIANCE: GDPR / EPRIVACY</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-primary mb-2 underline underline-offset-4">SENIOR LEAD AUDITOR | IT OPS</p>
                            <p>ID: COOKIE-POLICY-AL3</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
