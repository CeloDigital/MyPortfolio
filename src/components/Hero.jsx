import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import fotoPerfil from '../assets/perfil.jpeg';

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const socials = [
    { 
      label: "WhatsApp", 
      url: "https://wa.me/5581981752171", 
      color: "hover:text-green-400 hover:border-green-400/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      )
    },
    { 
      label: "Instagram", 
      url: "https://www.instagram.com/celo_silver/", 
      color: "hover:text-pink-500 hover:border-pink-500/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/marcelo-silvestre-2ba34b231/", 
      color: "hover:text-blue-500 hover:border-blue-500/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    { 
      label: "GitHub", 
      url: "https://github.com/CeloDigital", 
      color: "hover:text-purple-400 hover:border-purple-400/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )
    },
    { 
      label: "E-mail", 
      url: "mailto:celosilvestre@hotmail.com", 
      color: "hover:text-emerald-400 hover:border-emerald-400/30",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="inicio" 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 px-6 bg-slate-950 text-slate-100 min-h-screen flex items-center overflow-hidden group/hero"
    >
      <div 
        className="absolute w-125 h-125 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 opacity-0 group-hover/hero:opacity-100 hidden md:block"
        style={{
          left: `${coords.x - 250}px`,
          top: `${coords.y - 250}px`,
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Lado Esquerdo */}
        <div className="space-y-6">
          <span className="inline-block text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 px-3 py-1 rounded-full animate-pulse">
            Desenvolvedor Web & Suporte de TI
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Soluções digitais e <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">alta performance</span> para sua máquina.
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            Desenvolvo landing pages modernas com foco em conversão e ofereço manutenção especializada de hardware para garantir a velocidade que você precisa.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contato" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 hover:scale-105 hover:shadow-emerald-500/30 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-emerald-500/20">
              Solicitar Orçamento <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 hover:bg-slate-900/50 px-6 py-3 rounded-lg transition-all">
              Ver Projetos
            </a>
          </div>

          <div className="pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Conecte-se comigo:</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex items-center justify-center p-3 bg-slate-900 border border-slate-800 text-slate-400 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-md ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Lado Direito (Perfil Circular Tech) */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center group/avatar">
            
            {/* Aspectro 1: Glow Difuso de Fundo */}
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-20 group-hover/avatar:opacity-40 transition-opacity duration-700" />
            
            {/* Aspectro 2: Anel Tecnológico Externo Intermitente */}
            <div className="absolute w-[105%] h-[105%] border border-dashed border-emerald-500/30 rounded-full animate-[spin_60s_linear_infinite]" />
            
            {/* Aspectro 3: Anel Tecnológico Médio Orbitante */}
            <div className="absolute w-[102%] h-[102%] border-2 border-slate-800 border-t-emerald-500 border-b-teal-500 rounded-full animate-[spin_15s_linear_infinite] opacity-60 group-hover/avatar:opacity-100 transition-opacity duration-500" />
            
            {/* Aspectro 4: Aura Cibernética Interna de Pulso */}
            <div className="absolute inset-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full animate-ping opacity-10 pointer-events-none group-hover/avatar:duration-1000" />

            {/* Container da Imagem Circular */}
            <div className="relative w-full h-full rounded-full p-2.5 bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden z-10">
              <div className="w-full h-full rounded-full overflow-hidden border border-emerald-500/20 relative">
                {/* Linhas de Scanner Estilo HUD Tech ao passar o mouse */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/5 to-transparent w-full h-1/2 -top-1/2 group-hover/avatar:animate-[bounce_3s_ease-in-out_infinite] pointer-events-none z-20" />
                
                <img 
                  src={fotoPerfil} 
                  alt="Foto de Marcelo" 
                  className="w-full h-full object-cover rounded-full scale-[1.02] group-hover/avatar:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}