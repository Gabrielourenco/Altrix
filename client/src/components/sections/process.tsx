import { Clock, FileText, ServerCog, Users } from "lucide-react";

export function Process() {
  const processSteps = [
    {
      number: 1,
      title: "Diagnóstico Gratuito",
      description: "Analisamos seus processos atuais, identificamos gargalos e oportunidades de melhoria através de uma auditoria detalhada.",
      duration: "Duração: 1-2 horas",
      icon: Clock
    },
    {
      number: 2,
      title: "Proposta Personalizada",
      description: "Criamos uma proposta sob medida com cronograma, investimento e resultados esperados baseados na análise realizada.",
      duration: "Duração: 2-3 dias",
      icon: FileText
    },
    {
      number: 3,
      title: "Implementação",
      description: "Desenvolvemos e configuramos as automações conforme planejado, com testes rigorosos e acompanhamento constante.",
      duration: "Duração: 2-8 semanas",
      icon: ServerCog
    },
    {
      number: 4,
      title: "Treinamento e Suporte",
      description: "Capacitamos sua equipe para operar as novas ferramentas e oferecemos suporte contínuo para garantir o sucesso.",
      duration: "Suporte: 30 dias inclusos",
      icon: Users
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-dark mb-4">
            Como Funciona Nossa Metodologia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo estruturado e comprovado para garantir resultados excepcionais
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden lg:block"></div>
          
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative mb-12 lg:mb-24">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="flex items-center lg:hidden mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mr-4">
                        {step.number}
                      </div>
                    </div>
                    <div className="hidden lg:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-16 lg:h-16 lg:bg-primary lg:text-white lg:rounded-full lg:flex lg:items-center lg:justify-center lg:text-2xl lg:font-bold lg:z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className={`mt-4 lg:mt-0 ${isEven ? '' : 'lg:order-1 lg:text-right'}`}>
                    <h3 className="text-2xl font-semibold text-gray-dark mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                    <div className={`flex items-center text-primary ${isEven ? '' : 'lg:justify-end'}`}>
                      <IconComponent className="w-5 h-5 mr-2" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => scrollToSection('diagnosis')} 
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Começar Agora - Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
