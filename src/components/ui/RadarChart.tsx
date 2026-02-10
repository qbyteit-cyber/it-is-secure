"use client";

import { motion } from "framer-motion";

interface RadarChartProps {
    data: {
        label: string;
        value: number; // 0 to 5
        fullValue: number;
    }[];
    size?: number;
}

export function RadarChart({ data, size = 400 }: RadarChartProps) {
    const padding = 60;
    const center = size / 2;
    const radius = (size - padding * 2) / 2;
    const levels = 5;

    // Helper to calculate coordinates
    const getX = (value: number, angle: number) =>
        center + radius * (value / 5) * Math.cos(angle - Math.PI / 2);
    const getY = (value: number, angle: number) =>
        center + radius * (value / 5) * Math.sin(angle - Math.PI / 2);

    const points = data.map((d, i) => {
        const angle = (i / data.length) * 2 * Math.PI;
        return `${getX(d.value, angle)},${getY(d.value, angle)}`;
    }).join(" ");

    const targetPoints = data.map((d, i) => {
        const angle = (i / data.length) * 2 * Math.PI;
        return `${getX(d.fullValue, angle)},${getY(d.fullValue, angle)}`;
    }).join(" ");

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
            {/* Background Spoke Lines & Circles */}
            {[...Array(levels)].map((_, i) => (
                <circle
                    key={i}
                    cx={center}
                    cy={center}
                    r={(radius * (i + 1)) / levels}
                    className="fill-none stroke-foreground/10 stroke-[1px]"
                />
            ))}

            {data.map((_, i) => {
                const angle = (i / data.length) * 2 * Math.PI;
                return (
                    <line
                        key={i}
                        x1={center}
                        y1={center}
                        x2={getX(5, angle)}
                        y2={getY(5, angle)}
                        className="stroke-foreground/10 stroke-[1px]"
                    />
                );
            })}

            {/* Labels */}
            {data.map((d, i) => {
                const angle = (i / data.length) * 2 * Math.PI;
                const labelX = getX(5.8, angle);
                const labelY = getY(5.8, angle);
                return (
                    <text
                        key={i}
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-foreground/40 text-[10px] font-mono font-bold uppercase tracking-tighter"
                    >
                        {d.label}
                    </text>
                );
            })}

            {/* Target Area (Goal) */}
            <motion.polygon
                points={targetPoints}
                className="fill-primary/5 stroke-primary/30 stroke-[2px] stroke-dashed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Actual Value Area */}
            <motion.polygon
                points={points}
                className="fill-primary/30 stroke-primary stroke-[3px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ transformOrigin: `${center}px ${center}px` }}
            />

            {/* Data Points */}
            {data.map((d, i) => {
                const angle = (i / data.length) * 2 * Math.PI;
                return (
                    <motion.circle
                        key={i}
                        cx={getX(d.value, angle)}
                        cy={getY(d.value, angle)}
                        r={4}
                        className="fill-white stroke-primary stroke-[2px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                    />
                );
            })}
        </svg>
    );
}
