
import { Link } from 'react-router-dom';
import Icon from './ui/icon';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-b.svg" 
                alt="Айкидо Центр" 
                className="h-8 w-auto invert"
              />
              <span className="ml-2 text-xl font-semibold">Айкидо Центр</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Школа традиционного айкидо с 2008 года. Обучаем искусству гармонии и самозащиты детей и взрослых.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Главная</Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white">О нас</Link>
              </li>
              <li>
                <Link to="/#plans" className="text-gray-400 hover:text-white">Абонементы</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-400 hover:text-white">Отзывы</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-white">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="mt-0.5" />
                <span className="text-gray-400">ул. Мирная, 15, Москва</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Phone" size={18} className="mt-0.5" />
                <span className="text-gray-400">+7 (900) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Mail" size={18} className="mt-0.5" />
                <span className="text-gray-400">info@aikido-center.ru</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Понедельник - Пятница: 10:00 - 21:00</li>
              <li>Суббота: 10:00 - 18:00</li>
              <li>Воскресенье: 10:00 - 16:00</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Айкидо Центр. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white">Условия использования</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
