import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import BookingForm from '../components/booking/BookingForm';
import FeatureCard from '../components/home/FeatureCard';
import RoomCard from '../components/home/RoomCard';
import OfferCard from '../components/home/OfferCard';

const HomePage = () => {
  const accommodationTypes = [
    {
      id: 1,
      title: 'Номера гостиницы Crystal',
      image: '/api/placeholder/400/320',
      link: '/accommodation/crystal',
    },
    {
      id: 2,
      title: 'Номера Дуплекс',
      image: '/api/placeholder/400/320',
      link: '/accommodation/duplex',
    },
    {
      id: 3,
      title: 'Коттеджи',
      image: '/api/placeholder/400/320',
      link: '/accommodation/cottages',
    },
    {
      id: 4,
      title: 'Виллы',
      image: '/api/placeholder/400/320',
      link: '/accommodation/villas',
    }
  ];
  
  const offers = [
    {
      id: 1,
      title: 'Подарочный сертификат в AHMATOVKA',
      image: '/api/placeholder/400/320',
      link: '/offers/gift-certificate'
    },
    {
      id: 2,
      title: 'Длинные выходные в AHMATOVKA',
      image: '/api/placeholder/400/320',
      link: '/offers/long-weekend'
    }
  ];
  
  const features = [
    {
      id: 1,
      icon: '/api/placeholder/64/64',
      title: 'Чистая родниковая вода',
      description: 'Ахматовка - это чистая родниковая вода, которая проходит через 7 фильтров',
      buttonText: 'Чистая родниковая вода',
      buttonLink: '/features/helicopter'
    },
    {
      id: 2,
      icon: '/api/placeholder/64/64',
      title: 'Падел корты',
      description: 'Падел корты - это уникальная возможность для активного отдыха',
      buttonText: 'Падел корты',
      buttonLink: '/features/location'
    },
    {
      id: 3,
      icon: '/api/placeholder/64/64',
      title: 'Традиционные русские бани',
      description: 'Традионные русские бани - это уникальная возможность для активного отдыха',
      buttonText: 'Традиционные русские бани',
      buttonLink: '/features/offers'
    },
    {

      id: 4,
      icon: '/api/placeholder/64/64',
      title: 'Wi-Fi',
      description: 'На территории отеля предоставляется Wi-Fi',
      buttonText: 'Wi-Fi',
      buttonLink: '/features/wifi'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        >
        <source src="/videos/hotel-hero.mp4" type="video/mp4" />
        {/* Fallback image if video cannot load */}
        <img 
          src="https://placehold.co/1200x600" 
          alt="AHMATOVKA Hotel" 
          className="w-full h-full object-cover"
        />
          </video>
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-white mb-2">
              Ahmatovka
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Насладитесь природой в условиях истинного комфорта
            </h1>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 -mt-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Акции и предложения</h2>
            <div className="flex items-center">
              <Link to="/offers" className="text-gray-700 hover:text-gray-900 flex items-center mr-4">
                <span>все акции</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map(offer => (
              <OfferCard 
                key={offer.id}
                title={offer.title}
                image={offer.image}
                link={offer.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Проживание</h2>
            <div className="flex items-center">
              <Link to="/accommodation" className="text-gray-700 hover:text-gray-900 flex items-center mr-4">
                <span>Все</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationTypes.map(room => (
              <RoomCard 
                key={room.id}
                title={room.title}
                image={room.image}
                link={room.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Restaurant Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Рестораны</h2>
            <div className="flex items-center">
              <Link to="/restaurants" className="text-gray-700 hover:text-gray-900 flex items-center mr-4">
                <span>Все</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Mock restaurant cards - In a real implementation, these would come from your data */}
            {[1, 2, 3, 4].map(id => (
              <div key={id} className="rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={`/api/placeholder/300/200`} 
                  alt={`Restaurant ${id}`} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Наши преимущества</h2>
            <div className="flex space-x-2">
              <button className="p-2 border border-gray-300 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(feature => (
              <FeatureCard 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                buttonText={feature.buttonText}
                buttonLink={feature.buttonLink}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="AHMATOVKA Hotel" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">О нас</h2>
              <p className="text-gray-700 mb-6">
                AHMATOVKA - современный пятизвёздочный отель, окруженный бескрайним лесом. В живописном уголке Московской области, вдали от городской суеты, каждый гость может ощутить идеальное сочетание комфорта и природы.
              </p>
              <p className="text-gray-700 mb-6">
                На территории отеля расположено 137 номеров различных категорий, начиная от уютных студио и заканчивая роскошными виллами.
              </p>
              <p className="text-gray-700 mb-6">
                Отель продумал весь досуг для того, чтобы все гости в полной мере смогли расслабиться и отдохнуть. На территории в 220 га расположены: 7 ресторанов с авторской, европейской, итальянской и русской кухней, винный погреб, велнес&спа с бассейном, бани, спортивный комплекс с термальной зоной, тренажёрным залом и бассейном, торговая галерея, конгресс-холл с кинотеатром и бильярдной комнатой, сафари-парк, конноспортивный клуб, прокат, детский клуб, детские площадки и панда-парк.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;