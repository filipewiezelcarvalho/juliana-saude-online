import { Calendar, Clock, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Agendamento = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container-section">
            <div className="text-center mb-16">
              <h1 className="font-poppins font-bold text-4xl md:text-6xl text-charcoal mb-6">
                Agende sua
                <span className="text-primary block">Consulta</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
                Transforme sua vida através da nutrição. Escolha a modalidade que melhor
                se adapta à sua rotina e comece sua jornada hoje mesmo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="card-elegant">
                <div className="flex items-center space-x-4 mb-6">
                  <MapPin className="text-primary" size={32} />
                  <h3 className="font-poppins font-bold text-2xl text-charcoal">
                    Consulta Presencial
                  </h3>
                </div>
                <p className="text-charcoal/80 mb-6">
                  Atendimento completo no consultório com avaliação física detalhada
                  e acompanhamento personalizado.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <Clock className="text-primary flex-shrink-0" size={16} />
                    <span className="text-charcoal/80">Duração: 60 minutos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Calendar className="text-primary flex-shrink-0" size={16} />
                    <span className="text-charcoal/80">Seg-Sex: 8h às 18h</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-4">R$ 180</div>
                  <Button className="btn-primary w-full text-lg py-4">
                    Agendar Presencial
                  </Button>
                </div>
              </div>

              <div className="card-elegant">
                <div className="flex items-center space-x-4 mb-6">
                  <Video className="text-primary" size={32} />
                  <h3 className="font-poppins font-bold text-2xl text-charcoal">
                    Consulta Online
                  </h3>
                </div>
                <p className="text-charcoal/80 mb-6">
                  Comodidade da sua casa com a mesma qualidade de atendimento
                  e plano alimentar personalizado.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <Clock className="text-primary flex-shrink-0" size={16} />
                    <span className="text-charcoal/80">Duração: 50 minutos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Calendar className="text-primary flex-shrink-0" size={16} />
                    <span className="text-charcoal/80">Horários flexíveis</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-4">R$ 150</div>
                  <Button className="btn-primary w-full text-lg py-4">
                    Agendar Online
                  </Button>
                </div>
              </div>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="card-elegant text-center bg-secondary/50">
              <h3 className="font-poppins font-bold text-2xl text-charcoal mb-6">
                Escolha seu Horário
              </h3>
              <div className="w-full h-96 bg-background rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <Calendar className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-charcoal/80 text-lg">
                    Calendário de agendamento será integrado aqui
                  </p>
                  <p className="text-charcoal/60 text-sm mt-2">
                    (Integração com Calendly)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agendamento;