"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import ContactSection from "@/components/ui/ContactSection";
import AboutSection from "@/components/ui/AboutSection";
import Footer from "@/components/ui/Footer";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";

import MissionCriticalLanding from "@/components/ui/MissionCriticalLanding";
import Navbar from "@/components/ui/Navbar";
import ServicesSection from "@/components/ui/ServicesSection";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
  ssr: false,
});

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <main id="main-content" className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
      {/* 3D Background - Dynamic Theming */}
      <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <SecurityMesh />
      </div>

      <div className="relative z-10">
        <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

        <MissionCriticalLanding onOpenCalculator={() => setCalculatorOpen(true)} />

        <div id="services">
          <ServicesSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <Footer />
      </div>

      {/* Readiness Calculator Modal */}
      <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </main>
  );
}
