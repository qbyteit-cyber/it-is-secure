"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Solutions",
            links: [
                { name: "Critical Infrastructure", href: "/services" },
                { name: "Automotive Security", href: "/services/tisax" },
                { name: "Aerospace & Defense", href: "/services" },
                { name: "Industrial Supply Chain", href: "/services" },
                { name: "Implementation Support", href: "/implementation-support" },
            ]
        },
        {
            title: "Compliance Stack",
            links: [
                { name: "ISO 27001", href: "/services/iso-27001" },
                { name: "TISAX®", href: "/services/tisax" },
                { name: "NIS2 / DORA", href: "/services/nis2" },
                { name: "TPISR / GDPR", href: "/services/tpisr" },
                { name: "Standardization", href: "/services" },
            ]
        },
        {
            title: "Expertise",
            links: [
                { name: "Outsourced Roles", href: "/outsourcing-security-roles" },
                { name: "Audit Readiness", href: "/services#audits" },
                { name: "Technical Training", href: "/training-and-courses" },
                { name: "Case Studies", href: "/about" },
                { name: "Whitepapers", href: "/about" },
            ]
        },
        {
            title: "Corporate",
            links: [
                { name: "About ITIS Secure", href: "/about" },
                { name: "Leadership Team", href: "/about" },
                { name: "Global Careers", href: "/about" },
                { name: "Partner Program", href: "/about" },
                { name: "Contact Center", href: "/#contact" },
            ]
        }
    ];

    return (
        <footer className="relative z-10 w-full bg-background border-t border-foreground/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-8 pt-24 pb-12">
                {/* Mega Menu Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/">
                            <img
                                src="/logo-dark-blue.png"
                                alt="ITIS Secure"
                                className="h-10 w-auto mb-8"
                            />
                        </Link>
                        <p className="text-[13px] text-foreground/50 leading-relaxed mb-8 max-w-[200px]">
                            Redefining security for critical infrastructure and high-integrity industries worldwide.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/information-security-consulting-srl/" target="_blank" className="p-2 border border-foreground/10 rounded hover:border-primary/50 transition-colors group">
                                <Linkedin className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                            </a>
                            <a href="#" className="p-2 border border-foreground/10 rounded hover:border-primary/50 transition-colors group">
                                <Twitter className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {footerLinks.map((group, i) => (
                        <div key={i}>
                            <h4 className="text-[11px] font-sans font-black text-foreground/40 uppercase tracking-[0.2em] mb-8">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href={link.href} className="text-[13px] font-bold text-foreground/70 hover:text-primary transition-all flex items-center group/link">
                                            {link.name}
                                            <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-foreground/5 flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p className="text-[11px] font-sans text-foreground/40 tracking-wider uppercase font-bold">
                            © {currentYear} ITIS Secure. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-[11px] font-sans font-bold text-foreground/40 hover:text-primary transition-colors uppercase tracking-widest">Privacy</Link>
                            <a href="#" className="text-[11px] font-sans font-bold text-foreground/40 hover:text-primary transition-colors uppercase tracking-widest">Terms</a>
                            <a href="#" className="text-[11px] font-sans font-bold text-foreground/40 hover:text-primary transition-colors uppercase tracking-widest">Cookies</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex gap-4 items-center">
                            <a href="https://anpc.ro/ce-este-sal/" target="_blank" className="opacity-30 hover:opacity-100 transition-opacity">
                                <img src="/SAL.svg" alt="SAL" className="h-8 w-auto" />
                            </a>
                            <a href="https://consumer-redress.ec.europa.eu/site-relocation_en" target="_blank" className="opacity-30 hover:opacity-100 transition-opacity">
                                <img src="/SOL.svg" alt="SOL" className="h-8 w-auto" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
