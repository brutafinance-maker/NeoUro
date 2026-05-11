import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface StatCardProps {
  key?: string | number;
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function StatCard({ label, value, description, icon, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bento-card bento-card-hover p-8",
        className
      )}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</span>
        {icon && <div className="text-bento-accent p-2 bg-teal-50 rounded-xl">{icon}</div>}
      </div>
      <div className="text-4xl font-black text-bento-navy tracking-tighter">{value}</div>
      {description && <p className="mt-3 text-xs text-slate-500 font-medium">{description}</p>}
    </motion.div>
  );
}
