
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-b.svg" 
                alt="Айкидо Центр" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-primary">Айкидо Центр</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/#plans" className="text-gray-700 hover:text-primary transition-colors">
              Абонементы
            </Link>
            <Link to="/#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Отзывы
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </Link>
            <Button>Записаться</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} />
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/#about" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/#plans" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Абонементы
            </Link>
            <Link 
              to="/#testimonials" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link 
              to="/#contact" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button className="w-full mt-2">Записаться</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
