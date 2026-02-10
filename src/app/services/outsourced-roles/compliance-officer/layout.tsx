import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compliance Officer | Regulatory Mapping & Monitoring | ITIS Secure",
    description: "Expert compliance monitoring for NIS2, DORA, and GDPR. We translate complex legal mandates into actionable technical requirements for your engineers.",
    keywords: ["Compliance Officer", "Regulatory Monitoring", "NIS2 Compliance", "DORA Implementation", "Legal Tech Mapping", "Regulatory Alignment"],
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
