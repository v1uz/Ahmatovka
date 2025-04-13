import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="flex flex-col">
                <div className="text-xl font-bold tracking-wide uppercase">COSMOS</div>
                <div className="text-sm tracking-wider uppercase">COLLECTION</div>
                <div className="text-xs tracking-wider uppercase">IZUMRUDNY LES HOTEL</div>
              </div>
            </Link>
            <p className="text-gray-600 mb-4">
              Современный пятизвёздочный отель, окруженный бескрайним лесом. В живописном уголке Московской области.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {[
                { name: t.nav.accommodation, path: '/accommodation' },
                { name: t.nav.recreation, path: '/recreation' },
                { name: t.nav.offers, path: '/offers' },
                { name: t.nav.restaurants, path: '/restaurants' },
                { name: t.nav.events, path: '/events' },
                { name: t.nav.activities, path: '/activities' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-600 hover:text-gray-900 transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Информационный центр</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Россия, Московская область, городской округ Клин, сельское поселение Нудольское, вблизи п. Нарынка, вл. "Изумрудный лес".</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <a href="tel:+74951084034" className="hover:text-gray-900">
                  +7 (495) 108-40-34
                </a>
              </li>
            </ul>
            
            <h3 className="font-bold mt-6 mb-4">Отдел бронирования</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Россия, Московская область, городской округ Клин, сельское поселение Нудольское, вблизи п. Нарынка, вл. "Изумрудный лес".</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <a href="tel:+74954020201" className="hover:text-gray-900">
                  +7 495 402 02 01
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <a href="mailto:reservations.izl@cosmoscollection.ru" className="hover:text-gray-900">
                  ---
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Корпоративным клиентам</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <a href="tel:+74954020203" className="hover:text-gray-900">
                  +7 (495) 402-02-03
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                <a href="mailto:sales.izmr@cosmoscollection.ru" className="hover:text-gray-900">
                  ---
                </a>
              </li>
            </ul>
            
            <h3 className="font-bold mt-6 mb-4">Сафари-парк</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Россия, Московская область, Клинский городской округ, сельское поселение Нудольское, вблизи п. Нарынка, вл. "Изумрудный лес".</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AHMATOVKA. Все права защищены.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link to="/privacy-policy" className="hover:text-gray-700">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-gray-700">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;