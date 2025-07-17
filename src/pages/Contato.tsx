import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container-section">
            <div className="text-center mb-16">
              <h1 className="font-poppins font-bold text-4xl md:text-6xl text-charcoal mb-6">
                Entre em
                <span className="text-primary block">Contato</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Estou aqui para ajudar você a transformar sua vida através da nutrição.
                Entre em contato e agende sua consulta!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-4">
                    <Phone className="text-primary" size={24} />
                    <h3 className="font-poppins font-bold text-xl text-charcoal">Telefone</h3>
                  </div>
                  <p className="text-charcoal/80 mb-4">(11) 99999-9999</p>
                  <Button className="btn-primary w-full">
                    Ligar Agora
                  </Button>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-4">
                    <Mail className="text-primary" size={24} />
                    <h3 className="font-poppins font-bold text-xl text-charcoal">E-mail</h3>
                  </div>
                  <p className="text-charcoal/80 mb-4">juliana@nutricao.com.br</p>
                  <Button variant="outline" className="w-full">
                    Enviar E-mail
                  </Button>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-4">
                    <MapPin className="text-primary" size={24} />
                    <h3 className="font-poppins font-bold text-xl text-charcoal">Endereço</h3>
                  </div>
                  <p className="text-charcoal/80">
                    Rua das Palmeiras, 123<br />
                    São Paulo - SP, 01234-567
                  </p>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="text-primary" size={24} />
                    <h3 className="font-poppins font-bold text-xl text-charcoal">Horários</h3>
                  </div>
                  <div className="text-charcoal/80 space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="card-elegant">
                <h3 className="font-poppins font-bold text-2xl text-charcoal mb-6">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal font-medium mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="Conte-me sobre seus objetivos..."
                    ></textarea>
                  </div>
                  <Button className="btn-primary w-full text-lg py-4">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;