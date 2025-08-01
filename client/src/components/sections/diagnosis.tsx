import { Check, Clock } from "lucide-react";

export function Diagnosis() {
  const benefits = [
    {
      title: "Análise Completa dos Processos",
      description: "Mapeamento detalhado de todos os fluxos da sua empresa"
    },
    {
      title: "Identificação de Gargalos",
      description: "Pontos específicos que estão limitando seu crescimento"
    },
    {
      title: "Plano de Automação",
      description: "Roadmap prioritizado com impacto e investimento"
    },
    {
      title: "ROI Projetado",
      description: "Estimativa de economia e ganhos de produtividade"
    }
  ];

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de agendar meu diagnóstico gratuito de automação de processos.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="diagnosis" className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Diagnóstico Gratuito Personalizado
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Descubra exatamente onde sua empresa está perdendo tempo e dinheiro. Nossa análise detalhada 
          mostra oportunidades de automação específicas para seu negócio.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-semibold mb-6">O que você recebe:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button 
            onClick={openWhatsApp}
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Agendar Diagnóstico Gratuito
          </button>
          <div className="text-white/80 text-sm flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Resposta em até 2 horas
          </div>
        </div>

        <p className="text-white/60 text-sm">
          * Sem compromisso • Totalmente gratuito • Análise personalizada
        </p>
      </div>
    </section>
  );
}
