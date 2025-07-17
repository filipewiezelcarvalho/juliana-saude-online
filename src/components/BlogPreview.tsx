import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "5 Mitos sobre Nutrição que Você Precisa Parar de Acreditar",
      excerpt: "Descubra as verdades por trás dos mitos mais comuns sobre alimentação e aprenda a fazer escolhas mais conscientes baseadas em ciência.",
      category: "Educação Nutricional",
      readTime: "5 min",
      date: "15 Jan 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Como Manter uma Alimentação Saudável com a Rotina Corrida",
      excerpt: "Dicas práticas para quem tem pouco tempo mas não quer abrir mão de uma alimentação equilibrada e nutritiva no dia a dia.",
      category: "Dicas Práticas",
      readTime: "7 min",
      date: "12 Jan 2024",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "A Importância do Acompanhamento Nutricional Personalizado",
      excerpt: "Entenda por que cada pessoa é única quando o assunto é nutrição e como um plano personalizado pode transformar sua saúde.",
      category: "Acompanhamento",
      readTime: "6 min",
      date: "10 Jan 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-sand-soft">
      <div className="container-section">
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-sage-green/10 rounded-full px-4 py-2">
            <BookOpen className="w-4 h-4 text-sage-green" />
            <span className="text-sm font-medium text-sage-green">Blog</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Conteúdo que
            <span className="block text-gradient">educa e transforma</span>
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Artigos baseados em evidências científicas para te ajudar a entender melhor 
            o mundo da nutrição e fazer escolhas mais conscientes.
          </p>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="card-elegant group cursor-pointer">
              {/* Imagem do Post */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Categoria Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-sage-green text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Post */}
              <div className="space-y-4">
                {/* Meta Informações */}
                <div className="flex items-center text-sm text-charcoal/60 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="font-poppins text-xl font-bold text-charcoal leading-tight group-hover:text-sage-green transition-colors">
                  {post.title}
                </h3>

                {/* Resumo */}
                <p className="text-charcoal/70 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Link para o post */}
                <div className="pt-2">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sage-green font-semibold text-sm hover:text-sage-green/80 transition-colors group"
                  >
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA para ver todos os posts */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button size="lg" className="btn-primary group">
              Ver Todos os Artigos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold mb-4">
            Receba dicas de nutrição no seu e-mail
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Cadastre-se na nossa newsletter e receba semanalmente conteúdos exclusivos 
            sobre nutrição, receitas saudáveis e dicas para uma vida mais equilibrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button variant="secondary" className="bg-white text-sage-green hover:bg-white/90">
              Inscrever-se
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;