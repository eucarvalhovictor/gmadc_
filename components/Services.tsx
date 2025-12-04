import React from 'react';
import { Pill, Users, HandHeart, Apple, Baby, Stethoscope } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Apoio Psicológico',
    description: 'Atendimento individual e em grupo para pacientes e familiares, focado na saúde mental e emocional.',
    icon: <Users size={28} />,
  },
  {
    title: 'Assistência Social',
    description: 'Orientação sobre direitos, benefícios e auxílio em situações de vulnerabilidade social.',
    icon: <HandHeart size={28} />,
  },
  {
    title: 'Farmácia Solidária',
    description: 'Fornecimento de medicamentos complementares não oferecidos pelo SUS, mediante receita.',
    icon: <Pill size={28} />,
  },
  {
    title: 'Nutrição Oncológica',
    description: 'Doação de suplementos alimentares e cestas básicas adaptadas para as necessidades do tratamento.',
    icon: <Apple size={28} />,
  },
  {
    title: 'Projeto Peruca Solidária',
    description: 'Confecção e doação de perucas e lenços para resgatar a autoestima das pacientes.',
    icon: <Baby size={28} />,
  },
  {
    title: 'Oficinas Terapêuticas',
    description: 'Artesanato e atividades manuais para promover integração e reabilitação.',
    icon: <Stethoscope size={28} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Nossos Projetos e Serviços</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-gray-100 rounded-2xl bg-white hover:border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;