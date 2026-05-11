import { motion } from 'motion/react';
import { User, School, Calendar, ShieldCheck } from 'lucide-react';

export default function About() {
  const info = [
    { label: 'Autor', value: '[Nome do Autor]', icon: <User /> },
    { label: 'Orientador', value: '[Nome do Orientador]', icon: <User /> },
    { label: 'Instituição', value: '[Nome da Instituição]', icon: <School /> },
    { label: 'Curso', value: '[Nome do Curso]', icon: <School /> },
    { label: 'Ano', value: '2026', icon: <Calendar /> },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-10 md:pt-20">
      <div className="bg-white rounded-[--radius-bento] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="bg-bento-navy p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent opacity-50" />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-teal-600/20 rounded-[--radius-bento] border-2 border-teal-500/30 flex items-center justify-center mx-auto mb-8 shadow-inner relative z-10"
          >
            <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-teal-400" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter relative z-10">Neo<span className="text-bento-accent">Uro</span></h1>
          <p className="text-teal-100/60 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs relative z-10">Plataforma Tecnológica Educacional</p>
        </div>

        <div className="p-6 md:p-12 space-y-12">
          <section>
            <h2 className="text-xl md:text-2xl font-black text-bento-navy mb-6 pb-4 border-b border-slate-50 tracking-tight uppercase tracking-widest text-xs">Sobre o Projeto</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
              A NeoUro nasce como resposta à necessidade de democratizar o acesso à informação epidemiológica sobre neoplasias urológicas na Região Norte. 
              Focada no público indígena, a plataforma integra conceitos didáticos com visualização de dados moderna, servindo como subproduto tecnológico 
              de um rigoroso trabalho de pesquisa acadêmica.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-5 p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-bento-accent hover:bg-white transition-all duration-300">
                <div className="p-3 bg-white rounded-xl text-bento-accent shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">
                    {item.label}
                  </span>
                  <span className="block text-bento-navy font-black text-sm md:text-base tracking-tight">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="pt-8 text-center text-slate-300 text-[10px] font-black uppercase tracking-widest">
            <p>Desenvolvido com React + Vite + Tailwind CSS</p>
            <p className="mt-2 text-bento-accent">Versão 1.0.0 (Beta)</p>
          </section>
        </div>
      </div>
    </div>
  );
}
