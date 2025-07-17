import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      location: "São Paulo - SP",
      text: "A Juliana mudou completamente minha relação com a comida. Aprendi a comer com prazer e sem culpa, e isso transformou não só meu corpo, mas toda minha vida. Perdi 15kg de forma saudável e sustentável.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Beatriz",
      age: "28 anos", 
      location: "Rio de Janeiro - RJ",
      text: "Estava há anos fazendo dietas restritivas sem sucesso. Com a Juliana descobri que alimentação saudável pode ser gostosa e prazerosa. Hoje me sinto muito mais confiante e feliz comigo mesma.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Eduardo",
      age: "42 anos",
      location: "Belo Horizonte - MG", 
      text: "Como executivo, sempre tive dificuldade para manter uma rotina alimentar. A Juliana criou um plano que se adapta perfeitamente à minha agenda corrida. Nunca me senti tão bem e com tanta energia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fernanda Costa",
      age: "31 anos",
      location: "Porto Alegre - RS",
      text: "Após a gravidez, estava perdida em relação à minha alimentação. A Juliana me ajudou a recuperar minha autoestima e a criar hábitos saudáveis que toda família adotou. Sou muito grata por todo suporte.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Mendes",
      age: "38 anos",
      location: "Salvador - BA",
      text: "Sou atleta amador e precisava de orientação nutricional específica para melhorar meu desempenho. A Juliana elaborou um plano perfeito que me ajudou a alcançar meus objetivos no esporte e na vida.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Luciana Moreira",
      age: "45 anos",
      location: "Curitiba - PR",
      text: "Na menopausa, meu metabolismo mudou muito. A Juliana me orientou de forma carinhosa e profissional, ajudando-me a entender as mudanças do meu corpo e a me adaptar com saúde e bem-estar.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-peach-touch/20 rounded-full px-4 py-2">
            <Quote className="w-4 h-4 text-sage-green" />
            <span className="text-sm font-medium text-sage-green">Depoimentos</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Histórias reais de
            <span className="block text-gradient">transformação e sucesso</span>
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Cada pessoa é única, e cada jornada tem sua própria beleza. 
            Conheça algumas das histórias que me inspiram todos os dias.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elegant group">
              {/* Aspas Decorativas */}
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Estrelas */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Informações do Cliente */}
              <div className="flex items-center space-x-4 pt-4 border-t border-mint-light/30">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-mint-light"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-charcoal">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-charcoal/60">
                    {testimonial.age} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-poppins text-3xl md:text-4xl font-bold text-sage-green">500+</p>
              <p className="text-charcoal/70 font-medium">Pacientes atendidos</p>
            </div>
            <div>
              <p className="font-poppins text-3xl md:text-4xl font-bold text-sage-green">95%</p>
              <p className="text-charcoal/70 font-medium">Taxa de satisfação</p>
            </div>
            <div>
              <p className="font-poppins text-3xl md:text-4xl font-bold text-sage-green">8+</p>
              <p className="text-charcoal/70 font-medium">Anos de experiência</p>
            </div>
            <div>
              <p className="font-poppins text-3xl md:text-4xl font-bold text-sage-green">4.9</p>
              <p className="text-charcoal/70 font-medium">Avaliação média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;