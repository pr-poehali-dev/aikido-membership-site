
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
                alt="Международные Игры Айкидо" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-primary">Игры Айкидо</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/#about" className="text-gray-700 hover:text-primary transition-colors">
              О событии
            </Link>
            <Link to="/#schedule" className="text-gray-700 hover:text-primary transition-colors">
              Программа
            </Link>
            <Link to="/#participants" className="text-gray-700 hover:text-primary transition-colors">
              Участники
            </Link>
            <Link to="/#gallery" className="text-gray-700 hover:text-primary transition-colors">
              Галерея
            </Link>
            <Button>Регистрация</Button>
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
              О событии
            </Link>
            <Link 
              to="/#schedule" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа
            </Link>
            <Link 
              to="/#participants" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Участники
            </Link>
            <Link 
              to="/#gallery" 
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </Link>
            <Button className="w-full mt-2">Регистрация</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
