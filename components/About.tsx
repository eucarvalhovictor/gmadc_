import React from 'react';
import { Target, Eye, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quem Somos</h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg">
            O GMADC é uma entidade sem fins lucrativos dedicada a promover qualidade de vida e esperança. Atuamos como uma ponte entre a solidariedade da comunidade e a necessidade dos pacientes oncológicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-600">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Missão</h3>
            <p className="text-gray-600">
              Oferecer suporte biopsicossocial ao paciente com câncer e seus familiares, amenizando o sofrimento e fortalecendo os vínculos durante o tratamento.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-400">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visão</h3>
            <p className="text-gray-600">
              Ser referência em Marília e região no acolhimento humanizado e na defesa dos direitos do paciente oncológico.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Valores</h3>
            <p className="text-gray-600">
              Ética, Transparência, Humanização, Comprometimento Social, Respeito à Vida e Amor ao Próximo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;