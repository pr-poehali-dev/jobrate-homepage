import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const industries = [
    { name: 'IT и технологии', icon: 'Monitor', count: '1,240' },
    { name: 'Финансы', icon: 'CreditCard', count: '890' },
    { name: 'Ритейл', icon: 'ShoppingBag', count: '756' },
    { name: 'Медицина', icon: 'Heart', count: '534' },
    { name: 'Образование', icon: 'GraduationCap', count: '423' },
    { name: 'Производство', icon: 'Factory', count: '612' },
  ];

  const popularCompanies = [
    { name: 'Яндекс', rating: 4.2, reviews: 1243, logo: '🟡' },
    { name: 'Сбер', rating: 3.8, reviews: 2156, logo: '🟢' },
    { name: 'ВКонтакте', rating: 4.0, reviews: 834, logo: '🔵' },
    { name: 'Озон', rating: 3.5, reviews: 567, logo: '🟣' },
    { name: 'Wildberries', rating: 3.7, reviews: 789, logo: '🟤' },
    { name: 'Тинькофф', rating: 4.3, reviews: 1098, logo: '🟡' },
  ];

  const cities = [
    { name: 'Москва', companies: 12450 },
    { name: 'Санкт-Петербург', companies: 5230 },
    { name: 'Новосибирск', companies: 1890 },
    { name: 'Екатеринбург', companies: 1567 },
    { name: 'Казань', companies: 1234 },
    { name: 'Нижний Новгород', companies: 987 },
  ];

  const faqItems = [
    {
      question: 'Как оставить отзыв о работодателе?',
      answer: 'Зарегистрируйтесь на платформе, найдите компанию и нажмите кнопку "Оставить отзыв". Все отзывы проходят модерацию.'
    },
    {
      question: 'Откуда берутся данные о зарплатах?',
      answer: 'Данные собираются из отзывов сотрудников, опросов и открытых источников. Мы проверяем достоверность информации.'
    },
    {
      question: 'Можно ли анонимно оставить отзыв?',
      answer: 'Да, все отзывы публикуются анонимно. Мы не раскрываем личные данные авторов отзывов.'
    },
    {
      question: 'Как работает рейтинг компаний?',
      answer: 'Рейтинг формируется на основе отзывов сотрудников по критериям: зарплата, условия труда, руководство, карьерный рост.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl">
              JR
            </div>
            <span className="text-2xl font-bold text-primary">JobRate</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Компании</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Вакансии</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Зарплаты</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            JobRate — отзывы о работодателях
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Найдите честную информацию о компаниях, зарплатах и условиях работы от реальных сотрудников
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Поиск компаний..."
              className="flex-1"
            />
            <Button>
              <Icon name="Search" size={20} />
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">⭐ 50,000+ отзывов</Badge>
            <Badge variant="secondary">🏢 12,000+ компаний</Badge>
            <Badge variant="secondary">💰 Актуальные зарплаты</Badge>
          </div>
        </div>
      </section>

      {/* Popular Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные отрасли</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name={industry.icon} size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-1 text-sm">{industry.name}</h3>
                  <p className="text-xs text-muted-foreground">{industry.count} компаний</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline">Все отрасли</Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8 text-center max-w-4xl mx-auto">
            Представленные отрасли охватывают ключевые сферы российской экономики. Каждая отрасль имеет свои особенности в плане карьерного роста, уровня зарплат и условий труда.
          </p>
        </div>
      </section>

      {/* Popular Companies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные компании</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {popularCompanies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{company.logo}</div>
                      <div>
                        <h3 className="font-semibold">{company.name}</h3>
                        <div className="flex items-center space-x-1">
                          <span className="text-amber-500">★</span>
                          <span className="text-sm font-medium">{company.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {company.reviews} отзывов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline">Все компании</Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8 text-center max-w-4xl mx-auto">
            Рейтинг компаний формируется на основе отзывов реальных сотрудников и отражает качество рабочих мест, уровень менеджмента и общую удовлетворенность работой.
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Города</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {cities.map((city, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h3 className="font-semibold text-lg mb-1">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">{city.companies.toLocaleString()} компаний</p>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8 text-center max-w-4xl mx-auto">
            География нашей платформы охватывает крупнейшие города России, предоставляя информацию о работодателях во всех регионах страны.
          </p>
        </div>
      </section>

      {/* SEO Information Blocks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <CardTitle>Опыт прохождения собеседований</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Читайте реальные отзывы о процессе найма, вопросах на собеседованиях и требованиях работодателей. 
                  Подготовьтесь к интервью, изучив опыт других кандидатов.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="DollarSign" size={40} className="text-accent mb-4" />
                <CardTitle>Зарплаты сотрудников — честная статистика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Актуальные данные о зарплатах по должностям и компаниям. Информация основана на отзывах 
                  реальных сотрудников и регулярно обновляется.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Building" size={40} className="text-primary mb-4" />
                <CardTitle>Честная информация о компаниях</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Подробные отзывы о корпоративной культуре, условиях труда, руководстве и возможностях 
                  карьерного роста в различных организациях.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl">
                  JR
                </div>
                <span className="text-xl font-bold">JobRate</span>
              </div>
              <p className="text-sm text-gray-400">
                Платформа отзывов о работодателях с актуальной информацией о зарплатах и условиях труда.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Зарплаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 JobRate. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;