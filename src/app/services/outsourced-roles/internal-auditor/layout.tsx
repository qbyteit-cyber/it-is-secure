import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Internal Auditor | ISO 27001 & TISAX Internal Audits | ITIS Secure",
    description: "Expert pre-certification verification by Ernest Aduwenye. Specialized lead auditor for TISAX and ISO 27001 internal audit programs.",
    keywords: ["Internal Auditor", "ISO 27001 Audit", "TISAX Internal Audit", "Ernest Aduwenye", "Audit Reporting", "Non-conformity Management"],
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
