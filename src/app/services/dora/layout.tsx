import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DORA Compliance Implementation | Financial Operational Resilience | ITIS Secure",
    description: "Expert ICT risk management and third-party risk services for DORA (EU 2022/2554) readiness. Engineering resilience for the financial sector.",
    keywords: ["DORA", "Digital Operational Resilience Act", "Financial Sector Security", "ICT Risk Management", "Third-Party Risk", "TPISR", "EU 2022/2554", "Financial Compliance"],
    openGraph: {
        title: "DORA: Engineering Operational Resilience for Finance | ITIS Secure",
        description: "Beyond static compliance. We implement robust technical frameworks for DORA (EU 2022/2554) readiness.",
        type: "website",
    }
};

export default function DORALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
