import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#inicio" className="text-xl font-black tracking-tight text-slate-100 flex items-center gap-1">
          <span className="text-emerald-400">&gt;_</span> Marcelo.tech
        </a>

        {/* Links para Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Hamburger para Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Aberto no Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-900 px-6 py-4 flex flex-col gap-4 animate-fadeIn">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-400 hover:text-emerald-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}