import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // MELHORIA: Agora ele atualiza com true (quando entra na tela) E com false (quando sai da tela)
        setIsVisible(entry.isIntersecting);
      });
    }, {
      threshold: 0.1 // Ativa quando 10% do elemento aparece na tela
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}