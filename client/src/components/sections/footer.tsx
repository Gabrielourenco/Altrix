export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "Automação de Fluxos",
    "Dashboards Inteligentes", 
    "Planilhas Avançadas",
    "Colaboração Digital",
    "Apps Personalizados"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "#"
    },
    {
      name: "Instagram", 
      icon: "fab fa-instagram",
      url: "#"
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook", 
      url: "#"
    },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      url: "#"
    }
  ];

  return (
    <footer className="bg-gray-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="text-3xl font-bold text-primary">Altrix</div>
              <div className="text-white ml-2">Consultoria</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especializados em automação de processos para PMEs. Transformamos operações 
              manuais em sistemas inteligentes e eficientes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>(11) 99999-9999</li>
              <li>contato@altrixconsultoria.com</li>
              <li>Atendimento Nacional</li>
              <li>Segunda a Sexta: 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Altrix Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
      
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
    </footer>
  );
}
