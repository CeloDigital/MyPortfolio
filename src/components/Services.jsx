import React from 'react';
import { Monitor, Cpu, ShieldCheck, Layout } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Landing Pages de Alto Impacto",
      desc: "Criação de páginas institucionais e portfólios otimizados para SEO, totalmente responsivos e focados na conversão de novos clientes.",
      featured: true
    },
    {
      icon: <Cpu size={32} />,
      title: "Montagem & Upgrade de PCs",
      desc: "Seleção estratégica de hardware compatível para o seu orçamento. Montagem limpa (cable management) focada em refrigeração e estética.",
      featured: true
    },
    {
      icon: <Monitor size={32} />,
      title: "Formatação & Otimização",
      desc: "Instalação limpa de sistemas operacionais, backup seguro de dados e remoção de gargalos de desempenho.",
      featured: false
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Limpeza Preventiva Profunda",
      desc: "Desmontagem completa, higienização de componentes e troca de pasta térmica de alta condutividade.",
      featured: false
    }
  ];

  return (
    <section id="servicos" className="py-24 px-6 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços Prestados</h2>
          <p className="text-slate-400">Entrego máxima eficiência e qualidade técnica tanto no desenvolvimento de software quanto no hardware.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 justify-center">
          {services.map((s, idx) => (
            <div 
              key={idx} 
              className={`group p-6 bg-slate-900/40 border border-slate-900 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/2 ${
                s.featured 
                  ? 'md:col-span-6' 
                  : 'md:col-span-6 lg:col-span-6'
              }`}
            >
              <div className="mb-4 text-slate-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 inline-block">
                {s.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-emerald-300 transition-colors duration-300">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}