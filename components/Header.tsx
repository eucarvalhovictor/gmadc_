import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Transparência', href: '#transparencia' },
  { label: 'Como Ajudar', href: '#doar' },
  { label: 'Contato', href: '#contato' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null); // Ref para o elemento header

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Fechar menu mobile

    const targetId = href.substring(1); // Remover '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement && headerRef.current) {
      // Pequeno atraso para garantir que o cabeçalho tenha se estabilizado em sua altura final
      // (importante para cabeçalhos com altura dinâmica que mudam ao rolar)
      setTimeout(() => {
        const headerHeight = headerRef.current?.offsetHeight || 0;
        // Adiciona 10px de margem extra para um espaçamento visual melhor
        const offsetPosition = targetElement.offsetTop - headerHeight - 10; 

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100); // 100ms de atraso para permitir a transição do cabeçalho
    } else if (targetElement) {
        // Fallback se headerRef não estiver disponível, mas o elemento existir
        // Estima uma altura padrão para o cabeçalho
        const offsetPosition = targetElement.offsetTop - 80; 
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <header
      ref={headerRef} // Atribuir o ref ao header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 group">
          <div className="bg-purple-600 p-2 rounded-lg text-white group-hover:bg-purple-700 transition-colors">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>
            GMADC
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)} // Usar o manipulador de rolagem personalizado
              className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#doar"
            onClick={(e) => scrollToSection(e, '#doar')} // Usar o manipulador de rolagem personalizado
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-white text-purple-600 hover:bg-gray-100'
            }`}
          >
            Doe Agora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className={isScrolled || isOpen ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col py-4 px-4 border-t">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)} // Usar o manipulador de rolagem personalizado
              className="py-3 text-gray-600 font-medium border-b border-gray-100 last:border-0 hover:text-purple-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#doar"
            onClick={(e) => scrollToSection(e, '#doar')} // Usar o manipulador de rolagem personalizado
            className="mt-4 w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Quero Ajudar
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;