import React from 'react';
import { Link } from 'react-router-dom';

const OffersPage = () => {
  // Mock data for offers
  const offers = [
    {
      id: 1,
      title: 'Подарочный сертификат в AHMATOVKA',
      description: 'Подарите своим близким незабываемые впечатления и отдых премиум-класса в окружении природы.',
      image: '/api/placeholder/400/250',
      link: '/offers/gift-certificate'
    },
    {
      id: 2,
      title: 'Длинные выходные в AHMATOVKA',
      description: 'Проведите длинные выходные в гармонии с природой и насладитесь всеми удобствами нашего отеля.',
      image: '/api/placeholder/400/250',
      link: '/offers/long-weekend'
    },
    {
      id: 3,
      title: 'Раннее бронирование',
      description: 'Забронируйте номер заранее и получите скидку до 15% на проживание.',
      image: '/api/placeholder/400/250',
      link: '/offers/early-booking'
    },
    {
      id: 4,
      title: 'Романтический отдых',
      description: 'Особое предложение для влюбленных пар с романтическим ужином и spa-процедурами.',
      image: '/api/placeholder/400/250',
      link: '/offers/romantic'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Акции и предложения</h1>
      <p className="text-gray-600 mb-8">
        Специальные предложения и акции для гостей отеля AHMATOVKA.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {offers.map(offer => (
          <div key={offer.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{offer.title}</h2>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <Link 
                to={offer.link}
                className="inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white py-2 px-4 rounded transition"
              >
                Подробнее
              </Link>
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

export default OffersPage;