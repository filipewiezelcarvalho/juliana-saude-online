import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-juliana.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/src/assets/nutrition-icons.jpg')] bg-cover bg-center"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo do Hero */}
          <div className="space-y-8">
            {/* Badge de Credibilidade */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <CheckCircle className="w-5 h-5 text-sage-green" />
              <span className="text-sm font-medium text-charcoal">CRN-3 12345 • +8 anos de experiência</span>
            </div>

            {/* Headline Principal */}
            <div className="space-y-4">
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Nutrição que
                <span className="block text-gradient">acolhe, transforma</span>
                <span className="block">e inspira</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl">
                Transforme sua relação com a alimentação através de uma abordagem científica, 
                humanizada e personalizada. Sua jornada para uma vida mais saudável começa aqui.
              </p>
            </div>

            {/* Estatísticas Rápidas */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <p className="font-bold text-lg text-charcoal">500+</p>
                  <p className="text-sm text-charcoal/70">Pacientes atendidos</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <p className="font-bold text-lg text-charcoal">4.9/5</p>
                  <p className="text-sm text-charcoal/70">Avaliação média</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-sage-green/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <p className="font-bold text-lg text-charcoal">8 anos</p>
                  <p className="text-sm text-charcoal/70">De experiência</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/agendamento">
                <Button size="lg" className="btn-primary group">
                  Agendar Minha Consulta
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button variant="outline" size="lg" className="btn-secondary">
                  Conhecer Minha História
                </Button>
              </Link>
            </div>

            {/* Depoimento Destaque */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50">
              <div className="flex items-start space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-charcoal/80 italic leading-relaxed">
                    "A Juliana mudou completamente minha relação com a comida. Aprendi a comer com prazer 
                    e sem culpa, e isso transformou não só meu corpo, mas toda minha vida."
                  </p>
                  <p className="text-xs text-charcoal/60 mt-2 font-medium">— Maria Silva, paciente há 2 anos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem do Hero */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Juliana Fernandes - Nutricionista Clínica"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
              {/* Overlay de Credibilidade */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-poppins font-bold text-charcoal">Juliana Fernandes</p>
                      <p className="text-sm text-sage-green font-medium">Nutricionista Clínica CRN-3 12345</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-5 h-5 text-sage-green" />
                      <span className="text-sm font-medium text-charcoal">Verificado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-60 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full opacity-40 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-sage-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sage-green rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;