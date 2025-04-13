import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import RoomCard from '../components/home/RoomCard';

const AccommodationPage = () => {
  // No language context needed for now
  
  // Mock data for accommodation types
  const accommodationTypes = [
    {
      id: 1,
      title: 'Номера гостиницы Crystal',
      image: '/api/placeholder/400/320',
      link: '/accommodation/crystal',
      description: 'Современные и уютные номера с прекрасным видом на лес',
    },
    {
      id: 2,
      title: 'Номера Дуплекс',
      image: '/api/placeholder/400/320',
      link: '/accommodation/duplex',
      description: 'Двухуровневые номера для комфортного отдыха семьей или компанией',
    },
    {
      id: 3,
      title: 'Коттеджи',
      image: '/api/placeholder/400/320',
      link: '/accommodation/cottages',
      description: 'Отдельно стоящие коттеджи с собственной территорией в окружении леса',
    },
    {
      id: 4,
      title: 'Виллы',
      image: '/api/placeholder/400/320',
      link: '/accommodation/villas',
      description: 'Премиальные виллы с эксклюзивным дизайном и максимальным уровнем комфорта',
    }
  ];

  return (
    <div>
      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Главная</Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-gray-900">Проживание</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Проживание</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 max-w-3xl">
              В отеле AHMATOVKA представлены различные варианты размещения: от уютных номеров до просторных вилл. Каждый тип проживания оснащен всем необходимым для комфортного отдыха.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accommodationTypes.map(room => (
              <div key={room.id} className="flex flex-col">
                <RoomCard 
                  title={room.title}
                  image={room.image}
                  link={room.link}
                />
                <p className="mt-4 text-gray-600">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Удобства в номерах</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Стандартные удобства</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Климат-контроль</li>
                <li>• Бесплатный Wi-Fi</li>
                <li>• Телевизор со спутниковыми каналами</li>
                <li>• Мини-бар</li>
                <li>• Чайная станция</li>
                <li>• Сейф</li>
                <li>• Телефон</li>
                <li>• Рабочая зона</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Ванная комната</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Душевая кабина или ванна</li>
                <li>• Фен</li>
                <li>• Халаты и тапочки</li>
                <li>• Туалетные принадлежности</li>
                <li>• Полотенца</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Дополнительно в виллах и коттеджах</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Кухня или кухонная зона</li>
                <li>• Гостиная с камином</li>
                <li>• Терраса или балкон</li>
                <li>• Барбекю-зона (в некоторых коттеджах)</li>
                <li>• Панорамные окна с видом на лес</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Забронировать номер</h2>
            <p className="text-gray-600 mb-8">
              Выберите идеальный вариант размещения для вашего отдыха в AHMATOVKA и погрузитесь в атмосферу природного комфорта.
            </p>
            <Link 
              to="/booking" 
              className="inline-block bg-[#a08b7b] hover:bg-[#8a7667] text-white py-3 px-8 rounded font-medium transition duration-200"
            >
              Перейти к бронированию
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;