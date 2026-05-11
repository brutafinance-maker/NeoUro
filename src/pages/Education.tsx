import { motion } from 'motion/react';
import { Info, AlertCircle, Stethoscope, HeartPulse } from 'lucide-react';

export default function Education() {
  const sections = [
    {
      id: 'o-que-sao',
      title: 'O que são Neoplasias?',
      icon: <Info className="w-6 h-6" />,
      content: 'Neoplasia é o termo médico utilizado para descrever o crescimento excessivo e desordenado de células no organismo. Esse processo resulta na formação de uma massa, popularmente chamada de tumor.',
      items: [
        { title: 'Tumores Benignos', text: 'Crescem lentamente, possuem limites bem definidos e não se espalham para outros órgãos. Geralmente não representam risco imediato à vida.' },
        { title: 'Tumores Malignos (Câncer)', text: 'Células que se multiplicam de forma agressiva, podem invadir tecidos próximos e circular pelo sangue para outras partes do corpo (metástase).' }
      ]
    },
    {
      id: 'tipos',
      title: 'Principais Neoplasias Urológicas',
      icon: <Stethoscope className="w-6 h-6" />,
      content: 'Afetam os órgãos do trato urinário e o sistema reprodutor masculino. Conheça as mais comuns:',
      subItems: [
        { name: 'Próstata', description: 'O tipo mais comum entre homens, geralmente de crescimento lento.' },
        { name: 'Bexiga', description: 'Muitas vezes associado ao tabagismo, o sangue na urina é um sinal comum.' },
        { name: 'Rim', description: 'Tumores que afetam o filtro do corpo humano.' },
        { name: 'Pênis', description: 'Relacionado à falta de higiene e infecções por HPV em muitos casos.' },
        { name: 'Testículo', description: 'Mais comum em homens jovens entre 15 e 35 anos.' }
      ]
    },
    {
      id: 'sinais',
      title: 'Sinais e Sintomas Gerais',
      icon: <AlertCircle className="w-6 h-6" />,
      content: 'Fique atento a alterações no seu corpo. Alguns sintomas podem ser discretos no início:',
      list: [
        'Presença de sangue na urina (Hematúria)',
        'Dificuldade ou dor ao urinar',
        'Mudança no jato urinário',
        'Inchaços ou caroços indolores nos testículos',
        'Feridas no pênis que não cicatrizam',
        'Dores lombares persistentes'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-10 md:pt-20 space-y-12 md:space-y-20">
      <header className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-bento-navy tracking-tighter"
        >
          Educação em <span className="text-bento-accent">Saúde</span>
        </motion.h1>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Entenda de forma simples os principais conceitos e cuidados com as neoplasias urológicas.
        </p>
      </header>

      <div className="space-y-8 md:space-y-12">
        {sections.map((section, idx) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bento-card p-6 md:p-10 bento-card-hover"
          >
            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
              <div className="p-3 md:p-4 bg-teal-50 text-bento-navy rounded-2xl shadow-inner shrink-0">
                {section.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-bento-navy tracking-tight leading-tight">{section.title}</h2>
            </div>
            
            <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed font-medium">
              {section.content}
            </p>

            {section.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.items.map(item => (
                  <div key={item.title} className="p-5 md:p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
                    <h3 className="font-black text-bento-navy mb-2 tracking-tight uppercase text-xs">{item.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            )}

            {section.subItems && (
              <div className="space-y-3">
                {section.subItems.map(item => (
                   <div key={item.name} className="flex items-start gap-4 p-4 hover:bg-slate-50/50 rounded-2xl transition-all border border-transparent hover:border-slate-100">
                     <div className="w-2 h-2 mt-2 rounded-full bg-bento-accent shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.3)]" />
                     <div>
                       <strong className="text-bento-navy block md:inline tracking-tight mb-1 md:mb-0 md:mr-2">{item.name}:</strong>
                       <span className="text-sm text-slate-500 font-medium">{item.description}</span>
                     </div>
                   </div>
                ))}
              </div>
            )}

            {section.list && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.list.map(item => (
                  <li key={item} className="flex items-center gap-4 p-4 bg-teal-50/30 rounded-2xl text-bento-navy text-xs md:text-sm font-black uppercase tracking-tight border border-teal-100/50">
                    <HeartPulse className="w-4 h-4 text-bento-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-bento-forest rounded-[--radius-bento] p-8 md:p-12 text-white text-center relative overflow-hidden shadow-xl shadow-teal-900/20"
      >
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter leading-tight">A prevenção é o melhor caminho</h2>
          <p className="text-teal-50/80 mb-10 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            O diagnóstico precoce aumenta significativamente as chances de sucesso no tratamento. 
            Ao notar qualquer alteração persistente, procure uma unidade de saúde.
          </p>
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-bento-forest font-black rounded-2xl hover:bg-teal-50 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs">
            Localizar Unidade (SUS)
          </button>
        </div>
      </motion.div>
    </div>
  );
}
