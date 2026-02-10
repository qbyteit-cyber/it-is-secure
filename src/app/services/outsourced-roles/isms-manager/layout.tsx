import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISMS Manager | Information Security Management | ITIS Secure",
    description: "Expert ISMS Management and maintenance. We handle the technical upkeep of your security documentation and framework based on ISO 27001 standards.",
    keywords: ["ISMS Manager", "Information Security Management System", "ISO 27001 ISMS", "Security Documentation", "Compliance Upkeep"],
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
