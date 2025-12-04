import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/435/1920/1080"
          alt="Apoio e cuidado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left pt-20">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-500/30 text-purple-100 text-sm font-medium mb-6 border border-purple-400/30 backdrop-blur-sm">
            Desde 2005 acolhendo vidas
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Juntos somos mais fortes contra o câncer
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
            O GMADC oferece apoio multidisciplinar, carinho e dignidade para pacientes e famílias em tratamento oncológico em Marília.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#doar"
              className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Fazer uma Doação
              <ArrowRight size={20} />
            </a>
            <a
              href="#projetos"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Nossos Projetos
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;