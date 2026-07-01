import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Buscador de CEP Profissional",
      tech: ["React.js", "Tailwind CSS", "Axios", "ViaCEP API"],
      desc: "Aplicação web para consulta instantânea de endereços com validações de entrada e tratamento de erros de API.",
      link: "#",
      github: "#"
    },
    {
      title: "Portfólio & Landing Page Pessoal",
      tech: ["React.js", "Tailwind CSS", "Lucide Icons"],
      desc: "Esta exata página, projetada com arquitetura modular de componentes e práticas modernas de UX/UI.",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meu Portfólio</h2>
          <p className="text-slate-400">Projetos em destaque desenvolvidos para demonstrar domínio técnico e boas práticas.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono bg-slate-800 text-emerald-400 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
              </div>
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  {/* SVG Nativo do GitHub - À prova de falhas de build */}
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  Código
                </a>
                <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                  <ExternalLink size={16} /> Deploy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}