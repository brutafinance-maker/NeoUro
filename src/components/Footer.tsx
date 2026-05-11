import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 bg-white py-6 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        <div className="text-center md:text-left flex items-center gap-2">
          <Shield className="w-3 h-3 text-bento-accent" />
          <span>NeoUro — Saúde Uro-Oncológica</span>
        </div>
        <div className="hidden lg:block opacity-50">
          Acadêmico • TCC 2024 • Região Norte
        </div>
        <div className="flex items-center gap-4">
          <span>v1.0.0-beta</span>
          <span className="text-slate-200">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
