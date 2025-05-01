
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">О Международных Играх Айкидо</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Престижное событие, объединяющее ведущих мастеров и практикующих айкидо со всего мира для обмена опытом, демонстрации техник и развития боевого искусства в духе гармонии и мира
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1526793248754-cf6014a378e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Международные Игры Айкидо" 
                className="relative rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 right-4 w-32 h-32 bg-slate-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600881333539-092e3759d405?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Семинар по айкидо" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900">История и традиции</h3>
            <p className="mt-4 text-lg text-gray-600">
              Международные Игры Айкидо проводятся с 1985 года и стали важнейшим событием в мире айкидо. Мероприятие продолжает традиции, заложенные основателем айкидо Морихеем Уэсибой, и служит платформой для развития искусства мира во всем мире.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Международный масштаб</h3>
                  <p className="text-gray-600">Участники из более чем 30 стран мира</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Для всех уровней</h3>
                  <p className="text-gray-600">От начинающих до мастеров высокого уровня</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Семинары и мастер-классы</h3>
                  <p className="text-gray-600">Обучение у признанных экспертов айкидо</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-primary/10 rounded-lg">
                  <Icon name="Medal" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Демонстрации и награды</h3>
                  <p className="text-gray-600">Показательные выступления и признание достижений</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="mr-4 flex items-center gap-2">
                <Icon name="FileText" size={18} />
                Программа мероприятия
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                Расписание
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
