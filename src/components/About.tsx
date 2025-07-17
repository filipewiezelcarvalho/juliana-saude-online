import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-juliana.jpg';

const About = () => {
  const achievements = [
    { icon: Award, title: "Nutricionista Clínica", description: "CRN-3 12345 - Registrada no Conselho Regional" },
    { icon: Users, title: "500+ Pacientes", description: "Atendidos com sucesso ao longo da carreira" },
    { icon: Heart, title: "Abordagem Humanizada", description: "Cuidado integral baseado em evidências científicas" },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Juliana Fernandes - Sobre a Nutricionista"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
              />
              {/* Elementos Decorativos */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-mint-light rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-peach-touch rounded-full opacity-40"></div>
            </div>
            
            {/* Card de Destaque */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-card border border-mint-light/30 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-charcoal">8+ Anos</p>
                  <p className="text-sm text-charcoal/70">de experiência clínica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            {/* Cabeçalho da Seção */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-mint-light/30 rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-sage-green" />
                <span className="text-sm font-medium text-sage-green">Sobre Mim</span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                Minha missão é transformar
                <span className="block text-gradient">sua relação com a alimentação</span>
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Olá! Sou a Juliana, nutricionista clínica apaixonada por ajudar pessoas a descobrirem 
                o prazer de se alimentar bem. Acredito que cada pessoa é única e merece um cuidado 
                personalizado e humanizado.
              </p>
            </div>

            {/* Conquistas */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-sage-green" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-charcoal">
                        {achievement.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Minha Filosofia */}
            <div className="bg-mint-light/20 rounded-2xl p-6 border-l-4 border-sage-green">
              <h4 className="font-poppins font-semibold text-lg text-charcoal mb-3">
                Minha Filosofia
              </h4>
              <p className="text-charcoal/80 leading-relaxed">
                "Acredito que a alimentação vai muito além dos nutrientes. É sobre cultura, 
                memórias afetivas, prazer e bem-estar. Meu trabalho é te ajudar a encontrar 
                o equilíbrio perfeito entre saúde e felicidade."
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/sobre">
                <Button size="lg" className="btn-primary group">
                  Conhecer Minha História
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/agendamento">
                <Button variant="outline" size="lg" className="btn-secondary">
                  Agendar Conversa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;