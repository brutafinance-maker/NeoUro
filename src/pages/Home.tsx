import { motion } from 'motion/react';
import { ArrowRight, BookOpen, BarChart3, Database, Info, Map, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      {/* Bento Landing Grid */}
      <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 gap-6 md:min-h-[800px]">
        
        {/* Left Bento: Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 md:row-span-3 bento-card p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <BarChart3 className="w-24 md:w-32 h-24 md:h-32 text-bento-forest" />
          </div>
          <div className="relative z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-black bg-teal-50 text-teal-700 border border-teal-100 mb-4 md:mb-6 uppercase tracking-widest">
              Saúde & Tecnologia
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-bento-navy leading-[1.1] mb-6 tracking-tighter">
              Análise Epidemiológica de <br className="hidden md:block"/>
              <span className="text-bento-accent">Neoplasias Urológicas</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Plataforma educacional e científica focada no perfil de saúde das 
              populações indígenas na Região Norte do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/educacao"
                className="w-full sm:w-auto px-8 py-4 bg-bento-forest text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                <span>Conhecer Plataforma</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/dados"
                className="w-full sm:w-auto px-8 py-4 border-2 border-bento-navy text-bento-navy rounded-full font-bold hover:bg-teal-50 transition-all flex items-center justify-center text-center"
              >
                Ver Dados Epidemiológicos
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Bento: Education Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 md:row-span-3 bg-teal-50 rounded-[--radius-bento] p-6 md:p-8 border border-teal-100 flex flex-col shadow-sm"
        >
          <div className="w-12 h-12 bg-bento-navy rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-black text-bento-navy mb-4 tracking-tight">Educação em Saúde</h3>
          <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
            Entenda o que são neoplasias urológicas e a importância do diagnóstico precoce em linguagem acessível.
          </p>
          <div className="mt-auto space-y-3">
            {[
              "Próstata e Bexiga",
              "Rim e Testículo",
              "Prevenção e Cuidados"
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-teal-800 bg-white/60 p-3 rounded-xl">
                 <div className="w-2 h-2 rounded-full bg-teal-500" />
                 {item}
              </div>
            ))}
            <Link to="/educacao" className="block pt-4 text-xs md:text-sm font-black text-bento-navy underline decoration-teal-400 decoration-2 underline-offset-8 uppercase tracking-widest hover:text-bento-accent transition-colors">
              Explorar conteúdos
            </Link>
          </div>
        </motion.div>

        {/* Bottom Left Bento: Stats Snapshot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 md:row-span-3 bento-card p-6 md:p-8 flex flex-col"
        >
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 md:mb-8">Pillars of NeoUro</h4>
          <div className="flex-1 flex flex-col justify-around gap-6">
            <div>
              <p className="text-3xl md:text-4xl font-black text-bento-navy mb-1 tracking-tighter">1.240+</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pacientes Registrados</p>
            </div>
            <div className="md:pt-8 md:border-t md:border-slate-100">
              <p className="text-xl md:text-2xl font-black text-bento-forest mb-1">Amazonas</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estado com Maior Incidência</p>
            </div>
            <div className="md:pt-8 md:border-t md:border-slate-100">
              <p className="text-xl md:text-2xl font-black text-amber-600 mb-1">45—65 anos</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Faixa Etária Alvo</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Center Bento: Region Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-6 md:row-span-3 bento-card p-6 md:p-8 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-sm font-black text-bento-navy flex items-center gap-2 uppercase tracking-tight">
              <Map className="w-4 h-4 text-bento-accent" />
              Cobertura Regional
            </h4>
            <span className="text-[10px] font-black bg-slate-50 px-2 py-1 rounded text-slate-400 uppercase tracking-widest border border-slate-100">Região Norte</span>
          </div>
          <div className="flex-1 flex items-end justify-between gap-2 md:gap-3 pb-2 min-h-[150px]">
            {[
              { label: "AC", height: "40%", bg: "bg-teal-100" },
              { label: "AM", height: "95%", bg: "bg-bento-navy" },
              { label: "AP", height: "25%", bg: "bg-teal-200" },
              { label: "PA", height: "75%", bg: "bg-bento-forest" },
              { label: "RO", height: "45%", bg: "bg-teal-400" },
              { label: "RR", height: "20%", bg: "bg-teal-200" },
              { label: "TO", height: "30%", bg: "bg-teal-300" },
            ].map((bar) => (
              <div key={bar.label} className="flex flex-col items-center gap-3 w-full group/bar">
                <div 
                  className={`w-full ${bar.bg} rounded-t-xl md:rounded-t-2xl transition-all duration-500 group-hover/bar:brightness-110 shadow-sm`} 
                  style={{ height: bar.height }} 
                />
                <span className="text-[9px] font-black text-slate-400 tracking-tighter">{bar.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Right Bento: Integration Status */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 md:row-span-3 bg-slate-900 rounded-[--radius-bento] p-6 md:p-8 text-white flex flex-col relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-20" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="px-2 py-1 bg-amber-500 text-[10px] font-black uppercase rounded text-slate-900 tracking-widest">Live Status</div>
          </div>
          <h3 className="text-2xl font-black mb-3 tracking-tighter relative z-10">Arquitetura Integrada</h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-8 relative z-10 font-medium">
            Preparada para sincronização via Firebase Realtime Database para coleta e processamento.
          </p>
          <Link 
            to="/inserir-dados"
            className="mt-auto block w-full py-4 bg-slate-800 border border-slate-700/50 rounded-2xl text-[10px] font-black hover:bg-slate-700 transition-all text-center uppercase tracking-[0.2em] relative z-10"
          >
            Módulo Pesquisador
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
