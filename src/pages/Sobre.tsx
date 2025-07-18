import { CheckCircle, Award, Users, Heart, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Sobre = () => {
  const achievements = [
    {
      icon: <Award className="text-primary" size={32} />,
      title: "CRN 12345",
      description: "Nutricionista registrada no Conselho Regional de Nutrição"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "500+ Pacientes",
      description: "Mais de 500 vidas transformadas através da nutrição"
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "6+ Anos",
      description: "Mais de 6 anos de experiência em nutrição clínica"
    },
    {
      icon: <Star className="text-primary" size={32} />,
      title: "Especialista",
      description: "Especialização em Nutrição Funcional e Fitoterapia"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-poppins font-bold text-4xl md:text-6xl text-charcoal mb-6">
                  Conheça a
                  <span className="text-primary block">Juliana Fernandes</span>
                </h1>
                <p className="text-xl text-charcoal/80 mb-8">
                  Nutricionista clínica apaixonada por transformar vidas através da
                  alimentação consciente e baseada em evidências científicas.
                </p>
                <Link to="/agendamento">
                  <Button className="btn-primary text-lg px-8 py-4">
                    Agendar Consulta
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-secondary rounded-2xl flex items-center justify-center">
                  <span className="text-muted-foreground text-lg">Foto da Juliana</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minha História */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Minha História
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Formada em Nutrição pela Universidade Federal de São Paulo, sempre tive
                como missão ajudar as pessoas a encontrarem o equilíbrio através da
                alimentação. Ao longo dos anos, especializei-me em nutrição funcional
                e fitoterapia, desenvolvendo uma abordagem holística que considera não
                apenas o que comemos, mas como nos relacionamos com a comida.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="font-poppins font-bold text-2xl text-charcoal mb-6">
                  Metodologia Personalizada
                </h3>
                <p className="text-charcoal/80 mb-6">
                  Acredito que cada pessoa é única e merece um atendimento personalizado.
                  Por isso, desenvolvi uma metodologia que combina:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Avaliação nutricional completa e detalhada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Planos alimentares baseados em evidências científicas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Acompanhamento contínuo e ajustes quando necessário</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Educação nutricional para mudanças sustentáveis</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-full h-80 bg-accent rounded-2xl flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">Metodologia em ação</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conquistas */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Minhas Conquistas
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Números que refletem minha dedicação em transformar vidas através da nutrição
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-elegant text-center">
                  <div className="flex justify-center mb-6">
                    {achievement.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-charcoal mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-charcoal/80">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formação */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                  Formação e Especializações
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-xl text-charcoal mb-2">
                        Graduação em Nutrição
                      </h3>
                      <p className="text-charcoal/80 mb-2">Universidade Federal do Rio de Janeiro - UFRJ</p>
                      <p className="text-sm text-charcoal/60">2009 - 2013</p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-xl text-charcoal mb-2">
                        Especialização em Nutrição Clínica Funcional
                      </h3>
                      <p className="text-charcoal/80 mb-2">Valéria Paschoal Consultoria Nutricional</p>
                      <p className="text-sm text-charcoal/60">2014 - 2016</p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-xl text-charcoal mb-2">
                        Mestrado em Nutrição Humana
                      </h3>
                      <p className="text-charcoal/80 mb-2">Universidade Federal do Rio de Janeiro - UFRJ</p>
                      <p className="text-sm text-charcoal/60">2016 - 2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-section">
            <div className="card-elegant text-center bg-gradient-hero">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Vamos Transformar sua Vida Juntos?
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
                Estou aqui para te ajudar a alcançar seus objetivos de saúde e bem-estar
                através da nutrição personalizada e baseada em evidências.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendamento">
                  <Button className="btn-primary text-lg px-12 py-6">
                    Agendar Consulta
                  </Button>
                </Link>
                <a href="https://wa.me/5511999999999">
                  <Button variant="outline" className="text-lg px-12 py-6">
                    Chamar no WhatsApp
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

export default Sobre;