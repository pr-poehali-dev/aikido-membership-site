
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="min-h-[85vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Откройте для себя древнее искусство <span className="text-primary">айкидо</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-lg">
              Гармония разума и тела, самозащита и духовное развитие в одной из лучших школ России
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="animate-fade-in">
                Записаться на пробное занятие
              </Button>
              <Button size="lg" variant="outline" className="animate-fade-in delay-75">
                Узнать больше
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">лет опыта</p>
              </div>
              <div className="text-center p-3">
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-gray-600">учеников</p>
              </div>
              <div className="text-center p-3">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-gray-600">додзё в городе</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 z-0">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1586975223935-366dd5a5dc55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                alt="Тренировка айкидо" 
                className="relative rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
