import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, AreaChart, Area 
} from 'recharts';
import { 
  dataByState, 
  dataByNeoplasmType, 
  dataByAgeGroup, 
  dataByGender, 
  mockSummaryData 
} from '../data/mockEpidemiologicalData';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import { Info, Map, AlertCircle } from 'lucide-react';

const COLORS = ['#0d9488', '#10b981', '#06b6d4', '#4f46e5', '#8b5cf6'];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-10 md:space-y-16">
      <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-bento-navy leading-tight tracking-tighter">
            Painel <span className="text-bento-accent">Epidemiológico</span>
          </h1>
          <p className="text-slate-500 mt-3 flex items-center gap-2 text-sm font-medium">
            <Info className="w-4 h-4 text-teal-500" />
            Dados fictícios demonstrativos para validação do projeto tecnológico.
          </p>
        </div>
        <div className="bg-amber-50/50 border border-amber-200/50 p-6 rounded-3xl flex items-start gap-4 backdrop-blur-sm lg:max-w-md">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed font-medium">
            <strong className="text-amber-800 uppercase tracking-widest block mb-1">Aviso de Protótipo</strong> 
            Os valores exibidos nesta página são simulados. 
            A integração com o banco de dados oficial está prevista para a próxima etapa.
          </p>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {mockSummaryData.map((stat) => (
          <StatCard 
            key={stat.label} 
            label={stat.label} 
            value={stat.value} 
            className="border-b-4 border-b-bento-accent"
          />
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <ChartCard title="Casos por Estado" subtitle="Distribuição regional na Região Norte">
          <div className="h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataByState} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="state" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px' }}
                />
                <Bar dataKey="cases" fill="#004D4D" radius={[6, 6, 0, 0]} barSize={window.innerWidth < 768 ? 20 : 40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Tipos de Neoplasias" subtitle="Distribuição por diagnóstico urológico">
          <div className="h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataByNeoplasmType}
                  cx="50%"
                  cy="50%"
                  innerRadius={window.innerWidth < 768 ? 40 : 60}
                  outerRadius={window.innerWidth < 768 ? 60 : 80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataByNeoplasmType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Perfil por Faixa Etária" subtitle="Frequência acumulada de casos">
          <div className="h-[250px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataByAgeGroup} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="age" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#1B4332" fillOpacity={0.1} fill="#1B4332" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Distribuição por Sexo" subtitle="Composição da amostra">
          <div className="flex flex-col h-full justify-center space-y-6 md:space-y-8 py-4">
            <div className="flex justify-around items-end gap-2 px-4">
              {dataByGender.map((item, idx) => (
                <div key={item.name} className="flex flex-col items-center w-full max-w-[100px]">
                  <div className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">{item.name}</div>
                  <div 
                    className="w-full bg-bento-navy rounded-t-2xl transition-all duration-1000 shadow-sm" 
                    style={{ height: `${(item.value / 1248) * (window.innerWidth < 768 ? 120 : 180)}px` }} 
                  />
                  <div className="text-lg md:text-2xl font-black text-bento-navy mt-4 tracking-tighter">{item.value}</div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest bg-slate-50 py-2 rounded-xl border border-slate-100">
              Predomínio histórico no sexo masculino
            </p>
          </div>
        </ChartCard>
      </div>

      {/* Geography Info */}
      <section className="bento-card p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <div className="p-10 md:p-12 bg-teal-50 rounded-[--radius-bento] shadow-inner shrink-0">
          <Map className="w-16 md:w-24 h-16 md:h-24 text-bento-navy" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-bento-navy mb-6 tracking-tighter">Análise Geográfica</h2>
          <p className="text-slate-600 leading-relaxed mb-8 text-base md:text-lg font-medium">
            A Região Norte apresenta desafios geográficos significativos, com grandes distâncias entre as aldeias e os centros de tratamento especializado. Esta ferramenta visa evidenciar quais estados necessitam de maior reforço em infraestrutura oncológica para as populações indígenas.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
            {['AM', 'PA', 'AC', 'RR', 'RO', 'AP', 'TO'].map(state => (
              <span key={state} className="px-5 py-2.5 bg-bento-forest text-teal-50 text-[10px] font-black rounded-xl uppercase tracking-widest shadow-lg shadow-teal-900/10">
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
