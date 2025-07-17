import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, ArrowRight, CheckCircle, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Cabeçalho Principal */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Sua jornada começa agora</span>
            </div>
            
            <h2 className="font-poppins text-3xl md:text-5xl font-bold leading-tight">
              Pronta para transformar
              <span className="block">sua relação com a alimentação?</span>
            </h2>
            
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Não espere mais para cuidar da sua saúde. Agende sua consulta hoje mesmo 
              e descubra como a nutrição pode transformar sua vida de forma definitiva.
            </p>
          </div>

          {/* Benefícios Rápidos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="flex items-center space-x-3 bg-white/10 rounded-2xl p-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Primeira consulta</p>
                <p className="text-sm opacity-80">Avaliação completa</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 rounded-2xl p-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Resultados rápidos</p>
                <p className="text-sm opacity-80">Já na primeira semana</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/10 rounded-2xl p-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Suporte contínuo</p>
                <p className="text-sm opacity-80">Acompanhamento humanizado</p>
              </div>
            </div>
          </div>

          {/* CTAs Principais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/agendamento">
              <Button 
                size="lg" 
                className="bg-white text-sage-green hover:bg-white/90 font-semibold px-8 py-4 rounded-full group shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Minha Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sage-green font-semibold px-8 py-4 rounded-full"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Tirar Dúvidas no WhatsApp
            </Button>
          </div>

          {/* Garantia e Confiança */}
          <div className="bg-white/10 rounded-3xl p-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-4">
                <h3 className="font-poppins text-xl font-bold">
                  💚 Garantia de Satisfação
                </h3>
                <p className="opacity-90 leading-relaxed">
                  Se após a primeira consulta você não estiver completamente satisfeita 
                  com o atendimento, devolvemos 100% do valor investido.
                </p>
              </div>
              
              <div className="text-left space-y-4">
                <h3 className="font-poppins text-xl font-bold">
                  🏆 Profissional Certificada
                </h3>
                <p className="opacity-90 leading-relaxed">
                  CRN-3 12345 • Nutricionista clínica com +8 anos de experiência 
                  e centenas de transformações reais.
                </p>
              </div>
            </div>
          </div>

          {/* Urgência Suave */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
            <p className="text-lg font-medium">
              ⏰ <strong>Últimas vagas disponíveis para este mês!</strong>
            </p>
            <p className="opacity-80 mt-2">
              Devido à alta demanda, estou com poucas vagas disponíveis. 
              Garante já a sua e comece sua transformação ainda esta semana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;