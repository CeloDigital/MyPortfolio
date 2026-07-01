import React, { useEffect, useState, useRef } from 'react';

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let start = 0;
        const speed = target / 100;
        const timer = setInterval(() => {
          start += speed;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 15);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { target: 50, suffix: "+", label: "Máquinas Otimizadas" },
    { target: 100, suffix: "%", label: "Clientes Satisfeitos" },
    { target: 24, suffix: "h", label: "Tempo Médio de Resposta" }
  ];

  return (
    <section className="py-12 bg-slate-950 border-y border-slate-900 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 text-center">
        {stats.map((s, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-2xl md:text-5xl font-black text-emerald-400 font-mono">
              <Counter target={s.target} suffix={s.suffix} />
            </div>
            <p className="text-xs md:text-sm text-slate-400 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}