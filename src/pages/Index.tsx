import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Star, Users, Award, CheckCircle, ArrowRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Nutrição Clínica",
      description: "Tratamento especializado para patologias através da alimentação personalizada."
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Emagrecimento",
      description: "Programa estruturado para perda de peso sustentável e saudável."
    },
    {
      icon: <Award className="text-primary" size={32} />,
      title: "Acompanhamento Online",
      description: "Consultas virtuais com toda comodidade e flexibilidade."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Perdi 15kg de forma saudável e sem sofrimento. A Juliana mudou minha vida!",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Excelente profissional! Consegui controlar minha diabetes através da alimentação.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Atendimento humanizado e planos que realmente funcionam. Super recomendo!",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "10 Alimentos que Aceleram o Metabolismo",
      excerpt: "Descubra como potencializar a queima de gordura naturalmente.",
      date: "15 Mar 2024"
    },
    {
      title: "Alimentação Anti-inflamatória",
      excerpt: "Como reduzir inflamações no corpo através da nutrição.",
      date: "12 Mar 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h1 className="font-poppins font-bold text-4xl md:text-6xl text-charcoal mb-6">
                  Nutrição para
                  <span className="text-primary block">Transformar sua Vida</span>
                </h1>
                <p className="text-xl text-charcoal/80 mb-8">
                  Planos personalizados baseados em evidências científicas para
                  você alcançar seus objetivos de saúde, bem-estar e performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/agendamento">
                    <Button className="btn-primary text-lg px-8 py-4">
                      Agendar Consulta
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/sobre">
                    <Button variant="outline" className="text-lg px-8 py-4">
                      Conhecer mais
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="fade-in">
                <div className="relative">
                  <div className="w-full h-96 bg-secondary rounded-2xl flex items-center justify-center">
                    <span className="text-muted-foreground text-lg">Foto da Juliana</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="text-primary-foreground" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="card-elegant">
                <h2 className="font-poppins font-bold text-3xl text-charcoal mb-6">
                  Conheça a Juliana Fernandes
                </h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Nutricionista clínica apaixonada por transformar vidas através da
                  alimentação. Com mais de 6 anos de experiência, desenvolvi uma
                  metodologia única que combina ciência e humanização.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span>CRN 12345 - Nutricionista Clínica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span>Especialização em Nutrição Funcional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span>Mais de 500 pacientes atendidos</span>
                  </li>
                </ul>
                <Link to="/sobre">
                  <Button className="btn-secondary">
                    Saiba mais sobre mim
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-accent rounded-2xl flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">Foto profissional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Nossos Serviços
              </h2>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Soluções personalizadas para cada objetivo, sempre com base
                científica e cuidado humanizado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card-elegant text-center">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/80 mb-6">
                    {service.description}
                  </p>
                  <Link to="/servicos">
                    <Button variant="outline" className="w-full">
                      Saiba mais
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/servicos">
                <Button className="btn-primary">
                  Ver todos os serviços
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                O que dizem nossos pacientes
              </h2>
              <p className="text-xl text-charcoal/80">
                Histórias reais de transformação e conquistas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-elegant">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-charcoal/80 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Recente */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Últimas do Blog
              </h2>
              <p className="text-xl text-charcoal/80">
                Conteúdo baseado em evidências para sua educação nutricional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="card-elegant">
                  <div className="w-full h-48 bg-accent rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-accent-foreground">Imagem do post</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-charcoal mb-3">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/80 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal/60">
                      {post.date}
                    </span>
                    <Button variant="outline" size="sm">
                      Ler mais
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button className="btn-secondary">
                  Ver todos os artigos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <div className="card-elegant text-center bg-gradient-hero">
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Pronto para Transformar sua Vida?
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
                Agende sua consulta hoje mesmo e dê o primeiro passo em direção
                a uma vida mais saudável, equilibrada e feliz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendamento">
                  <Button className="btn-primary text-lg px-12 py-6">
                    Agendar Minha Consulta
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

export default Index;
