import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

import BookingForm from '../components/booking/BookingForm';
import FeatureCard from '../components/home/FeatureCard';
import RoomCard from '../components/home/RoomCard';
import OfferCard from '../components/home/OfferCard';
import RestaurantCard from '../components/home/RestaurantCard';

const HomePage = () => {
  // Mock data for placeholders until real images are available
  const mockImagePath = '/api/placeholder/400/320';

  const accommodationTypes = [
    {
      id: 1,
      title: 'Номера гостиницы Crystal',
      image: '/images/accommodations/crystal.jpg',
      link: '/accommodation/crystal',
    },
    {
      id: 2,
      title: 'Номера Дуплекс',
      image: '/images/accommodations/duplex.jpg',
      link: '/accommodation/duplex',
    },
    {
      id: 3,
      title: 'Коттеджи',
      image: '/images/accommodations/cottages.jpg',
      link: '/accommodation/cottages',
    },
    {
      id: 4,
      title: 'Виллы',
      image: '/images/accommodations/villas.jpg',
      link: '/accommodation/villas',
    }
  ];

  const offers = [
    {
      id: 1,
      title: 'Подарочный сертификат в AHMATOVKA',
      image: mockImagePath,
      link: '/offers/gift-certificate'
    },
    {
      id: 2,
      title: 'Длинные выходные в AHMATOVKA',
      image: mockImagePath,
      link: '/offers/long-weekend'
    }
  ];

  const features = [
    {
      id: 1,
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#485DA7" strokeWidth="2"/>
        <path d="M3 12H6M18 12H21M12 3V6M12 18V21" stroke="#485DA7" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      title: 'Чистая родниковая вода',
      description: 'Ахматовка - это чистая родниковая вода, которая проходит через 7 фильтров',
      buttonText: 'Подробнее',
      buttonLink: '/features/spring-water'
    },
    {
      id: 2,
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7H12.01M9 11H9.01M15 11H15.01M9 15H9.01M12 15H12.01M15 15H15.01M5 5H19V19H5V5Z" stroke="#485DA7" strokeWidth="2" strokeLinecap="round"/>
      </svg>,
      title: 'Падел корты',
      description: 'Падел корты - это уникальная возможность для активного отдыха',
      buttonText: 'Подробнее',
      buttonLink: '/features/paddle-courts'
    },
    {
      id: 3,
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5V19M9 5V19M3 9H21M3 15H21M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z" stroke="#485DA7" strokeWidth="2"/>
      </svg>,
      title: 'Традиционные русские бани',
      description: 'Традиционные русские бани - это уникальная возможность для оздоровления',
      buttonText: 'Подробнее',
      buttonLink: '/features/russian-saunas'
    },
    {
      id: 4,
      icon: <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.11107 16.4039C10.2598 18.5526 13.7402 18.5526 15.8889 16.4039C18.0376 14.2552 18.0376 10.7748 15.8889 8.62611C13.7402 6.47743 10.2598 6.47743 8.11107 8.62611C5.96239 10.7748 5.96239 14.2552 8.11107 16.4039Z" stroke="#485DA7" strokeWidth="2"/>
        <path d="M18.364 5.63605C22.8787 10.1508 22.8787 17.4853 18.364 22C13.8492 26.5147 6.51472 26.5147 2 22C-2.51472 17.4853 -2.51472 10.1508 2 5.63605C6.51472 1.12132 13.8492 1.12132 18.364 5.63605" stroke="#485DA7" strokeWidth="2"/>
      </svg>,
      title: 'Wi-Fi',
      description: 'На территории отеля предоставляется высокоскоростной Wi-Fi',
      buttonText: 'Подробнее',
      buttonLink: '/features/wifi'
    }
  ];

  const restaurants = [
    {
      id: 1,
      title: 'Ресторан Ахматовка',
      image: '/image/restaurants/restaurant1.jpg',
      link: '/restaurants/ahmatovka'
    },
    {
      id: 2,
      title: 'Ресторан Ахматовка',
      image: '/image/restaurants/restaurant1.jpg',
      link: '/restaurants/ahmatovka',
    },
    {
      id: 3,
      title: 'Ресторан Ахматовка',
      image: '/image/restaurants/restaurant1.jpg',
      link: '/restaurants/ahmatovka',
    },
    {
      id: 4,
      title: 'Ресторан Ахматовка',
      image: '/image/restaurants/restaurant1.jpg',
      link: '/restaurants/ahmatovka',
    }
  ];

  return (
    <div>
{/* Hero Section */}
      <section className="relative h-screen max-h-[700px]">
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
              src="/api/placeholder/1920/700"
              alt="AHMATOVKA Hotel"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-white mb-2">
              Официальный сайт отеля
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AHMATOVKA
            </h1>
            <p className="text-sm uppercase tracking-widest text-white mb-5">
              Насладитесь природой в условиях истинного комфорта
            </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.id}
                title={restaurant.title}
                image={restaurant.image}
                link={restaurant.link}
              />
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
              <div className="w-full h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Placeholder for hotel exterior image</p>
              </div>
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
              <Link to="/about" className="inline-flex items-center text-primary">
                Узнать больше <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
