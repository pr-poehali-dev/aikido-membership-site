
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

const testimonials = [
  {
    text: "Я практикую айкидо уже третий год, и каждое занятие - это новое открытие. Профессиональные инструкторы и дружелюбная атмосфера делают тренировки особенными.",
    author: "Алексей Моргунов",
    position: "Практикует 3 года",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    text: "Начала заниматься в этой школе полгода назад. Меня привлекла философия айкидо - не победить противника, а найти гармонию. Качество преподавания на высшем уровне.",
    author: "Мария Светлова",
    position: "Практикует 6 месяцев",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    text: "Привел сюда сына, а в итоге заинтересовался сам. Теперь занимаемся вместе. Это не просто боевое искусство, но и философия жизни, помогающая в повседневной жизни.",
    author: "Игорь Вершинин",
    position: "Практикует 1 год",
    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Что говорят ученики</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Истории наших учеников о практике айкидо в нашей школе
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <Icon name="Quote" size={30} />
                </div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
