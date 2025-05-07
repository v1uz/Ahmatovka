import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">О нас</h1>
            <p className="text-lg text-gray-600">
              AHMATOVKA - современный пятизвёздочный отель, окруженный бескрайним лесом.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-700 mb-6">
                AHMATOVKA - современный пятизвёздочный отель, окруженный бескрайним лесом. В живописном уголке Московской области, вдали от городской суеты, каждый гость может ощутить идеальное сочетание комфорта и природы.
              </p>
              <p className="text-gray-700 mb-6">
                Отель был основан в 2015 году с целью создать уникальное место, где гости могут насладиться природой, не отказываясь от комфорта и роскоши. С тех пор мы постоянно совершенствуемся, чтобы предоставить нашим гостям незабываемый опыт.
              </p>
              <p className="text-gray-700 mb-6">
                На территории отеля расположено 137 номеров различных категорий, начиная от уютных студио и заканчивая роскошными виллами.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12">Наша миссия</h2>
              <p className="text-gray-700 mb-6">
                Наша миссия - создать идеальное место для отдыха, где каждый гость чувствует себя особенным. Мы стремимся предоставить высочайший уровень сервиса и комфорта, сохраняя при этом гармонию с окружающей природой.
              </p>
              <p className="text-gray-700 mb-6">
                Мы верим, что отдых должен быть не только комфортным, но и наполненным яркими впечатлениями. Поэтому мы предлагаем широкий спектр активностей и развлечений для гостей всех возрастов.
              </p>
            </div>
            
            {/* Right Column - Images */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/api/placeholder/800/500" 
                    alt="Отель AHMATOVKA" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Территория отеля" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="Интерьер отеля" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши удобства</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5V19M9 5V19M3 9H21M3 15H21M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">7 Ресторанов</h3>
              <p className="text-gray-600">
                Рестораны с авторской, европейской, итальянской и русской кухней, а также винный погреб.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 15C4.13401 15 1 18.134 1 22H15C15 18.134 11.866 15 8 15Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3C17.6569 3 19 4.34315 19 6C19 7.65685 17.6569 9 16 9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 13C19.866 13 23 16.134 23 20H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Спа и Велнес</h3>
              <p className="text-gray-600">
                Велнес&спа с бассейном, бани, спортивный комплекс с термальной зоной и тренажёрным залом.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 12H6M18 12H21M12 3V6M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Развлечения</h3>
              <p className="text-gray-600">
                Конгресс-холл с кинотеатром и бильярдной комнатой, сафари-парк, конноспортивный клуб.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы забронировать?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами, чтобы забронировать номер или узнать больше о нашем отеле.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/booking" className="bg-white text-primary px-6 py-3 rounded font-medium">
                Забронировать номер
              </a>
              <a href="/contact" className="border border-white text-white px-6 py-3 rounded font-medium">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
