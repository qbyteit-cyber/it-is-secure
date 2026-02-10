import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Privacy Officer (DPO) | GDPR & Privacy by Design | ITIS Secure",
    description: "Expert DPO services for LifeScience and Automotive sectors. GDPR compliance through Technical and Organizational Measures (TOMs) and Privacy by Design.",
    keywords: ["Data Privacy Officer", "DPO as a Service", "GDPR Compliance", "Privacy by Design", "LifeScience Privacy", "Automotive GDPR", "TOMs"],
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
