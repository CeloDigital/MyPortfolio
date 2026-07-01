import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500 selection:text-slate-950 antialiased text-slate-100">
      <Navbar />
      <main className="bg-slate-950">
        <Hero />
        
        <ScrollReveal>
          <Stats />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        
        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>
        
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600 bg-slate-950 px-6">
        &copy; {new Date().getFullYear()} Marcelo.tech Todos os direitos reservados.
      </footer>
    </div>
  );
}