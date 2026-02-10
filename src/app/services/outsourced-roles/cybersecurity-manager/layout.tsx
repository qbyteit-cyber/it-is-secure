import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CISO as a Service | Cybersecurity Manager Outsourcing | ITIS Secure",
    description: "Strategic leadership and risk mitigation by Iulian Bozdoghina. Management reviews, risk treatment plans, and continuous security improvement.",
    keywords: ["CISO as a Service", "Cybersecurity Manager", "Iulian Bozdoghina", "Risk Treatment Plan", "Management Review", "IT Infrastructure Management"],
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
