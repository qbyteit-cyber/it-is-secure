import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TPISR Compliance & Implementation | Automotive Supply Chain Security | ITIS Secure",
    description: "Professional implementation of TPISR for automotive vendors. Expert guidance for AL2/AL3 compliance and OEM security audits. Hardening the Global Automotive Supply Chain.",
    keywords: ["TPISR", "Third-Party Information Security Requirements", "Automotive Security", "Supply Chain Security", "OEM Compliance", "AL3 Certification", "VDA ISA", "Vendor Risk Assessment"],
    openGraph: {
        title: "TPISR: Hardening the Automotive Supply Chain | ITIS Secure",
        description: "Hardening the global automotive supply chain against digital threats. Specialized in AL3 implementation and OEM audit readiness.",
        type: "website",
    }
};

export default function TPISRLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
