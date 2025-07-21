import { Clock, AlertTriangle, TrendingUp, Database, EyeOff, DollarSign } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: Clock,
      title: "Perda de Tempo com Tarefas Manuais",
      description: "Colaboradores gastam horas em atividades repetitivas que poderiam ser automatizadas, reduzindo a produtividade.",
      color: "red"
    },
    {
      icon: AlertTriangle,
      title: "Erros e Retrabalho Constante",
      description: "Processos manuais geram erros frequentes, causando retrabalho e prejudicando a qualidade do serviço.",
      color: "orange"
    },
    {
      icon: TrendingUp,
      title: "Dificuldade para Escalar",
      description: "Sem automação, é impossível crescer sem contratar proporcionalmente mais funcionários.",
      color: "yellow"
    },
    {
      icon: Database,
      title: "Dados Espalhados",
      description: "Informações importantes ficam perdidas em planilhas e sistemas desconectados.",
      color: "purple"
    },
    {
      icon: EyeOff,
      title: "Falta de Visibilidade",
      description: "Gestores não têm visão clara do que está acontecendo nos processos da empresa.",
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Custos Elevados",
      description: "Ineficiência operacional gera custos desnecessários e reduz a margem de lucro.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-500",
      orange: "bg-orange-100 text-orange-500",
      yellow: "bg-yellow-100 text-yellow-500",
      purple: "bg-purple-100 text-purple-500",
      blue: "bg-blue-100 text-blue-500"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-500";
  };

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-dark mb-4">
            Sua Empresa Ainda Sofre Com Estes Problemas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identificamos os principais gargalos que impedem o crescimento das PMEs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${getColorClasses(point.color)} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
