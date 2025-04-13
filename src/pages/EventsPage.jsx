import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const EventsPage = () => {
  // Mock data for events
  const events = [
    {
      id: 1,
      title: 'Мастер-класс по приготовлению блюд русской кухни',
      date: '15 апреля 2025',
      location: 'Ресторан "Русская кухня"',
      description: 'Шеф-повар проведет увлекательный мастер-класс по приготовлению традиционных блюд русской кухни.',
      image: '/api/placeholder/400/250',
      ticket: 'По предварительной записи'
    },
    {
      id: 2,
      title: 'Экскурсия по территории отеля',
      date: '16 апреля 2025',
      location: 'Лобби отеля',
      description: 'Познавательная экскурсия по территории отеля с посещением всех основных объектов инфраструктуры.',
      image: '/api/placeholder/400/250',
      ticket: 'Вход свободный'
    },
    {
      id: 3,
      title: 'Концерт живой музыки',
      date: '17 апреля 2025',
      location: 'Лаунж-бар',
      description: 'Вечер живой музыки с выступлением джазового коллектива.',
      image: '/api/placeholder/400/250',
      ticket: 'Для гостей отеля'
    },
    {
      id: 4,
      title: 'Детская анимационная программа',
      date: '18 апреля 2025',
      location: 'Детский клуб',
      description: 'Увлекательные игры, конкурсы и мастер-классы для детей разных возрастов.',
      image: '/api/placeholder/400/250',
      ticket: 'Для гостей отеля'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Афиша</h1>
      <p className="text-gray-600 mb-8">
        Мероприятия и события, которые пройдут в отеле Cosmos Collection Izumrudny Les в ближайшее время.
      </p>
      
      <div className="space-y-8 mb-12">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-gray-600">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {event.ticket}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/" className="text-primary-DEFAULT hover:text-primary-dark">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default EventsPage;