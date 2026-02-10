"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { SunDim, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors group overflow-hidden h-10 w-10 flex items-center justify-center"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -20, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <SunDim className="w-5 h-5 text-primary" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -20, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-5 h-5 text-secondary" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
