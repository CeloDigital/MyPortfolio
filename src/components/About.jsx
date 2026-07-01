import React from 'react';
import { Code2, Cpu, GraduationCap, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Code2 size={20} />, title: "Desenvolvimento Web", desc: "Aplicações escaláveis utilizando React.js, Tailwind CSS e APIs robustas no ecossistema Java com Spring Boot." },
    { icon: <Cpu size={20} />, title: "Infraestrutura & Hardware", desc: "Montagem avançada de setups, otimização crítica de desempenho e arquitetura básica na nuvem (AWS)." }
  ];

  return (
    <section id="sobre" className="py-24 px-6 bg-slate-950 border-t border-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* Coluna 1: Sobre Mim */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-mono font-medium">
            <Terminal size={14} /> Quem sou eu
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre Mim</h2>
          <div className="text-slate-400 space-y-4 leading-relaxed text-sm md:text-base">
            <p>
              Olá! Sou Marcelo, graduado em Análise e Desenvolvimento de Sistemas. Minha trajetória na tecnologia une a paixão pelo desenvolvimento de software à engenharia de hardware e infraestrutura.
            </p>
            <p>
              Trabalho criando soluções web modernas de alto impacto visual e desempenho ágil, além de atuar ativamente na otimização física de computadores. Busco constantemente evoluir e aplicar as melhores práticas do mercado, integrando código limpo à arquitetura eficiente.
            </p>
          </div>
          <div className="pt-2 flex items-center gap-3 text-sm text-slate-400 font-mono">
            <GraduationCap size={18} className="text-emerald-400" />
            <span>Formado em ADS • Foco em Full Stack & Cloud</span>
          </div>
        </div>

        {/* Coluna 2: O Que Eu Faço */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-full text-xs font-mono font-medium">
            <Code2 size={14} /> Minhas competências
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">O Que Eu Faço</h2>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Divido minha atuação profissional em duas vertentes técnicas complementares para entregar valor de ponta a ponta:
          </p>
          
          <div className="space-y-4 pt-2">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-5 bg-slate-900/50 border border-slate-900 rounded-xl space-y-2">
                <div className="text-emerald-400 flex items-center gap-2 font-semibold">
                  {skill.icon}
                  <h3 className="text-slate-100 text-base">{skill.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}