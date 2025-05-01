
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="min-h-[90vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 z-10">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <div className="flex items-center">
                <Icon name="Calendar" size={16} className="mr-1" />
                <span>20-25 Сентября 2025</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Международные <span className="text-primary">Игры Айкидо</span> 2025
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-lg">
              Объединяя мастеров айкидо со всего мира на крупнейшем международном событии года
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="animate-fade-in flex items-center gap-2">
                <Icon name="FileText" size={18} />
                Регистрация участника
              </Button>
              <Button size="lg" variant="outline" className="animate-fade-in delay-75 flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                Как добраться
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-gray-600">стран</p>
              </div>
              <div className="text-center p-3">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">участников</p>
              </div>
              <div className="text-center p-3">
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-gray-600">дней</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 z-0">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1586975223935-366dd5a5dc55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Международные Игры Айкидо" 
                className="relative rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center text-primary font-semibold">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Волнистый разделитель */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,80C672,64,768,32,864,21.3C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
