import React from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/75 backdrop-blur-md border-b border-slate-900 z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* CORREÇÃO 4: 'bg-gradient-to-r' alterado para 'bg-linear-to-r' */}
        <div className="flex items-center gap-2 font-bold text-xl text-emerald-400 tracking-tight cursor-pointer group">
          <Terminal size={22} className="group-hover:rotate-12 transition-transform duration-300" />
          <span className="bg-linear-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Marcelo.tech</span>
        </div>
        <div className="flex gap-8 text-slate-400 font-medium text-sm">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="relative py-1 transition-colors duration-300 hover:text-emerald-400 group"
            >
              {item.label}
              {/* CORREÇÃO 5: 'h-[2px]' alterado para 'h-0.5' */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}