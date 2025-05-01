
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486326658981-ed68abe5868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Тренировка айкидо" 
                className="relative rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 right-4 w-32 h-32 bg-slate-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1621956838481-f8f616950454?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Деталь тренировки" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">О нашей школе айкидо</h2>
            <p className="mt-4 text-lg text-gray-600">
              "Айкидо Центр" — это современная школа традиционного японского боевого искусства, основанная в 2008 году. Мы практикуем айкидо в его истинном виде, сохраняя традиции, заложенные основателем Морихеем Уэсибой.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Trophy" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Опытные мастера</h3>
                  <p className="text-gray-600">Инструкторы с международной сертификацией</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Для всех возрастов</h3>
                  <p className="text-gray-600">Группы для детей от 5 лет и взрослых</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Map" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Три додзё</h3>
                  <p className="text-gray-600">Удобное расположение в разных районах города</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Medal" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Аттестации</h3>
                  <p className="text-gray-600">Регулярные экзамены на пояса (кю и даны)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="mr-4">
                Расписание занятий
              </Button>
              <Button variant="outline">
                Наши инструкторы
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
