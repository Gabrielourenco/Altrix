import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      testimonial: "A Altrix automatizou nosso processo de vendas e reduzimos o tempo de resposta ao cliente em 70%. O resultado foi um aumento de 35% no faturamento."
    },
    {
      name: "Maria Santos",
      position: "Diretora, Varejo Plus",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      testimonial: "Eliminou completamente os erros em nosso controle de estoque. Agora temos visibilidade total e conseguimos tomar decisões baseadas em dados reais."
    },
    {
      name: "Roberto Lima",
      position: "Gerente, Logística Pro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      testimonial: "O dashboard criado pela Altrix nos deu insights que nunca tivemos antes. Conseguimos otimizar nossa operação e reduzir custos em 25%."
    }
  ];

  const stats = [
    { value: "85%", label: "Redução no tempo de processos" },
    { value: "92%", label: "Redução de erros operacionais" },
    { value: "150%", label: "Aumento na produtividade" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-dark mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus processos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <div className="font-semibold text-gray-dark">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-dark mb-4">Resultados Comprovados</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
