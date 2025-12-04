import React, { useState } from 'react';
import { Copy, Check, CreditCard, Gift, Heart } from 'lucide-react';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "00.000.000/0001-00"; // Fake PIX for demo

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="doar" className="py-20 bg-purple-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-12 opacity-5">
        <Heart size={300} />
      </div>
      <div className="absolute bottom-0 left-0 p-8 opacity-5">
        <Gift size={200} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sua ajuda transforma vidas</h2>
            <p className="text-purple-200 text-lg mb-8 leading-relaxed">
              O GMADC depende da generosidade da comunidade para manter seus projetos. Todo valor arrecadado é revertido integralmente em medicamentos, suplementos e apoio às famílias cadastradas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-700 p-3 rounded-lg">
                  <CreditCard className="text-purple-300" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Seja um Padrinho Mensal</h3>
                  <p className="text-purple-200 text-sm mt-1">Contribua mensalmente com qualquer valor e ajude a garantir a continuidade dos nossos serviços.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-700 p-3 rounded-lg">
                  <Gift className="text-purple-300" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Doe Alimentos ou Medicamentos</h3>
                  <p className="text-purple-200 text-sm mt-1">Recebemos doações de leite, suplementos e cestas básicas em nossa sede.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl max-w-md mx-auto w-full">
            <div className="text-center mb-6">
              <span className="bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider">Método mais rápido</span>
              <h3 className="text-2xl font-bold mt-4">Faça um PIX</h3>
              <p className="text-gray-500 text-sm mt-2">Doe qualquer valor com facilidade</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 mb-6 flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-1 uppercase font-semibold">Chave PIX (CNPJ)</span>
              <code className="text-lg font-mono font-bold text-gray-800">{pixKey}</code>
            </div>

            <button
              onClick={handleCopy}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg'
              }`}
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Chave Copiada!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copiar Chave PIX
                </>
              )}
            </button>
            
            <div className="mt-6 text-center border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500">
                Banco do Brasil <br />
                Agência: 0000-0 | Conta: 00000-0 <br />
                <strong>GMADC - Grupo de Apoio</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;