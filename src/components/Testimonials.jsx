import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sérgio Pinheiro",
      role: "Empresário",
      text: "O Marcelo entregou uma landing page que triplicou meus leads em um mês. O código é limpo e a execução foi impecável."
    },
    {
      name: "Ana Luiza Costa",
      role: "Designer Gráfica",
      text: "Meu PC estava superaquecendo e travando. Ele fez uma limpeza completa e cable management. O computador parece novo!"
    },
    {
      name: "Dr. Roberto Martins",
      role: "Cliente Satisfeito",
      text: "Fui muito bem atendido na montagem da minha nova estação de trabalho. Pontual, organizado e muito técnico."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Carrossel Automático: Passa de slide a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="depoimentos" className="py-24 px-6 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem meus clientes</h2>
          <p className="text-slate-400">Confiança técnica é a base para resultados reais.</p>
        </div>

        {/* Container do Carrossel */}
        <div className="relative bg-slate-900 border border-slate-800/80 rounded-2xl p-8 md:p-12 min-h-62.5 flex flex-col justify-between shadow-xl">
          <Quote size={64} className="absolute top-6 right-8 text-emerald-500/10 pointer-events-none" />
          
          {/* Área dos Depoimentos com Animação de Fade */}
          <div className="relative overflow-hidden grow flex items-center">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className={`w-full transition-all duration-700 ease-in-out transform ${
                  idx === activeIndex
                    ? 'opacity-100 translate-x-0 relative z-10'
                    : 'opacity-0 absolute inset-0 -translate-x-4 pointer-events-none'
                }`}
              >
                <p className="text-lg md:text-xl text-slate-200 italic leading-relaxed mb-8">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-emerald-400 text-base shadow-inner">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-100">{r.name}</h4>
                    <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Navegação (Setas) */}
          <div className="absolute bottom-6 right-8 flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 active:scale-95 transition-all shadow-md cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 active:scale-95 transition-all shadow-md cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicadores (Pontinhos) */}
          <div className="absolute bottom-8 left-8 flex gap-1.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-6 bg-emerald-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}