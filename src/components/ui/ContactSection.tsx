"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="py-32 px-8 relative z-10 w-full max-w-7xl mx-auto">
            <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-foreground/10 relative overflow-hidden shadow-2xl">

                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                    {/* Left Column: CTA */}
                    <div className="space-y-8">
                        <motion.h2
                            className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter text-foreground"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Ready to be <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Audit Proof?</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg text-foreground/60 max-w-md"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Don't let compliance hold you back. Partner with ITIS Secure to navigate TISAX, ISO, and TPISR with confidence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-md mb-8">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">
                                    Secure your roadmap
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter text-foreground mb-8">
                                Ready to be <br />
                                <span className="text-primary italic">Audit Proof?</span>
                            </h2>

                            <p className="text-xl text-foreground/60 leading-relaxed font-sans max-w-md mb-12">
                                Partner with ITIS Secure to navigate the complex landscape of automotive and aerospace certifications with zero technical debt.
                            </p>

                            <div className="space-y-6 pt-8 border-t border-foreground/5">
                                {[
                                    "Field-certified lead auditors only",
                                    "Depth in TISAX®, NIS2, and ISO 27001",
                                    "98% first-time certification success"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-sm font-sans font-bold text-foreground/70">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex flex-col justify-center">
                        <div className="p-2 border border-foreground/5 rounded-xl bg-background/50 backdrop-blur-sm">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
