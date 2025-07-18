import { Heart, Users, Video, Calculator, Utensils, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Servicos = () => {
  const services = [
    {
      icon: <Heart className="text-primary" size={48} />,
      title: "Consulta Nutricional Presencial",
      description: "Atendimento personalizado no consultório com avaliação completa, plano alimentar e acompanhamento detalhado.",
      features: [
        "Avaliação antropométrica completa",
        "Análise de exames laboratoriais",
        "Plano alimentar personalizado",
        "Material educativo"
      ],
      duration: "60 minutos",
      category: "Presencial"
    },
    {
      icon: <Video className="text-primary" size={48} />,
      title: "Consulta Online",
      description: "Atendimento por videoconferência com toda comodidade da sua casa, mantendo a qualidade e personalização.",
      features: [
        "Consulta por videoconferência",
        "Plano alimentar digital",
        "Suporte via WhatsApp",
        "Receitas personalizadas"
      ],
      duration: "50 minutos",
      category: "Online"
    },
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Acompanhamento Mensal",
      description: "Retornos mensais para ajustes no plano alimentar e monitoramento da evolução dos resultados.",
      features: [
        "Avaliação da evolução",
        "Ajustes no plano alimentar",
        "Novas receitas",
        "Orientações específicas"
      ],
      duration: "40 minutos",
      category: "Retorno"
    },
    {
      icon: <Calculator className="text-primary" size={48} />,
      title: "Plano Alimentar Detalhado",
      description: "Elaboração de plano alimentar específico com cálculos nutricionais e substituições práticas.",

      features: [
        "Cálculo de macronutrientes",
        "Lista de substituições",
        "Horários de refeições",
        "Dicas de preparo"
      ],
      duration: "Digital",
      category: "Produto"
    },
    {
      icon: <Utensils className="text-primary" size={48} />,
      title: "Cardápio Semanal",
      description: "Cardápio completo para 7 dias com receitas práticas e lista de compras organizada.",
      price: "R$ 60",
      features: [
        "7 dias de cardápio",
        "Receitas detalhadas",
        "Lista de compras",
        "Dicas de organização"
      ],
      duration: "Digital",
      category: "Produto"
    },
    {
      icon: <Award className="text-primary" size={48} />,
      title: "Programa VIP",
      description: "Acompanhamento completo com consultas ilimitadas, suporte 24h e resultados garantidos.",
      features: [
        "Consultas ilimitadas",
        "Suporte 24h via WhatsApp",
        "Planos personalizados",
        "Monitoramento semanal"
      ],
      duration: "3 meses",
      category: "Premium"
    }
  ];

  const categories = ["Todos", "Presencial", "Online", "Retorno", "Produto", "Premium"];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container-section">
            <div className="text-center">
              <h1 className="font-poppins font-bold text-4xl md:text-6xl text-charcoal mb-6">
                Nossos
                <span className="text-primary block">Serviços</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Soluções completas em nutrição para todos os perfis e necessidades,
                sempre com atendimento humanizado e baseado em evidências científicas.
              </p>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-8 bg-secondary/30">
          <div className="container-section">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className="btn-secondary"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    {service.icon}
                  </div>
                  
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {service.category}
                  </span>
                  
                  <h3 className="font-poppins font-bold text-xl text-charcoal mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-charcoal/80 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-sm text-charcoal/60">{service.duration}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-charcoal/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/agendamento">
                    <Button className="w-full btn-primary group-hover:shadow-lg">
                      Agendar Agora
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Por que Escolher Nossos Serviços?
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Oferecemos muito mais que um simples plano alimentar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elegant text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-poppins font-bold text-xl text-charcoal mb-4">
                  Metodologia Científica
                </h3>
                <p className="text-charcoal/80">
                  Todos os planos são baseados em evidências científicas e 
                  estudos atualizados da área nutricional.
                </p>
              </div>
              
              <div className="card-elegant text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-poppins font-bold text-xl text-charcoal mb-4">
                  Atendimento Humanizado
                </h3>
                <p className="text-charcoal/80">
                  Cuidamos não apenas da alimentação, mas do bem-estar 
                  integral de cada paciente.
                </p>
              </div>
              
              <div className="card-elegant text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary-foreground" size={32} />
                </div>
                <h3 className="font-poppins font-bold text-xl text-charcoal mb-4">
                  Suporte Contínuo
                </h3>
                <p className="text-charcoal/80">
                  Acompanhamento próximo e suporte sempre que você 
                  precisar durante sua jornada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="card-elegant text-center bg-gradient-hero">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Pronto para Começar sua Transformação?
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
                Escolha o serviço ideal para você e dê o primeiro passo em direção
                a uma vida mais saudável e equilibrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendamento">
                  <Button className="btn-primary text-lg px-12 py-6">
                    Agendar Consulta
                  </Button>
                </Link>
                <a href="https://wa.me/5511999999999">
                  <Button variant="outline" className="text-lg px-12 py-6">
                    Tirar Dúvidas
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;