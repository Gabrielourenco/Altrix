import { CheckCircle } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
              Automatize Seus Processos e 
              <span className="text-primary"> Aumente a Produtividade</span> 
              da Sua Empresa
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Consultoria especializada em automação de processos para PMEs usando Microsoft 365 e Google Platform. 
              Reduza custos, elimine retrabalho e escale seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('diagnosis')} 
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors text-center"
              >
                Diagnóstico Gratuito
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
              >
                Conhecer Serviços
              </button>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle className="w-5 h-5 text-primary mr-2" />
              <span>Sem compromisso • Análise personalizada • Resultados comprovados</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business automation and process optimization" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                <span className="text-sm font-semibold text-gray-dark">Processos Otimizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
