import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TISAX® Implementation & AL3 Certification | Automotive Security | ITIS Secure",
    description: "Expert TISAX® implementation for automotive suppliers. Specialized in AL3 high protection needs, VDA ISA assessments, and prototype protection. Trusted by global automotive OEMs.",
    keywords: ["TISAX", "VDA ISA", "Automotive Security", "AL3 Certification", "Assessment Level 3", "Prototype Protection", "VDA Excellence", "Automotive Compliance"],
    openGraph: {
        title: "TISAX® Implementation: Trusted Automotive Security | ITIS Secure",
        description: "Achieve TISAX® AL3 labels with our specialized VDA excellence framework and 26+ successful implementations.",
        type: "website",
    }
};

export default function TISAXLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
