import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Esta é uma demonstração.");
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Fale Conosco</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Estamos aqui por você</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Precisa de ajuda ou quer saber mais sobre como contribuir? 
              Entre em contato conosco ou faça uma visita à nossa sede.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">R. Pernambuco, 735 - Banzato<br />Marília - SP, 17515-120</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(14) 3432-1297</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@gmadc.org.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 17h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" 
                  placeholder="Seu nome" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all" 
                  placeholder="seuemail@exemplo.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-y" 
                  placeholder="Sua mensagem..." 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors shadow-md"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;