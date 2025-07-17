import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'HOME' },
    { path: '/sobre', label: 'SOBRE MIM' },
    { path: '/servicos', label: 'SERVIÇOS' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contato', label: 'CONTATO' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-mint-light/30">
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">JF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl text-charcoal">Juliana Fernandes</span>
              <span className="text-sm text-sage-green font-medium tracking-wide">NUTRICIONISTA</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-sm tracking-wide transition-all duration-300 hover:text-sage-green relative ${
                  isActive(item.path) 
                    ? 'text-sage-green after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-sage-green' 
                    : 'text-charcoal hover:text-sage-green'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Link to="/agendamento">
              <Button className="btn-primary">
                Agendar Consulta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-charcoal hover:text-sage-green transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-mint-light/30">
          <div className="container-section py-6">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-base py-2 transition-colors ${
                    isActive(item.path) ? 'text-sage-green' : 'text-charcoal hover:text-sage-green'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-mint-light/30">
                <Button
                  variant="outline"
                  className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
                  onClick={() => {
                    window.open('https://wa.me/5511999999999', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale no WhatsApp
                </Button>
                <Link to="/agendamento" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary w-full">
                    Agendar Consulta
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;