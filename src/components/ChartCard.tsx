import React from 'react';
import { motion } from 'motion/react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, subtitle, children }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bento-card p-8"
    >
      <div className="mb-8">
        <h3 className="text-xl font-bold text-bento-navy tracking-tight">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500 mt-1 font-medium">{subtitle}</p>}
      </div>
      <div className="h-[300px] w-full mt-4">
        {children}
      </div>
    </motion.div>
  );
}
