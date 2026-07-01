import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success'

  const isEmailValid = email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    
    // Passagem correta com chave e valor para a API do Web3Forms
    formData.append("access_key", "ab1c4fb3-bd23-40b6-9426-d5c361dfca1e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
        e.target.reset(); // Limpa os campos do formulário

        // Retorna o botão ao estado normal após 4 segundos
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
        setStatus('idle');
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
      setStatus('idle');
    }
  };

  return (
    <section id="contato" className="py-24 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos iniciar um projeto?</h2>
          <p className="text-slate-400 leading-relaxed">
            Entre em contato para solicitar orçamentos de landing pages ou agendar a manutenção preventiva do seu setup. Respondo em poucas horas.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-slate-900/40 flex items-center justify-center border border-slate-900 text-emerald-400"><Mail size={18} /></div>
              <span>celosilvestre@hotmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-slate-900/40 flex items-center justify-center border border-slate-900 text-emerald-400"><Phone size={18} /></div>
              <span>(81) 98175-2171</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-slate-900/40 flex items-center justify-center border border-slate-900 text-emerald-400"><MapPin size={18} /></div>
              <span>Recife, PE</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/40 border border-slate-900 p-6 md:p-8 rounded-2xl space-y-5 shadow-xl">
          <div className="relative group">
            <input 
              type="text"
              name='name' 
              required 
              className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-hidden transition-all" 
              placeholder="Seu Nome" 
            />
          </div>
          
          <div className="relative">
            <input 
              type="email" 
              name="email"
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-hidden transition-all ${
                isEmailValid ? 'border-emerald-500/50 focus:border-emerald-500' : 'border-slate-900 focus:border-emerald-500'
              }`} 
              placeholder="Seu E-mail" 
            />
          </div>

          <textarea 
            required 
            name="message"
            rows="4" 
            className="w-full bg-slate-950 border border-slate-900 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-hidden transition-all resize-none" 
            placeholder="Como posso te ajudar?"
          ></textarea>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm cursor-pointer ${
              status === 'success' 
                ? 'bg-emerald-500 text-slate-950' 
                : 'bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 active:scale-98 shadow-emerald-500/10'
            }`}
          >
            {status === 'idle' && <><Send size={16} /> Enviar Mensagem</>}
            {status === 'loading' && <><Loader2 size={16} className="animate-spin" /> Processando...</>}
            {status === 'success' && <><CheckCircle2 size={16} /> Enviado com Sucesso!</>}
          </button>
        </form>
      </div>
    </section>
  );
}