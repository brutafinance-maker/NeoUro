import { motion } from 'motion/react';
import { Book, Search, Users, Database } from 'lucide-react';

export default function Methodology() {
  const points = [
    {
      title: 'Tipo de Estudo',
      icon: <Search className="w-6 h-6" />,
      desc: 'Trata-se de um estudo epidemiológico, descritivo, retrospectivo com abordagem quantitativa.'
    },
    {
      title: 'Fontes de Dados',
      icon: <Database className="w-6 h-6" />,
      desc: 'Os dados são extraídos de bases públicas oficiais como DATASUS (SIH/SUS, SIM) e sistemas de controle de saúde indígena.'
    },
    {
      title: 'População de Interesse',
      icon: <Users className="w-6 h-6" />,
      desc: 'Populações autodeclaradas indígenas residentes nos estados da Região Norte do Brasil (AM, PA, AC, RR, RO, AP, TO).'
    },
    {
      title: 'Variáveis Analisadas',
      icon: <Book className="w-6 h-6" />,
      desc: 'Ano do registro, Unidade Federativa, faixa etária, sexo, tipo de neoplasia (urológica) e frequência bruta de casos.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-10 md:pt-20 space-y-12 md:space-y-20">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-bento-navy tracking-tighter">
          Metodologia <span className="text-bento-accent">Científica</span>
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Detalhes sobre o rigor acadêmico e as etapas de processamento 
          dos dados epidemiológicos apresentados nesta plataforma.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-20">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bento-card bento-card-hover"
          >
            <div className="p-3 md:p-4 bg-teal-50 text-bento-navy rounded-2xl w-fit mb-6 shadow-inner">
              {p.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-bento-navy mb-3 tracking-tight">{p.title}</h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 text-white p-6 md:p-12 rounded-[--radius-bento] relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Database className="w-32 h-32 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-teal-400 tracking-tighter uppercase tracking-widest text-xs">Fluxo de Dados</h2>
        <div className="space-y-8 md:space-y-12">
          <div className="flex gap-4 md:gap-8 items-start relative z-10">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-teal-600 flex items-center justify-center font-black text-lg md:text-xl shadow-lg shadow-teal-500/20">1</div>
              <div className="w-0.5 h-12 md:h-20 bg-slate-800 mt-2"></div>
            </div>
            <div className="pt-2 md:pt-3">
              <h4 className="font-black text-lg md:text-xl mb-2 tracking-tight">Aquisição</h4>
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">Coleta sistemática nas bases de dados do Governo Federal através de filtros específicos para saúde indígena.</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-start relative z-10">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-teal-600 flex items-center justify-center font-black text-lg md:text-xl shadow-lg shadow-teal-500/20">2</div>
              <div className="w-0.5 h-12 md:h-20 bg-slate-800 mt-2"></div>
            </div>
            <div className="pt-2 md:pt-3">
              <h4 className="font-black text-lg md:text-xl mb-2 tracking-tight">Sanitização</h4>
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">Limpeza e organização dos registros para remover inconsistências ou duplicatas.</p>
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-start relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-teal-600 flex items-center justify-center font-black text-lg md:text-xl shadow-lg shadow-teal-500/20 shrink-0">3</div>
            <div className="pt-2 md:pt-3">
              <h4 className="font-black text-lg md:text-xl mb-2 tracking-tight">Publicação</h4>
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">Atualização do dashboard NeoUro com as métricas já processadas.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
