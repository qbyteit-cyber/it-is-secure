"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ServicesSection from "@/components/ui/ServicesSection";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { SuccessMatrix } from "@/components/ui/SuccessMatrix";
import { TisaxPipeline } from "@/components/ui/TisaxPipeline";
import { Shield, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function ServicesPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none bg-blueprint" />

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                {/* Hero Section */}
                <section className="pt-60 pb-32 px-8 border-b border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-md mb-8"
                        >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">Service Architecture</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-display font-black text-foreground mb-8 tracking-tighter leading-[0.8] max-w-5xl">
                            Enterprise <br />
                            <span className="text-primary italic">Solutions</span>
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl font-sans leading-relaxed mb-12">
                            Deep technical expertise in TISAX®, ISO 27001, and mission-critical cybersecurity for the automotive and aerospace industries.
                        </p>
                    </div>
                </section>

                {/* 1. Compliance Ecosystem (ServicesSection) */}
                <div className="py-32">
                    <ServicesSection />
                </div>

                {/* 2. Success Matrix Table */}
                <section className="py-40 px-8 bg-surface/30 border-y border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-display font-black text-foreground mb-10 tracking-tighter leading-tight">
                                    Strategic <br />
                                    <span className="text-primary italic">Advantage.</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-sans mb-12 max-w-lg leading-relaxed">
                                    Our engagement model focuses on shifting legacy infrastructure into high-performance security silos. We prioritize data sovereignty and zero-trust protocols.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-6 bg-background border border-foreground/5 rounded-xl">
                                        <Lock className="w-6 h-6 text-primary" />
                                        <div>
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground block">Technical Sovereignty</span>
                                            <p className="text-xs text-foreground/40 font-medium">Full ownership of your security stack.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 bg-background border border-foreground/5 rounded-xl">
                                        <Shield className="w-6 h-6 text-primary" />
                                        <div>
                                            <span className="text-sm font-black uppercase tracking-widest text-foreground block">Audit Readiness</span>
                                            <p className="text-xs text-foreground/40 font-medium">98% first-time certification success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-background border border-foreground/5 rounded-[2.5rem] shadow-2xl">
                                <SuccessMatrix />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. TISAX Pipeline Section */}
                <section className="py-48 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-display font-black text-foreground tracking-tighter">
                                Implementation <span className="text-primary italic">Pipeline.</span>
                            </h2>
                        </div>
                        <TisaxPipeline />
                    </div>
                </section>

                <Footer />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
