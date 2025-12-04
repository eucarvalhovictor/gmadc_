import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como Ajudar', href: '#doar' },
  { label: 'Contato', href: '#contato' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
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
              className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#doar"
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
          {isOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col py-4 px-4 border-t">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 text-gray-600 font-medium border-b border-gray-100 last:border-0 hover:text-purple-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#doar"
            className="mt-4 w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700"
            onClick={() => setIsOpen(false)}
          >
            Quero Ajudar
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;