import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Save, Database, Lock, AlertCircle } from 'lucide-react';

export default function DataInput() {
  const [formData, setFormData] = useState({
    ano: '',
    estado: '',
    sexo: '',
    faixaEtaria: '',
    tipoNeoplasia: '',
    numeroCasos: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Funcionalidade de inserção preparada. Integração com banco de dados em desenvolvimento.');
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 pt-10 md:pt-20 space-y-12 md:space-y-16">
      <header className="text-center space-y-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black border border-teal-100 uppercase tracking-[0.2em]"
        >
          Área do Pesquisador
        </motion.div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-bento-navy tracking-tighter">
          Gestão de <span className="text-bento-accent">Dados</span>
        </h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Módulo preparado para a coleta e consolidação de registros epidemiológicos. 
          Acesso restrito para futuras atualizações.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 space-y-6 md:space-y-8"
        >
          <div className="bento-card p-6 md:p-10 relative overflow-hidden bento-card-hover">
            <div className="absolute top-0 right-0 p-6">
              <Lock className="w-5 h-5 text-slate-200" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-bento-navy mb-8 md:mb-10 flex items-center gap-3">
              <Save className="w-6 h-6 text-bento-accent" />
              Inserção de Registros
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Ano de Referência</label>
                <input 
                  type="number" 
                  placeholder="Ex: 2024"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-bento-accent outline-none transition-all font-bold text-sm"
                  onChange={(e) => setFormData({...formData, ano: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Estado (UF)</label>
                <select 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-bento-accent outline-none transition-all font-bold text-sm"
                  onChange={(e) => setFormData({...formData, estado: e.target.value})}
                >
                  <option value="">Selecione...</option>
                  {['AC', 'AM', 'AP', 'PA', 'RO', 'RR', 'TO'].map(uf => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Tipo de Neoplasia</label>
                <select 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-bento-accent outline-none transition-all font-bold text-sm"
                  onChange={(e) => setFormData({...formData, tipoNeoplasia: e.target.value})}
                >
                  <option value="">Selecione...</option>
                  {['Próstata', 'Bexiga', 'Rim', 'Pênis', 'Testículo'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Número de Casos</label>
                <input 
                  type="number" 
                  placeholder="0"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-teal-500/10 focus:border-bento-accent outline-none transition-all font-bold text-sm"
                  onChange={(e) => setFormData({...formData, numeroCasos: e.target.value})}
                />
              </div>

              <div className="md:col-span-2 pt-4 md:pt-6">
                <button 
                  type="submit"
                  className="w-full py-5 bg-bento-forest text-white font-black rounded-2xl hover:bg-teal-900 active:scale-95 transition-all shadow-xl shadow-teal-900/10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px]"
                >
                   <Database className="w-5 h-5" />
                   Consolidar Registro
                </button>
              </div>
            </form>
          </div>

          <div className="bg-teal-50/50 p-6 rounded-3xl border border-teal-100 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-teal-600 shrink-0" />
            <div className="text-xs text-teal-900 leading-relaxed font-medium">
              <strong className="text-teal-700 uppercase tracking-widest block mb-1">Atenção</strong>
              Esta interface é um protótipo funcional. O envio de dados será processado localmente nesta fase de demonstração.
            </div>
          </div>
        </motion.div>

        {/* Upload Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 h-full"
        >
          <div className="bento-card p-6 md:p-8 h-full flex flex-col items-center justify-center text-center space-y-8 min-h-[400px]">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center shadow-inner">
              <Upload className="w-10 h-10 text-slate-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-bento-navy tracking-tight uppercase tracking-widest text-xs">Importação em Lote</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] mx-auto">
                Arraste arquivos .csv ou .xlsx para processamento.
              </p>
            </div>
            <div className="w-full border-2 border-dashed border-slate-100 bg-slate-50/50 rounded-3xl py-12 px-6 hover:border-bento-accent transition-all cursor-pointer group">
               <span className="text-[10px] font-black text-slate-400 group-hover:text-bento-accent uppercase tracking-widest duration-300">
                 Selecionar Arquivo
               </span>
            </div>
            <p className="text-[9px] text-slate-300 uppercase font-black tracking-[0.3em]">
              Feature em desenvolvimento
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
