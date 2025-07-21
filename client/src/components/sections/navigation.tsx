import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="text-2xl font-bold text-primary">Altrix</div>
            <div className="text-gray-dark ml-1">Consultoria</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-dark hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="text-gray-dark hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-dark hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-dark hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-gray-dark hover:text-primary transition-colors w-full text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="block px-3 py-2 text-gray-dark hover:text-primary transition-colors w-full text-left"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block px-3 py-2 text-gray-dark hover:text-primary transition-colors w-full text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
