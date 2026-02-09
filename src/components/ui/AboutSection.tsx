"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Target } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Security-First Approach",
        description: "Over a decade of experience in automotive cybersecurity and information security management systems.",
    },
    {
        icon: Award,
        title: "Certified Expertise",
        description: "ISO 27001 Lead Auditors and TISAX-accredited assessors with deep automotive industry knowledge.",
    },
    {
        icon: Users,
        title: "Trusted Partner",
        description: "Supporting 10+ automotive suppliers and Tier-1 manufacturers across Europe with compliance excellence.",
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "100% first-time pass rate on TISAX assessments through our proven methodology and hands-on guidance.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-8 relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 rounded-md mb-8">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-[10px] font-sans font-black text-primary uppercase tracking-[0.2em]">
                            About ITIS Secure
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-display font-black text-foreground mb-8 tracking-tighter leading-tight">
                        Securing the <br />
                        <span className="text-primary italic">Global Engine</span>
                    </h2>

                    <p className="text-xl text-foreground/70 leading-relaxed mb-8 font-sans">
                        ITIS Secure is a high-authority cybersecurity firm dedicated to technical sovereignty in the automotive, aerospace, and defense sectors.
                    </p>

                    <p className="text-foreground/50 leading-relaxed mb-12 font-sans text-sm">
                        Founded by field engineers and lead auditors, we provide zero-compromise security assessments and compliance engineering. Our mission is to transform complex regulatory requirements into audit-proof technical infrastructure.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-12 pt-8 border-t border-foreground/5">
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">15+</div>
                            <div className="text-[10px] font-sans font-black text-foreground/40 uppercase tracking-widest">Years Depth</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">250+</div>
                            <div className="text-[10px] font-sans font-black text-foreground/40 uppercase tracking-widest">Audits Done</div>
                        </div>
                        <div>
                            <div className="text-4xl font-display font-black text-primary mb-2">100%</div>
                            <div className="text-[10px] font-sans font-black text-foreground/40 uppercase tracking-widest">Acceptance</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Features Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface border border-foreground/5 p-8 rounded-xl group hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="w-14 h-14 rounded-lg bg-primary/5 mb-8 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-display font-black text-foreground mb-4 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-foreground/50 leading-relaxed font-sans">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
