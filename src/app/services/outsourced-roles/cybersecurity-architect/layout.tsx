import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outsourced Cybersecurity Architect | Zero Trust Infrastructure | ITIS Secure",
    description: "Secure infrastructure design and Zero Trust implementation by expert Cristian Cerna. Maintain ISMS framework Dashboards on internal or cloud infrastructure.",
    keywords: ["Cybersecurity Architect", "Zero Trust", "Infrastructure Security", "ISMS Dashboard", "Cristian Cerna", "TISAX Architect"],
};

export default function ArchitectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
