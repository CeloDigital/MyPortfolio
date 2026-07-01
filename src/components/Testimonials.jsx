import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Fui muito bem atendido na montagem da minha nova estação de trabalho. Pontual, organizado e muito técnico.",
      name: "Dr. Roberto Martins",
      role: "Cliente Satisfeito",
      initial: "D"
    },
    {
      text: "Excelente desenvolvedor. Entregou a landing page antes do prazo combinado e com uma otimização impecável.",
      name: "Amanda Silva",
      role: "Empreendedora",
      initial: "A"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-24 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem meus clientes</h2>
        <p className="text-slate-400 mb-12 text-sm md:text-base">Confiança técnica é a base para resultados reais.</p>
        
        <div className="relative bg-slate-900/40 border border-slate-900 p-6 md:p-10 rounded-2xl text-left shadow-xl overflow-hidden min-h-[280px] md:min-h-[240px] flex flex-col justify-between">
          <Quote className="absolute right-6 top-6 text-emerald-500/10 w-24 h-24 pointer-events-none" />
          
          <p className="text-base md:text-lg text-slate-300 italic leading-relaxed mb-8 relative z-10">
            "{testimonials[activeIndex].text}"
          </p>
          
          {/* Rodapé do card estruturado de forma responsiva */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-950 mt-auto relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
                {testimonials[activeIndex].initial}
              </div>
              <div>
                <h4 className="font-bold text-sm md:text-base text-slate-100 leading-tight">{testimonials[activeIndex].name}</h4>
                <p className="text-xs text-slate-500 font-medium">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            {/* Controles: Indicadores e Setas organizados lado a lado sem sobrepor */}
            <div className="flex items-center justify-between sm:justify-end gap-6 self-stretch sm:self-auto">
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? 'w-6 bg-emerald-400' : 'w-1.5 bg-slate-700'}`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button onClick={handlePrev} className="p-2 bg-slate-950 border border-slate-900 hover:border-slate-700 text-slate-400 hover:text-slate-200 rounded-lg transition-colors cursor-pointer" aria-label="Anterior">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={handleNext} className="p-2 bg-slate-950 border border-slate-900 hover:border-slate-700 text-slate-400 hover:text-slate-200 rounded-lg transition-colors cursor-pointer" aria-label="Próximo">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}