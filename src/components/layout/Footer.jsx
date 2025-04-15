import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Add a flag to prevent multiple initializations
    if (mapRef.current && !mapRef.current.hasMap) {
      const initMap = () => {
        console.log("Initializing footer map");
        if (window.ymaps) {
          window.ymaps.ready(() => {
            // Check if component is still mounted and map not initialized
            if (mapRef.current && !mapRef.current.hasMap) {
              try {
                const map = new window.ymaps.Map(mapRef.current, {
                  center: [53.642047, 46.411297],
                  zoom: 12,
                  controls: ['zoomControl', 'smallMapDefaultSet']
                });
                
                // Set flag to indicate map is initialized
                mapRef.current.hasMap = true;
                
                const placemark = new window.ymaps.Placemark(
                  [53.642047, 46.411297],
                  { balloonContent: 'Ахматовка' },
                  { preset: 'islands#blueDotIcon' }
                );
                
                map.geoObjects.add(placemark);
              } catch (error) {
                console.error("Error creating footer map:", error);
              }
            }
          });
        } else {
          // API loading code...
          const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');
          
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/2.1/?apikey=55f1f93d-0af8-42f3-af5d-27a36a30ef42&lang=ru_RU";
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
          } else {
            existingScript.addEventListener('load', initMap);
          }
        }
      };
      
      initMap();
    }
  }, []);
  
  
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left side - Information */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Navigation */}
              <div>
                <h3 className="font-bold mb-4">Навигация</h3>
                <ul className="space-y-2">
                  <li><Link to="/accommodation" className="text-gray-600 hover:text-gray-900">Проживание</Link></li>
                  <li><Link to="/recreation" className="text-gray-600 hover:text-gray-900">Отдых</Link></li>
                  <li><Link to="/offers" className="text-gray-600 hover:text-gray-900">Акции</Link></li>
                  <li><Link to="/restaurants" className="text-gray-600 hover:text-gray-900">Рестораны</Link></li>
                  <li><Link to="/events" className="text-gray-600 hover:text-gray-900">Афиша</Link></li>
                  <li><Link to="/activities" className="text-gray-600 hover:text-gray-900">Мероприятия</Link></li>
                </ul>
              </div>
              
              {/* Information Center */}
              <div>
                <h3 className="font-bold mb-4">Информационный центр</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Россия, Пензенская область, НИКОЛЬСКИЙ р-н, с. Ахматовка, ул. Центральная, зд. 40А/1</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                    <a href="tel:+78412713333" className="hover:text-gray-900">
                      8(8412)71-33-33
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Booking Department */}
              <div>
                <h3 className="font-bold mb-4">Отдел бронирования</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                    <a href="tel:+78412713333" className="hover:text-gray-900">
                      8(8412)71-33-33
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                    <a href="mailto:info@ahmatovka.ru" className="hover:text-gray-900">
                      info@ahmatovka.ru
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right side - Map */}
          <div className="lg:w-2/4">
            <div 
              id="footer-map" 
              ref={mapRef} 
              className="w-[700px] h-[400px] rounded-lg shadow-sm"
              style={{ border: '1px solid #e5e7eb' }}
            ></div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AHMATOVKA. Все права защищены.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-gray-700">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-gray-700">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;