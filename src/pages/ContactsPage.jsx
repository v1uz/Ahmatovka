import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactsPage = () => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Create script dynamically
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=55f1f93d-0af8-42f3-af5d-27a36a30ef42&lang=ru_RU";
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
    
    let scriptAdded = true;
    
    function initMap() {
      console.log("Yandex Maps script loaded");
      if (window.ymaps) {
        window.ymaps.ready(() => {
          console.log("ymaps is ready");
          // Check if component is still mounted
          if (mapRef.current) {
            console.log("Creating map...");
            try {
              new window.ymaps.Map(mapRef.current, {
                center: [53.3015, 45.9678],
                zoom: 14,
                controls: ['zoomControl', 'fullscreenControl']
              });
              console.log("Map created successfully");
            } catch (error) {
              console.error("Error creating map:", error);
            }
          } else {
            console.error("Map container ref is null");
          }
        });
      } else {
        console.error("window.ymaps is not available");
      }
    }
    
    return () => {
      // Only remove if it was added
      if (scriptAdded && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Контакты</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column - Contact Information */}
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ВАНАКВА»</h2>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2">Место нахождения:</h3>
              <p className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>442683, РОССИЯ, ПЕНЗЕНСКАЯ ОБЛАСТЬ, НИКОЛЬСКИЙ р-н, с. Ахматовка, ул. Центральная, зд. 40А/1</span>
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold mb-2">ДОСТАВКА</h3>
              <ul className="space-y-3">
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
        
        {/* Right column - Map */}
        <div className="lg:w-1/2">
          <div id="yandex-map" ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md"></div>
          <div className="mt-2 text-right">
            <a 
              href="https://yandex.ru/maps/?ll=45.9678,53.3015&z=14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Открыть в Яндекс Картах
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <Link to="/" className="text-primary hover:text-primary-dark">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default ContactsPage;