import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Alimentos que Aceleram o Metabolismo",
      excerpt: "Descubra como incluir estes alimentos poderosos na sua dieta para potencializar a queima de gordura de forma natural.",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "Emagrecimento",
      image: "/placeholder-blog-1.jpg"
    },
    {
      id: 2,
      title: "Alimentação Anti-inflamatória: Guia Completo",
      excerpt: "Entenda como a alimentação pode reduzir inflamações no corpo e melhorar sua qualidade de vida significativamente.",
      date: "12 Mar 2024",
      readTime: "8 min",
      category: "Saúde",
      image: "/placeholder-blog-2.jpg"
    },
    {
      id: 3,
      title: "Mitos e Verdades sobre Carboidratos",
      excerpt: "Desmistificamos as principais dúvidas sobre carboidratos e como consumi-los de forma inteligente.",
      date: "08 Mar 2024",
      readTime: "6 min",
      category: "Educação",
      image: "/placeholder-blog-3.jpg"
    },
    {
      id: 4,
      title: "Suplementação: Quando é Realmente Necessária?",
      excerpt: "Saiba quando a suplementação é indicada e como escolher os melhores produtos para seus objetivos.",
      date: "05 Mar 2024",
      readTime: "7 min",
      category: "Suplementação",
      image: "/placeholder-blog-4.jpg"
    },
    {
      id: 5,
      title: "Preparação de Refeições: Dicas de Meal Prep",
      excerpt: "Organize sua semana com estratégias práticas de meal prep para manter uma alimentação saudável mesmo na correria.",
      date: "01 Mar 2024",
      readTime: "10 min",
      category: "Organização",
      image: "/placeholder-blog-5.jpg"
    },
    {
      id: 6,
      title: "Alimentação na Gravidez: Cuidados Essenciais",
      excerpt: "Guia completo sobre nutrição durante a gestação para garantir a saúde da mãe e do bebê.",
      date: "28 Fev 2024",
      readTime: "12 min",
      category: "Gestação",
      image: "/placeholder-blog-6.jpg"
    }
  ];

  const categories = [
    "Todos",
    "Emagrecimento",
    "Saúde",
    "Educação",
    "Suplementação",
    "Organização",
    "Gestação"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="py-16 md:py-24">
          <div className="container-section">
            {/* Hero Section */}
            <section className="text-center mb-20">
              <h1 className="font-poppins font-bold text-4xl md:text-6xl text-charcoal mb-6">
                Blog da
                <span className="text-primary block">Nutrição</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Artigos baseados em evidências científicas para te ajudar a entender
                melhor a nutrição e fazer escolhas mais conscientes.
              </p>
            </section>

            {/* Categorias */}
            <section className="mb-12">
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
            </section>

            {/* Posts */}
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="card-elegant group cursor-pointer">
                    <div className="w-full h-48 bg-secondary rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                      <span className="text-muted-foreground">Imagem do Post</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-charcoal/60 mb-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-poppins font-bold text-xl text-charcoal mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-charcoal/80 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User size={16} className="text-charcoal/60" />
                        <span className="text-sm text-charcoal/60">Juliana Fernandes</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Ler Mais
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="card-elegant bg-gradient-hero text-center">
              <h2 className="font-poppins font-bold text-3xl text-charcoal mb-6">
                Receba Conteúdos Exclusivos
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
                Cadastre-se em nossa newsletter e receba dicas semanais de nutrição
                diretamente no seu e-mail.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
                />
                <Button className="btn-primary">
                  Cadastrar
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;