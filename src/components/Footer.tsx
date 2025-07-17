import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Heart, Clock, CheckCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Seção principal do footer */}
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Nutricionista */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JF</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg">Juliana Fernandes</h3>
                <p className="text-mint-light text-sm">Nutricionista Clínica</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nutrição que acolhe, transforma e inspira. Há mais de 8 anos ajudando pessoas a 
              transformarem sua relação com a alimentação através de uma abordagem científica e humanizada.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-sage-green" />
              <span className="text-gray-300">CRN-3 12345</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg">Links Rápidos</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-mint-light transition-colors text-sm">
                Início
              </Link>
              <Link to="/sobre" className="text-gray-300 hover:text-mint-light transition-colors text-sm">
                Sobre Mim
              </Link>
              <Link to="/servicos" className="text-gray-300 hover:text-mint-light transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-mint-light transition-colors text-sm">
                Blog
              </Link>
              <Link to="/agendamento" className="text-gray-300 hover:text-mint-light transition-colors text-sm">
                Agendar Consulta
              </Link>
            </nav>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sage-green flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">(11) 99999-9999</p>
                  <p className="text-xs text-gray-400">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sage-green flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">contato@julianafernandes.com.br</p>
                  <p className="text-xs text-gray-400">Resposta em até 24h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sage-green flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">São Paulo - SP</p>
                  <p className="text-xs text-gray-400">Atendimento presencial e online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horários e Redes Sociais */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg">Atendimento</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-sage-green flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Segunda a Sexta</p>
                  <p className="text-xs text-gray-400">8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-sage-green flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Sábado</p>
                  <p className="text-xs text-gray-400">8h às 12h</p>
                </div>
              </div>
            </div>
            
            {/* Redes Sociais */}
            <div>
              <h5 className="font-semibold text-sm mb-3">Siga-me nas redes</h5>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/nutrijulianafernandes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://facebook.com/nutrijulianafernandes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-700">
        <div className="container-section py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>© {currentYear} Juliana Fernandes - Nutricionista.</span>
              <span>Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-sage-green" />
              <span>para sua saúde e bem-estar</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              CRN-3 12345 | Este site não substitui consulta médica ou nutricional presencial.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;