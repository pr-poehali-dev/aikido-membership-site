
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

const plans = [
  {
    name: "Стартовый",
    price: "3 900",
    duration: "месяц",
    description: "Идеально для начинающих",
    features: [
      "8 занятий в месяц",
      "Базовый инвентарь",
      "Доступ к раздевалкам и душевым",
      "Помощь инструктора",
    ],
    popular: false,
    icon: "Flame"
  },
  {
    name: "Стандартный",
    price: "5 900",
    duration: "месяц",
    description: "Самый популярный выбор",
    features: [
      "12 занятий в месяц",
      "Полный комплект инвентаря",
      "Доступ ко всем зонам додзё",
      "Персональная консультация",
      "Участие в семинарах"
    ],
    popular: true,
    icon: "Star"
  },
  {
    name: "Премиум",
    price: "8 900",
    duration: "месяц",
    description: "Для серьезной практики",
    features: [
      "Безлимитное посещение",
      "Персональные тренировки",
      "VIP-зона отдыха",
      "Приоритетная запись на мероприятия",
      "Участие в соревнованиях",
      "Скидка 15% на товары школы"
    ],
    popular: false,
    icon: "Crown"
  },
];

const SubscriptionPlans = () => {
  return (
    <section id="plans" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Абонементы на занятия</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф и начните свой путь в искусстве айкидо
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                plan.popular 
                  ? 'border-primary shadow-md' 
                  : 'border-slate-200 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Популярный
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-slate-100'}`}>
                    <Icon name={plan.icon} size={20} />
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price} ₽</span>
                  <span className="text-slate-500">/{plan.duration}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${!plan.popular && 'bg-white text-primary border-primary hover:bg-primary/10'}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Выбрать абонемент
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Есть вопросы по абонементам? <a href="#contact" className="text-primary font-medium hover:underline">Свяжитесь с нами</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
