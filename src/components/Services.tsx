import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Consulta Nutricional Individual",
      description: "Atendimento personalizado com avaliação completa, plano alimentar individualizado e acompanhamento contínuo.",
      features: ["Anamnese detalhada", "Plano alimentar personalizado", "Acompanhamento mensal", "Suporte via WhatsApp"],
      price: "A partir de R$ 150",
      highlight: true
    },
    {
      icon: Users,
      title: "Atendimento em Grupo",
      description: "Sessões em grupo para quem busca motivação compartilhada e quer dividir a jornada com outras pessoas.",
      features: ["Grupos de até 8 pessoas", "Dinâmicas interativas", "Receitas saudáveis", "Apoio mútuo"],
      price: "A partir de R$ 80",
      highlight: false
    },
    {
      icon: Award,
      title: "Acompanhamento VIP",
      description: "Atendimento premium com consultas mais frequentes, suporte 24h e planos altamente personalizados.",
      features: ["Consultas quinzenais", "Suporte 24h WhatsApp", "Planos detalhados", "Ajustes frequentes"],
      price: "A partir de R$ 350",
      highlight: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-mint-light/10">
      <div className="container-section">
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-sage-green/10 rounded-full px-4 py-2">
            <Calendar className="w-4 h-4 text-sage-green" />
            <span className="text-sm font-medium text-sage-green">Meus Serviços</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Transforme sua vida com
            <span className="block text-gradient">o plano ideal para você</span>
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Escolha a modalidade de atendimento que melhor se adapta ao seu estilo de vida 
            e objetivos. Todos os planos incluem orientação personalizada e acompanhamento contínuo.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`card-elegant relative ${
                  service.highlight ? 'ring-2 ring-sage-green border-sage-green/30' : ''
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-sage-green text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Ícone do Serviço */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Conteúdo */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-charcoal mb-2">
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-sage-green flex-shrink-0" />
                        <span className="text-sm text-charcoal/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Preço */}
                  <div className="pt-4 border-t border-mint-light/50">
                    <p className="text-2xl font-poppins font-bold text-sage-green">
                      {service.price}
                    </p>
                    <p className="text-sm text-charcoal/60">por consulta</p>
                  </div>

                  {/* CTA */}
                  <Link to="/agendamento" className="block">
                    <Button 
                      className={`w-full group ${
                        service.highlight ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      Agendar Consulta
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Adicional */}
        <div className="text-center mt-16">
          <div className="bg-gradient-accent rounded-3xl p-8 md:p-12">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Ainda tem dúvidas sobre qual plano escolher?
            </h3>
            <p className="text-lg text-charcoal/80 mb-6 max-w-2xl mx-auto">
              Vamos conversar! Agende uma conversa gratuita de 15 minutos para entendermos 
              juntas qual é a melhor opção para seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="btn-primary"
              >
                Conversar no WhatsApp
              </Button>
              <Link to="/contato">
                <Button variant="outline" className="btn-secondary">
                  Ver Outras Formas de Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;