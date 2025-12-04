import React from 'react';
import { Heart, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-600 p-1.5 rounded text-white">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-bold">GMADC</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Grupo Mariliense de Apoio Ao Doente de Câncer. Uma história de amor, solidariedade e compromisso com a vida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-purple-400 transition-colors">Projetos</a></li>
              <li><a href="#transparencia" className="hover:text-purple-400 transition-colors">Portal da Transparência</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Apoie</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#doar" className="hover:text-purple-400 transition-colors">Faça uma Doação</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Seja Voluntário</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Nota Fiscal Paulista</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} GMADC. Todos os direitos reservados.</p>
          <p>Feito com carinho por Victor Carvalho</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;