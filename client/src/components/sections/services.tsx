import { Bot, BarChart3, Table2, Users, Smartphone, GraduationCap } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Bot,
      title: "Automação de Fluxos",
      description: "Automatize processos repetitivos com Power Automate e Google Apps Script, eliminando tarefas manuais.",
      tools: ["Power Automate", "Apps Script"]
    },
    {
      icon: BarChart3,
      title: "Dashboards Inteligentes",
      description: "Crie painéis de controle com Power BI e Looker Studio para tomada de decisões baseada em dados.",
      tools: ["Power BI", "Looker Studio"]
    },
    {
      icon: Table2,
      title: "Planilhas Avançadas",
      description: "Transforme planilhas simples em sistemas inteligentes com Excel e Google Sheets.",
      tools: ["Excel Avançado", "Google Sheets"]
    },
    {
      icon: Users,
      title: "Colaboração Digital",
      description: "Otimize a colaboração da equipe com SharePoint e Teams, centralizando informações.",
      tools: ["SharePoint", "Teams"]
    },
    {
      icon: Smartphone,
      title: "Apps Personalizados",
      description: "Desenvolva aplicativos customizados com AppSheet para necessidades específicas do seu negócio.",
      tools: ["AppSheet", "Power Apps"]
    },
    {
      icon: GraduationCap,
      title: "Treinamento de Equipes",
      description: "Capacite sua equipe para usar as ferramentas de automação de forma independente.",
      tools: ["Treinamentos", "Suporte"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-dark mb-4">
            Nossos Serviços de Automação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções personalizadas usando as melhores ferramentas do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-sm text-gray-500">
                  {service.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="inline-block bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('diagnosis')} 
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center"
          >
            Descobrir Qual Serviço Preciso
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
