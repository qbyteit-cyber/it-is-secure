import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Risk Management Specialist | BIA & Vendor Risk | ITIS Secure",
    description: "Expert Business Impact Analysis (BIA) and Risk ID Cards implementation. Support procurement with vendor risk assessments and dynamic risk management.",
    keywords: ["Risk Management Specialist", "BIA", "Business Impact Analysis", "Risk ID Card", "Vendor Risk Assessment", "Automotive Risk Management"],
};

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
