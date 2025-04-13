import { createContext, useState, useContext } from 'react';

// Translation data
const translations = {
  ru: {
    nav: {
      accommodation: 'Проживание',
      recreation: 'Отдых',
      offers: 'Акции',
      restaurants: 'Рестораны',
      events: 'Афиша',
      activities: 'Мероприятия',
      contacts: 'Контакты',
      gallery: 'Фотогалерея',
      selectHotel: 'Выбрать отели',
      contact: 'Связаться',
      certificates: 'Сертификаты',
      findRoom: 'Найти номер'
    },
    booking: {
      title: 'Забронировать номер',
      bookNow: 'Забронировать',
      checkIn: 'Заезд',
      checkOut: 'Выезд',
      guests: 'Гости',
      promoCode: 'Промокод',
      conditions: 'Условия проживания',
      breakfast: 'Завтрак с',
      parking: 'Бесплатная парковка',
      noPets: 'Без животных',
      moreDetails: 'Подробнее'
    },
    homepage: {
      hero: {
        subtitle: 'Официальный сайт отеля',
        title: 'AHMATOVKA',
        description: 'Насладитесь природой в условиях истинного комфорта'
      },
      offers: {
        title: 'Акции и предложения',
        viewAll: 'все акции'
      },
      rooms: {
        title: 'Проживание',
        viewAll: 'Все',
        book: 'Забронировать'
      },
      about: {
        title: 'О нас',
        readMore: 'Подробнее'
      },
      features: {
        title: 'Наши преимущества'
      },
      events: {
        title: 'Афиша мероприятий',
        viewAll: 'Все'
      }
    }
  },
  en: {
    nav: {
      accommodation: 'Accommodation',
      recreation: 'Recreation',
      offers: 'Offers',
      restaurants: 'Restaurants',
      events: 'Events',
      activities: 'Activities',
      contacts: 'Contacts',
      gallery: 'Gallery',
      selectHotel: 'Select Hotel',
      contact: 'Contact Us',
      certificates: 'Certificates',
      findRoom: 'Find Room'
    },
    booking: {
      title: 'Book a Room',
      bookNow: 'Book Now',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      promoCode: 'Promo Code',
      conditions: 'Accommodation Conditions',
      breakfast: 'Breakfast from',
      parking: 'Free Parking',
      noPets: 'No Pets',
      moreDetails: 'More Details'
    },
    homepage: {
      hero: {
        subtitle: 'Official Hotel Website',
        title: 'AHMATOVKA',
        description: 'Enjoy nature in true comfort'
      },
      offers: {
        title: 'Offers and Promotions',
        viewAll: 'view all'
      },
      rooms: {
        title: 'Accommodation',
        viewAll: 'All',
        book: 'Book Now'
      },
      about: {
        title: 'About Us',
        readMore: 'Read More'
      },
      features: {
        title: 'Our Features'
      },
      events: {
        title: 'Events',
        viewAll: 'All'
      }
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru'); // Default to Russian
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ru' ? 'en' : 'ru');
  };
  
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;