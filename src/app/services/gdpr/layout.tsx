import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GDPR Technical Implementation | Privacy Engineering & TOMs | ITIS Secure",
    description: "Professional GDPR compliance through technical controls, data mapping, and ISMS integration for 100% audit readiness. Implement robust Technical and Organizational Measures (TOMs).",
    keywords: ["GDPR", "Data Privacy Engineering", "TOMs", "Technical and Organizational Measures", "Privacy-by-Design", "Data Mapping", "DPA", "Privacy Compliance", "EU GDPR"],
    openGraph: {
        title: "GDPR & Privacy Engineering: Beyond Compliance | ITIS Secure",
        description: "We bridge the gap between legal requirements and technical reality with robust Privacy-by-Design architecture.",
        type: "website",
    }
};

export default function GDPRLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
